import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home.jsx'
import Footer from './pages/footer.jsx'
import About from './pages/about.jsx'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/home" element={<Home/>}  />
      <Route path="/about" element={<About/>}  />
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}