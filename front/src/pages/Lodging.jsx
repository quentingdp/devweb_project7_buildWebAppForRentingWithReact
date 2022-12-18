//Imports of external libraries
import { useEffect, useState, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"

//Internal dependancies
import { Gallery } from "../components/Gallery"
import { Tag } from "../components/Tag"
import { Collapse, CollapseStyle } from "../components/Collapse"
import getLodgingDetails from "../services/getLodgingDetails"
import starActive from "../images/star_icon_active.svg"
import starInactive from "../images/star_icon_inactive.svg"

export const LodgingStyle = styled.main`
    padding: 20px 0 0 0;
    width: 100vw;
    max-width: min(1440px, 100%);
    display: grid;
    grid-template-columns: 100px 1fr 100px;

    > * {
        grid-column-start: 2;
    }

    @media (max-width: 768px) {
        padding: 27px 0 0 0;
        grid-template-columns: 20px 1fr 20px;
    }

    .lodging-meta {
        padding: 30px 0 24px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 768px) {
            padding: 15px 0 16px 0;
            flex-direction: column;
            align-items: unset;
        }
    }

    .lodging-summary {
        color: #ff6060;
        font-weight: 500;
        ul {
            display: flex;
            flex-wrap: wrap;
            > * {
                margin-top: 10px;
                margin-right: 10px;
            }
        }
        h1 {
            font-size: 36px;
            margin-bottom: 0;
            @media (max-width: 768px) {
                font-size: 18px;
                margin-bottom: 5px;
            }
        }
        p {
            font-size: 18px;
            margin-bottom: 10px;
            @media (max-width: 768px) {
                font-size: 14px;
                margin-bottom: 0;
            }
        }
    }

    .lodging-social {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        height: 100%;
        text-align: right;
        color: #ff6060;
        font-weight: 500;
        font-size: 18px;
        @media (max-width: 768px) {
            flex-direction: row-reverse;
            align-items: center;
            font-size: 12px;
            margin-top: 16px;
        }
        div {
            display: flex;
            align-items: center;
        }
        p {
            width: 93px;
        }
        .host-photo {
            height: 64px;
            width: 64px;
            min-width: 64px;
            border-radius: 32px;
            margin-left: 10px;
            object-fit: cover;
            overflow: hidden;
            @media (max-width: 768px) {
                height: 32px;
                width: 32px;
                min-width: 32px;
                border-radius: 16px;
            }
        }
    }

    .rating {
        height: 30px;
        width: 190px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        @media (max-width: 768px) {
            height: 15px;
            width: 95px;
            margin-bottom: 0;
        }
        img {
            width: 30px;
            @media (max-width: 768px) {
                width: 15px;
            }
        }
    }

    .lodging-desc {
        padding-bottom: 14px;
        display: flex;
        justify-content: space-between;
        align-items: start;
        @media (max-width: 768px) {
            padding-bottom: 44px;
            flex-direction: column;
        }

        ${CollapseStyle} {
            width: 47%;
            @media (max-width: 768px) {
                width: 100%;
                margin-bottom: 20px;
            }
        }
    }
`

export const Lodging = () => {
    const { lodging } = useParams()
    let navigate = useNavigate()
    const [lodgingDetails, updateLodgingDetails] = useState(null)

    // Creation of the array of rating star in callback : will simplify the component declaration in the "return" part
    let ratingScale = useRef([])
    useEffect(() => {
        getLodgingDetails(lodging)
            .then((res) => {
                if (res === null) {
                    navigate("/error404")
                } else {
                    updateLodgingDetails(res)
                    ratingScale.current = []
                    for (let i = 1; i <= 5; i++) {
                        if (res.rating >= i) {
                            ratingScale.current = [
                                ...ratingScale.current,
                                starActive,
                            ]
                        } else {
                            ratingScale.current = [
                                ...ratingScale.current,
                                starInactive,
                            ]
                        }
                    }
                }
            })
            .catch((err) => console.error(err))
    })

    return lodgingDetails !== null ? (
        <LodgingStyle>
            <Gallery
                pictures={lodgingDetails.pictures}
                alt={"Photo de " + lodgingDetails.title}
            />
            <div className="lodging-meta">
                <div className="lodging-summary">
                    <h1>{lodgingDetails.title}</h1>
                    <p>{lodgingDetails.location}</p>
                    <ul>
                        {lodgingDetails.tags.map((tag, index) => {
                            return <Tag key={`${index}-${tag}`} tag={tag} />
                        })}
                    </ul>
                </div>
                <div className="lodging-social">
                    <div>
                        <p>{lodgingDetails.host.name}</p>
                        <img
                            className="host-photo"
                            src={lodgingDetails.host.picture}
                            alt={"Photo de " + lodgingDetails.host.name}
                        />
                    </div>
                    <div className="rating">
                        {ratingScale.current.map((src, index) => {
                            return <img key={`${index}`} src={src} alt="" />
                        })}
                    </div>
                </div>
            </div>
            <ul className="lodging-desc">
                <Collapse
                    title="Description"
                    body={lodgingDetails.description}
                />
                <Collapse
                    title="Equipements"
                    body={lodgingDetails.equipments.join("\n")}
                />
            </ul>
        </LodgingStyle>
    ) : (
        <LodgingStyle>
            <h1>En cours de chargement</h1>
        </LodgingStyle>
    )
}
