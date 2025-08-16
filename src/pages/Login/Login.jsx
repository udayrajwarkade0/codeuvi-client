import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../store/auth-context";
import "./Login.css";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { storeTokenInLS, setUser: setAuthUser } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://codeuvi-server.onrender.com/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        let tokenString = res_data.token?.accessToken || res_data.token;
        storeTokenInLS(tokenString);
        if (res_data.user) setAuthUser(res_data.user);

        toast.success("Login successful!");
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        toast.error(res_data.extraDetails || res_data.message);
      }
    } catch (error) {
      console.log("login error", error);
      toast.error("Network error or server down");
    }
  };

  return (
    <section className="login-section">
      <div className="container grid grid-two-cols">
        <div className="login-image">
          <img
            src="/images/login1.png"
            alt="Login illustration"
            className="contact-img"
          />
        </div>

        <div className="login-form">
          <h1 className="main-heading">Login</h1>
          <p className="form-subtitle">Access your account to continue</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleInput}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn btn-submit">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

