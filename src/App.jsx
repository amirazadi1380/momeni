
import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Test from "./components/Test"
import Adminpannel from "./pages/Adminpannel"
import NewsUpdate from "../NewsUpdate"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/test" element={<Test/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:title" element={<ProductDetail/>}/>
      <Route path="/adminPannel" element={<Adminpannel/>}/>
      <Route path="/news" element={<NewsUpdate/>}/>

    </Routes>
  )
}

export default App
