import { useState } from "react";
import commonColumnsStyles from "../../../common/styles/Columns.module.scss";

function ShopingList({ products, removeProductFromCart }) {
  const [crossedOutProduct, setCrossedOutProduct] = useState([]);

  const handleCrossedOutProduct = (e, id) => {
    e.preventDefault();
    if (!crossedOutProduct.includes(id)) {
      setCrossedOutProduct([...crossedOutProduct, id]);
    } else {
      setCrossedOutProduct(crossedOutProduct.filter((el) => el !== id));
    }
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        <ul>
          {products.map((el) => (
            <li
              style={{
                "text-decoration": `${
                  crossedOutProduct.includes(el.id) ? "line-through" : "auto"
                }`,
              }}
              key={el.id}
              onClick={() => removeProductFromCart(el.id)}
              onContextMenu={(e) => handleCrossedOutProduct(e, el.id)}
            >
              {el.nazwa}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default ShopingList;
