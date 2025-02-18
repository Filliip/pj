import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produkty from "./Produkty/Produkty";
import Home from "./Home/index"
import Sucess from "./sucess/sucess";
import Cart from "./kosik/cart";
import About from "./AboutUs/About";



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/produkty" element={<Produkty></Produkty>} />
        <Route path="/sucess" element={<Sucess></Sucess>} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/about" element={<About></About>} />



      </Routes>
    </BrowserRouter>
  );
}
