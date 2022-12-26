//Imports of external libraries
import { useState } from "react"

//Internal dependancies
import "./Collapse.css"

//For the collapse, the state display can have 2 values : visible or hidden. The paragraph is displayed or not, depending on this value
export const Collapse = ({ title, body }) => {
    const [display, updateDisplay] = useState("hidden")

    return (
        <li className="collapse-style">
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
        </li>
    )
}
