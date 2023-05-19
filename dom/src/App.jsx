
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route } from"react-router-dom";
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

function App() {
 
return (
    <>
    <BrowserRouter>
    <Header /> 
    <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/blogs' element={<Blogs />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' elements={<NotFound />} />
    
    </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
