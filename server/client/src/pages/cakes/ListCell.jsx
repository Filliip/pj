import { Link } from "react-router-dom";

export default function ListCell({ name, _id }) {
  return (
    <>
    <Link
      to={`/cakes/${_id}`}
      className=" bg-white shadow-lg rounded-xl p-4 flex gap-4 flex-row w-80 items-center hover:bg-gray-100 transition-transform transform hover:scale-105"
    >
      <p className="text-lg font-semibold ">{name}</p>
      <p className="text-sm text-gray-500">{_id}</p>
      <div className="my-2 h-[1px] w-full bg-black/20 flex gap-4"></div>
    </Link>
    
    </>
  );
}

