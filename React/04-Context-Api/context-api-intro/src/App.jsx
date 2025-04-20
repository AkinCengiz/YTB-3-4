import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import BookList from './components/BookList'

function App() {
  //const [deneme,setDeneme] = useState("Deneme");

  return (
    <>
      <h1>Context API</h1>
      <Header />
      <Content  />
      <BookList />
      <Footer/>
    </>
  )
}

export default App
