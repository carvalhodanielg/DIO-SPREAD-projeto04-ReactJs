import * as S from "./FamilyCardStyle"                    
    
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
// : React.FC<Characters>

export const FamilyCard = ({element}: {element: Characters})=>{




    return(
        <>
        {console.log(element)}
        <S.Familycard>
                        <div className='familyCard'>
                            <img src={element.imageUrl} alt="." />
                        </div>
                        <div className='familyCard'>
                            <p>{element.firstName}</p>
                            <p>{element.title}</p>
                        </div>
        </S.Familycard>
        
        </>



    )
}                    
                    
                    