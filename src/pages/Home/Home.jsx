import { Analytics } from "../../components/Analytics";
import { useAuth } from "../../store/auth-context";
import "./Home.css";

export const Home = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="home-hero-section">
          <div className="home-container grid grid-two-cols">
            <div className="home-hero-content">
              <p>Hello, {user?.username || "Guest"}</p>
              <p>Hi, I'm UVI – Full Stack Developer</p>
              <h1>Welcome to my profile Codeuvi</h1>

              <p className="home-hero-text">
                I’m a passionate MERN Stack Developer with expertise in both
                frontend and backend development. From responsive UI/UX to
                powerful backend APIs and databases, I take care of the entire
                development process. Whether it’s a business website, an
                e-commerce store, a portfolio, or a custom web app, I can
                develop it from scratch using the latest technologies. I ensure
                performance, responsiveness, and user-friendly experiences. I’m
                also open to freelance projects, collaborations, or long-term
                roles in a tech-driven company.
              </p>

              <div className="home-btn-group">
                <a href="/contact">
                  <button className="home-btn secondary-btn">
                    Connect Now
                  </button>
                </a>
                <a href="/services">
                  <button className="home-btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>

            <div className="home-hero-image">
              {/* <img
                src="/images/go1.jpg"
                alt="code together"
                width="400"
                height="500"
              /> */}
            </div>
          </div>
        </section>

        {/* Below Section */}
        <section className="home-below-section">
          <div className="home-container grid grid-two-cols">
            <div className="home-hero-image">
              <img
                src="/images/3d.webp"
                alt="code together"
                width="400"
                height="500"
              />
            </div>

            <div className="home-hero-content">
              <p>Bringing your ideas to life with code</p>
              <h1>Start Your Web Journey Today</h1>
              <p>
                Whether you're a startup, a small business, or just someone with
                a big idea — I turn visions into fully functional,
                high-performance websites. From dynamic web apps to secure
                backend systems, I bring both the logic and the design to the
                table. Let’s collaborate and build something powerful that truly
                works for you.
              </p>

              <div className="home-btn-group">
                <a href="/contact">
                  <button className="home-btn secondary-btn">
                    Connect Now
                  </button>
                </a>
                <a href="/services">
                  <button className="home-btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
