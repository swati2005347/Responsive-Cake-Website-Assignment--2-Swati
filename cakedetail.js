const CakeDetail = ({ cake }) => {
    return (
      <div className="cake-detail">
        <img src={cake.image} alt={cake.name} />
        <h1>{cake.name}</h1>
        <p>{cake.description}</p>
        <p>Price: ${cake.price}</p>
        <button onClick={() => addToCart(cake)}>Add to Cart</button>
      </div>
    );
  };
  