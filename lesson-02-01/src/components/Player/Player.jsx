import {useState} from "react";

export default function Player({ name, symbol }) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(name);
	
	function handleClick(){
		//setIsEditing(!isEditing);
		setIsEditing((edit) => !edit);
	}
	
	function handlerChangeName(event){
		console.log(event.target);
		setPlayerName(event.target.value);
	}
	
	let editablePlayerName = <span className={'player-name'}>{playerName}</span>
	
	if(isEditing){
		editablePlayerName = <input type={'text'} required  value={playerName} onChange={handlerChangeName}/>
	}
	
	return (
		<li>
			<span className={'player'}>
				{editablePlayerName}
				<span className={'player-symbol'}>{symbol}</span>
			</span>
			<button className={'button'} onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	)
}
