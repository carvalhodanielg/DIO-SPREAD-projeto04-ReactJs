import styled from "styled-components";
import floralName from '../../assets/images/floralName.png'

type justifyContent = {
    justifyContent: string
}


export const Wrapper = styled.div`
    border: red 1px solid;
    width: 50%;
    padding: 10px 40px;
    display: flex;
    

    h1{
        font-size: 16px;
        text-transform: uppercase;
    }





    & :first-child{
        margin-right: 20px;
    }
`

export const MainInfo = styled.div<justifyContent>`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justifyContent};
    text-align: left;


`
export const CharacterName = styled.div`
    background-image: url(${floralName});
    background-repeat: no-repeat;
    background-position: center;
    height: 65px;

    display: flex;
    align-items: center;
    text-align: center;
`

export const CharacterImage = styled.div`
        img{
            border: 2px solid #fff;
        }
    
`

export const SecondaryInfo = styled.div`
    margin-bottom: 30px;    
`