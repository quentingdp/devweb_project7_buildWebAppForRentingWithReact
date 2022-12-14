//Imports of external libraries
import styled from "styled-components"

//Internal dependancies
import Logo from "./Logo"
import logoFooter from "../images/logo_footer.svg"

const FooterStyle = styled.footer`
    background-color: black;
    color: white;
`

const Footer = () => {
    return (
        <FooterStyle>
            <Logo src={logoFooter} device="Both" />
            <p>© 2020 Kasa. All rights reserved</p>
        </FooterStyle>
    )
}

export default Footer
