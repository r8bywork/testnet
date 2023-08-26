import { FC } from "react";
import Rating from "../Rating/Rating.tsx";
import style from "./styles/WideTestnetCard.module.css";
import ProgressBar from "./ProgressBar.tsx";
import { ReactComponent as TimeIcon } from '../../../assets/Time.svg';
import { ReactComponent as CostIcon } from '../../../assets/Cost.svg';
import image2 from '../../../assets/sei.png'
import AdditionalInfo from "./components/AdditionalInfo/AdditionalInfo.tsx";
import {conditionsCost, conditionsTime} from "../../../config/conditionsConfig.ts";
import {colorizeFirstLetter} from "../../utils/colorizeFirstLetter.tsx";
import {iTestnetCard} from "../../interfaces/iTestnetCard.ts";
import classNames from "classnames";
export const WideTestnetCard: FC<iTestnetCard> = ({
      // image,
      time,
      name,
      rating,
      nameColor,
      complexity,
      expenses,
      progress,
  }) => {
    const isBlur = false;

    return (
        <div className={classNames(style.card,{ [style.blurBackground]: isBlur })}>
            <div className={style.main_info}>
                <div className={style.icon}>
                    <img src={image2} alt="Icon" />
                </div>

                <div className={style.info}>
                    <span className={style.name}>{colorizeFirstLetter(name, nameColor)}</span>
                    <div className={style.stats}>

                        <div className={style.rating}>
                            <span>Rating</span>
                            <Rating rank={rating} />
                            {rating}/5
                        </div>

                        <div className={style.complexity}>
                            <span>Complexity</span>
                            <Rating rank={complexity} />
                            {complexity}/5
                        </div>

                    </div>
                </div>

            </div>

            <div className={style.additionalInfo}>
                <div className={style.timeInfo}>
                    <span className={style.title}>Time</span>
                    <AdditionalInfo Icon={TimeIcon} text={"Min"} number={time} conditions={conditionsCost} width={"25px"} height={"25px"}/>
                </div>

                <div className={style.costInfo}>
                    <span className={style.title}>Expenses</span>
                    <AdditionalInfo Icon={CostIcon} text={"$"} number={expenses} conditions={conditionsTime} width={"25px"} height={"25px"}/>
                </div>
            </div>

            <div className={style.infoBlock}>
                <span className={style.title}>Info</span>
                <span className={style.infoText}>Sei is the first sector-specific Layer 1 blockchain, specialized for trading to give exchanges an unfair advantage.</span>
                <div className={style.progress}>
                    <ProgressBar percentage={progress}/>
                </div>
            </div>
        </div>
    );
};
