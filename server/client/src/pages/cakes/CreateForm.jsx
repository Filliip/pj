import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCakes } from "../../models/cakes";

export default function CreateCakesForm() {
  const [formData, setFormData] = useState();
  const [info, setinfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const data = await createCakes(formData);
    if (data.status === 201) return navigate(`/created-cakes/${data.payload._id}`);
    setinfo(data.message);
  };

  const handleInput = (e) => {

    setFormData({...formData, [e.target.name]: e.target.value });
    console.log(
      formData
    )
  };

  const handleButton = (e) => {
    e.preventDefault(); 
    postForm();
  };

  return (
    <>
      <h1>Create new Cakes</h1>
      <form>
        <input type ="text" name="name" placeholder="Enter name" required onChange={handleInput}/>
        <input type ="text" name="flavor" placeholder="Enter flavor" required onChange={handleInput}/>
        <input type ="text" name="glaze" placeholder="Enter glaze" required onChange={handleInput}/>
        <input type ="Number" name="floor" placeholder="Enter floor" required onChange={handleInput}/>
        <input type ="Number" name="price" placeholder="Enter price" required onChange={handleInput}/>
        <input type ="text" name="imagePath" placeholder="Enter imagePath" required onChange={handleInput}/>
        
        <button onClick={handleButton}>Create new cakes</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
