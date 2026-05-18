import { useEffect } from "react";
import { useInView, useCounter } from "../hooks/usePortfolio";
import { stats } from "../data/portfolioData";

const StatItem = ({ target, suffix, label, inView, index }) => {
  const [count, start] = useCounter(target);

  useEffect(() => {
    if (inView) start();
  }, [inView]);

  return (
    <div
      className={`fade-up stat-item ${inView ? "visible" : ""}`}
      style={{
        borderRight: index < stats.length - 1 ? "1px solid #1a1a1a" : "none",
        padding: "20px 0",
        textAlign: "center",
        transitionDelay: `${index * 0.15}s`,
      }}
    >
      <div
        className="stat-num"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 64,
          fontWeight: 700,
          color: "#C8A96E",
          lineHeight: 1,
        }}
      >
        {count}{suffix}
      </div>
      <div
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 10,
          letterSpacing: 4,
          color: "#555",
          marginTop: 12,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 8%",
        background: "#0e0e0e",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      <style>{`
  @media (max-width: 600px) {
    .stats-grid {
      grid-template-columns: repeat(${stats.length}, 1fr) !important;
      gap: 10px;
    }

    .stat-item {
      border-right: 1px solid #1a1a1a !important;
      border-bottom: none !important;
      padding: 12px 6px !important;
    }

    .stat-item:last-child {
      border-right: none !important;
    }

    .stat-num {
      font-size: 32px !important;
    }
  }
`}</style>
      <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}>
        {stats.map((stat, i) => (
          <StatItem key={stat.label} {...stat} inView={inView} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
