import React from 'react'

const CatDetails = ({name, color, personality, grande}) => {
  return (
    <div>
        <h2>Detalhes do Gato</h2>
        <ul>
            <li> Nome: {name}</li>
            <li> Cor: {color}</li>
            <li> Caracteristica: {personality}</li>
        </ul>
        {grande && <p>Esse gato é grande!!!</p>}
    </div>
  )
}

export default CatDetails