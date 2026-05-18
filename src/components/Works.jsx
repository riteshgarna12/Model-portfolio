import { useInView } from "../hooks/usePortfolio";
import { works } from "../data/portfolioData";

const Works = () => {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="works" ref={ref} style={{ padding: "120px 8%", background: "#0d0d0d" }}>
      <style>{`
        @media (max-width: 900px) {
          .works-grid { grid-template-columns: 1fr !important; }
          #works { padding: 80px 6% !important; }
          .work-card { height: 380px !important; }
        }
        @media (max-width: 600px) {
          #works { padding: 60px 5% !important; }
          .work-card { height: 280px !important; }
          #works h2 { font-size: 30px !important; }
        }
      `}</style>
      {/* Heading */}
      <div className={`fade-up ${inView ? "visible" : ""}`} style={{ marginBottom: 60 }}>
        <span className="section-label">Selected Works</span>
        <div className="gold-line" style={{ margin: "16px 0 24px" }} />
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, color: "#f5f0eb" }}>
          Recent Projects
        </h2>
      </div>

      {/* Grid */}
      <div className="works-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
        {works.map((work, i) => (
          <div
            key={work.title}
            className={`work-card scale-in ${inView ? "visible" : ""}`}
            style={{ height: 480, transitionDelay: `${i * 0.15}s` }}
          >
            <img
              src={work.img}
              alt={work.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />

            {/* Type badge */}
            <div
              style={{
                position: "absolute",
                top: 20, right: 20,
                background: "rgba(0,0,0,0.7)",
                border: "1px solid #C8A96E",
                padding: "6px 14px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 9,
                  letterSpacing: 2,
                  color: "#C8A96E",
                  textTransform: "uppercase",
                }}
              >
                {work.type}
              </span>
            </div>

            {/* Slide-up info */}
            <div className="work-info">
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10,
                  letterSpacing: 3,
                  color: "#C8A96E",
                  textTransform: "uppercase",
                }}
              >
                {work.year}
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 24,
                  color: "#f5f0eb",
                  marginTop: 6,
                }}
              >
                {work.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
