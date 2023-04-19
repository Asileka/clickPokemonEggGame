import togepipic from "./images/250px-0175Togepi.png";
import togeticpic from "./images/176.png";
import togekiss from "./images/468.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);
  const [pokemonPic, setPokemonPic] = useState(togepipic);
  const [time, setTime] = useState("?");
  const [startTime, setStartTime] = useState(0);

  function pressTogepi() {
    const newclick = clicks + 1;
    setClicks(newclick);
    if (newclick === 1) {
      setStartTime(Date.now() / 1000);
    }
    if (newclick >= 10 && newclick < 20) {
      setPokemonPic(togeticpic);
    }
    if (newclick === 20) {
      setPokemonPic(togekiss);
      setTime(Date.now() / 1000 - startTime);
    }
  }
  function resetGame() {
    setClicks(0);
    setPokemonPic(togepipic);
    setTime("?");
  }
  return (
    <div className="App">
      <div className="App-header">
        <p>Egg Game</p>
        <img src={pokemonPic} alt="togepi" onClick={pressTogepi} />
        <p>Clicks: {clicks}</p>
        <p>Your time: {time}</p>
        <button onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
}

export default App;
