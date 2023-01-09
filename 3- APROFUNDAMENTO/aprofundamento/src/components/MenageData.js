import { useState } from "react";

const MenageData = () => {
  let someData = 15;
  const [number, setNumber] = useState(18);
  return (
    <div>
        <div>MenageData</div>

        <div>
        <p>Valor: {someData} </p>
        <button onClick={() => (someData = 15)}> Mudar Variável</button>
        </div>

        <div>
        <p>Valor: {number} </p>
        <button onClick={() => setNumber(19)}> Mudar o state</button>
        </div>

    </div>
  )
}

export default MenageData