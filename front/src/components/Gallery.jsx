//Imports of external libraries
import styled from "styled-components"
import { useState } from "react"

export const GalleryStyle = styled.div`
    height: 415px;
    max-width: 1240px;
    width: 100%;
    position: relative;

    @media (max-width: 768px) {
        height: 255px;
    }

    img {
        height: 100%;
        width: 100%;
        border-radius: 25px;
        object-fit: cover;
        overflow: hidden;
        @media (max-width: 768px) {
            border-radius: 10px;
        }
    }

    .button {
        position: absolute;
        top: 184px;
        font-weight: 700;
        font-size: 47px;
        color: white;
        transform: scale(1, 2);
        &:hover {
            cursor: pointer;
        }
        @media (max-width: 768px) {
            top: 117px;
            font-weight: 400;
            font-size: 20px;
        }
    }

    .previous {
        left: 23px;
        @media (max-width: 768px) {
            left: 6px;
        }
    }

    .next {
        right: 23px;
        @media (max-width: 768px) {
            right: 6px;
        }
    }

    p {
        position: absolute;
        width: 8%;
        text-align: center;
        bottom: 20px;
        left: 46%;
        font-weight: 500;
        font-size: 18px;
        color: white;
        @media (max-width: 768px) {
            display: none;
        }
    }
`
//The state holds the index of the photo that should be displayed. Warning : index starts at 1 to keep consistency between this index and what is displayed in desktop version
export const Gallery = ({ pictures, alt }) => {
    const [pictureIndex, updateIndex] = useState(1)
    const totalPictures = pictures.length

    return (
        <GalleryStyle>
            <img src={pictures[pictureIndex - 1]} alt={alt} />
            {totalPictures === 1 ? null : (
                <button
                    className="button previous"
                    onClick={() => {
                        if (pictureIndex === 1) {
                            updateIndex(totalPictures)
                        } else {
                            updateIndex(pictureIndex - 1)
                        }
                    }}
                >
                    {"<"}
                </button>
            )}
            {totalPictures === 1 ? null : (
                <button
                    className="button next"
                    onClick={() => {
                        if (pictureIndex === totalPictures) {
                            updateIndex(1)
                        } else {
                            updateIndex(pictureIndex + 1)
                        }
                    }}
                >
                    {">"}
                </button>
            )}
            <p>
                {pictureIndex}/{totalPictures}
            </p>
        </GalleryStyle>
    )
}
