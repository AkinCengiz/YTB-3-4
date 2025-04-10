import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"

function App() {
  const [counter,setCounter] = useState(0);
    function counterIncrement(){
      setCounter(counter + 1);
      console.log("Counter : ",counter);
      
  }

  function counterDecrement(){
      setCounter(counter - 1);
  }

  return (
    <>
      <h1>Yetenek Başakşehir 103-104</h1>
      <h3>Counter : {counter}</h3>
      <Header increment={counterIncrement} decrement={counterDecrement}/>
      <Footer result={counter} />
    </>  
  )
}

export default App
