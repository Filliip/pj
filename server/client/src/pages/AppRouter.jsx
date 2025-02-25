import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produkty from "./Produkty/Produkty";
import Home from "./Home/index";
import Sucess from "./sucess/sucess";
import Cart from "./kosik/cart";
import About from "./AboutUs/About";
import Created from "./cakes/Created";
import SignUp from "./singUp/SignUp";
import LogIn from "./logIn/LogIn";
import CreatecakesForm from "./cakes/CreateForm";
import List from "./cakes/List";
import View from "./cakes/View";
import UpdateForm from "./cakes/UpdateForm";

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

        <Route path="/" element={<Home />} />
        <Route path="/create-cakes" element={<CreatecakesForm />} />
        <Route path="/cakes" element={<List />} />
        <Route path="/cakes/:id" element={<View />} />
        <Route path="/update-cakes/:id" element={<UpdateForm />} />
      </Routes>
    </BrowserRouter>
  );
}
