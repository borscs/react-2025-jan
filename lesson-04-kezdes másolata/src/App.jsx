import Header from "./componenst/Header/Header.jsx";
import {useState} from "react";
import UserInputs from "./componenst/UserInputs/UserInputs.jsx";
import Result from "./componenst/Results/Result.jsx";

function App() {
	
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});
	
	function handlerUserInput(inputFiled, newValue) {
		setUserInput((prevState) => {
			return {
				...prevState,
				[inputFiled]: newValue
			}
		})
	}
	
	const InputIsValid = userInput.duration >= 1;
	
	return (
		<>
			<Header/>
			<UserInputs handlerUserInput={handlerUserInput} userInput={userInput}/>
			{InputIsValid
				? <Result input={userInput}/>
				: <p className={'center'}>Please enter the duration greater then zero!</p>
			}
		</>
	)
}

export default App
