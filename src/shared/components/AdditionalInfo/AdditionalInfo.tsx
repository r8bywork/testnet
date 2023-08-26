import React from 'react';
import style from './AdditionalInfo.module.css';
import {calculateColorClass} from "../../utils/colorUtils.ts";
import {iAdditionalInfoProps} from "../../interfaces/iAdditionalInfo.ts";

const AdditionalInfo: React.FC<iAdditionalInfoProps> = ({ Icon, number, text,conditions }) => {
    const colorClass = calculateColorClass(number, conditions);

    return (
        <div className={style.infoItem}>
            <Icon className={style.icon} style={{fill:colorClass}}/>
            {number !== undefined && text !== undefined && (
                <span style={{color:colorClass}}>{number} {text}</span>
            )}
        </div>
    );
};

export default AdditionalInfo;
