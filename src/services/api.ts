import axios from "axios"

const apiChar = axios.create({
    baseURL: "https://thronesapi.com/api/v2"
})


const apiQuote = axios.create({
    baseURL: "https://game-of-thrones-quotes.herokuapp.com/v1"
})



export default apiChar;
