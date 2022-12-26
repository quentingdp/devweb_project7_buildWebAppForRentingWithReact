//Internal dependancies
import "./Logo.css"

export const Logo = ({ src, device }) => {
    const alt = "Logo de Kasa"

    if (device === "desktop") {
        return <img className="logo-desktop-style" src={src} alt={alt} />
    } else if (device === "mobile") {
        return <img className="logo-mobile-style" src={src} alt={alt} />
    } else {
        return <img src={src} alt={alt} />
    }
}
