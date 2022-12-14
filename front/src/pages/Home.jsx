//Imports of external libraries
import styled from "styled-components"

//Internal dependancies
import Banner from "../components/Banner"
import Card from "../components/Card"

const MainStyle = styled.main`
    display: flex;
    flex-direction: column;
`

const Home = () => {
    return (
        <MainStyle>
            <Banner />
            <Card />
        </MainStyle>
    )
}

export default Home
