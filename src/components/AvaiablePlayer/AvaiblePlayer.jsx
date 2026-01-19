import React, { use } from "react";

const AvaiblePlayer = ({ PlayerData }) => {
  const Players = use(PlayerData);
  console.log(Players)

  return (
    <div>
      <h1>Available Player</h1>
      <div>
      </div>
    </div>
  );
};

export default AvaiblePlayer;
