import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
const AvaiblePlayer = ({ PlayerData, AvailableBalance, setAvailableBalance }) => {
  const Players = use(PlayerData);

  return (
    <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Players.map((player) => (
        <PlayerCard
          player={player}
          AvailableBalance={AvailableBalance}
          setAvailableBalance={setAvailableBalance}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvaiblePlayer;
