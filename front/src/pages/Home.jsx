//Imports of external libraries
import styled from "styled-components"
import { useEffect, useState } from "react"

//Internal dependancies
import { Banner, BannerStyle } from "../components/Banner"
import { Card, CardStyle } from "../components/Card"
import bannerHome from "../images/banner_home.png"
import getLodgings from "../services/getLodgings"

export const HomeStyle = styled.main`
    padding-top: 63px;
    width: 100vw;
    max-width: min(1440px, 100%);
    display: grid;
    grid-template-columns: 100px 1fr 100px;

    > * {
        grid-column-start: 2;
    }

    @media (max-width: 768px) {
        padding-top: 16px;
        grid-template-columns: 20px 1fr 20px;
    }

    ${BannerStyle} {
        @media (max-width: 768px) {
            height: 111px;
        }
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
