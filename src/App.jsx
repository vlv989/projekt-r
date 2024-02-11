import { useState } from "react";
import styles from "./App.module.scss";
import AddProducts from "./components/zaliczenie/AddProducts/AddProducts";
import ProductsFilters from "./components/zaliczenie/ProductsFilters/ProductsFilters";
import ProductsList from "./components/zaliczenie/ProductsList/ProductsList";
import ShopingList from "./components/zaliczenie/ShopingList/ShopingList";
import produkty from "./common/consts/produkty";

function App() {
  const [availableProducts, setAvailableProducts] = useState(produkty);
  const [filteredProducts, setFilteredProducts] = useState(produkty);
  const [shoppingProducts, setShoppingProducts] = useState([]);

  const addProductToCart = (product) => {
    setShoppingProducts([...shoppingProducts, product]);
  };

  const removeProductFromCart = (id) => {
    setShoppingProducts(shoppingProducts.filter((el) => el.id !== id));
  };

  const filterProducts = (data) => {
    let filterByData = availableProducts.filter((el) =>
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

  const addProductToList = (product) => {
    let modification = false;
    const listWithModifiedProduct = availableProducts.map((el) => {
      if (el.nazwa.toLowerCase() === product.nazwa.toLowerCase()) {
        modification = true;
        return {
          ...el,
          kategoria: product.kategoria,
          produktSpozywczy: product.produktSpozywczy,
        };
      } else {
        return el;
      }
    });

    if (modification) {
      setAvailableProducts(listWithModifiedProduct);
    } else {
      setAvailableProducts([...availableProducts, product]);
    }

    setFilteredProducts(availableProducts);
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts addProductToList={addProductToList} />
      <ProductsFilters
        products={availableProducts}
        filterProducts={filterProducts}
      />
      <div className={styles.columnsWrapper}>
        <ProductsList
          products={filteredProducts}
          addProductToCart={addProductToCart}
        />
        <ShopingList
          products={shoppingProducts}
          removeProductFromCart={removeProductFromCart}
        />
      </div>
    </div>
  );
}

export default App;
