import type { ProductCardPropsType } from "./components/ProductCard";
import img1 from "./assets/1.webp";
import img2 from "./assets/2.webp";
import img3 from "./assets/3.webp";

export const products: ProductCardPropsType[] = [
  {
    id: 1,
    title: "Непальская вязанная шапка",
    origin: "Непал",
    price: 80000,
    currency: "RUB",
    imageUrl: img1,
  },
  {
    id: 2,
    title: "Монгольская вязанная шапка",
    origin: "Монголия",
    price: 90000,
    currency: "RUB",
    imageUrl: img2,
  },
  {
    id: 3,
    title: "Тибетская вязанная шапка",
    origin: "КНР",
    price: 1100,
    currency: "USD",
    imageUrl: img3,
  },
];
