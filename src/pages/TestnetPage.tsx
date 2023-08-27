import Header from "../features/Header/Header.tsx";
import {TestnetCard} from "../shared/components/TestnetCard/TestnetCard.tsx";
import style from './styles/TestNet.module.css'
import data from '../MockJson/TestnetCard.json'
import {useState} from "react";
import classNames from "classnames";
import {WideTestnetCard} from "../shared/components/TestnetCard/WideTestnetCard.tsx";
const TestnetPage = () => {
    const [layout, setLayout] = useState(false);
    const handleToggleLayout = () => {
        setLayout((prevIsGrid) => !prevIsGrid);
        console.log(layout)
    };
    return (
        <div>
            <div className={style.Header}>
                <Header onToggleLayout={handleToggleLayout} />
            </div>
            <div className={classNames(style.TestNetTable, { [style.listLayout]: layout })}>
                {data.map((item, index) => (
                    layout ? (
                        <WideTestnetCard
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
                    ) : (
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
                    )
                ))}
            </div>
        </div>
    );
};

export default TestnetPage;
