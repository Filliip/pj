import { getAllCakes } from "../../models/cakes";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ListCell from "./ListCell";



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
      
      {cakes.map((cakes, index) => (
        <ListCell key={index} {...cakes}/>
      ))} 
      <Link to={"/"} className="rounded-lg bg-purple-400 py-10 px-10 relative left-5 top-60">
        <button>Go back</button>
      </Link>
    </>
    
  );
}

