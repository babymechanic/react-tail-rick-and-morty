import { useState } from 'react';
import { useGetCharactersByNameQuery } from '../redux-store/services/rick-and-morty';
import { Page } from '@/src/redux-store/services/page';
import { Character } from '@/src/redux-store/services/character';
import { CharacterCard } from './characters/character-card';


const renderLoading = () => <>Loading...</>;
const renderError = () => <>Oh no, there was an error!</>;
const renderCharacters = (data: Page<Character>) => {
    return (
        <div className="flex flex-row flex-wrap gap-4">{
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
        <div>
            {
                error ? renderError()
                    : isLoading ? renderLoading()
                        : data ? renderCharacters(data)
                            : null
            }
        </div>
    );
}