import ProductList from "./ProductList";

function HomePage({ onAddToCart }) {
  return <ProductList onAddToCart={onAddToCart} />;
}

export default HomePage;