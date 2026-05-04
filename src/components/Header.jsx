function Header({ count, onCartClick }) {
  return (
    <div>
      <h1>QuickCart</h1>
      <button onClick={onCartClick}>
        Cart ({count})
      </button>
    </div>
  );
}

export default Header;