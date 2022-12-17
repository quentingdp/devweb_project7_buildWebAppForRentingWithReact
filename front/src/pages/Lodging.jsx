//Imports of external libraries
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"

//Internal dependancies
import { Gallery } from "../components/Gallery"
import { Tag } from "../components/Tag"
import { Collapse, CollapseStyle } from "../components/Collapse"
import getLodgingDetails from "../services/getLodgingDetails"

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
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: unset;
        }
    }

    .lodging-summary {
        color: blue;
        ul {
            display: flex;
        }
    }

    .lodging-social {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        @media (max-width: 768px) {
            flex-direction: row-reverse;
            align-items: center;
        }
        div {
            display: flex;
        }
    }

    .lodging-desc {
        display: flex;
        justify-content: space-between;
        align-items: start;
        @media (max-width: 768px) {
            flex-direction: column;
        }

        ${CollapseStyle} {
            width: 40%;
            @media (max-width: 768px) {
                width: 100%;
            }
        }
    }
`

export const Lodging = () => {
    const { lodging } = useParams()
    let navigate = useNavigate()
    const [lodgingDetails, updateLodgingDetails] = useState(null)

    useEffect(() => {
        getLodgingDetails(lodging)
            .then((res) => {
                if (res === null) {
                    navigate("/error404")
                }
                updateLodgingDetails(res)
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
                            src={lodgingDetails.host.picture}
                            alt={"Photo de " + lodgingDetails.host.name}
                        />
                    </div>
                    <p>{lodgingDetails.rating}</p>
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
