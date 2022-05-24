import styled from "styled-components";

export const CharacterStyle = styled.section`
    margin-top: 2rem;
    border: 1px solid #282828;
    min-height: 450px;
    display: flex;
    background-color: #151515;
    flex-wrap: wrap;

    @media(max-width: 1200px){
        flex-direction: column;
        align-items: center;
    }
    
`