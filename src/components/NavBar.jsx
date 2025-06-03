import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
  <h1 className="logo">Mi Tienda</h1>
  <div className="nav-links">
    <Link to="/">Inicio</Link>
    <Link to="/categoria/ropa">Ropa</Link>
    <Link to="/categoria/calzado">Calzado</Link>
  </div>
  <CartWidget />
</nav>

  );
};

export default NavBar;
