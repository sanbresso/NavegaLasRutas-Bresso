import ItemCount from "./ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  return (
    <div className="item-detail">
      <h2 className="item-detail-title">{producto.nombre}</h2>
      <p className="item-detail-price">Precio: ${producto.precio}</p>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;
