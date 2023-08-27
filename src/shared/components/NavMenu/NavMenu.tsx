import React from 'react';
import style from './NavigationMenu.module.scss';
import Button from "../Button/Button.tsx";
import {buttonConfigs, socialConfig} from "../../../config/NavConfig.ts";
const NavigationMenu: React.FC = () => {
    return (
        <div className={style.menu_container}>
            <div className={style.menu} >
                {buttonConfigs.map((item, index) => {
                    return (
                        <Button
                            key={index}
                            btnStyle={item.btnStyle}
                            svgStyle={item.svgStyle}
                            Icon={item.iconComponent}
                            onClick={item.onClick}
                        />
                    )
                })}
            </div>
            <div className={style.icon_block}>
                {socialConfig.map((item, index) => {
                    return (
                        <Button
                            key={index}
                            btnStyle={item.btnStyle}
                            svgStyle={item.svgStyle}
                            Icon={item.iconComponent}
                            onClick={item.onClick}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default NavigationMenu;
