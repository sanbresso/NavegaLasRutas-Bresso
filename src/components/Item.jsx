import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, nombre, precio }) => {
  return (
    <div className="item-card">
      <h3 className="item-title">{nombre}</h3>
      <p className="item-price">${precio}</p>
      <Link to={`/item/${id}`} className="item-link">
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
