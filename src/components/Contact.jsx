import { useState } from "react";
import { useInView } from "../hooks/usePortfolio";
import { modelInfo } from "../data/portfolioData";

const Contact = () => {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    alert(`Thank you, ${form.name}! Your message has been sent.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "140px 8%", position: "relative", overflow: "hidden" }}
    >
      <style>{`
        @media (max-width: 900px) {
          #contact { padding: 100px 6% !important; }
          #contact h2 { font-size: 40px !important; }
        }
        @media (max-width: 600px) {
          #contact { padding: 80px 5% !important; }
          #contact h2 { font-size: 30px !important; }
          .contact-input-row { flex-direction: column !important; }
        }
      `}</style>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1600&q=80"
          alt="contact background"
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.15)" }}
        />
      </div>

      {/* Content */}
      <div
        style={{ position: "relative", zIndex: 2, maxWidth: 640, margin: "0 auto", textAlign: "center" }}
      >
        <div className={`fade-up ${inView ? "visible" : ""}`}>
          <span className="section-label">Let's Work Together</span>
          <div className="gold-line" style={{ margin: "16px auto 32px" }} />

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 52,
              color: "#f5f0eb",
              lineHeight: 1.15,
            }}
          >
            Book Your Next
            <br />
            <em style={{ color: "#C8A96E" }}>Campaign</em>
          </h2>

          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: "#888", marginTop: 24, lineHeight: 2 }}>
            Available for runway, editorial, commercial campaigns, brand collaborations, and events worldwide.
          </p>

          {/* Form */}
          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="contact-input-row" style={{ display: "flex", gap: 16 }}>
              <input
                className="form-input"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                className="form-input"
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              className="form-input"
              name="message"
              placeholder="Tell me about your project..."
              rows={4}
              value={form.message}
              onChange={handleChange}
              style={{ resize: "none" }}
            />
            <button
              className="btn-gold"
              style={{ alignSelf: "center", marginTop: 8, padding: "16px 56px", fontSize: 11 }}
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>

          {/* Socials */}
          <div style={{ marginTop: 48, display: "flex", justifyContent: "center", gap: 32 }}>
            {modelInfo.socials.map((social) => (
              <span key={social} className="nav-link" style={{ fontSize: 9 }}>
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
