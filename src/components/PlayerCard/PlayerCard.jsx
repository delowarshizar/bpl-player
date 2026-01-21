import React, { useState } from "react";
import PlayerIcon from "../../assets/user1.png";
import FlagIcon from "../../assets/report1.png";
const PlayerCard = ({ player }) => {
  const [Selected, setSelected] = useState(false);
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-4 mt-5">
        <figure>
          <img
            className="rounded-xl h-[200px] object-contain"
            src={player.player_img}
            alt="Shoes"
          />
        </figure>
        <div className="flex gap-4 mt-4 items-center px-2">
          <img src={PlayerIcon} alt="" />
          <h2 className="card-title">{player.name}</h2>
        </div>
        <div className="mt-4 flex justify-between p-2 border-b-gray-300 border-b">
          <div className="flex gap-4 items-center">
            <img src={FlagIcon} alt="" />
            <p>{player.country}</p>
          </div>
          <button className="btn"> {player.player_role}</button>
        </div>
        <div className="flex justify-between px-2 mt-4">
          <span className="font-bold">Rating</span>
          <span>{player.rating}</span>
        </div>
        <div className="mt-4 flex px-2 items-center justify-between">
          <span className="font-bold"> {player.batting_style}</span>
          <span> {player.bowling_style}</span>
        </div>
        <div className="card-actions mt-4 flex px-2 items-center justify-between ">
          <span className="font-bold">Price: {player.price}</span>
          <button
            onClick={() => setSelected(true)}
            disabled={Selected}
            className="btn "
          >
            {Selected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
