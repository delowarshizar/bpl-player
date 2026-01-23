import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";
const SelectedPlayer = ({ BuyPlayers, removePlayer, setToggle }) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div>
        {BuyPlayers.map((players) => (
          <SelectedCard
            removePlayer={removePlayer}
            players={players}
          ></SelectedCard>
        ))}
      </div>

      <button
        onClick={() => setToggle(true)}
        className="btn bg-[#E7FE29] my-3 rounded-xl"
      >
        Add More Players
      </button>
    </div>
  );
};

export default SelectedPlayer;
