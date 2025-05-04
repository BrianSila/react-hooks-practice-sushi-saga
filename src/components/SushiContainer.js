import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ Sushis, onMoreButtonClick }) {
  return (
    <div className="belt">
      {Sushis.map((sushi) => {
        return (
          <Sushi
            key={sushi.id}
            name={sushi.name}
            image={sushi.img_url}
            price={sushi.price}
            created_at={sushi.created_at}
          />
        );
      })}
      <MoreButton onClick={onMoreButtonClick} />
    </div>
  );
}

export default SushiContainer;
