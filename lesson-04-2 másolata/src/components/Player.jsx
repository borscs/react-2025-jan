import {useRef, useState} from "react";

export default function Player() {
    const [userName, setUserName] = useState(null);
    const playerName = useRef();
    
    
    function handlerChange(event) {
        setTypeing(event.target.value);
    };
    
    function handleClick() {
        setUserName(playerName.current.value);
    };
    
    
  return (
    <section id="player">
      <h2>Welcome {userName ??  'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
