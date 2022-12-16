//Imports of external libraries
import styled from "styled-components"

export const LogoDesktopStyle = styled.img`
    @media (max-width: 768px) {
        display: none;
    }
`

export const LogoMobileStyle = styled.img`
    display: none;
    @media (max-width: 768px) {
        display: unset;
    }
`

export const Logo = ({ src, device }) => {
    const alt = "Logo de Kasa"

    if (device === "desktop") {
        return <LogoDesktopStyle src={src} alt={alt} />
    } else if (device === "mobile") {
        return <LogoMobileStyle src={src} alt={alt} />
    } else {
        return <img src={src} alt={alt} />
    }
}
