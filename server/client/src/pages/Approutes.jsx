import { BrowserRouter, Routes, Route } from "react-router-dom";
import productes from "../components/productes/productes";


export default function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/Productes" element={<CreateCakesForm />} />
      </Routes>
    </BrowserRouter>
  );
}
