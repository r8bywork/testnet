import React from 'react';
import style from './styles/ProgressBar.module.css'; // Создайте стили для компонента

interface ProgressBarProps {
    percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
    return (
        <div className={style.progress_bar_container}>
            <div
                className={style.progress_bar_filled}
                style={{ width: `${percentage}%`, backgroundColor: '#FFFFFF' }}
            >
            </div>
            <div className={style.progress_bar_empty} style={{ backgroundColor: '#FFFFFF40' }}></div>
            <div className={style.progress_bar_text}>
                <span className="progress-label">Progress</span>
                <span className="progress-percent">{percentage}%</span>
            </div>

        </div>
    );
};

export default ProgressBar;
