import React from "react";
import { Phone } from "../type";
import s from "./ProductCart.module.css";
import { Link } from "react-router-dom";
import cartStore from "../../store/CartStore";

type ProductItemProps = {
  product: Phone;
};

const ProductCart: React.FC<ProductItemProps> = ({ product }) => {
  const colorClassMap = {
    black: s.blackPhone,
    blue: s.bluePhone,
    purple: s.purplePhone,
    white: s.whitePhone,
    green: s.greenPhone,
  };

  const handleAddToCart = (product: Phone) => {
    cartStore.addToCart(product);
  };

  return (
    <>
      <hr />
      <div key={product.id} className={s.product_cart}>
        <div className={s.image_container}>
          <img src={product.image} alt="phone_img"></img>
        </div>
        <div className={s.info_container}>
          <div className={s.general_info}>
            <div className={s.name_color}>
              <Link to={`/api/products/${product.id}`}>
                <h3>{product.name}</h3>
              </Link>
              <div className={s.colors_container}>
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className={`${s.phoneColor} ${
                      colorClassMap[color as keyof typeof colorClassMap] || ""
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <Link to={`/api/products/${product.id}`}>
              <button className={`secondary_button ${s.sec_button}`}>
                Подробнее
              </button>
            </Link>
          </div>
          <div className={s.price_cart}>
            <h3>{product.price} ₽</h3>
            <button
              className="primary_button"
              onClick={() => handleAddToCart(product)}
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
