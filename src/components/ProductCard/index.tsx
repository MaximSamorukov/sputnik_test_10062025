import React from "react";
import s from "./style.module.scss";

export type ProductCardPropsType = {
  title: string;
  origin: string;
  price: number;
  currency: "RUB" | "USD" | "EUR";
  imageUrl: string;
  id: number;
};

export const ProductCard: React.FC<ProductCardPropsType> = ({
  title,
  imageUrl,
  origin,
  price,
  currency,
}) => {
  return (
    <div className={s.cardContainer}>
      <div className={s.cardHeader}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={s.cardBody}>
        <div className={s.cardBodyTitle}>{title}</div>
        <div className={s.cardBodyOrigin}>
          <div className={s.cardBodyOriginLabel}>Страна изготовления:</div>
          <div className={s.cardBodyOriginValue}>{origin}</div>
        </div>
        <div className={s.cardBodyPrice}>
          <div className={s.cardBodyPriceLabel}>Цена:</div>
          <div className={s.cardBodyPriceValue}>
            {new Intl.NumberFormat("ru-RU", {
              style: "currency",
              currency,
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(price / 100)}
          </div>
        </div>
      </div>
    </div>
  );
};
