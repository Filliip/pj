import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produkty from "./Produkty/produkty";
import Home from "./Home/index"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/produkty" element={<Produkty></Produkty>} />
      </Routes>
    </BrowserRouter>
  );
}
