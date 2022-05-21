import { houses } from "../utils/houses"


export const houseSelector = (house) => {

    let info = houses.filter(element => element.houseName === house);


    return info[0];
}

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomChar = (char) => {



    let min = 0;
    let max = char.length;
    

    
    return Math.floor(Math.random() * (max - min + 1) + min)
}

