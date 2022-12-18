//Imports of external libraries
import styled from "styled-components"
import { Link } from "react-router-dom"

//Internal dependancies
import { Logo } from "./Logo"
import logoDesktop from "../images/logo_header_desktop.svg"
import logoMobile from "../images/logo_header_mobile.svg"

export const HeaderStyle = styled.header`
    color: #ff6060;
    font-weight: 500;
    font-size: 24px;
    max-width: 1440px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;

    @media (max-width: 768px) {
        padding-top: 20px;
        font-size: 12px;
        text-transform: uppercase;
    }

    img {
        padding-left: 100px;
        @media (max-width: 768px) {
            padding-left: 20px;
        }
    }

    nav {
        padding-right: 100px;
        @media (max-width: 768px) {
            padding-right: 20px;
        }

        a {
            margin-left: 57px;
            @media (max-width: 768px) {
                margin-left: 10px;
            }
        }
        a:hover {
            text-decoration: underline;
        }
    }

    .current-page {
        text-decoration: underline;
    }
`
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
        <HeaderStyle>
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
        </HeaderStyle>
    )
}
