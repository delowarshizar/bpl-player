import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
const AvaiblePlayer = ({ PlayerData }) => {
  const Players = use(PlayerData);

  return (
    <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Players.map((player) => (
        <PlayerCard player={player}></PlayerCard>
      ))}
    </div>
  );
};

export default AvaiblePlayer;
