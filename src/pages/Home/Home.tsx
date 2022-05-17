import  * as S  from "./HomeStyles"
import headerImage from '../../assets/images/Header.png'

export const Home = () => {
    return(
        <S.Home>
            <S.Header>
                <img src={headerImage} alt="" />
            </S.Header>


            <S.Search>
                <label htmlFor="searchInput">Search</label>
                <input type="text" name="searchInput" id="searchInput" placeholder="Search a character" role='searchInput'/>
            </S.Search>

            Home hey
        </S.Home>
    )
}