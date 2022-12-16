import lodgings from "../data/logements.json"

const getLodgingDetails = async (lodging) => {
    for (let e of lodgings) {
        if (e.id === lodging) {
            return e
        }
    }
    return null
}

export default getLodgingDetails
