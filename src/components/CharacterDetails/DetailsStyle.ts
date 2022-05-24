import styled from "styled-components";
import floralName from '../../assets/images/floralName.png'



type justifyContent = {
    justifyContent: string
}

type flexDirection = {
    flexDirection: string
}

export const Wrapper = styled.div<flexDirection>`
    width: 50%;
    padding: 10px 40px;
    display: flex;
    flex-direction: ${props => props.flexDirection};
    
    @media(max-width: 1200px){
            flex-direction: column;
            align-items: center;
        }

    h1{
        font-size: 16px;
        text-transform: uppercase;
    }


    &:first-child{
        border-right: 1px solid #282828;
        
        @media(max-width: 1200px){
            border-right: none;
        }
    
    
    }


    & :first-child{
        margin-right: 20px;

        @media(max-width: 1200px){
            margin-right: 0;
        }
    }



`

export const MainInfo = styled.div<justifyContent>`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justifyContent};
    text-align: left;

        button{
            color: black;
            cursor: pointer;
            font-weight: bold;
            background-color: #E5E5E5;
            height: 25px;
        }

        button:hover{
            opacity: .9;
        }

`
export const CharacterName = styled.div`
    background-image: url(${floralName});
    background-repeat: no-repeat;
    background-position: center;
    height: 65px;

    display: flex;
    align-items: center;
    text-align: center;
    align-self: center;
`

export const CharacterImage = styled.div`
    min-height: 300px;
    display: flex;
    align-items: center;
        img{
            border: 2px solid #fff;
            max-width: 200px;
        }
    
`

export const SecondaryInfo = styled.div`
    margin-bottom: 30px;    
`

export const HouseInfo = styled(SecondaryInfo)`
    display: flex;
    align-items: center;
    background-color: #222222;
    width: 250px;
    img{
        padding: 5px;
        margin-left: 5px;
        margin-right: 0px;
    }
`


export const Familycard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 400px;
    /* height: 60px; */

    padding: 10px 30px;
    margin: 10px 0px 0px 0px;
    align-self: center;
    background-color: #222222; 


    .familyCard{
        display: flex;
        flex-direction: column;
        justify-content: center;

        img{
            height: 60px;
            width: 60px;
            object-fit: cover;
            border-radius: 50%;
        }
    }





`

export const Container = styled.div`
    height: 400px;
    overflow-y: auto;
    margin: 0 auto;
    margin-top: 10px;


    &::-webkit-scrollbar {
     width: 10px
    } 
   
    &::-webkit-scrollbar-thumb {   
    background-color: darkgrey;   
    }
`