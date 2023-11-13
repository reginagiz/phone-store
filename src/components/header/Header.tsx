import { Link } from "react-router-dom";
import CartIcon from "../images/CartIcon";
import s from "./Header.module.css";
import cartStore from "../../store/CartStore";
import { observer } from "mobx-react-lite";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header_container}>
        <Link to={"/"}>
          <h2 className={s.logo}>graff.shop</h2>
        </Link>
        <Link to={"/cart"}>
          <div className={s.cart}>
            <CartIcon />
            {cartStore.totalQuantity > 0 ? (
              <div className={s.badge}>{cartStore.totalQuantity}</div>
            ) : (
              ""
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default observer(Header);
