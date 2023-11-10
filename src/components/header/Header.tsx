import CartIcon from "../images/CartIcon";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header_container}>
        <h2 className={s.logo}>graff.shop</h2>
        <div className={s.cart}>
          <CartIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
