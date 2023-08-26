import { FC } from "react";
import Rating from "../Rating/Rating.tsx";
import style from "./styles/TestnetCard.module.css";
import ProgressBar from "./ProgressBar.tsx";
import { ReactComponent as TimeIcon } from './assets/Time.svg';
import { ReactComponent as CostIcon } from './assets/Cost.svg';
import { ReactComponent as InfoIcon } from './assets/Info.svg';
import image2 from '../TestnetCard/styles/sei.png'

interface iProps {
	nameColor: string;
	image?: string;
	time: number;
	name: string;
	rating: number;
	complexity: number;
	expenses: number;
	progress: number;
}

export const TestnetCard: FC<iProps> = ({
	// image,
	time,
	name,
	rating,
	nameColor,
	complexity,
	expenses,
	progress
}) => {
	const colorizeFirstLetter = (name:string, color:string) => {
		const firstLetter = name.charAt(0);
		const restOfName = name.slice(1);
		const styledFirstLetter = <span style={{ color }} className={style.name}>{firstLetter}</span>;
		return (
			<span className={style.name}>
                {styledFirstLetter}{restOfName}
            </span>
		);
	}
	const isBlur = false;

	return (
			<div className={`${style.card} ${isBlur ? style.content : ""}`}>
				<div className={style.main_info}>
					<img className={style.icon} src={image2} alt="Icon" />
					<div className={style.info}>
						{colorizeFirstLetter(name, nameColor)}
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
					<div className={style.infoItem}>
						<TimeIcon />
						<span className={style.time}>{time} Min</span>
					</div>
					<div className={style.infoItem}>
						<CostIcon />
						<span className={style.cost}>{expenses} $</span>
					</div>
					<div className={style.infoItem}>
						<InfoIcon style={{width:"23px", height:"15px"}}/>
						<span className={style.info} style={{marginLeft: 1}}>Info</span>
					</div>
				</div>
			</div>
	);
};
