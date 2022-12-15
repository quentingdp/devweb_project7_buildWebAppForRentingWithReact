//Imports of external libraries
import styled from "styled-components"
import { Link } from "react-router-dom"

//Internal dependancies
import Logo from "./Logo"
import logoDesktop from "../images/logo_header_desktop.svg"
import logoMobile from "../images/logo_header_mobile.svg"

const HeaderStyle = styled.header`
    color: #ff6060;
    font-weight: 500;
    font-size: 24px;
    max-width: 1440px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0 44px 0;

    @media (max-width: 768px) {
        padding: 20px 0 17px 0;
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
`
/**
 * Formatting of the header : only one of the 2 logos will be displayed, cf. the Logo component
 * @returns
 */
const Header = () => {
    return (
        <HeaderStyle>
            <Logo src={logoDesktop} device="Desktop" />
            <Logo src={logoMobile} device="Mobile" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </HeaderStyle>
    )
}

export default Header
