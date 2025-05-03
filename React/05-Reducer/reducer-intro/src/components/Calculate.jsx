import React, { useState } from 'react'
import "./Calculate.css"

const Calculate = () => {
    const [number1,setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);

    const onChangeNumber1Input = (e) => {
        setNumber1(Number(e.target.value));
        console.log(typeof number1)
    }
    const onChangeNumber2Input = (e) => {
        setNumber2(Number(e.target.value));
    }

    const handleAdded = () => {
        setResult(number1 + number2)
    }
    const handleSubtraction = () => {
        setResult(number1 - number2);
    }
    const handleMultiple = () => {
        setResult(number1 * number2);
    }
    const handleDivide = () => {
        setResult(number1 / number2);
    }
  return (
    <div className='calculate-wrapper'>
        <h2>Calculate State</h2>
        <div className="calculate-form">
            <div className="form-group">
                <label className='form-label' htmlFor="number1">Number1</label>
                <input className='form-control' type="text" id='number1' value={number1} onChange={onChangeNumber1Input} />
            </div>
            <div className="form-group">
                <label className='form-label' htmlFor="number2">Number2</label>
                <input className='form-control' type="text" id='number2' value={number2} onChange={onChangeNumber2Input}  />
            </div>
            <div className="button-group">
                <button className='form-btn' onClick={handleAdded}>TOPLA</button>
                <button className='form-btn' onClick={handleSubtraction}>ÇIKAR</button>
                <button className='form-btn' onClick={handleMultiple}>ÇARP</button>
                <button className='form-btn' onClick={handleDivide}>BÖL</button>
            </div>
            <div className="form-group">
                <label className='form-label' htmlFor="result">Result</label>
                <input className='form-control' type="text" id='result' value={result} readOnly />
            </div>
        </div>
    </div>
  )
}

export default Calculate