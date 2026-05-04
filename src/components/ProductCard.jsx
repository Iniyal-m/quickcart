function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} width="100" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductCard;