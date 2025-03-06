import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoMdArrowBack } from "react-icons/io";

export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPasword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios;
    axios
      .post("http://localhost:3000/SignUp", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-3 rounded-lg  w-255 grid grid-cols-1">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-8 pt-5">
              <label htmlFor="email">
                <strong className="px-10">Name</strong>
              </label>
              <input
                type="text"
                placeholder="Karel Sedlacek"
                autoComplete="off"
                name="email"
                className="form-control rounded-0 text-center "
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-8 pt-5">
              <label htmlFor="email">
                <strong className="px-10">Email</strong>
              </label>
              <input
                type="email"
                placeholder="pepa@gmail.com"
                autoComplete="off"
                name="email"
                className="form-control rounded-0 text-center"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-8 pt-5">
              <label htmlFor="email">
                <strong className="px-10">Password</strong>
              </label>
              <input
                type="password"
                placeholder="*********"
                name="password"
                className="form-control rounded-0 text-center"
                onChange={(e) => setPasword(e.target.value)}
              />
            </div>
            <div className="mb-8 pt-5">
              <label htmlFor="email">
                <strong className="px-10">Send message</strong>
              </label>
              <input 
                type="Send message"
                placeholder="type ..."
                name="Send message"
                className="form-control rounded-0  w-132 h-50"
                onChange={(e) => setPasword(e.target.value)}
              />
            </div>

            <button type="submit" className="primary-btn w-50 rounded-0">
              <Link to={"/"}>Zpátky</Link>
            </button>

            <button
              type="submit"
              className="primary-btn w-50 rounded-0 relative left-5"
            >
              <Link to={"/"}>Registrovat</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
