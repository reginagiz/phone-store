import { observer } from "mobx-react-lite";
import cartStore from "../../store/CartStore";
import { Phone } from "../type";
import s from "./Cart.module.css";

const Cart = () => {
  const handleRemoveFromCart = (product: Phone) => {
    cartStore.removeFromCart(product);
  };

  const colorClassMap = {
    black: s.blackPhone,
    blue: s.bluePhone,
    purple: s.purplePhone,
    white: s.whitePhone,
    green: s.greenPhone,
  };

  return (
    <>
      <div className={s.cart}>
        {cartStore.items.map((item) => (
          <div key={item.product.id} className={s.cart_container}>
            <div className={s.image_container}>
              <img src={item.product.image} alt="phone_img"></img>
            </div>
            <div className={s.info_container}>
              <div className={s.general_info}>
                <div className={s.name_color}>
                  <h3>{item.product.name}</h3>
                  <div className={s.colors_container}>
                    {item.product.colors.map((color) => (
                      <div
                        key={color}
                        className={`${s.phoneColor} ${
                          colorClassMap[color as keyof typeof colorClassMap] ||
                          ""
                        }`}
                      ></div>
                    ))}
                  </div>
                  <div className={s.quantity}>
                    Количество:&nbsp;{item.quantity}
                  </div>
                </div>
              </div>
              <div className={s.price_cart}>
                <h3>{item.product.price} ₽</h3>
                <button
                  onClick={() => handleRemoveFromCart(item.product)}
                  className="primary_button"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default observer(Cart);
