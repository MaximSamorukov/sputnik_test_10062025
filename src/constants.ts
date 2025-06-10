import type { ProductCardPropsType } from "./components/ProductCard";

export const products: ProductCardPropsType[] = [
  {
    id: 1,
    title: "Непальская вязанная шапка",
    origin: "Непал",
    price: 80000,
    currency: "RUB",
    imageUrl: "/1.webp",
  },
  {
    id: 2,
    title: "Монгольская вязанная шапка",
    origin: "Монголия",
    price: 90000,
    currency: "RUB",
    imageUrl: "/2.webp",
  },
  {
    id: 3,
    title: "Тибетская вязанная шапка",
    origin: "КНР",
    price: 1100,
    currency: "USD",
    imageUrl: "/3.webp",
  },
];
