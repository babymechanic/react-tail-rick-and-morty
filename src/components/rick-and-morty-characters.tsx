import { useState } from 'react';
import { useGetCharactersByNameQuery } from '../redux-store/services/rick-and-morty';

export default function RickAndMortyCharacters() {
    const [pageNumber, setPageNumber] = useState(1);
    const [name, setName] = useState('');

    const { data, isLoading, error } = useGetCharactersByNameQuery({ name, pageNumber });
    return (
        <h1 className="text-3xl font-bold underline">
            {
                error ? (<>Oh no, there was an error!</>)
                    : isLoading ? (<>Loading...</>)
                        : data ? (<>{ data.info.count }</>)
                            : null
            }
        </h1>
    );
}