import React from 'react';
import RickAndMortyCharacters from './components/rick-and-morty-characters';
import { Header } from './components/header';

function App() {
    return (
        <div
            className="grid grid-cols-5 grid-rows-[50px_1fr]
            rid-flow-col gap-4 h-full dark:bg-black dark:text-white p-2">
            <div className="col-span-5"><Header></Header></div>
            <div className="col-span-1">SIDEBAR</div>
            <div className="col-span-4 overflow-auto"><RickAndMortyCharacters/></div>
        </div>
    );
}

export default App;
