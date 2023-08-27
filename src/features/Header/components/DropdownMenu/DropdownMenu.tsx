import React, { useState } from 'react';
import './DropdownMenu.css';
import {ReactComponent as DropDownArrow} from "../../../../assets/DropDownArrow.svg";

interface DropdownMenuProps {
    label: string;
    items: string[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-label" onClick={toggleDropdown}>
                {label}
                <DropDownArrow/>
            </div>
            {isOpen && (
                <div className="dropdown-menu">
                    {items.map((item) => (
                        <div
                            key={item}
                            className={`dropdown-item ${selectedItem === item ? 'selected' : ''}`}
                            onClick={() => handleItemClick(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
