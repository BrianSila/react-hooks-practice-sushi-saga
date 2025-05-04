import React from "react";

function Sushi({ id, name, image, price, onEaten, isEaten }) {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => !isEaten && onEaten(id)}>
        {!isEaten ? (
          <img src={image} alt={name ? name : "Sushi"} width="100%" />
        ) : null}
      </div>
      <h4 className="sushi-details">
        {name} - $ {price}
      </h4>
    </div>
  );
}

export default Sushi;
