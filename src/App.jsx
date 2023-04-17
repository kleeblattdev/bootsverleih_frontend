
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useState } from 'react'
import './App.css'

//import Componetnts 
import Navigation from './components/navigation';
//import Pages 
import Reservation from './pages/reservation';
import Boots from './pages/boots';
import Home from './pages/home';

function App() {


  return (
    <div className="app">
       <BrowserRouter>
         <Navigation/>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/boots" element={<Boots />} />
             <Route path="/reservation" element={<Reservation />} />
    
          </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
