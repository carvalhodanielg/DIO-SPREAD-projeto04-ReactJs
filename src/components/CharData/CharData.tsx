
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

export const CharData = ({selectedChar}: {selectedChar: Characters}) => {



    return(
        <>
                    <div>                  
                                    <h2 role='charName'>{selectedChar?.fullName}</h2>                                
                    </div>

                    <div>
                        <img role='charImage' id='charImage' src="https://thronesapi.com/assets/images/cersei.jpg" alt="character image" />
                    </div>
        </>
    )
}

{/* <S.CharacterName>                  
<h2 role='charName'>{selectedChar?.fullName}</h2>                                
</S.CharacterName>

<S.CharacterImage>
<img role='charImage' id='charImage' src="https://thronesapi.com/assets/images/cersei.jpg" alt="character image" />
</S.CharacterImage> */}