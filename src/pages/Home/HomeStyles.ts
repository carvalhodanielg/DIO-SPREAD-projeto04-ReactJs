import styled from "styled-components";



export const Home = styled.main`

    width: 90%;
    /* border: red solid 1px; */
    margin: 0 auto;
    
`

export const Header = styled.header`
    height: 120px;
    display: flex;
    padding-top: 55px;
    padding-left: 80px;

    @media(max-width: 1200px){
            padding: 30px 0;
            margin: 0 auto;
            align-items: center;
            flex-direction: column;
        }}

    img{
        height: 33px;

        &:nth-child(2){
            display: none;
                @media(max-width: 1200px){
                display: inline-block;
            }}

        
    }

    #HeaderImg{
        @media(max-width: 1200px){
            display: none;
        }}

 

`

export const Search = styled.div`
    /* border: red solid 1px; */
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    color: white;
    align-items: center;
    
    #searchInput{
        flex: 1;
        margin-left: 1rem;
        height: 2rem;
        border: 3px solid transparent;
        border-radius: .5rem;
    }

    #searchInput:focus{
        outline: none;
        box-shadow: 0 0 .8rem red;
    }
    
`

