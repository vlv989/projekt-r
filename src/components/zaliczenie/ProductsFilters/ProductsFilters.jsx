import { useState } from "react";
import styles from "../../../common/styles/Headers.module.scss";
import produkty from "../../../common/consts/produkty";

function ProductsFilters({ filterProducts }) {
  const [data, setData] = useState({
    nazwa: "",
    kategoria: "All",
    produktSpozywczy: false,
  });

  const handleChange = (e) => {
    setData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterProducts(data);
  };

  return (
    <div className={styles.Headers}>
      <p>Products Filters:</p>
      <form onSubmit={handleSubmit}>
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
            {[...new Set(produkty.map((el) => el.kategoria.toLowerCase()))].map(
              (kategoria) => (
                <option key={kategoria} value={kategoria}>
                  {kategoria}
                </option>
              )
            )}
          </select>
        </label>{" "}
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default ProductsFilters;
