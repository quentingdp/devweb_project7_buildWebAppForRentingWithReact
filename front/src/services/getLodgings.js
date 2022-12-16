import lodgings from "../data/logements.json"

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
