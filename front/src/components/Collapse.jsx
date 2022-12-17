//Imports of external libraries
import styled from "styled-components"
import { useState } from "react"

export const CollapseStyle = styled.li`
    background-color: #f6f6f6;
    color: #ff6060;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 400;

    div {
        height: 47px;
        padding: 0 18px 0 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #ff6060;
        color: white;
        border-radius: 10px;
        font-weight: 500;
        @media (max-width: 768px) {
            height: 30px;
            padding: 0 10px 0 12px;
            font-size: 13px;
        }
    }

    > p {
        white-space: pre-line;
        padding: 27px 12px 19px 20px;
        @media (max-width: 768px) {
            padding: 17px 6px 9px 11px;
            font-size: 12px;
        }
    }

    button {
        color: white;
        font-size: 24px;
        font-weight: 500;
        &:hover {
            cursor: pointer;
        }
        @media (max-width: 768px) {
            font-size: 13px;
        }
    }

    .visible {
        transform: scale(2, 1) rotate(-90deg);
    }

    .hidden {
        transform: scale(2, 1) rotate(90deg);
    }
`

export const Collapse = ({ title, body }) => {
    const [display, updateDisplay] = useState("hidden")

    return (
        <CollapseStyle>
            <div>
                <p>{title}</p>
                <button
                    className={display}
                    onClick={() =>
                        updateDisplay(
                            display === "hidden" ? "visible" : "hidden"
                        )
                    }
                >
                    {">"}
                </button>
            </div>
            {display === "visible" ? <p>{body}</p> : null}
        </CollapseStyle>
    )
}
