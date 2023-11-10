import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import product from "../../store/GetProduct";
import s from "./ProductDetails.module.css";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails: React.FC = observer(() => {
  const { id } = useParams();
  useEffect(() => {
    product.fetchData(Number(id));
  }, [id]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const colorClassMap = {
    black: s.blackPhone,
    blue: s.bluePhone,
    purple: s.purplePhone,
    white: s.whitePhone,
    green: s.greenPhone,
  };

  if (!product.data) {
    return <p>Loading...</p>;
  }

  const colors = product.data.colors || [];
  const description = product.data.desc || "";

  return (
    <div className={s.product_details}>
      <div className={s.button_container}>
        <button onClick={handleClick}>{"<"} Назад</button>
      </div>
      <div className={s.product_details_container}>
        <div className={s.img_container}>
          <img src={product.data.image} alt="phone_image" />
        </div>
        <div className={s.product_info}>
          <div className={s.general_info}>
            <div className={s.name_colors}>
              <h2>{product.data.name}</h2>
              <div className={s.colors_container}>
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`${s.phoneColor} ${
                      colorClassMap[color as keyof typeof colorClassMap] || ""
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <div className={s.price_cart}>
              <h1>{product.data.price} ₽</h1>
              <button className="primary_button">В корзину</button>
            </div>
          </div>
          <h3>Описание</h3>
          {description.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProductDetails;
