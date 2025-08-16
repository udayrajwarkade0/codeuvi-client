import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth-context";
import "./Contact.css";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/form/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Contact successful!");
        setContact({ username: "", email: "", message: "" });
        navigate("/");
      } else {
        alert(data.message || "Contact failed");
      }
    } catch (error) {
      console.log("Contact error", error);
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="container-contact">
          <h1 className="main-heading">Contact Us</h1>
          <p className="contact-description">
            We're always here to help! Whether you have questions, want to
            collaborate, or need support, fill out the form below or reach out
            through our social channels.
          </p>

          <div className="grid-contact grid-two-cols">
            {/* Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  rows="6"
                />
              </div>

              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>

            {/* Image + Info */}
            <div className="contact-info">
              <img
                src="/images/login.jpg"
                alt="Support Team"
                className="contact-img"
              />
              <h2>Get in Touch</h2>
              <p>
                Our team is ready to answer your questions and provide the
                assistance you need. Connect with us through the form or via
                email and social media.
              </p>
              <ul className="contact-details">
                <li>Email: support@codeuvi.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: Chhotu Ram Chauk, Delhi, India</li>
              </ul>
            </div>
          </div>

          {/* Google Map */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7259.42773208016!2d77.0189620897797!3d28.487408373536365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1960c4470fa3%3A0x5fb03825bc2346f6!2sChhotu%20Ram%20Chauk!5e0!3m2!1sen!2sin!4v1753964645377!5m2!1sen!2sin"
              style={{ width: "100%", height: "400px", border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
