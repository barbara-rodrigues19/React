import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import CardAnimal from "./componentes/CardAnimal";

function App() {
  const [nome, setNome] = useState("Pedro");
  const [animal, setAnimal] = useState("Leão");

  const mudarNomeHandler = () => {
    setNome("João");
  };

  const mudarAnimalHandler = () => {
    setAnimal("Gato");
  };

  return (
    <div className="App">
      <p>Nome: {nome}</p>
      <button onClick={mudarNomeHandler}>Mudar o valor do nome!</button>
      <h1>Animal:{animal}</h1>
      <button onDoubleClick={mudarAnimalHandler}>Mudar nome do animal</button>

      <CardAnimal />
    </div>
  );
}

export default App;
