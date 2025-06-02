import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts().then((items) => {
      if (categoryId) {
        setProductos(items.filter((item) => item.categoria === categoryId));
      } else {
        setProductos(items);
      }
    });
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
