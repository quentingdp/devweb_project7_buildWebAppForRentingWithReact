//Imports of external libraries
import styled from "styled-components"

//Internal dependancies
import { Banner } from "../components/Banner"
import { CollapseStyle, Collapse } from "../components/Collapse"
import bannerAbout from "../images/banner_about.png"

export const AboutStyle = styled.main`
    padding: 44px 100px 46px 100px;
    display: flex;
    flex-direction: column;
    max-width: 1440px;

    @media (max-width: 768px) {
        padding: 17px 20px 168px 20px;
    }

    ${CollapseStyle} {
        margin: 31px 108px 0 108px;
        @media (max-width: 768px) {
            margin: 20px 0 0 0;
        }
    }
`

export const About = () => {
    return (
        <AboutStyle>
            <Banner
                src={bannerAbout}
                alt="Image de bannière de la page d'a-propos"
                description=""
                target="about"
            />
            <Collapse
                title="Fiabilité"
                body="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            />
            <Collapse
                title="Respect"
                body="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collapse
                title="Service"
                body="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            />
            <Collapse
                title="Sécurité"
                body="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
        </AboutStyle>
    )
}
