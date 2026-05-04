import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList({ onAddToCart }) {
  return (
    <div className="product-container">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;