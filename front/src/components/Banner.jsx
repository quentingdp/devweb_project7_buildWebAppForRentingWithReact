//Imports of external libraries
import styled from "styled-components"

const BannerStyle = styled.div`
    height: 223px;
    padding: 0 100px 0 100px;
    font-weight: 500;
    font-size: 48px;
    color: white;
    position: relative;

    @media (max-width: 768px) {
        padding: 0 20px 0 20px;
        font-size: 24px;
        height: 111px;
    }

    img {
        height: 100%;
        width: 100%;
        border-radius: 25px;
        object-fit: cover;
        overflow: hidden;
        filter: brightness(0.7);
        @media (max-width: 768px) {
            border-radius: 10px;
        }
    }

    p {
        position: absolute;
        transform-origin: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        text-align: center;
        @media (max-width: 768px) {
            text-align: left;
            left: 36px;
            transform: translate(0, -50%);
        }
    }
`

const Banner = ({ src, alt, description }) => {
    return (
        <BannerStyle>
            <img src={src} alt={alt} />
            <p>{description}</p>
        </BannerStyle>
    )
}

export default Banner
