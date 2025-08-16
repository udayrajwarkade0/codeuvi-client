import { useEffect, useState } from "react";
import { AuthContext } from "./auth-context";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);
  const [isLoding, setLoding] = useState(true);
  const [services, setServices] = useState([]);
  const AuthorizationToken = `Bearer ${token}`;

  // Save token in local storage
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  const isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken("");
    setUser(null); // logout hone par user reset
    localStorage.removeItem("token");
  };

  // Fetch user data when token is present
  useEffect(() => {
    const userAuthentication = async () => {
      try {
        setLoding(true);
        const response = await fetch("http://codeuvi-server.onrender.com/api/auth/user", {
          method: "GET",
          headers: { Authorization: AuthorizationToken },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.userData); // Ensure backend sends username here
          setLoding(false);
        } else {
          console.log("Failed to fetch user data");
          setLoding(false);
        }
      } catch (error) {
        console.log("error fetching user data", error);
      }
    };

    if (token) {
      userAuthentication();
    }
  }, [token, AuthorizationToken]);

  // ----------------This is for serverce-----------------------------//

  const getServices = async () => {
    try {
      const response = await fetch("http://codeuvi-server.onrender.com/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Type of data.msg:", typeof data.msg); // type check
        console.log("Is Array:", Array.isArray(data.msg)); // array check
        console.log("Full data.msg value:", data.msg); // actual value
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`services fronted error: ${error}`);
    }
  };
  useEffect(() => {
    getServices();
    // userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        services,
        setUser,
        AuthorizationToken,
        isLoding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

