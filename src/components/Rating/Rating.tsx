import React from "react";
import { ReactComponent as StarIcon } from "./Star.svg";
import { ReactComponent as EmptyStarIcon } from "./EmprtyStar.svg";
import style from "./Rating.module.css";

interface RatingProps {
	rank: number; // Ранг от 1 до 5
}

const Rating: React.FC<RatingProps> = ({ rank }) => {
	const fullStars = Math.floor(rank); // Целая часть рейтинга
	const remainingStars = 5 - fullStars; // Количество оставшихся звезд
	const starArray = [];

	// Создаем звезды с учетом активных и неактивных
	for (let i = 0; i < fullStars; i++) {
		starArray.push(
			<StarIcon key={i} className={style.star} />
		);
	}

	for (let i = 0; i < remainingStars; i++) {
		starArray.push(
			<EmptyStarIcon key={i + fullStars} className={style.star} />
		);
	}

	return <div className="rating">{starArray}</div>;
};

export default Rating;