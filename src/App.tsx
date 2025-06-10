import s from "./App.module.scss";
import { ProductCard } from "./components/ProductCard";
import { products } from "./constants";

function App() {
  return (
    <div className={s.container}>
      {products.map((i) => (
        <ProductCard key={i.id} {...i} />
      ))}
    </div>
  );
}

export default App;
