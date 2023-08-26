import "./App.css";
import TestnetPage from "./pages/TestnetPage.tsx";
import GasTracker from "./features/GasTracker/GasTracker.tsx";

const App = () => {

	return (
		<>
			<div className={"GasTracker"}>
				<GasTracker />
			</div>
			<div className={"container"}>
				<TestnetPage/>
			</div>
		</>
	);
};

export default App;
