import { useEffect, useState } from "react";
import { useAuth } from "../store/auth-context";

export const AdminServices = () => {
  const { AuthorizationToken } = useAuth();
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    weblink: "",
    description: "",
    github: "",
    thumbnail: ""
  });

  // Fetch services
  const getServicesData = async () => {
    try {
      const res = await fetch("https://codeuvi-server.onrender.com/api/admin/services", {
        headers: { Authorization: AuthorizationToken }
      });
      const data = await res.json();
      if (res.ok) setServices(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Add new service
  const handleAddService = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://codeuvi-server.onrender.com/api/admin/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthorizationToken
        },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setFormData({ weblink: "", description: "", github: "", thumbnail: "" });
        getServicesData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Delete service
  const deleteService = async (id) => {
    try {
      const res = await fetch(`https://codeuvi-server.onrender.com/api/admin/services/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: AuthorizationToken }
      });
      if (res.ok) {
        getServicesData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getServicesData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="admin-services-section">
      <h1>Admin Services</h1>

      {/* Add Service Form */}
      <form onSubmit={handleAddService}>
        <input
          type="url"
          placeholder="Weblink"
          value={formData.weblink}
          onChange={(e) => setFormData({ ...formData, weblink: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <input
          type="url"
          placeholder="Github Link"
          value={formData.github}
          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
          required
        />
        <input
          type="url"
          placeholder="Thumbnail URL"
          value={formData.thumbnail}
          onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
          required
        />
        <button type="submit">Add Service</button>
      </form>

      {/* Service List */}
      <div className="services-list">
        {services.map((service) => (
          <div key={service._id} className="service-card">
            <img src={service.thumbnail} alt="Thumbnail" width="150" />
            <p><strong>Weblink:</strong> <a href={service.weblink} target="_blank">{service.weblink}</a></p>
            <p>{service.description}</p>
            <p><strong>Github:</strong> <a href={service.github} target="_blank">{service.github}</a></p>
            <button onClick={() => deleteService(service._id)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
};


