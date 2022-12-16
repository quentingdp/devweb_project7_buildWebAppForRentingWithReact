//Imports of external libraries
import styled from "styled-components"
import { useEffect, useState } from "react"

//Internal dependancies
import { Banner } from "../components/Banner"
import { Card, CardStyle } from "../components/Card"
import bannerHome from "../images/banner_home.png"
import getLodgings from "../services/getLodgings"

export const HomeStyle = styled.main`
    padding: 63px 100px 0 100px;
    display: flex;
    flex-direction: column;
    max-width: 1440px;

    @media (max-width: 768px) {
        padding: 16px 20px 0 20px;
    }

    .lodging-list {
        background-color: #f7f7f7;
        border-radius: 25px;
        margin: 43px 0 43px 0;
        padding: 56px 0 6px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;

        @media (max-width: 768px) {
            background-color: unset;
            margin: 22px 0 22px 0;
            padding: 0;
            flex-direction: column;
            justify-content: unset;
        }

        ${CardStyle} {
            margin: 10px 15px 50px 15px;
            @media (max-width: 768px) {
                margin: 0 0 20px 0;
            }
        }
    }
`

export const Home = ({ updateCurrentPage }) => {
    const [lodgings, updateLodgings] = useState({})

    useEffect(() => {
        getLodgings()
            .then((res) => updateLodgings(res))
            .catch((err) => console.error(err))
    }, [])

    return lodgings.length !== undefined ? (
        <HomeStyle>
            <Banner
                src={bannerHome}
                alt="Image de bannière de la page d'accueil"
                description="Chez vous, partout et ailleurs"
                target="home"
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
        </HomeStyle>
    ) : (
        <HomeStyle>
            <h1>En cours de chargement</h1>
        </HomeStyle>
    )
}
