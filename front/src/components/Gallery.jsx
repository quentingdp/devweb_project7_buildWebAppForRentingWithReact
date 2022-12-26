//Imports of external libraries
import { useState } from "react"

//Internal dependancies
import "./Gallery.css"

//The state holds the index of the photo that should be displayed. Warning : index starts at 1 to keep consistency between this index and what is displayed in desktop version
export const Gallery = ({ pictures, alt }) => {
    const [pictureIndex, updateIndex] = useState(1)
    const totalPictures = pictures.length

    return (
        <div className="gallery-style">
            <img src={pictures[pictureIndex - 1]} alt={alt} />
            {totalPictures === 1 ? null : (
                <button
                    className="button previous"
                    onClick={() => {
                        if (pictureIndex === 1) {
                            updateIndex(totalPictures)
                        } else {
                            updateIndex(pictureIndex - 1)
                        }
                    }}
                >
                    {"<"}
                </button>
            )}
            {totalPictures === 1 ? null : (
                <button
                    className="button next"
                    onClick={() => {
                        if (pictureIndex === totalPictures) {
                            updateIndex(1)
                        } else {
                            updateIndex(pictureIndex + 1)
                        }
                    }}
                >
                    {">"}
                </button>
            )}
            <p>
                {pictureIndex}/{totalPictures}
            </p>
        </div>
    )
}
