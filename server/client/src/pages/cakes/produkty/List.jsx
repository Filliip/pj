import { getAllCakes } from "../../../models/cakes";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ListCell from "../ListCell";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../AboutUs/About";




export default function List() {
  const [cakes, setCakes] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllCakes();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setLoaded(true);
      setCakes(data.payload);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Cakes not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>cakes are loading...</p>
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-y-5 relative top-5 left-20">
        {cakes.map((cakes, index) => (
          <ListCell key={index} {...cakes} />
        ))}
      </div>
      <div className="relative top-150">
        <Footer />
      </div>
      <div>
        
      </div>
    </>
  );
}
