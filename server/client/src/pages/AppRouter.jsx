import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produkty from "./Produkty/Produkty";
import Home from "./Home/index"
import Sucess from "./sucess/sucess";
import Cart from "./kosik/cart";
import About from "./AboutUs/About";
import Created from "./cakes/Created"
import SignUp from "./singUp/SignUp"
import LogIn from "./logIn/LogIn";




export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/produkty" element={<Produkty></Produkty>} />
        <Route path="/sucess" element={<Sucess></Sucess>} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/created/:id" element={<Created></Created>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/login" element={<LogIn></LogIn>} />

        



      </Routes>
    </BrowserRouter>
  );
}
