import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/index";
import Sucess from "./sucess/sucess";
import About from "./AboutUs/About";
import Created from "./cakes/Created";
import SignUp from "./singUp/SignUp";
import LogIn from "./logIn/LogIn";
import CreatecakesForm from "./cakes/CreateForm";
import List from "./cakes/produkty/List";
import View from "./cakes/View";
import UpdateForm from "./cakes/UpdateForm";
import LearnMore from "./LearnMore/LearnMore";
import Contact from "./Contact/Contact"
import Product from "../pages/produkty/Product"
import Products from "../pages/produkty/Products"
import Cart from "../pages/cart/Cart"
import Search from "../pages/search/search"
import Profile from "./singUp/Profile";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />

        <Route path="/sucess" element={<Sucess></Sucess>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/created/:id" element={<Created></Created>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/login" element={<LogIn></LogIn>} />
        <Route path="/learnmore" element={<LearnMore></LearnMore>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/produkty" element={<Product></Product>} />
        <Route path="/detail/:id" element={<Products></Products>} />
        <Route path="/kosik" element={<Cart></Cart>} />
        <Route path="/search" element={<Search></Search>} />
        <Route path="/profile" element={<Profile></Profile>} />
        


        <Route path="/" element={<Home />} />
        <Route path="/create-cakes" element={<CreatecakesForm />} />
        <Route path="/cakes" element={<List />} />
        <Route path="/cakes/:id" element={<View />} />
        <Route path="/update-cakes/:id" element={<UpdateForm />} />
      </Routes>
    </BrowserRouter>
  );
}
