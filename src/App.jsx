import Header from "./components/Header"
import Page from "./pages/Page";
import Footer from "./components/Footer";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Page/>}/>
          <Route path="*" element={<h1>404</h1>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
