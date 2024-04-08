import { useState } from 'react';
import { useGetCharactersByNameQuery } from '../redux-store/services/rick-and-morty';
import { Page } from '@/src/redux-store/services/page';
import { Character } from '@/src/redux-store/services/character';
import { CharacterCard } from './characters/character-card';


const renderLoading = () => <>Loading...</>;
const renderError = () => <>Oh no, there was an error!</>;
const renderCharacters = (data: Page<Character>) => {
    return (
        <div className="flex flex-row flex-wrap gap-4 h-full overflow-scroll">{
            data.results.map((data, index) => {
                return <div className="basis-1/8">
                    <CharacterCard name={ data.name }
                                   gender={ data.gender }
                                   image={ data.image }
                                   id={ data.id }
                                   key={ index }></CharacterCard>
                </div>
            })
        }
        </div>);
};

export default function RickAndMortyCharacters() {
    const [pageNumber, setPageNumber] = useState(1);
    const [name, setName] = useState('');
    const { data, isLoading, error } = useGetCharactersByNameQuery({ name, pageNumber });
    return (
        <div className="grid grid-cols-1 grid-rows-[1fr_40px] mt-1 gap-4 justify-items-center">
            <div className="h-[calc(100vh-150px)] overflow-auto">{
                error ? renderError()
                    : isLoading ? renderLoading()
                        : data ? renderCharacters(data)
                            : null
            }</div>
            <div>
                <div className="join">
                    <button className="join-item btn">1</button>
                    <button className="join-item btn">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                </div>
            </div>
        </div>
    );
}