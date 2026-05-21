import { useInView } from "../hooks/usePortfolio";
import { skills, modelInfo } from "../data/portfolioData";

const Skills = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: "120px 8%", background: "#0d0d0d" }}
    >
      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #skills { padding: 80px 6% !important; }
          #skills h2 { font-size: 36px !important; }
        }
        @media (max-width: 600px) {
          #skills { padding: 60px 5% !important; }
          #skills h2 { font-size: 28px !important; }
        }
      `}</style>
      <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

        {/* Left — description */}
        <div className={`fade-left ${inView ? "visible" : ""}`}>
          <span className="section-label">Expertise</span>
          <div className="gold-line" style={{ margin: "16px 0 32px" }} />

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 44,
              color: "#f5f0eb",
              lineHeight: 1.2,
            }}
          >
            Mastered
            <br />
            <em style={{ color: "#C8A96E" }}>Disciplines</em>
          </h2>

          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: "#666", lineHeight: 2, marginTop: 28 }}>
            With experience in 7 fashion campaigns and multiple runway shows, he brings confidence, versatility, and a strong presence to every project. His work reflects a blend of traditional elegance and modern fashion expression.
          </p>

          {/* Tags */}
          <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
            {modelInfo.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 9,
                  letterSpacing: 2,
                  border: "1px solid #2a2a2a",
                  padding: "8px 14px",
                  color: "#666",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right — skill bars */}
        <div className={`fade-right ${inView ? "visible" : ""}`}>
          {skills.map((skill, i) => (
            <div key={skill.name} style={{ marginBottom: 32, transitionDelay: `${i * 0.1}s` }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 11,
                    letterSpacing: 2,
                    color: "#aaa",
                    textTransform: "uppercase",
                  }}
                >
                  {skill.name}
                </span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, color: "#C8A96E" }}>
                  {skill.level}%
                </span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: inView ? `${skill.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
