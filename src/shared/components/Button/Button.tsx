import React from 'react';
import style from './Button.module.css';

interface CustomButtonProps {
    onClick: () => void;
}

const Button: React.FC<CustomButtonProps> = ({ onClick }) => {
    return (
        <button className={style.custom_button} onClick={onClick}>
            View
        </button>
    );
};

export default Button;
