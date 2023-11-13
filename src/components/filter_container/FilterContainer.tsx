import s from "./FilterContainer.module.css";
import store from "../../store/GetAllProducts";
import SortIcon from "../images/SortIcon";
import { useState } from "react";
import FilterIcon from "../images/FilterIcon";
import NavbarModal from "../navbar_modal/NavbarModal";

const FilterContainer = () => {
  const { sortByPopularity, sortByPrice } = store;

  const [show, setShow] = useState<boolean>(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div className={s.filter}>
      <div className={s.filter_container}>
        <div className={s.title_button}>
          <h1>Смартфоны</h1>
          {!show && (
            <button className={s.navbar_menu} onClick={openModal}>
              <FilterIcon />
            </button>
          )}
        </div>
        <NavbarModal closeModal={closeModal} show={show} />
        <div className={s.buttons_container}>
          <button onClick={sortByPopularity} className={s.button_popular}>
            по популярности
          </button>
          <button onClick={sortByPrice} className={s.button_price}>
            <p className={s.button_price_p}>по цене </p>
            <SortIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default FilterContainer;
