import s from "./Navbar.module.css";

interface NavbarProps {
  selectedColors: string[];
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
}

const Navbar = ({ selectedColors, setSelectedColors }: NavbarProps) => {
  const resetColors = () => {
    setSelectedColors([]);
  };

  const toggleColor = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };
  return (
    <div className={s.color_filter_container}>
      <h3>Цвет</h3>
      <div className={s.button_color_container}>
        <button
          className={`${s.phoneColor} ${s.blackPhone}`}
          onClick={() => toggleColor("black")}
        ></button>
        <div>Черный</div>
      </div>
      <div className={s.button_color_container}>
        <button
          className={`${s.phoneColor} ${s.bluePhone}`}
          onClick={() => toggleColor("blue")}
        ></button>
        <div>Синий</div>
      </div>
      <div className={s.button_color_container}>
        <button
          className={`${s.phoneColor} ${s.greenPhone}`}
          onClick={() => toggleColor("green")}
        ></button>
        <div>Зеленый</div>
      </div>
      <div className={s.button_color_container}>
        <button
          className={`${s.phoneColor} ${s.purplePhone}`}
          onClick={() => toggleColor("purple")}
        ></button>
        <div>Фиолетовый</div>
      </div>
      <div className={s.button_color_container}>
        <button
          className={`${s.phoneColor} ${s.whitePhone}`}
          onClick={() => toggleColor("white")}
        ></button>
        <div>Белый</div>
      </div>
      <button onClick={resetColors}>Сбросить параметры</button>
    </div>
  );
};

export default Navbar;
