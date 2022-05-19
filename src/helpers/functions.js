import { houses } from "../utils/houses"


export const houseSelector = (house) => {

    let info = houses.filter(element => element.houseName === house);


    return info[0];
}



