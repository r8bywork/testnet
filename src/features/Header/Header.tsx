import CustomSearchBar from "./components/CustomSearchBar/CustomSearchBar.tsx";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu.tsx";
import style from './styles/Header.module.css'
import Button from "../../shared/components/Button/Button.tsx";
import React from "react";

interface iHeader {
    onToggleLayout: () => void;
}
const Header: React.FC<iHeader> = ({onToggleLayout}) => {
    const handleSearchSubmit = (query: string) => {
        console.log('Выполняем поиск:', query);
    };
    return (
        <>
            <div className={style.header}>
                <div className={style.searchBar}>
                    <CustomSearchBar onSubmit={handleSearchSubmit}/>
                </div>
                <div className={style.dropDown}>
                    <DropdownMenu label="By Rating" items={['Favorites',
                        'Novelty',
                        'Time Min',
                        'Time Max',
                        'Progress Min',
                        'Progress Max',
                        'Investment Min',
                        'Investment Max']} />
                </div>
                <div className={style.button}>
                    <Button onClick={onToggleLayout}/>
                </div>
            </div>
        </>
    );
};

export default Header;
