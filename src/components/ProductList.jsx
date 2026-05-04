import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div className="product-container">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;