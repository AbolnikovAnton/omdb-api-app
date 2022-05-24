import React from 'react';
import SearchInput from "./SearchInput";
import FilmCard from "./FilmCard";

const Main = () => {
    return (
        <div className='main'>
            <SearchInput />
            <FilmCard />
        </div>
    );
};

export default Main;