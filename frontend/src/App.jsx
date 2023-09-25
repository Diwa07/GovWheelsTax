import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Tax_payment from "./components/Tax_payment";
import Details from "./components/Details";

import About from "./components/About";
import Transportation from "./components/taxForm/transportation";




function App() {
  return (
    
    <Routes>

    <Route path="/" element={<Home/>} /> 
    <Route path="/Tax_payment" element={<Tax_payment/>}/>
    <Route path="/Tax_payment/transportation" element={<Transportation/>}/>

    <Route path="/Details" element={<Details/>} /> 
   
    <Route path="/About" element={<About/>}/>

    </Routes>
  )
}
export default App;
