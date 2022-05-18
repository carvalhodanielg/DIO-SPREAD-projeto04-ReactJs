import * as S from './DetailsStyle'


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
                        <img height={80}  src="https://toppng.com/uploads/preview/house-lannister-main-shield-house-lannister-sigil-11563042066cimlrdab9o.png" alt="house's heraldry" />
                        <span>House Lannister</span>
                    </S.HouseInfo>
                </S.MainInfo>
                
            </S.Wrapper>
            <S.Wrapper>
                <h1>Character's details</h1>
            </S.Wrapper>
        </>
      )
}