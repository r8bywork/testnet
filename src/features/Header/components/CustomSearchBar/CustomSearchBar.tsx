import React, { useState } from 'react';
import style from './CustomSearchBar.module.css';
import { ReactComponent as SearchIcon } from "../../../../assets/SearchIcon.svg";

interface CustomSearchBarProps {
    onSubmit: (query: string) => void;
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(searchQuery);
    };

    return (
        <div className={style.searchbar_container}>
            <form className={style.searchbar} onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search"
                    className={style.search_input}
                />
                <button type="submit" className={style.search_button}>
                    <SearchIcon/>
                </button>
            </form>
        </div>
    );
};

export default CustomSearchBar;
