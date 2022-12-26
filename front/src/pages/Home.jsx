//Imports of external libraries
import { useEffect, useState } from "react"

//Internal dependancies
import { Banner } from "../components/Banner"
import { Card } from "../components/Card"
import bannerHome from "../images/banner_home.png"
import getLodgings from "../services/getLodgings"
import "./Home.css"

export const Home = ({ updateCurrentPage }) => {
    const [lodgings, updateLodgings] = useState({})

    useEffect(() => {
        getLodgings()
            .then((res) => updateLodgings(res))
            .catch((err) => console.error(err))
    }, [])

    return lodgings.length !== undefined ? (
        <main className="home-main">
            <Banner
                src={bannerHome}
                alt="Image de bannière de la page d'accueil"
                description="Chez vous, partout et ailleurs"
            />
            <div className="lodging-list">
                {lodgings.map(({ id, title, cover }) => {
                    return (
                        <Card
                            key={id}
                            updateCurrentPage={updateCurrentPage}
                            id={id}
                            cover={cover}
                            alt={"Photo de " + title}
                            title={title}
                        />
                    )
                })}
            </div>
        </main>
    ) : (
        <main className="main">
            <h1>En cours de chargement</h1>
        </main>
    )
}
