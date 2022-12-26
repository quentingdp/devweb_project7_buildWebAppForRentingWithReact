//Imports of external libraries
import { Link } from "react-router-dom"

//Internal dependancies
import "./E404.css"

export const E404 = ({ updateCurrentPage }) => {
    return (
        <main className="error-main">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" onClick={() => updateCurrentPage("/")}>
                Retourner sur la page d'accueil
            </Link>
        </main>
    )
}
