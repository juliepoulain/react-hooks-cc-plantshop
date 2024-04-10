import React, { useState } from "react";

function PlantCard({ image, name, price }) {
  const [inStock, setStock] = useState(true)

  const toggleStock = () => {
    setStock(!inStock)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={toggleStock} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
