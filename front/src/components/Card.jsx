//Imports of external libraries
import styled from "styled-components"

const CardStyle = styled.article`
    width: 340px;
    height: 340px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 18px;
    color: white;
    position: relative;

    @media (max-width: 768px) {
        width: 335px;
        height: 255px;
    }

    img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
        overflow: hidden;
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

const Card = () => {
    return (
        <CardStyle>
            <img src="" alt="notProvided" />
            <p>Titre de la location</p>
        </CardStyle>
    )
}

export default Card
