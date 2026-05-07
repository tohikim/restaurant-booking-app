const Card = ({ image, title, price, description }) => {
  return (
    <div
      style={{
        backgroundColor: "#EDEFEE",
        borderRadius: "16px 16px 0 0",
        overflow: "hidden",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          padding: "1.5rem",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "1.2rem" }}>{title}</h3>
          <span style={{ color: "#EE9972", fontWeight: "bold" }}>{price}</span>
        </div>

        <p
          style={{
            color: "#495E57",
            fontSize: "0.9rem",
            lineHeight: "1.5",
            flexGrow: 1,
          }}
        >
          {description}
        </p>

        <div
          style={{
            fontWeight: "bold",
            marginTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            cursor: "pointer",
          }}
        >
          Order a delivery 🛵
        </div>
      </div>
    </div>
  );
};

export default Card;
