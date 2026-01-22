import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";
const SelectedPlayer = ({ BuyPlayers }) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      {BuyPlayers.map((players) => (
        <SelectedCard players={players}></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayer;
