import { tags } from "../../../mocks/tags"
import { StyledDiv } from "./styles"
import { useState } from 'react';

interface LinkProps {
    linkName: string,
    linkUrl: string
}

interface ImageProps {
    name: string,
    path: string,
    tags: string[],
    links: LinkProps[]
}

export function Teste(){
    const [selectedTag, setSelectedTag] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredImages, setFilteredImages] = useState<ImageProps[]>(tags)

    // useEffect(() => {
    //     setFilteredImages(tags)
    // }, [selectedTag])

    function handleSearch(){
        const findedByName = tags.filter((tag) => tag.name.includes(searchTerm));
        setFilteredImages(findedByName)
    }

    function selectTag(){
        const findedByTag = tags.filter((tag) => tag.tags.includes(selectedTag))
        setFilteredImages(findedByTag)
    }

    return(
        <StyledDiv>
            <div className="tags">
                <button onClick={() => setSelectedTag('light')}>light</button>
                <button onClick={() => setSelectedTag('dark-mode')}>dark</button>
                <button onClick={() => setSelectedTag('mobile')}>mobile</button>
                <button onClick={() => setSelectedTag('all')}>todas</button>
            </div>
            <div className="search">
                <input type="text" placeholder="buscar imagem..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button type="submit" onClick={() => handleSearch()}>procurar</button>
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

            <ul>
                <li><h2>Find By Name</h2></li>
                {filteredImages.map((image) => (
                    <li>
                        <p>{image.name}</p>
                    </li>
                ))}
            </ul>
        </StyledDiv>
    )
}