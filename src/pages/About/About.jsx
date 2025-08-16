import { Analytics } from "../../components/Analytics.jsx";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth-context.jsx";
import "./About.css";

export const About = () => {
  const { user } = useAuth();

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="about-hero-section">
          <div className="about-container grid grid-two-cols">
            <div className="about-hero-content">
              <p>Hi, {user?.username || "Guest"}</p>
              <h1>Why Choose Us?</h1>
              <p>
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry trends.
              </p>
              <p>
                Customization: We understand every business is unique. We create
                solutions tailored to your specific needs and goals.
              </p>
              <p>
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support for your IT concerns.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We are
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>

              <div className="about-btn-group">
                <NavLink to="/contact" className="about-btn secondary-btn">
                  Connect Now
                </NavLink>
                <NavLink to="/services" className="about-btn secondary-btn">
                  Learn More
                </NavLink>
              </div>
            </div>

            <div className="about-hero-image">
              <img
                src="/images/about1.png"
                alt="coding buddies"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="about-mission-vision">
          <h2>Our Mission</h2>
          <p>
            To deliver high-quality, scalable web solutions that empower
            businesses and individuals to succeed online.
          </p>

          <h2>Our Vision</h2>
          <p>
            To be a trusted technology partner known for innovation, reliability,
            and excellent customer service.
          </p>
        </section>

        {/* Skills Section */}
        <section className="about-skills">
          <h2>Our Skills</h2>
          <div className="about-skills-container">
            <div className="about-skill-card">
              <img src="https://img.icons8.com/color/48/react-native.png" alt="React" />
              <span>React.js</span>
            </div>
            <div className="about-skill-card">
              <img src="https://img.icons8.com/color/48/nodejs.png" alt="Node" />
              <span>Node.js</span>
            </div>
            <div className="about-skill-card">
              <img src="https://img.icons8.com/color/48/mongodb.png" alt="MongoDB" />
              <span>MongoDB</span>
            </div>
            <div className="about-skill-card">
              <img src="https://img.icons8.com/color/48/express.png" alt="Express" />
              <span>Express.js</span>
            </div>
            <div className="about-skill-card">
              <img src="https://img.icons8.com/color/48/javascript.png" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="about-skill-card">
              <img src="https://img.icons8.com/color/48/html-5.png" alt="HTML" />
              <span>HTML & CSS</span>
            </div>
            <div className="about-skill-card">
              <img src="https://img.icons8.com/color/48/design.png" alt="UI/UX" />
              <span>UI/UX Design</span>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="about-languages">
          <h2>Programming Languages</h2>
          <div className="about-languages-container">
            <div className="about-language-card">
              <img src="https://img.icons8.com/color/48/c-programming.png" alt="C" />
              <span>C</span>
            </div>
            <div className="about-language-card">
              <img src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="C++" />
              <span>C++</span>
            </div>
            <div className="about-language-card">
              <img src="https://img.icons8.com/color/48/python.png" alt="Python" />
              <span>Python</span>
            </div>
            <div className="about-language-card">
              <img src="https://img.icons8.com/color/48/javascript.png" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="about-experience">
          <h2>Experience</h2>
          <p>
            Worked on multiple MERN stack projects including e-commerce,
            portfolio, and custom web applications. Delivered optimized,
            responsive, and user-friendly solutions for clients globally.
          </p>
        </section>
      </main>

      <Analytics />
    </>
  );
};
