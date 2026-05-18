import { useInView } from "../hooks/usePortfolio";
import { collabs } from "../data/portfolioData";

const Collabs = () => {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="collabs" ref={ref} style={{ padding: "120px 8%" }}>
      <style>{`
        @media (max-width: 900px) {
          .collab-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #collabs { padding: 80px 6% !important; }
        }
        @media (max-width: 600px) {
          .collab-grid { grid-template-columns: 1fr !important; }
          #collabs { padding: 60px 5% !important; }
          #collabs h2 { font-size: 30px !important; }
        }
      `}</style>
      {/* Heading */}
      <div className={`fade-up ${inView ? "visible" : ""}`} style={{ marginBottom: 60 }}>
        <span className="section-label">Collaborations</span>
        <div className="gold-line" style={{ margin: "16px 0 24px" }} />
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, color: "#f5f0eb" }}>
          Brands I've Worked With
        </h2>
      </div>

      {/* Cards grid */}
      <div className="collab-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {collabs.map((collab, i) => (
          <div
            key={collab.brand}
            className={`collab-card fade-up ${inView ? "visible" : ""}`}
            style={{
              padding: 32,
              background: "#0e0e0e",
              transitionDelay: `${i * 0.1}s`,
            }}
          >
            {/* Color accent line */}
            <div style={{ width: 40, height: 2, background: collab.color, marginBottom: 24 }} />

            {/* Brand name */}
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#f5f0eb",
                letterSpacing: 2,
              }}
            >
              {collab.brand}
            </div>

            {/* Issue */}
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10,
                letterSpacing: 3,
                color: "#555",
                marginTop: 8,
                textTransform: "uppercase",
              }}
            >
              {collab.issue}
            </div>

            {/* Role */}
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 12,
                color: collab.color,
                marginTop: 16,
              }}
            >
              {collab.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collabs;
