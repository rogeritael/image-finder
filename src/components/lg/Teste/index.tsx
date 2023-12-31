import { tags } from "../../../mocks/tags"
import { StyledDiv } from "./styles"
import { useState, useEffect } from 'react';

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

    useEffect(() => {
        const findedByTag = tags.filter((tag) => tag.tags.includes(selectedTag))
        
        selectedTag === 'all' ?
            setFilteredImages(tags)
        :
            setFilteredImages(findedByTag)

    }, [selectedTag])

    function handleSearch(){
        const findedByName = tags.filter((tag) => tag.name.includes(searchTerm));
        setFilteredImages(findedByName)
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
                    filteredImages.map((image) => (
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
                }
            </ul>
        </StyledDiv>
    )
}