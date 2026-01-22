import React from "react";
import DelIcon from "../../assets/Frame.png";
const SelectedCard = ({ players, removePlayer }) => {
  const handleClick = () => {
    removePlayer(players);
  };
  return (
    <div>
      <div className="flex justify-between border-2 border-amber-200 mt-4 items-center p-3 rounded-2xl">
        <div className="flex">
          <img className="h-[50px] w-[50px] " src={players.player_img} alt="" />
          <div className="px-5">
            <h1 className="font-bold">{players.name}</h1>
            <p>{players.player_role}</p>
          </div>
        </div>
        <div onClick={handleClick}>
          <img className="cursor-pointer" src={DelIcon} alt="" />
        </div>
      </div>
     
    </div>
  );
};

export default SelectedCard;
