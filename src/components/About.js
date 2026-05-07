import useIsMobile from "../useIsMobile";
import photoA from "../assets/Mario and Adrian A.jpg";

const About = () => {
  const isMobile = useIsMobile();

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
    <div style={{ backgroundColor: "white" }}>
      <div style={containerStyle}>
        <div style={textSectionStyle}>
          <h1
            style={{
              fontSize: "3.5rem",
              fontFamily: `"Markazi Text", serif`,
              color: "#495E57",
              margin: 0,
            }}
          >
            Little Lemon
          </h1>
          <h2
            style={{
              fontSize: "2rem",
              fontFamily: `"Markazi Text", serif`,
              color: "#333333",
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
              color: "#495E57",
              maxWidth: isMobile ? "100%" : "450px",
            }}
          >
            Little Lemon is owned by two Italian brothers, Adrian and Mario, who
            moved to Chicago to pursue their shared dream of owning a
            restaurant. To craft the menu, Mario relies on family recipes and
            his experience as a chef in Italy. Adrian handles the marketing and
            expansion, ensuring that every guest feels like part of the family
            the moment they walk through the door.
          </p>
        </div>

        <div style={imageSectionStyle}>
          <img src={photoA} alt="Hero" style={imgStyle} />
        </div>
      </div>
    </div>
  );
};

export default About;
