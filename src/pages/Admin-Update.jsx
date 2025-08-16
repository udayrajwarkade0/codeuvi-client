import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth-context";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();
  const { AuthorizationToken } = useAuth();

  // ✅ UseCallback for stable dependency
  const getSingleUserData = useCallback(async () => {
    try {
      const response = await fetch(
        `http://codeuvi-server.onrender.com/api/admin/users/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      const userData = await response.json();
      setData(userData);
    } catch (error) {
      console.error(error);
    }
  }, [AuthorizationToken, id]);

  useEffect(() => {
    getSingleUserData();
  }, [id, getSingleUserData]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://codeuvi-server.onrender.com/api/admin/users/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthorizationToken,
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Updated successfully");
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      toast.error("Something went wrong",  error);
    }
  };

  return (
    <section className="section-contact update-user-section">
      <div className="contact-content container-edit">
        <h1 className="main-heading">Update User Data</h1>
      </div>

      <div className="container-edit grid grid-two-cols">
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={data.username}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={data.email}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Mobile</label>
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="off"
                value={data.phone}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <button type="submit">Update</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

