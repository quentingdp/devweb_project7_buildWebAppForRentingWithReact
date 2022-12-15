//Imports of external libraries
import styled from "styled-components"

//Internal dependancies
import Banner from "../components/Banner"
import Card from "../components/Card"
import bannerHome from "../images/banner_home.png"

const MainStyle = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 1440px;
`

const Home = ({ updateCurrentPage }) => {
    return (
        <MainStyle>
            <Banner
                src={bannerHome}
                alt="Image de bannière de la page d'accueil"
                description="Chez vous, partout et ailleurs"
            />
            <Card updateCurrentPage={updateCurrentPage} />
        </MainStyle>
    )
}

export default Home
