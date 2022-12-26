//Internal dependancies
import "./Banner.css"

export const Banner = ({ src, alt, description }) => {
    return (
        <div className="banner-style">
            <img src={src} alt={alt} />
            <p>{description}</p>
        </div>
    )
}
