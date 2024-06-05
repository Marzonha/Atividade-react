import { Routes, Route } from "react-router-dom"

import  {Header}   from "./Components/Header"
import  Home     from './Components/Home'
import  Mission  from "./Components/Mission"
import  Product  from "./Components/Product"
import  History from './Components/History'
import  Contact  from "./Components/Contact"


import './App.css'
import Footer from "./Components/Footer"


function App() {

  return (
    <>
    <div>
      <Header/>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/History" element={<History />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>


     <Footer/>
    </div>
    </>

  )
}

export default App
