import React from 'react';
import style from './AdditionalInfo.module.css';
import {calculateColorClass} from "../../../../utils/colorUtils.ts";
import {iAdditionalInfoProps} from "../../../../interfaces/iAdditionalInfo.ts";

const AdditionalInfo: React.FC<iAdditionalInfoProps> = ({fontSize, width, height, Icon, number, text,conditions }) => {
    const colorClass = calculateColorClass(number, conditions);

    return (
        <div className={style.infoItem}>
            <Icon className={style.icon} style={{fill:colorClass, width:width, height: height}}/>
            {number !== undefined && text !== undefined && (
                <span style={{color:colorClass, fontSize:fontSize}}>{number} {text}</span>
            )}
        </div>
    );
};

export default AdditionalInfo;
