import Header from "../features/Header/Header.tsx";
import {TestnetCard} from "../components/TestnetCard/TestnetCard.tsx";
import style from './styles/TestNet.module.css'
import data from '../MockJson/TestnetCard.json'
const TestnetPage = () => {
    return (
        <div>
            <div className={style.Header}>
                <Header />
            </div>
            <div className={style.TestNetTable}>
                {data.map((item, index) => (
                    <TestnetCard
                        key={index}
                        image={item.image}
                        time={Number(item.time)}
                        name={item.name}
                        nameColor={item.nameColor}
                        rating={Number(item.rating)}
                        progress={Number(item.progress)}
                        complexity={Number(item.complexity)}
                        expenses={Number(item.expenses)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestnetPage;
