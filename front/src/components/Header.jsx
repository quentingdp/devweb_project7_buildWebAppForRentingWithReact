//Imports of external libraries
import styled from "styled-components"
import { Link } from "react-router-dom"

//Internal dependancies
import Logo from "./Logo"
import logoDesktop from "../images/logo_header_desktop.svg"
import logoMobile from "../images/logo_header_mobile.svg"

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        background-color: blue;
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
