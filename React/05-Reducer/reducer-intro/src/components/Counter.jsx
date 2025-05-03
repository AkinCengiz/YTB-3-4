import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    const decrementCounter = () => {
        setCounter(counter - 1);
    }
    const resetCounter = () => {
        setCounter(0);
    }
  return (
    <div>
        <h2>Counter State</h2>
        <h3>Counter : {counter}</h3>
        <button onClick={decrementCounter}>--</button>
        <button onClick={resetCounter}>Reset</button>
        <button onClick={incrementCounter}>++</button>
        <br /><br />
        <button onClick={() => setCounter(counter - 1)}>--</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={() => setCounter(counter + 1)}>++</button>
    </div>
  )
}

export default Counter