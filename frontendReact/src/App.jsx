// import { useState } from 'react'

// import Header from "./layout/header"
// import ProductList from "./product/list"
// import List from "./product/list"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './layout/header';
import Home from './pages/Home';
import Footer from './layout/footer';
import Aboutus from './pages/aboutus/Aboutus';
import Classes from './pages/classes/Classes';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
     <Header />
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/classes" element={<Classes />} />
      
     
    </Routes>
    <Footer />
  </Router>
  )
}

export default App
