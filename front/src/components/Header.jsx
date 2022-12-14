//Imports of external libraries
import styled from "styled-components"
import { Link } from "react-router-dom"

//Internal dependancies
import Logo from "./Logo"

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
`

const Header = () => {
    return (
        <HeaderStyle>
            <Logo />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </HeaderStyle>
    )
}

export default Header
