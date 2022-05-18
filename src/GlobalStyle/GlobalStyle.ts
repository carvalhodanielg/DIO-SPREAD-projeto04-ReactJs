import {createGlobalStyle} from 'styled-components'
import imgBg from '../assets/images/img-bg.png'


export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
}

html{
    font-size: 62,5%;
}

body{
    font-family: sans-serif;
    background-image: url(${imgBg});  
    background-repeat: no-repeat;
    background-size: cover;
    }
`