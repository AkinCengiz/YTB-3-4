import React, { useReducer } from 'react'


function countReducer(state,action){
    switch (action) {
        case "DECREMENT":
            console.log(state)
            return state - 1;
        case "INCREMENT":
            return state + 1;
        case "RESET":
            return 0;
        case "TWO_DECREMENT":
            return state - 2;
        case "TWO_INCREMENT":
            return state + 2;    
        default:
            return state;
    }
}
const counter = 10;
const CounterReducer = () => {

    //const [counter, setCounter] = useState(0);
    const [state,dispatch] = useReducer(countReducer,counter)

  return (
    <div>
        <h2>Counter Reducer</h2>
        <h3>Counter : {state}</h3>
        <button onClick={() => dispatch("TWO_DECREMENT")}>-2</button>
        <button onClick={() => dispatch("DECREMENT")}>--</button>
        <button onClick={() => dispatch("RESET")}>Reset</button>
        <button onClick={() => dispatch("INCREMENT")}>++</button>
        <button onClick={() => dispatch("TWO_INCREMENT")}>+2</button>
        <br /><br />
        {/* <button onClick={() => setCounter(counter - 1)}>--</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={() => setCounter(counter + 1)}>++</button> */}
    </div>
  )
}

export default CounterReducer