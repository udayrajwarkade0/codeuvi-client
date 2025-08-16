import { useAuth } from "../../store/auth-context";
import "./Service.css";

export const Service = () => {
  const { services } = useAuth();

  if (!Array.isArray(services)) {
    return <p>Loading projects...</p>;
  }
  if (services.length === 0) {
    return <p>No projects available at the moment. Stay tuned!</p>;
  }

  return (
    <section className="section-services">
      <div className="container-service">
        <h1 className="main-heading">My Projects & Portfolio</h1>
        <p className="section-description">
          Here are some of my exciting projects. Explore live demos or check the source code on GitHub.
        </p>
      </div>

      <div className="grid-service">
        {services.map((curElem, index) => {
          const { description, github, weblink, thumbnail, title } = curElem;

          return (
            <div className="card-service" key={index}>
              <div className="card-img-service">
                <img
                  src={thumbnail?.trim()}
                  alt={title || "Project Thumbnail"}
                  width="300"
                  height="195"
                />
              </div>

              <div className="card-details-service">
                <h3 className="project-title">{title}</h3>
                <p>{description}</p>

                <div className="btn-service">
                  <a
                    className="cd-btn-service"
                    href={weblink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>

                  <a
                    className="cd-btn-service secondary-btn-service"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
