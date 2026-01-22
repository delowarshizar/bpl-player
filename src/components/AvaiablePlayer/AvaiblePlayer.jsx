import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
const AvaiblePlayer = ({
  PlayerData,
  AvailableBalance,
  setAvailableBalance,
  BuyPlayers,
  setBuyPlayers,
}) => {
  const Players = use(PlayerData);

  return (
    <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Players.map((player) => (
        <PlayerCard
          player={player}
          AvailableBalance={AvailableBalance}
          setAvailableBalance={setAvailableBalance}
          BuyPlayers={BuyPlayers}
          setBuyPlayers={setBuyPlayers}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvaiblePlayer;
