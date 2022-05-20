import * as S from './DetailsStyle'
import {houses} from '../../utils/houses'
import {houseSelector} from '../../helpers/functions' 
import { useEffect, useState } from 'react'
import API from '../../services/api'
import FamilyCard from '../FamilyCard'

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


    useEffect(()=>{
        loadChar();

    },[filtered])


    const loadChar = async () => {
        let json = await API.char();
        setChar(json)
        family();

    }

    const family = () => {
        setFiltered(char.filter(element => element.lastName.includes('La'))); 
    }


       return(
        <>
            <S.Wrapper  flexDirection={'row'}>
                <S.MainInfo justifyContent="space-between">
                    <h1>Character's details</h1>

                    <S.CharacterName>
                        <h2 role='charName'>Cercei Lannister</h2>
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
                        <blockquote role='charQuote'>Tears aren't a woman's only weapon. The best one's between your legs.</blockquote>
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


                
                    {char !== undefined && filtered !== undefined &&
                    
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