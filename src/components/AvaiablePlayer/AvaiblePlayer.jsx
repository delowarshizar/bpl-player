import React, { use } from "react";

const AvaiblePlayer = ({ PlayerData }) => {
  const Players = use(PlayerData);

  return (
    <div>
      <h1>Available Player</h1>
      <div>
        {Players.map((player) => (
          <div>
            <img src={player.player_img} alt={player.name} className="w-32 " />
            <h2 className="text-xl font-bold mt-2">{player.name}</h2>
            <p>Country: {player.country}</p>
            <p>Rating: {player.rating}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvaiblePlayer;
