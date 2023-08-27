import {ReactComponent as HomeIcon} from "../assets/HomeIcon.svg";
import {ReactComponent as PersonIcon} from "../assets/Person.svg";
import {ReactComponent as ToDoIcon} from "../assets/ToDo.svg";
import {ReactComponent as SalesIcon} from "../assets/Sales.svg";
import {ReactComponent as BasketIcon} from "../assets/Basket.svg";
import {ReactComponent as BellIcon} from "../assets/Bell.svg";

import {ReactComponent as TelegramIcon} from "../assets/Telegram.svg";
import {ReactComponent as TwitterIcon} from "../assets/Twitter.svg";
import {ReactComponent as DiscordIcon} from "../assets/Discord.svg";
import {ReactComponent as YouTubeIcon} from "../assets/YouTube.svg";
const svgStyle = {
    width: '30px',
    height: '30px',
};

const btnStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70px',
    height: '50px',
    marginBottom: '20px',
};

const SocialStyleBtn = {
    minWidth: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    background: "none",
    cursor: 'pointer',
};

const SocialStyleSVG = {
    minWidth: '30px',
    height: '30px',
};

export const buttonConfigs = [
    {
        iconComponent: HomeIcon, // Иконка для первой кнопки
        btnStyle: btnStyle,
        svgStyle: svgStyle,
        onClick: () => {
            console.log("onClick Home")
        }
    },
    {
        iconComponent: PersonIcon, // Иконка для первой кнопки
        btnStyle: btnStyle,
        svgStyle: svgStyle,
        onClick: () => {
            console.log("onClick Person")
        }
    },
    {
        iconComponent: ToDoIcon, // Иконка для первой кнопки
        btnStyle: btnStyle,
        svgStyle: svgStyle,
        onClick: () => {
            console.log("onClick Todo")
        }
    },
    {
        iconComponent: SalesIcon, // Иконка для первой кнопки
        btnStyle: btnStyle,
        svgStyle: svgStyle,
        onClick: () => {
            console.log("onClick Sales")
        }
    },
    {
        iconComponent: BasketIcon, // Иконка для первой кнопки
        btnStyle: btnStyle,
        svgStyle: svgStyle,
        onClick: () => {
            console.log("onClick Basket")
        }
    },
    {
        iconComponent: BellIcon, // Иконка для первой кнопки
        btnStyle: btnStyle,
        svgStyle: svgStyle,
        onClick: () => {
            console.log("onClick Bell")
        }
    },
];

export const socialConfig = [
    {
        iconComponent: TelegramIcon, // Иконка для первой кнопки
        btnStyle: SocialStyleBtn,
        svgStyle: SocialStyleSVG,
        onClick: () => {
            console.log("onClick Telegram")
        }
    },
    {
        iconComponent: TwitterIcon, // Иконка для первой кнопки
        btnStyle: SocialStyleBtn,
        svgStyle: SocialStyleSVG,
        onClick: () => {
            console.log("onClick Twitter")
        }
    },
    {
        iconComponent: DiscordIcon, // Иконка для первой кнопки
        btnStyle: SocialStyleBtn,
        svgStyle: SocialStyleSVG,
        onClick: () => {
            console.log("onClick Discord")
        }
    },
    {
        iconComponent: YouTubeIcon, // Иконка для первой кнопки
        btnStyle: SocialStyleBtn,
        svgStyle: SocialStyleSVG,
        onClick: () => {
            console.log("onClick Youtube")
        }
    },
];