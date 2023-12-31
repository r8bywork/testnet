import { FC } from "react";
import Rating from "../Rating/Rating.tsx";
import style from "./styles/TestnetCard.module.css";
import ProgressBar from "./ProgressBar.tsx";
import { ReactComponent as TimeIcon } from '../../../assets/Time.svg';
import { ReactComponent as CostIcon } from '../../../assets/Cost.svg';
import { ReactComponent as InfoIcon } from '../../../assets/Info.svg';
import image2 from '../../../assets/sei.png'
import AdditionalInfo from "./components/AdditionalInfo/AdditionalInfo.tsx";
import {conditionsCost, conditionsTime} from "../../../config/conditionsConfig.ts";
import {colorizeFirstLetter} from "../../utils/colorizeFirstLetter.tsx";
import {iTestnetCard} from "../../interfaces/iTestnetCard.ts";
import classNames from "classnames";
export const TestnetCard: FC<iTestnetCard> = ({
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
					<img className={style.icon} src={image2} alt="Icon" />
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
				<div className={style.progress}>
					<ProgressBar percentage={progress}/>
				</div>
				<div className={style.additionalInfo}>
					<AdditionalInfo Icon={TimeIcon} text={"Min"} number={time} conditions={conditionsCost} width={"15px"} height={"15px"}/>
					<AdditionalInfo Icon={CostIcon} text={"$"} number={expenses} conditions={conditionsTime} width={"15px"} height={"15px"}/>
					<AdditionalInfo Icon={InfoIcon} />
				</div>
			</div>
	);
};
