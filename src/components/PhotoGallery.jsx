import { useInView } from "../hooks/usePortfolio";
import { photos } from "../data/portfolioData";

const PhotoGallery = ({ onPhotoClick }) => {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="photos" ref={ref} style={{ padding: "120px 8%" }}>
      <style>{`
  @media (max-width: 900px) {
    .photo-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }

    #photos {
      padding: 80px 6% !important;
    }
  }

  @media (max-width: 600px) {
    .photo-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 12px !important;
    }

    #photos {
      padding: 60px 5% !important;
    }

    .photo-grid .photo-card {
      aspect-ratio: 3/4 !important;
    }
  }

  @media (max-width: 420px) {
    .photo-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 10px !important;
    }

    .photo-grid .photo-card {
      aspect-ratio: 2/3 !important;
    }
  }
`}</style>
      {/* Heading */}
      <div className={`fade-up ${inView ? "visible" : ""}`} style={{ marginBottom: 60 }}>
        <span className="section-label">Portfolio</span>
        <div className="gold-line" style={{ margin: "16px 0 24px" }} />
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, color: "#f5f0eb" }}>
          Photo Gallery
        </h2>
      </div>

      {/* Grid */}
      <div
        className="photo-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {photos.map((photo, i) => (
          <div
            key={photo.id}
            className={`photo-card scale-in ${inView ? "visible" : ""}`}
            style={{
              aspectRatio: i % 3 === 1 ? "3/4" : "2/3",
              transitionDelay: `${i * 0.1}s`,
            }}
            onClick={() => onPhotoClick(photo)}
          >
            <img
              src={photo.url}
              alt={photo.label}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="photo-overlay">
              <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 10,
                    letterSpacing: 3,
                    color: "#C8A96E",
                    textTransform: "uppercase",
                  }}
                >
                  {photo.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
