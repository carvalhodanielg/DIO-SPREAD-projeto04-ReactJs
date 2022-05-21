import axios from "axios"

// const API = {

//     char: async () => {
//         let response = await axios.get('https://thronesapi.com/api/v2/characters')
//         return response.data;
//     },

//     quote: async (endpoint: string) => {{
//         let response = await axios.get('https://game-of-thrones-quotes.herokuapp.com/v1/author/'+ endpoint)
//         return response.data;
//     }}

// }

export const apiChar = axios.create({
    baseURL: 'https://thronesapi.com/api/v2'
})



// const apiQuote = axios.create({
//     baseURL: "https://game-of-thrones-quotes.herokuapp.com/v1"
// })



// export default API;
