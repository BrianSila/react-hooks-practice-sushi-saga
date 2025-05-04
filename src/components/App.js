import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import SushiForm from "./SushiForm";

const API = "http://localhost:3001/sushis";

function App() {
  const [Sushis, setSushis] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [eatenSushi, setEatenSushi] = useState({});
  const [remainingMoney, setRemainingMoney] = useState(100);
  const [ShowForm, setShowForm] = useState(false);
  const [FormData, setFormData] = useState({
    name: "",
    "img-url": "",
    price: "",
  });

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setSushis(data))
      .catch((err) => console.log(`Error fetching: `, err));
  }, []);

  function handleMoreButtonClick() {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % Sushis.length);
  }

  function handleEatenSushi(id) {
    const sushi = Sushis.find((s) => s.id === id);
    if (sushi && remainingMoney >= sushi.price) {
      setEatenSushi((prevState) => ({
        ...prevState,
        [id]: true,
      }));
      setRemainingMoney((prevMoney) => prevMoney - sushi.price);
    }
  }

  function handleDisplayForm() {
    setShowForm((prevShowForm) => !prevShowForm);
  }

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newSushi = {
      ...FormData,
      id: Sushis.length + 1,
      price: parseFloat(FormData.price),
    };

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSushi),
    })
      .then((res) => res.json())
      .then((data) => {
        setSushis((prevSushis) => [...prevSushis, data]);
        setFormData({ name: "", "img-url": "", price: "" });
        setShowForm(false);
      })
      .catch((err) => console.log(`Error posting: `, err));
  }

  return (
    <div className="app">
      {ShowForm && (
        <SushiForm
          FormData={FormData}
          onChange={handleFormChange}
          onSubmit={handleFormSubmit}
        />
      )}
      <SushiContainer
        Sushis={Sushis.slice(currentIndex, currentIndex + 4)}
        onMoreButtonClick={handleMoreButtonClick}
        onEaten={handleEatenSushi}
        eatenSushi={eatenSushi}
        onShowClick={handleDisplayForm}
      />
      <Table plates={Object.keys(eatenSushi)} remainingMoney={remainingMoney} />
    </div>
  );
}

export default App;
