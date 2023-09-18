import "./App.css";
import TestnetPage from "./pages/TestnetPage.tsx";
import GasTracker from "./features/GasTracker/GasTracker.tsx";
import NavigationMenu from "./shared/components/NavMenu/NavMenu.tsx";

const App = () => {
    return (
        <>
            <NavigationMenu/>
            <div className={"GasTracker"}>
                <GasTracker/>
            </div>
            <div className={"container"}>
                <TestnetPage/>
            </div>
        </>
    );
};

export default App;
