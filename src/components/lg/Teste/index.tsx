import { tags } from "../../../mocks/tags"
import { StyledDiv } from "./styles"
import { useState, useEffect } from 'react';


export function Teste(){
    const [selectedTag, setSelectedTag] = useState<string>('all');

    // useEffect(() => {
    //     alert(selectedTag)
    // }, [selectedTag])

    return(
        <StyledDiv>
            <div className="tags">
                <button onClick={() => setSelectedTag('light')}>light</button>
                <button onClick={() => setSelectedTag('dark-mode')}>dark</button>
                <button onClick={() => setSelectedTag('mobile')}>mobile</button>
                <button onClick={() => setSelectedTag('all')}>todas</button>
            </div>
            <div className="search">
                <input type="text" placeholder="buscar imagem..." id="" />
                <button type="submit">procurar</button>
            </div>

            <ul className="cards">
                {
                selectedTag === 'all' ?

                    tags.map((image) => (
                        <li>
                            <h3>{image.name}</h3>
                            <div>
                                {image.tags.map((tags) => (
                                    <span>
                                        {tags}
                                    </span>
                                ))}
                            </div>
                        </li>
                    ))

                :
                // const filteredTags = tags.filter((tag) => tag.tags.includes('mobile'));
                    tags.map((image) => (

                        image.tags.includes(selectedTag) && (
                            <li>
                                <h3>{image.name}</h3>
                                <div>
                                    {image.tags.map((tags) => (
                                        <span>
                                            {tags}
                                        </span>
                                    ))}
                                </div>
                            </li>
                        )
                        
                    ))

                }
            </ul>
        </StyledDiv>
    )
}