import React from 'react'

const FragmentDefinity = ({propFragment}) => {
  return (
    <>
        <div>
            <h2>Temos dois elementos pai</h2>
        </div>

        <div>
            <h2>Este também é</h2>
        </div>

        <h4> {propFragment}</h4>

    </>
  )
}

export default FragmentDefinity