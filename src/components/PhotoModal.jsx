const PhotoModal = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div className="modal-bg" onClick={onClose}>
      <style>{`
        @media (max-width: 600px) {
          .modal-inner { max-width: 95vw !important; max-height: 80vh !important; }
        }
      `}</style>
      <div
        className="modal-inner"
        style={{ position: "relative", maxWidth: "80vw", maxHeight: "85vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.url.replace("w=600", "w=1200")}
          alt={photo.label}
          style={{ maxWidth: "100%", maxHeight: "85vh", objectFit: "contain", display: "block" }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16, right: 16,
            width: 40, height: 40,
            background: "rgba(0,0,0,0.7)",
            border: "1px solid #333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#C8A96E",
            fontSize: 22,
            lineHeight: 1,
          }}
        >
          ×
        </button>

        {/* Label */}
        <div style={{ position: "absolute", bottom: 16, left: 20 }}>
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
  );
};

export default PhotoModal;
