import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({
  Sushis,
  onMoreButtonClick,
  onEaten,
  eatenSushi,
  onShowClick,
}) {
  return (
    <div className="belt">
      {Sushis.map((sushi) => {
        return (
          <Sushi
            key={sushi.id}
            id={sushi.id}
            name={sushi.name}
            image={sushi.img_url}
            price={sushi.price}
            isEaten={eatenSushi[sushi.id]}
            onEaten={onEaten}
          />
        );
      })}
      <MoreButton onClick={onMoreButtonClick} onShowClick={onShowClick} />
    </div>
  );
}

export default SushiContainer;
