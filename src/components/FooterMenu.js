import useIsMobile from "../useIsMobile";
import { Link } from "react-router-dom";

const FooterMenu = ({ title, items }) => {
  const isMobile = useIsMobile();
  if (!items || items.length === 0) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: isMobile ? "0.5rem 0" : "1rem",
      }}
    >
      <h4 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>{title}</h4>
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {items.map((item, index) => {
          const isObject = typeof item === "object" && item !== null;
          const displayLabel = isObject ? item.label : item;
          const path = isObject ? item.path : null;

          return (
            <li
              key={isObject ? item.label : index}
              style={{ marginBottom: "0.25rem" }}
            >
              {path ? (
                <Link
                  to={path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {displayLabel}
                </Link>
              ) : (
                displayLabel
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterMenu;
