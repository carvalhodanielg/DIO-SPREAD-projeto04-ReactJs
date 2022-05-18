import { houses } from "../utils/houses"


export const houseSelector = (house) => {

    let info = houses.filter(element => element.houseName === house);

    console.log(info[0].houseName);
    return info[0];
}



