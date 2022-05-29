import * as S from './DetailsStyle'
import {houses} from '../../utils/houses'
import {houseSelector} from '../../helpers/functions' 
import React, { ButtonHTMLAttributes, ReactEventHandler, useEffect, useState } from 'react'
import FamilyCard from '../FamilyCard'
import {randomChar} from '../../helpers/functions'
import {apiChar} from '../../services/api'
import { firstChar } from '../../utils/firstChar'

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
    const [selectedChar, setSelectedChar] = useState<Characters>(firstChar[0]);
    const [loading, setLoading] = useState<boolean>(true)
    let randNumber = randomChar(char)

    apiChar.get('/characters')
        .then((response)=>setChar(response.data))
        .then(()=>setLoading(false))
        .catch((err)=> console.error('errrouuu!' + err));        
    
    useEffect(()=>{
        if(selectedChar !== undefined){
            family(selectedChar.lastName)
        }
    },[selectedChar])

    const family = (person: string) => {
        let result = char.filter(element => element.lastName.includes(person));
        setFiltered(result); 
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
                    <button disabled={loading} onClick={handleClick}>{loading?'wait a sec...':'Select'}</button>
                    <S.CharacterName>               
                        <h2 role='charName'>{selectedChar?.fullName}</h2>                                
                    </S.CharacterName>

                    <S.CharacterImage>
                        <img role='charImage' id='charImage' src={selectedChar?.imageUrl} alt="character image" />
                    </S.CharacterImage>
                    
                </S.MainInfo>

                <S.MainInfo justifyContent = 'flex-end'>
                    <S.SecondaryInfo>
                        <h4>Title</h4>
                        <p role='charTitle'>{selectedChar?.title}</p>
                    </S.SecondaryInfo>

                    <S.HouseInfo>
                        
                            {selectedChar !== undefined &&
                                <>
                            <img  role='charLogo' height={60}  src={houseSelector('*Free People').houseLogo} alt="house's heraldry" />
                            <span role='charHouse'>{selectedChar?.family}</span>
                                </>
                            }
                        
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