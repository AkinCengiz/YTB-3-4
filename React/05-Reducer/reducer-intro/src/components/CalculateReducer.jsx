import React, { useReducer } from 'react';
import "./Calculate.css";


//cities = ["İstanbul","Antalya"];
// [...cities,"Ankara"]

// user : { firstname:"Akın",lastname:"Cengiz",email:"akincengiz@msn.com"};

// {...user, email:"aakncngz@gmail.com"}
//{ firstname:"Akın",lastname:"Cengiz",email:"aakncngz@gmail.com"};

function calcReducer(state,action){
    switch (action.type) {
        case "SET_NUMBER1":
            console.log(state);
            return {...state, number1 : action.payload};
        case "SET_NUMBER2":
            console.log(state);
            return {...state, number2 : action.payload};
        case "ADDED":
            return {...state, result : action.payload};
        case "SUBTRACT":
            return {...state, result : action.payload};
        case "MULTIPLE":
            return {...state, result : action.payload};
        case "DIVIDE":
            return {...state,result : action.payload};    
        default:
            return {...state};
    }
}

const initialState = {
    number1 : 0,
    number2 : 0,
    result : 0
}

const CalculateReducer = () => {

    const [state,dispatch] = useReducer(calcReducer,initialState)

    const onChangeNumber1Input = (e) => {
        dispatch({type : "SET_NUMBER1", payload : Number(e.target.value)});
    }
    const onChangeNumber2Input = (e) => {
        dispatch({type : "SET_NUMBER2", payload : Number(e.target.value)});
    }

    const handleAdded = () => {
        dispatch({type : "ADDED", payload : state.number1 + state.number2})
    }
    const handleSubtraction = () => {
        dispatch({type : "SUBTRACT", payload : state.number1 - state.number2 })
    }
    const handleMultiple = () => {
        dispatch({ type : "MULTIPLE", payload : state.number1 * state.number2 })
    }
    const handleDivide = () => {
        dispatch({type : "DIVIDE", payload : state.number1 / state.number2})
    }

  return (
    <div className='calculate-wrapper'>
        <h2>Calculate Reducer</h2>
        <div className="calculate-form">
            <div className="form-group">
                <label className='form-label' htmlFor="number1">Number1</label>
                <input className='form-control' type="text" id='number1' value={state.number1} onChange={onChangeNumber1Input} />
            </div>
            <div className="form-group">
                <label className='form-label' htmlFor="number2">Number2</label>
                <input className='form-control' type="text" id='number2' value={state.number2} onChange={onChangeNumber2Input}  />
            </div>
            <div className="button-group">
                <button className='form-btn' onClick={handleAdded}>TOPLA</button>
                <button className='form-btn' onClick={handleSubtraction}>ÇIKAR</button>
                <button className='form-btn' onClick={handleMultiple}>ÇARP</button>
                <button className='form-btn' onClick={handleDivide}>BÖL</button>
            </div>
            <div className="form-group">
                <label className='form-label' htmlFor="result">Result</label>
                <input className='form-control' type="text" id='result' value={state.result} readOnly />
            </div>
        </div>
    </div>
  )
}

export default CalculateReducer