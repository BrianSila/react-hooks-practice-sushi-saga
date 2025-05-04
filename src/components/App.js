import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [Sushis, setSushis] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setSushis(data))
      .catch((err) => console.log(`Error fetching: `, err));
  });

  function handleMoreButtonClick() {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % Sushis.length);
  }

  return (
    <div className="app">
      <SushiContainer
        Sushis={Sushis.slice(currentIndex, currentIndex + 4)}
        onMoreButtonClick={handleMoreButtonClick}
      />
      <Table />
    </div>
  );
}

export default App;
