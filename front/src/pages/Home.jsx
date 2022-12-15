//Imports of external libraries
import styled from "styled-components"

//Internal dependancies
import Banner from "../components/Banner"
import Card from "../components/Card"
import bannerHome from "../images/banner_home.png"
import test from "../images/banner_about.png"

const MainStyle = styled.main`
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

        > * {
            margin: 10px 10px 50px 10px;
            @media (max-width: 768px) {
                margin: 0 0 20px 0;
            }
        }
    }
`

const Home = ({ updateCurrentPage }) => {
    return (
        <MainStyle>
            <Banner
                src={bannerHome}
                alt="Image de bannière de la page d'accueil"
                description="Chez vous, partout et ailleurs"
            />
            <div className="lodging-list">
                <Card
                    updateCurrentPage={updateCurrentPage}
                    id="fkjfldmsqj"
                    cover={test}
                    alt="notProvided"
                    title="Titre de la location"
                />
                <Card
                    updateCurrentPage={updateCurrentPage}
                    id="toto"
                    cover={test}
                    alt="notProvided"
                    title="toto"
                />
                <Card
                    updateCurrentPage={updateCurrentPage}
                    id="titi"
                    cover={test}
                    alt="non donné"
                    title="titi"
                />
                <Card
                    updateCurrentPage={updateCurrentPage}
                    id="fdsqf"
                    cover={test}
                    alt="notProvided"
                    title="Titre de la location fdsqf"
                />
                <Card
                    updateCurrentPage={updateCurrentPage}
                    id="rezartery"
                    cover={test}
                    alt="notProvided"
                    title="Titre de la location rezartery"
                />
            </div>
        </MainStyle>
    )
}

export default Home
