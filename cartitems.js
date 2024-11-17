const Cart = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
        <CartSummary total={totalPrice} />
      </div>
    );
  };
  