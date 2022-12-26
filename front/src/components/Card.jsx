//Imports of external libraries
import { Link } from "react-router-dom"

//Internal dependancies
import "./Card.css"

export const Card = ({ updateCurrentPage, id, cover, alt, title }) => {
    const relativePath = "/lodging/" + id
    return (
        <Link
            className="card-style"
            to={relativePath}
            onClick={() => updateCurrentPage(relativePath)}
        >
            <img src={cover} alt={alt} />
            <div className="opacity-filter"></div>
            <p>{title}</p>
        </Link>
    )
}
