import { useState } from "react";
import commonColumnsStyles from "../../../common/styles/Columns.module.scss";
import produkty from "../../../common/consts/produkty";

function ProductsList({ addProductToCart }) {
  const [id, setId] = useState(0);

  const handleAddProduct = (el) => {
    addProductToCart({
      ...el,
      id: id,
    });
    setId((prevIdValue) => prevIdValue + 1);
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products list</p>
        <ul>
          {produkty.map((el) => (
            <li key={el.nazwa} onClick={() => handleAddProduct(el)}>
              {el.nazwa}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default ProductsList;
