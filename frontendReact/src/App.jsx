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
import Testimonial from './pages/testimonial/Testimonial';
import Appointment from './pages/appointment/Appointment';
import Teacher from './pages/teachers/Teacher';
import Facilities from './pages/facilities/Facilities';
import Homework from './pages/homework/Homework';

const baseURL = import.meta.env.VITE_BASE_URL;
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router basename={baseURL}>
     <Header />
     
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/team" element={<Teacher />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/homework" element={<Homework />} />
      
     
    </Routes>
    <Footer />
  </Router>
  )
}

export default App
