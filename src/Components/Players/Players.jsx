import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import './Players.css'

const Available = () => {
    const [players,setPlayers] = useState([]);
    useEffect(()=>{
        fetch('players.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    },[])
    return (
        <div>
             <h2>Players Available:{players.length}</h2>
            <div className="player-container">
            {
                players.map(player=><Player key={player.id}
                    player={player}></Player>)
            }
            </div>

        </div>
    );
};

export default Available;