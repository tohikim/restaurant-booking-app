import { useState, useEffect } from "react";
import heroImage from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: isMobile ? "4rem 2rem" : "6rem 2rem",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "4rem",
  };

  const textSectionStyle = {
    flex: 1,
    textAlign: isMobile ? "center" : "left",
  };

  const imageSectionStyle = {
    display: "flex",
    flexDirection: "column",
    width: isMobile ? "100%" : "40%",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  };

  const imgStyle = {
    borderRadius: "15px",
    width: isMobile ? "100%" : "350px",
    maxWidth: "350px",
    height: "350px",
    objectFit: "cover",
    display: "block",
    padding: 0,
    margin: 0,
  };

  return (
    <div style={{ backgroundColor: "#495E57" }}>
      <div style={containerStyle}>
        <div style={textSectionStyle}>
          <h1
            style={{
              fontSize: "3.5rem",
              fontFamily: `"Markazi Text", serif`,
              color: "#FBDABB",
              margin: 0,
            }}
          >
            Little Lemon
          </h1>
          <h2
            style={{
              fontSize: "2rem",
              fontFamily: `"Markazi Text", serif`,
              color: "white",
              margin: 0,
              padding: 0,
              marginBottom: "1.5rem",
            }}
          >
            Chicago
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              fontFamily: ` "Karla", sans-serif`,
              lineHeight: "1.5",
              color: "#EDEFEE",
              maxWidth: isMobile ? "100%" : "450px",
              marginBottom: "2rem",
            }}
          >
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. From our sun-soaked
            flavors to our artisan ingredients, we bring the heart of Greece to
            the streets of Chicago.
          </p>
          <Link to="/booking">
            <button
              className="cta-button"
              type="submit"
              style={{
                padding: "0.5rem 1rem",
                width: isMobile ? "100%" : "50%",
                margin: isMobile ? "0 auto" : "0",
                backgroundColor: "#F4CE14",
                border: 0,
                borderRadius: "8px",
                fontFamily: ` "Karla", sans-serif`,
                fontSize: "1rem",
                fontWeight: "700",
              }}
            >
              Reserve a Table
            </button>
          </Link>
        </div>

        <div style={imageSectionStyle}>
          <img src={heroImage} alt="Hero" style={imgStyle} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
