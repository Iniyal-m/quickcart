function CartSidebar({ cart, isOpen, onClose, onIncrease, onDecrease, onRemove }) {
  if (!isOpen) return null;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-sidebar">
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>

          <p>₹{item.price} × {item.quantity}</p>

          {/* ➕ ➖ buttons */}
          <button onClick={() => onDecrease(item.id)}>-</button>
          <button onClick={() => onIncrease(item.id)}>+</button>

          {/* 🗑 remove */}
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default CartSidebar;