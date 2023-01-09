import { useState } from "react"


const CondtionalRender = () => {
  const[x] = useState(false);

  const[name, setName] = useState("Joaquine")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p> Se for true, sim!</p>}
        {!x && <p> Agora o X é falso</p>}
        {name === "Joaquina" ? (
          <div>
            <p> O nome é Joaquina</p>
            </div>
        ) : (
          <div>
            <p> Nome não encontrado</p>
          </div>
        )}
        <button onClick={() => setName("Joaquina")}>Clica Aqui</button>
    </div>
  )
}

export default CondtionalRender