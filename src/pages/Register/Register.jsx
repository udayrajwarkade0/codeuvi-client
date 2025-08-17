import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Register.css";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://codeuvi-server.onrender.com/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        toast.success("Registration successful! Redirecting to login...");
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("register error ", error);
      toast.error("Network error or server down");
    }
  };

  return (
    <section className="section-registration">
      <div className="container grid grid-two-cols">
        {/* Image on top or left side */}
        <div className="reg-img">
          <img
            src="/images/register.png" // <-- replace with your downloaded image path
            alt="registration illustration"
          />
        </div>

        {/* Registration Form */}
        <div className="registration-form">
          <h1 className="main-heading">Registration Form</h1>
          <p className="form-intro">
            Fill in your details to join our platform and start your journey!
          </p>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                value={user.username}
                onChange={handleInput}
                required
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleInput}
                required
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone"
                value={user.phone}
                onChange={handleInput}
                required
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleInput}
                required
                autoComplete="off"
              />
            </div>

            <button type="submit" className="btn btn-submit">
              Register Now
            </button>
          </form>

          <p className="form-footer-text">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </section>
  );
};


