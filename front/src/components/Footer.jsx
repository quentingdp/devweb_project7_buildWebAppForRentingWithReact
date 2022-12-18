//Imports of external libraries
import styled from "styled-components"

//Internal dependancies
import { Logo } from "./Logo"
import logoFooter from "../images/logo_footer.svg"

export const FooterStyle = styled.footer`
    background-color: black;
    color: white;
    height: 209px;
    max-width: 1440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
        padding-top: 66px;
        @media (max-width: 768px) {
            padding-top: 62px;
        }
    }

    p {
        padding-bottom: 29px;
        font-weight: 500;
        font-size: 24px;
        @media (max-width: 768px) {
            padding-bottom: 62px;
            font-size: 12px;
        }
    }
`

export const Footer = () => {
    return (
        <FooterStyle>
            <Logo src={logoFooter} device="both" />
            <p>© 2020 Kasa. All rights reserved</p>
        </FooterStyle>
    )
}
