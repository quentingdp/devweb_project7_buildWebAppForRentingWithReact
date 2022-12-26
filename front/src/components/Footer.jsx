//Internal dependancies
import { Logo } from "./Logo"
import logoFooter from "../images/logo_footer.svg"
import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <Logo src={logoFooter} device="both" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
