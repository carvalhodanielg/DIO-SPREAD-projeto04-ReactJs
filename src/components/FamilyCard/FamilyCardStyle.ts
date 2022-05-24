import styled from "styled-components";

export const Familycard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 400px;
    padding: 10px 30px;
    margin: 30px 0 0;
    align-self: center;
    background-color: #222222; 

    @media(max-width: 1200px){
            width: 95%;
            padding: 10px 5px;
        }

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