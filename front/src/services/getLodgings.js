import lodgings from "../data/logements.json"

//Mock-up to simulate the back answer when getting all summarized information about lodgings, for homepage
const getLodgings = async () => {
    const syntheticLodgings = lodgings.map((lodg) => {
        return {
            id: lodg.id,
            title: lodg.title,
            cover: lodg.cover,
        }
    })
    return syntheticLodgings
}

export default getLodgings
