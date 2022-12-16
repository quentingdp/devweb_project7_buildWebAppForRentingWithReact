//Imports of external libraries
import styled from "styled-components"
import { Link } from "react-router-dom"

export const E404Style = styled.main`
    max-width: 1440px;
    padding: 169px 100px 159px 100px;
    text-align: center;
    color: #ff6060;
    @media (max-width: 768px) {
        padding: 195px 20px 235px 20px;
    }
    h1 {
        margin-bottom: 66px;
        font-weight: 700;
        font-size: 288px;
        @media (max-width: 768px) {
            margin-bottom: 11px;
            font-size: 96px;
        }
    }
    p {
        margin-bottom: 182px;
        font-weight: 500;
        font-size: 36px;
        @media (max-width: 768px) {
            margin-bottom: 133px;
            font-size: 18px;
        }
    }
    a {
        text-decoration: underline;
        font-weight: 500;
        font-size: 18px;
        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
`

export const E404 = ({ updateCurrentPage }) => {
    return (
        <E404Style>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" onClick={() => updateCurrentPage("/")}>
                Retourner sur la page d'accueil
            </Link>
        </E404Style>
    )
}
