import style from './GasTracker.module.css';
import classNames from 'classnames';
import { ReactComponent as Monkey } from "./assets/Monkey.svg";
import { ReactComponent as Rabbit } from "./assets/Rabbit.svg";
import { ReactComponent as Turtle } from "./assets/Turtle.svg";
// import DropdownMenu from "../../components/DropdownMenu/DropdownMenu.tsx";
// 77c979419c0e4a3e8c996845d5c1953c
//
const GasTracker = () => {
    return (
        <div className={style.GasTracker}>
            <div className={style.left}>
                <span className={style.name}>ETH GAS Tracker</span>
                <div className={classNames(style.fast, style.border)}>
                    <Turtle/>
                    <span>Gwei</span>
                </div>
                <div className={classNames(style.normal, style.border)}>
                    <Rabbit/>
                    <span>Gwei</span>
                </div>
                <div className={classNames(style.slow, style.border)}>
                    <Monkey/>
                    <span>Gwei</span>
                </div>
            </div>
            {/*<div className={style.language}>*/}
            {/*    <DropdownMenu label={"English"} items={["Русский", "Украинский"]}/>*/}
            {/*</div>*/}
        </div>
    );
};

export default GasTracker;
