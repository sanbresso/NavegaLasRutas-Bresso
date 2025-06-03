import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio }) => {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
