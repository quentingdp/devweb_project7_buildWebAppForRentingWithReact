//Imports of external libraries
import styled from "styled-components"

export const TagStyle = styled.li`
    padding: 3px 0;
    border-radius: 10px;
    text-align: center;
    background-color: #ff6060;
    color: white;
    font-weight: 500;
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 10px;
        border-radius: 5px;
    }
`

export const Tag = ({ tag }) => {
    return <TagStyle>{tag}</TagStyle>
}
