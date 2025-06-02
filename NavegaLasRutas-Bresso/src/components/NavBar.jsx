import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Inicio</Link>
        <Link to="/categoria/ropa">Ropa</Link>
        <Link to="/categoria/calzado">Calzado</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
