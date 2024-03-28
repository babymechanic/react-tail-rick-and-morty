import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character } from './character';
import { Page } from './page';

export type SearchByNameQuery = {
    name: string;
    pageNumber: number;
}

export const rickAndMortyApi = createApi({
    reducerPath: 'rickAndMortyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
    endpoints: (builder) => ({
        getCharactersByName: builder.query<Page<Character>, SearchByNameQuery>({
            query: ({ name, pageNumber }) => {
                return `character/?name=${ encodeURI(name) }&page=${ pageNumber }`;
            },
        })
    })
});


export const { useGetCharactersByNameQuery } = rickAndMortyApi;