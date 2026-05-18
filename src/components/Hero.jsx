import { modelInfo } from "../data/portfolioData";

const Hero = ({ scrollY, heroLoaded, onScrollTo }) => {
  return (
    <section
      id="hero"
      style={{ position: "relative", height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}
    >
      {/* Parallax background */}
      <div style={{ position: "absolute", inset: 0, transform: `translateY(${scrollY * 0.4}px)` }}>
        <img
          src="/Hero/hero.JPEG"
          alt="hero"
          style={{ width: "100%", height: "120%", objectFit: "cover", objectPosition: "top", filter: "brightness(0.45)" }}
        />
      </div>

      {/* Gradient overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, padding: "0 8%", maxWidth: 800 }}>
        {/* Tagline */}
        <span
          className="section-label"
          style={{ marginBottom: 20, opacity: heroLoaded ? 1 : 0, transition: "opacity 0.8s 0.3s" }}
        >
          {modelInfo.tagline}
        </span>

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(52px, 8vw, 100px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -1,
            color: "#f5f0eb",
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 0.9s 0.5s, transform 0.9s 0.5s",
          }}
        >
          Bhavesh
          <br />
          <em style={{ color: "#C8A96E", fontStyle: "italic" }}>Saini</em>
        </h1>

        {/* Sub-text */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            letterSpacing: 2,
            color: "#b0a898",
            marginTop: 24,
            maxWidth: 380,
            lineHeight: 1.8,
            opacity: heroLoaded ? 1 : 0,
            transition: "opacity 0.9s 0.9s",
          }}
        >
          Haute couture runway model &amp; editorial artist. Represented by Elite Models worldwide.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            marginTop: 40,
            opacity: heroLoaded ? 1 : 0,
            transition: "opacity 0.9s 1.1s",
          }}
        >
          <button className="btn-gold" onClick={() => onScrollTo("Photos")}>View Portfolio</button>
          <button
            className="btn-gold btn-secondary"
            onClick={() => onScrollTo("Contact")}
            >
            Get In Touch
            </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: heroLoaded ? 1 : 0,
          transition: "opacity 1s 1.5s",
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 9,
            letterSpacing: 4,
            color: "#666",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: 1,
            height: 60,
            background: "linear-gradient(to bottom, #C8A96E, transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
        <style>{`
          @keyframes scrollPulse {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.3; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
