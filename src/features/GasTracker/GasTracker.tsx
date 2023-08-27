import style from './GasTracker.module.css';
import classNames from 'classnames';
import { ReactComponent as Monkey } from "../../assets/Monkey.svg";
import { ReactComponent as Rabbit } from "../../assets/Rabbit.svg";
import { ReactComponent as Turtle } from "../../assets/Turtle.svg";

const GasTracker = () => {
    return (
        <div className={style.GasTracker}>
            <div className={style.left}>
                <span className={style.name}>ETH GAS Tracker</span>
                <div className={classNames(style.fast, style.border)}>
                    <Turtle/>
                    <span>23 Gwei</span>
                </div>
                <div className={classNames(style.normal, style.border)}>
                    <Rabbit/>
                    <span>23 Gwei</span>
                </div>
                <div className={classNames(style.slow, style.border)}>
                    <Monkey/>
                    <span>23 Gwei</span>
                </div>
            </div>
        </div>
    );
};

export default GasTracker;
