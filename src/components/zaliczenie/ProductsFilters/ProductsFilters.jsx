import { useState, useEffect } from "react";
import styles from "../../../common/styles/Headers.module.scss";

function ProductsFilters({ products, filterProducts }) {
  const [data, setData] = useState({
    nazwa: "",
    kategoria: "All",
    produktSpozywczy: false,
  });

  useEffect(() => {
    filterProducts(data);
  }, [data, filterProducts]);

  const handleChange = (e) => {
    let value;
    e.target.name !== "produktSpozywczy"
      ? (value = e.target.value)
      : (value = e.target.checked);
    setData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: value,
      };
    });
  };

  const resetFilter = () => {
    setData({
      nazwa: "",
      kategoria: "All",
      produktSpozywczy: false,
    });
  };

  return (
    <div className={styles.Headers}>
      <p>Products Filters:</p>
      <form>
        <label>
          by name{" "}
          <input
            name="nazwa"
            type="text"
            placeholder="name"
            value={data.nazwa}
            onChange={handleChange}
          />
        </label>{" "}
        <label>
          by category{" "}
          <select
            name="kategoria"
            value={data.kategoria}
            onChange={handleChange}
          >
            <option key="All" value="All">
              All
            </option>
            {[...new Set(products.map((el) => el.kategoria.toLowerCase()))].map(
              (kategoria) => (
                <option key={kategoria} value={kategoria}>
                  {kategoria}
                </option>
              )
            )}
          </select>
        </label>{" "}
        <label>
          food only
          <input
            name="produktSpozywczy"
            checked={data.produktSpozywczy}
            type="checkbox"
            onChange={handleChange}
          />
        </label>
        <button onClick={resetFilter}>Reset filter</button>
      </form>
    </div>
  );
}

export default ProductsFilters;
