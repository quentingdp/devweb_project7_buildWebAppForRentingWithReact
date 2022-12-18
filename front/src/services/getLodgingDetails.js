import lodgings from "../data/logements.json"

//Mock-up to simulate the back answer when getting all properties of a given lodging, whose id is given in parameter
const getLodgingDetails = async (lodging) => {
    for (let e of lodgings) {
        if (e.id === lodging) {
            return e
        }
    }
    return null
}

export default getLodgingDetails
