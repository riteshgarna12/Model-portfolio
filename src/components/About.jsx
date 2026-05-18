import { useInView } from "../hooks/usePortfolio";
import { modelInfo } from "../data/portfolioData";

const About = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "120px 8%",
        display: "grid",
        gridTemplateColumns: "var(--about-cols, 1fr 1fr)",
        gap: 80,
        alignItems: "center",
      }}
    >
      <style>{`
        @media (max-width: 900px) {
          #about { grid-template-columns: 1fr !important; gap: 48px !important; padding: 80px 6% !important; }
          #about .about-img { height: 420px !important; }
          #about .about-badge { bottom: -16px !important; right: 0 !important; }
        }
        @media (max-width: 600px) {
          #about { padding: 60px 5% !important; gap: 36px !important; }
          #about .about-img { height: 300px !important; }
          #about .about-badge { display: none; }
          #about h2 { font-size: 32px !important; }
          #about .measurements { gap: 20px !important; flex-wrap: wrap; }
        }
      `}</style>
      {/* Image column */}
      <div
        className={`fade-left ${inView ? "visible" : ""}`}
        style={{ position: "relative" }}
      >
        <img
          className="about-img"
          src="/about.JPEG"
          alt="About Élise"
          style={{ width: "100%", height: 600, objectFit: "cover", objectPosition: "top", display: "block" }}
        />
        {/* Floating badge */}
        <div
          className="about-badge"
          style={{
            position: "absolute",
            bottom: -24,
            right: -24,
            background: "#0a0a0a",
            padding: 28,
            border: "1px solid #222",
          }}
        >
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: "#C8A96E" }}>3+</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: 3, color: "#666", marginTop: 4 }}>
            YEARS EXPERIENCE
          </div>
        </div>
      </div>

      {/* Text column */}
      <div className={`fade-right ${inView ? "visible" : ""}`}>
        <span className="section-label">About Me</span>
        <div className="gold-line" style={{ margin: "16px 0 32px" }} />

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 44,
            fontWeight: 600,
            lineHeight: 1.2,
            color: "#f5f0eb",
          }}
        >
          Where Art Meets
          <br />
          <em style={{ color: "#C8A96E" }}>Elegance</em>
        </h2>

        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: "#888", lineHeight: 2, marginTop: 28 }}>
          {modelInfo.bio1}
        </p>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: "#888", lineHeight: 2, marginTop: 16 }}>
          {modelInfo.bio2}
        </p>

        {/* Measurements */}
        <div className="measurements" style={{ display: "flex", gap: 40, marginTop: 40 }}>
          {modelInfo.measurements.map(({ key, value }) => (
            <div key={key}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: 3, color: "#555", textTransform: "uppercase" }}>
                {key}
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#C8A96E", marginTop: 6 }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
