
import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const n = 9;
  const [name] = useState("Leonardio");
  const redTitle = false;
  return (
    <div className="App">
      {/*Css Global*/}
      <h1>React com CSS</h1>
      {/*Css Componente*/}
      <MyComponent/>
      <p>Este é o parágrafo do app.JS</p>
      {/*Inline Css*/}
      <p style={{color: "blueviolet", padding:"25px", borderTop: "2px solid blue"}}>Esse elemento foi ultilizado em forma inline</p>
      {/*Css  inline dinâmico*/}
      <h2 style={n > 10 ? ({color: "green"}): ({color: "red"})}>Css dinâmico</h2>

      {/*Css  inline dinâmico*/}
      <h2 style={name === "Leonardo" ? ({color: "green", background: "black"}): null}>Resultado</h2>

      {/*Classe Dinâmica*/}

      <h2 className={redTitle ? "red-title": "title"}> Esse título vai ter classe dinâmica</h2>

      <Title/>
      
    </div>

  );
}

export default App;
