import  * as S  from "./HomeStyles"
import headerImage from '../../assets/images/Header.png'
import  CharacterInfo  from "../../components/CharacterInfo"

export const Home = () => {
    return(
        <S.Home>
            <S.Header>
                <img role='mainLogo'src={headerImage} alt="Game of Thrones Logo | text: Quem é você em westeros" />
            </S.Header>


            <S.Search>
                {/* <label htmlFor="searchInput">Search</label>
                <input type="text" name="searchInput" id="searchInput" placeholder="Search a character" role='searchInput'/> */}
                {/* <button>Search</button> */}
            </S.Search>


            <CharacterInfo />

        </S.Home>
    )
}