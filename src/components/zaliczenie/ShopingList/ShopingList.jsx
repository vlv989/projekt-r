import commonColumnsStyles from "../../../common/styles/Columns.module.scss";

function ShopingList({ products, removeProductFromCart }) {
  const handleRemoveProduct = (e, id) => {
    e.preventDefault();
    removeProductFromCart(id);
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        <ul>
          {products.map((el) => (
            <li
              key={el.id}
              onContextMenu={(e) => handleRemoveProduct(e, el.id)}
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
