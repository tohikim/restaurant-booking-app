const TestimonialCard = ({ rating, name, review, photo }) => {
  // Helper to render stars
  const renderStars = (count) => "⭐".repeat(count);

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        padding: "1.5rem",
        borderRadius: "12px",
        flex: 1,
        textAlign: "left",
        boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        gap: "0.8rem",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
        Rating: {renderStars(rating)}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#EDEFEE",
            overflow: "hidden",
          }}
        >
          <img
            src={photo}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <span style={{ fontWeight: "800", fontSize: "1rem" }}>{name}</span>
      </div>
      <p
        style={{
          fontSize: "0.9rem",
          fontStyle: "italic",
          color: "#495E57",
          margin: 0,
          lineHeight: "1.4",
        }}
      >
        "{review}"
      </p>
    </div>
  );
};

export default TestimonialCard;
