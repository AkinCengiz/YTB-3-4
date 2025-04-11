import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [first,setFirst] = useState(0);
  const [second,setSecond] = useState(0);

  useEffect(() => {
    console.log("1-Her zaman çalışır...");
  });
  useEffect(() => {
    console.log("2-Komponent ilk yüklendiğinde çalışır...");
  },[]);
  useEffect(() => {
    console.log("3-Komponent ilk yüklendiğinde ve first değişkeninin değeri değiştiğinde çalışır...");
  },[first]);
  useEffect(() => {
    console.log("4-Komponent ilk yüklendiğinde ve second değişkeninin değeri değiştiğinde çalışır...")
  },[second]);
  useEffect(() => {
    console.log("5-Komponent ilk yüklendiğinde ve first ile second değişkeninin değeri değiştiğinde çalışır...")
  },[first,second]);
  return (
    <>
      <div id="first">
        <h3>First : {first}</h3>
        <button onClick={() => {setFirst(first + 1)}}>First Increment</button>
      </div>
      <div id="second">
        <h3>Second : {second}</h3>
        <button onClick={() => {setSecond(second + 1)}}>Second Increment</button>
      </div>
    </>
  )
}

export default App
