import { useState } from "react";
import styles from "../../../common/styles/Headers.module.scss";

function AddProducts({ addProductToList }) {
  const [product, setProduct] = useState({
    nazwa: "",
    kategoria: "",
    produktSpozywczy: false,
  });

  const handleChange = (e) => {
    let value;
    e.target.name !== "produktSpozywczy"
      ? (value = e.target.value)
      : (value = e.target.checked);
    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [e.target.name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProductToList(product);

    setProduct({
      nazwa: "",
      kategoria: "",
      produktSpozywczy: false,
    });
  };

  return (
    <div className={styles.Headers}>
      <p>Add products:</p>
      <form onSubmit={handleSubmit}>
        <label>
          name{" "}
          <input
            name="nazwa"
            type="text"
            placeholder="name"
            value={product.nazwa}
            onChange={handleChange}
          />
        </label>{" "}
        <label>
          category{" "}
          <input
            name="kategoria"
            type="text"
            placeholder="category"
            value={product.kategoria}
            onChange={handleChange}
          />
        </label>{" "}
        <label>
          food product
          <input
            name="produktSpozywczy"
            checked={product.produktSpozywczy}
            type="checkbox"
            onChange={handleChange}
          />
        </label>
        <button type="submit" disabled={!product.nazwa || !product.kategoria}>
          Add product
        </button>
      </form>
    </div>
  );
}

export default AddProducts;
