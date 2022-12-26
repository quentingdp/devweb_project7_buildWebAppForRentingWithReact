//Imports of external libraries
import styled from "styled-components"

//Internal dependancies
import { Banner, BannerStyle } from "../components/Banner"
import { Collapse } from "../components/Collapse"
import bannerAbout from "../images/banner_about.png"

export const AboutStyle = styled.main`
    padding: 44px 0 46px 0;
    width: 100vw;
    max-width: min(1440px, 100%);
    display: grid;
    grid-template-columns: 100px 1fr 100px;

    > * {
        grid-column-start: 2;
    }

    @media (max-width: 768px) {
        padding: 17px 0 168px 0;
        grid-template-columns: 20px 1fr 20px;
    }

    ${BannerStyle} {
        @media (max-width: 768px) {
            height: 223px;
        }
    }

    ul {
        margin: 0 108px;
        @media (max-width: 768px) {
            margin: 0;
        }
        .collapse-style {
            margin-top: 31px;
            @media (max-width: 768px) {
                margin-top: 20px;
            }
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
            />
            <ul>
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
            </ul>
        </AboutStyle>
    )
}
