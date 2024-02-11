import { useState } from "react";
import styles from "./App.module.scss";
import AddProducts from "./components/zaliczenie/AddProducts/AddProducts";
import ProductsFilters from "./components/zaliczenie/ProductsFilters/ProductsFilters";
import ProductsList from "./components/zaliczenie/ProductsList/ProductsList";
import ShopingList from "./components/zaliczenie/ShopingList/ShopingList";

function App() {
  const [shoppingProducts, setShoppingProducts] = useState([]);

  const addProductToCart = (product) => {
    setShoppingProducts([...shoppingProducts, product]);
  };

  const removeProductFromCart = (id) => {
    setShoppingProducts(shoppingProducts.filter((el) => el.id !== id));
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <ProductsFilters />
      <div className={styles.columnsWrapper}>
        <ProductsList addProductToCart={addProductToCart} />
        <ShopingList
          products={shoppingProducts}
          removeProductFromCart={removeProductFromCart}
        />
      </div>
    </div>
  );
}

export default App;
