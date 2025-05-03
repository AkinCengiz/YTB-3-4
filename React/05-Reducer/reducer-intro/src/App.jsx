import './App.css'
import Calculate from './components/Calculate'
import CalculateReducer from './components/CalculateReducer'
import Counter from './components/Counter'
import CounterReducer from './components/CounterReducer'

function App() {
  

  return (
    <>
      
      <h2>Reducer</h2>
      <CalculateReducer />
      <br /><hr /><br />
      <Counter />
      <br /><hr /><br />
      <CounterReducer />
      <br /><hr /><br />
      <Calculate />
    </>
  )
}

export default App
