import * as S from './DetailsStyle'
import {houses} from '../../utils/houses'
import {houseSelector} from '../../helpers/functions' 
import React, { ButtonHTMLAttributes, ReactEventHandler, useEffect, useState } from 'react'
// import API from '../../services/api'
import FamilyCard from '../FamilyCard'
import {randomChar} from '../../helpers/functions'
import {apiChar} from '../../services/api'

type Houses = {
    houseName: string,
    houseLogo: string
}

type Characters = {
    id: number,
    firstName: string,
    lastName: string,
    fullName: string,
    title: string,
    family: string,
    image: string,
    imageUrl: string
}


export const CharacterDetails = () => {

    const [char, setChar] = useState<Characters[]>([]);
    const [filtered, setFiltered] = useState<Characters[]>([]);
    const [quote, setQuote] = useState<string>();
    const [selectedChar, setSelectedChar] = useState<Characters>();
    const [charName, setCharName] = useState<string>('tyrion');
    const [loadin, setLoading] = useState<boolean>(false);

    let randNumber = randomChar(char)

        apiChar.get('/characters')
        .then((response)=>setChar(response.data))
        .catch((err)=> console.error('errrouuu!' + err));        
    

    

    useEffect(()=>{

        console.log(selectedChar)

        if(selectedChar !== undefined){
            family(selectedChar.lastName)
        }
        
       
    },[selectedChar])

    const family = (person: string) => {
        let result = char.filter(element => element.lastName.includes(person));
        setFiltered(result); 
        
        console.log('family')

    }

        const handleClick = async() => {

            setSelectedChar(char[randNumber])
            console.log(char)
            console.log(selectedChar)

            if(selectedChar !== undefined){
            console.log(selectedChar.lastName)
            family(selectedChar.lastName)
            }
        }

       return(
        <>
            <S.Wrapper  flexDirection={'row'}>
                <S.MainInfo justifyContent="space-between">
                    <h1>Character's details</h1> 
                    <button onClick={handleClick}>press</button>
                    <S.CharacterName>               
                        <h2 role='charName'>{selectedChar?.fullName}</h2>                                
                    </S.CharacterName>

                    <S.CharacterImage>
                        <img role='charImage' id='charImage' src="https://thronesapi.com/assets/images/cersei.jpg" alt="character image" />
                    </S.CharacterImage>
                    
                </S.MainInfo>

                <S.MainInfo justifyContent = 'flex-end'>
                    <S.SecondaryInfo>
                        <h4>Title</h4>
                        <p role='charTitle'>Lady of Casterly Rock</p>
                    </S.SecondaryInfo>
                    
                    <S.SecondaryInfo>
                        <h4>Quote</h4>
                        {quote !== undefined &&
                            <blockquote role='charQuote'>{quote}</blockquote>
                        }
                    </S.SecondaryInfo>

                    <S.HouseInfo>
                        <img  role='charLogo' height={60}  src={houseSelector('Lannister').houseLogo} alt="house's heraldry" />
                        <span role='charHouse'>House {houseSelector('Lannister').houseName}</span>
                    </S.HouseInfo>
                </S.MainInfo>
                
            </S.Wrapper>
            <S.Wrapper  flexDirection={'column'}>
                <>
                    <h1>Character's family</h1>
                <S.Container>
                
                    {char !== undefined &&
                    
                    filtered.map((element, index)=>(
                                 
                        <FamilyCard key={index} element={element}/>     
                    ))
                    }
                </S.Container>
                </>
                 
            </S.Wrapper>
        </>
      )
}