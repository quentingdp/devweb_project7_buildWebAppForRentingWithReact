//Imports of external libraries
import styled from "styled-components"
import { Link } from "react-router-dom"

const CardStyle = styled(Link)`
    width: 340px;
    height: 340px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 18px;
    color: white;
    position: relative;

    &:hover,
    &:active,
    &:visited {
        color: white;
    }

    @media (max-width: 768px) {
        width: unset;
        height: 255px;
    }

    img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
        overflow: hidden;
    }

    .opacity-filter {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        overflow: hidden;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(0, 0, 0, 0.5) 100%
        );
    }

    p {
        position: absolute;
        bottom: 20px;
        margin: 0 20px 0 20px;
        @media (max-width: 768px) {
            bottom: 15px;
        }
    }
`

const Card = ({ updateCurrentPage, id, cover, alt, title }) => {
    const relativePath = "/lodging/" + id
    return (
        <CardStyle
            to={relativePath}
            onClick={() => updateCurrentPage(relativePath)}
        >
            <img src={cover} alt={alt} />
            <div className="opacity-filter"></div>
            <p>{title}</p>
        </CardStyle>
    )
}

export default Card
