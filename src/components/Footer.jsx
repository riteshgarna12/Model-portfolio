import { modelInfo } from "../data/portfolioData";

const Footer = () => (
  <footer
    style={{
      padding: "32px 8%",
      borderTop: "1px solid #1a1a1a",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12,
    }}
  >
    <style>{`
      @media (max-width: 600px) {
        footer { flex-direction: column !important; text-align: center !important; padding: 28px 5% !important; }
      }
    `}</style>
    <div
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 16,
        color: "#C8A96E",
        letterSpacing: 3,
      }}
    >
      {modelInfo.name}
    </div>

    <div
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: 10,
        letterSpacing: 2,
        //color: "#444",
      }}
    >
      © 2026 · All Rights Reserved
    </div>

    <div
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: 10,
        letterSpacing: 2,
        //color: "#444",
      }}
    >
      {modelInfo.agency}
    </div>
  </footer>
);

export default Footer;
