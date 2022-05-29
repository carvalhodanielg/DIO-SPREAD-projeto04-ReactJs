import  * as S  from "./HomeStyles"
import headerImage from '../../assets/images/Header.png'
import  CharacterInfo  from "../../components/CharacterInfo"
import headerImageMobile from '../../assets/images/HeaderMobile.png'

export const Home = () => {
    return(
        <>
        
        
        <S.Home>
            <S.Header>
                <img id="HeaderImg"role='mainLogo'src={headerImage} alt="Game of Thrones Logo | text: Quem é você em westeros" />
                <img role='HeaderImgMobile'src={headerImageMobile} alt="Game of Thrones Logo | text: Quem é você em westeros" />
            </S.Header>

            <CharacterInfo />

        </S.Home>
    
        <S.Footer>
                <a href="https://www.linkedin.com/in/carvalhodanielg/">Developed by Daniel Carvalho | 2022</a> 
        </S.Footer>

        </>
    
    )
}