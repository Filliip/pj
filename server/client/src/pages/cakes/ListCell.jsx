import { Link } from "react-router-dom"


export default function ListCell(props) {
  return (
    <Link to={`/cakes/${props._id}`}>
        <p>{props.name}</p>
        <p className="text-sm ">{props._id}</p>
        <div className="my-2 h-[1px] bg-black/30"></div>
    </Link>
  )
}
