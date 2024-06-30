import React from 'react';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home.jsx'
import Footer from './pages/footer.jsx'
import About from './pages/about.jsx'

export default function App() {
  return (
    <>
    <HashRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/home" element={<Home/>}  />
      <Route path="/about" element={<About/>}  />
    </Routes>
    </HashRouter>
    <Footer/>
    </>
  )
}