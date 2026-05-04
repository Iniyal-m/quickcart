function CartPage({ cart, onIncrease, onDecrease, onRemove }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div>
      <h2>Cart Page</h2>

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <p><b>{item.name}</b></p>
          <p>₹{item.price} × {item.quantity}</p>

          <button onClick={() => onDecrease(item.id)}>-</button>
          <button onClick={() => onIncrease(item.id)}>+</button>
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default CartPage;