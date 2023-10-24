import"./App.css";
import "./components/pokecards/Pokecards.css"
import Pokegame from "./components/pokegame/Pokegame";
function App() {
  return (
    <div className="App">
      <h1>Pokemon Go Card Game</h1>
      <Pokegame />
    </div>
  );
}

export default App;
