import * as S from './DetailsStyle'
import {houses} from '../../utils/houses'
import {houseSelector} from '../../helpers/functions' 

type Houses = {
    houseName: string,
    houseLogo: string
}



export const CharacterDetails = () => {

       return(
        <>
            <S.Wrapper>
                <S.MainInfo justifyContent="space-between">
                    <h1>Character's details</h1>

                    <S.CharacterName>
                        <h2>Cercei Lannister</h2>
                    </S.CharacterName>

                    <S.CharacterImage>
                        <img src="https://thronesapi.com/assets/images/cersei.jpg" alt="character image" />
                    </S.CharacterImage>
                    
                </S.MainInfo>

                <S.MainInfo justifyContent = 'flex-end'>
                    <S.SecondaryInfo>
                        <h4>Title</h4>
                        <p>Lady of Casterly Rock</p>
                    </S.SecondaryInfo>
                    
                    <S.SecondaryInfo>
                        <h4>Quote</h4>
                        <blockquote>Tears aren't a woman's only weapon. The best one's between your legs.</blockquote>
                    </S.SecondaryInfo>

                    <S.HouseInfo>
                        <img height={60}  src={houseSelector('Lannister').houseLogo} alt="house's heraldry" />
                        <span>House {houseSelector('Lannister').houseName}</span>
                    </S.HouseInfo>
                </S.MainInfo>
                
            </S.Wrapper>
            <S.Wrapper>
                <h1>Character's details</h1>
            </S.Wrapper>
        </>
      )
}