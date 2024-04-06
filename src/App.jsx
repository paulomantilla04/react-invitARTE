import Header from "./components/Header"
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalogo" element={<h1>Catalogo</h1>}/>
          <Route path="/faq" element={<h1>FAQ</h1>}/>
          <Route path="*" element={<h1>404</h1>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
