import navItems from "./navData";
import { Link } from "react-router-dom";

const Nav = ({ isMobile, isOpen }) => {
  const navListStyle = {
    // Core visibility and layout
    display: isMobile ? (isOpen ? "flex" : "none") : "flex",
    flexDirection: isMobile ? "column" : "row",

    // Mobile "Shenanigans" fix
    position: isMobile ? "absolute" : "static",
    top: isMobile ? "100%" : undefined, // This snaps it to the bottom of the Header
    left: 0,
    width: isMobile ? "100%" : "auto",

    // Styling
    backgroundColor: "#EDEFEE",
    padding: isMobile ? "1.5rem 0" : "0",
    gap: isMobile ? "1rem" : "1.5rem",
    paddingRight: isMobile ? undefined : 20,
    height: isMobile ? undefined : "100%",
    listStyle: "none",
    margin: 0,
    alignItems: "center",
    zIndex: 1000, // High z-index to overlay Hero content
    borderBottom: isMobile && isOpen ? "1px solid #EDEFEE" : "none",
    boxShadow: isMobile && isOpen ? "0px 4px 8px rgba(0,0,0,0.1)" : "none",
  };

  return (
    <nav style={{ width: isMobile ? "0" : "auto" }}>
      <ul style={navListStyle}>
        {navItems.map((item) => (
          <li
            key={item.label}
            style={{
              fontWeight: "600",
              fontSize: "0.9rem",
              fontFamily: '"Karla", sans-serif',
              color: "#495E57",
            }}
          >
            <Link
              to={item.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
