import React from 'react'
import './App.css'
// import LandingPage from "./Components/LandingPage/LandingPage";
import BookTicket from "../src/components/BookTicket/BookTicket";
import Contact from "../src/components/ContactDev/Contact";
import LandingPage from "../src/components/LandingPage/LandingPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/landing" />} /> */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/bookSeat" element={<BookTicket />}/>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
