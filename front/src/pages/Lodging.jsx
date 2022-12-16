//Imports of external libraries
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

//Internal dependancies
import { Slideshow } from "../components/Slideshow"
import { Tag } from "../components/Tag"
import { Collapse } from "../components/Collapse"
import getLodgingDetails from "../services/getLodgingDetails"

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
        <main>
            <Slideshow />
            <div>
                <h1>{lodgingDetails.title}</h1>
                <p>{lodgingDetails.location}</p>
                <ul>
                    {lodgingDetails.tags.map((tag) => {
                        return <Tag tag={tag} />
                    })}
                </ul>
            </div>
            <div>
                <div>
                    <p>{lodgingDetails.host.name}</p>
                    <img
                        src={lodgingDetails.host.picture}
                        alt={"Photo de " + lodgingDetails.host.name}
                    />
                </div>
                <p>{lodgingDetails.rating}</p>
            </div>
            <ul>
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
        <main>
            <h1>En cours de chargement</h1>
        </main>
    )
}
