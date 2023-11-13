import s from "./Navbar.module.css";
import store from "../../store/GetAllProducts";

const Navbar = () => {
  const { selectedColors, filterByColor } = store;
  const resetColors = () => {
    store.selectedColors = [];
  };

  const isColorSelected = (color: string) => selectedColors.includes(color);

  return (
    <div className={s.color_filter_container}>
      <h3>Цвет</h3>
      <div
        className={s.button_color_container}
        onClick={() => filterByColor("black")}
      >
        <button
          className={`${s.phoneColor} ${s.blackPhone} ${
            isColorSelected("black") ? s.blackPhoneActive : ""
          }`}
        ></button>
        <div>Черный</div>
      </div>
      <div
        className={s.button_color_container}
        onClick={() => filterByColor("blue")}
      >
        <button
          className={`${s.phoneColor} ${s.bluePhone} ${
            isColorSelected("blue") ? s.bluePhoneActive : ""
          }`}
        ></button>
        <div>Синий</div>
      </div>
      <div
        className={s.button_color_container}
        onClick={() => filterByColor("green")}
      >
        <button
          className={`${s.phoneColor} ${s.greenPhone} ${
            isColorSelected("green") ? s.greenPhoneActive : ""
          }`}
        ></button>
        <div>Зеленый</div>
      </div>
      <div
        className={s.button_color_container}
        onClick={() => filterByColor("purple")}
      >
        <button
          className={`${s.phoneColor} ${s.purplePhone} ${
            isColorSelected("purple") ? s.purplePhoneActive : ""
          }`}
        ></button>
        <div>Фиолетовый</div>
      </div>
      <div
        className={s.button_color_container}
        onClick={() => filterByColor("white")}
      >
        <button
          className={`${s.phoneColor} ${s.whitePhone} ${
            isColorSelected("white") ? s.whitePhoneActive : ""
          }`}
        ></button>
        <div>Белый</div>
      </div>
      <button onClick={resetColors} className={s.reset_button}>
        Сбросить параметры
      </button>
    </div>
  );
};

export default Navbar;
