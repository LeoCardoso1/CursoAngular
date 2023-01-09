import React from 'react'
import "./MyComponent.css"

const MyComponent = () => {
  return (
    <div>
        <h1>Css de componente</h1>
        <p> Este é o paragráfo do componente</p>
        <p className='my-comp-paragraph'>Este tb é do componente</p>
    </div>
  )
}

export default MyComponent;