import CustomSearchBar from "./components/CustomSearchBar/CustomSearchBar.tsx";
// import DropdownMenu from "./components/DropdownMenu/DropdownMenu.tsx";
import style from './styles/Header.module.css'
import Button from "../../shared/components/Button/Button.tsx";
import React, {useEffect, useState} from "react";
import {ethers} from "ethers";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu.tsx";


interface iHeader {
    onToggleLayout: () => void;
}

const Header: React.FC<iHeader> = ({onToggleLayout}) => {
    const [isMetamaskInstalled, setIsMetamaskInstalled] =
        useState<boolean>(false);
    const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);
    const [ethereumBalance, setEthereumBalance] = useState<string | null>(null)
    const handleSearchSubmit = (query: string) => {
        console.log('Выполняем поиск:', query);
    };

    useEffect(() => {
        if ((window as any).ethereum) {
            //check if Metamask wallet is installed
            setIsMetamaskInstalled(true);
            console.log(`isMetamaskInstalled --> ${isMetamaskInstalled}`)
        }
    }, [isMetamaskInstalled]);

    const getBalance = async (address: string) => {
        (window as any).ethereum
            .request({
                method: "eth_getBalance",
                params: [address, 'latest']
            })
            .then((balance: string) => {
                setEthereumBalance(ethers.formatEther(balance))
                console.log(`balance --> ${ethers.formatEther(balance)}`)
                console.log(`balance not formtatted --> ${ethereumBalance}`)
            })
            .catch((error: any) => {
                alert(`Something went wrong: ${error}`);
            });
    }

    async function connectMetamaskWallet(): Promise<void> {
        (window as any).ethereum
            .request({
                method: "eth_requestAccounts",
            })
            .then((accounts: string[]) => {
                setEthereumAccount(accounts[0]);
                getBalance(accounts[0])
                console.log(`ethereumAccount --> ${ethereumAccount}`)
            })
            .catch((error: any) => {
                alert(`Something went wrong: ${error}`);
            });
    }


    return (
        <>
            <div className={style.header}>
                <div className={style.searchBar}>
                    <CustomSearchBar onSubmit={handleSearchSubmit}/>
                </div>
                <div className={style.dropDown}>
                    <DropdownMenu label="By Rating" items={['Favorites',
                        'Novelty',
                        'Time Min',
                        'Time Max',
                        'Progress Min',
                        'Progress Max',
                        'Investment Min',
                        'Investment Max']}/>
                </div>
                <div className={style.button}>
                    <Button onClick={onToggleLayout} btnStyle={{minWidth: "60px", height: "40px"}} text={"View"}/>
                </div>
                <Button onClick={connectMetamaskWallet}
                        btnStyle={{minWidth: "60px", height: "40px", marginLeft: "10px"}}
                        text={"Connect to Metamask"}/>
            </div>
        </>
    );
};

export default Header;
