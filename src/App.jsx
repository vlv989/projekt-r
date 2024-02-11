import { useState } from "react";
import styles from "./App.module.scss";
import AddProducts from "./components/zaliczenie/AddProducts/AddProducts";
import ProductsFilters from "./components/zaliczenie/ProductsFilters/ProductsFilters";
import ProductsList from "./components/zaliczenie/ProductsList/ProductsList";
import ShopingList from "./components/zaliczenie/ShopingList/ShopingList";
import produkty from "./common/consts/produkty";

function App() {
  const [filteredProducts, setFilteredProducts] = useState(produkty);
  const [shoppingProducts, setShoppingProducts] = useState([]);

  const addProductToCart = (product) => {
    setShoppingProducts((prevShoppingProducts) => [
      ...prevShoppingProducts,
      product,
    ]);
  };

  const removeProductFromCart = (id) => {
    setShoppingProducts(shoppingProducts.filter((el) => el.id !== id));
  };

  const filterProducts = (data) => {
    let filterByData = produkty.filter((el) =>
      el.nazwa.toLowerCase().startsWith(data.nazwa.toLowerCase())
    );

    data.kategoria !== "All" &&
      (filterByData = filterByData.filter(
        (el) => el.kategoria.toLowerCase() === data.kategoria
      ));

    data.produktSpozywczy &&
      (filterByData = filterByData.filter((el) => el.produktSpozywczy));

    setFilteredProducts(filterByData);
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <ProductsFilters filterProducts={(data) => filterProducts(data)} />
      <div className={styles.columnsWrapper}>
        <ProductsList
          products={filteredProducts}
          addProductToCart={(product) => addProductToCart(product)}
        />
        <ShopingList
          products={shoppingProducts}
          removeProductFromCart={(id) => removeProductFromCart(id)}
        />
      </div>
    </div>
  );
}

export default App;
