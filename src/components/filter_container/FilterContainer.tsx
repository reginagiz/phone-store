import s from "./FilterContainer.module.css";

const FilterContainer = () => {
  return (
    <div className={s.filter_container}>
      <h2>Смартфоны</h2>
      <button>По популярности</button>
      <button>По цене</button>
      <button>{"<"}</button>1<button>{">"}</button>
    </div>
  );
};

export default FilterContainer;
