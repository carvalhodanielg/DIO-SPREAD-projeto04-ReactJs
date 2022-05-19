import * as S from './DetailsStyle'
import {houses} from '../../utils/houses'
import {houseSelector} from '../../helpers/functions' 
import { useEffect, useState } from 'react'
import apiChar from '../../services/api'
import { Console } from 'console'


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
    // name: string,
    // slug: string,
    // house: {
    //     slug: string,
    //     name: string
    // },
    // quotes: string[]
}

export const CharacterDetails = () => {

const [char, setChar] = useState<Characters[]>();
const [filtered, setFiltered] = useState<Characters[]>();

const family = (house: string) => {
    setFiltered(char?.filter(element => element.lastName.includes(house)));
    console.log(filtered);
    
}

useEffect(()=>{
    

    apiChar
            .get("/characters")
            .then((response: any) => setChar(response.data))
            .then(() => family('Lannister'))
            .catch((err: Error)=> console.log("ihh rapaz..."+err));

},[])



       return(
        <>
            <S.Wrapper>
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
            <S.Wrapper>
                <>
                    <h1>Character's details</h1>
                    {char !== undefined && filtered !== undefined &&
                    filtered.map((element)=>(
                        <p>{`${element.firstName} `}</p>
                    ))
                    
                    }
                </>
                 
            </S.Wrapper>
        </>
      )
}