//Imports of external libraries
import { Link } from "react-router-dom"

//Internal dependancies
import { Logo } from "./Logo"
import logoDesktop from "../images/logo_header_desktop.svg"
import logoMobile from "../images/logo_header_mobile.svg"
import "./Header.css"

/**
 * Formatting of the header : only one of the 2 logos will be displayed, cf. the Logo component
 * @returns
 */
export const Header = ({ currentPage, updateCurrentPage }) => {
    //Define if the class "current-page" should be applied : i.e. we underline links if the current route corresponds to the link destination
    let classHomePage = ""
    let classAboutPage = ""
    if (currentPage === "/") {
        classHomePage = "current-page"
    } else if (currentPage === "/about") {
        classAboutPage = "current-page"
    }

    return (
        <header className="header">
            <Logo src={logoDesktop} device="desktop" />
            <Logo src={logoMobile} device="mobile" />
            <nav>
                <Link
                    to="/"
                    className={classHomePage}
                    onClick={() => updateCurrentPage("/")}
                >
                    Accueil
                </Link>
                <Link
                    to="/about"
                    className={classAboutPage}
                    onClick={() => updateCurrentPage("/about")}
                >
                    A Propos
                </Link>
            </nav>
        </header>
    )
}
