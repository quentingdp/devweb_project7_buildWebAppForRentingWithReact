//Imports of external libraries
import styled from "styled-components"

const DesktopImg = styled.img`
    @media (max-width: 768px) {
        display: none;
    }
`

const MobileImg = styled.img`
    display: none;
    @media (max-width: 768px) {
        display: unset;
    }
`

const Logo = ({ src, device }) => {
    const alt = "Logo de Kasa"

    if (device === "Desktop") {
        return <DesktopImg src={src} alt={alt} />
    } else if (device === "Mobile") {
        return <MobileImg src={src} alt={alt} />
    } else {
        return <img src={src} alt={alt} />
    }
}

export default Logo
