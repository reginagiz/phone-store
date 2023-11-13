import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import store from "../../store/GetAllProducts";
import { Phone } from "../type";
import ProductCart from "../product_cart/ProductCart";
import s from "./Homepage.module.css";
import Navbar from "../navbar/Navbar";
import FilterContainer from "../filter_container/FilterContainer";

const Homepage: React.FC = observer(() => {
  useEffect(() => {
    store.fetchData();
  }, []);

  let filteredData = store.data;
  if (store.selectedColors.length > 0) {
    filteredData = store.data.filter((item) =>
      item.colors.some((color) => store.selectedColors.includes(color))
    );
  }

  return (
    <div className={s.homepage}>
      <div className={s.homepage_container}>
        <FilterContainer />
        <div className={s.navbar_plus_products_container}>
          <div className={s.navbar_container}>
            <Navbar />
          </div>
          <div className={s.products_container}>
            {filteredData.map((item: Phone) => (
              <ProductCart key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Homepage;
