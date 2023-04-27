import React from 'react'

function end({retry, score}) {
  return (
    <div>
        <h1> Fim </h1>
        <h2> A sua Pontução foi: {score}</h2>
        <button onClick={retry}>Reiniciar</button>
    </div>
  )
}

export default end