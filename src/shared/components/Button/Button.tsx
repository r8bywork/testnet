import React, {CSSProperties} from 'react';
import style from './Button.module.css';

interface CustomButtonProps {
    onClick?: () => void;
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    text?: string;
    svgStyle?: CSSProperties;
    textStyle?: CSSProperties;
    btnStyle?: CSSProperties;
}

const Button: React.FC<CustomButtonProps> = ({ btnStyle, textStyle, svgStyle, onClick, Icon, text }) => {
    return (
        <button className={style.custom_button} style={btnStyle} onClick={onClick}>
            {Icon && <div >
                <Icon style={svgStyle}/>
            </div>}
            <span style={textStyle}>{text}</span>
        </button>
    );
};

export default Button;
