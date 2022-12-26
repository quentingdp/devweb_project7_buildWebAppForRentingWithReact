//Imports of external libraries
import { useEffect, useState, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"

//Internal dependancies
import { Gallery } from "../components/Gallery"
import { Tag } from "../components/Tag"
import { Collapse } from "../components/Collapse"
import getLodgingDetails from "../services/getLodgingDetails"
import starActive from "../images/star_icon_active.svg"
import starInactive from "../images/star_icon_inactive.svg"
import "./Lodging.css"

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
        <main className="lodging-main">
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
        </main>
    ) : (
        <main className="lodging-main">
            <h1>En cours de chargement</h1>
        </main>
    )
}
