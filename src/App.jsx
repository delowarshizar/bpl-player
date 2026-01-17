import { Suspense } from "react";
import "./App.css";

import AvaiblePlayer from "./components/AvaiablePlayer/AvaiblePlayer";
import NavBar from "./components/NavBar/NavBar";
import SelectedPlayer from "./components/SelectedPlayer/SelectedPlayer";

const FetchPlayer = async () => {
  const res = await fetch("./player.json");
  return res.json();
};
function App() {
  const PlayerData = FetchPlayer();
  return (
    <>
      <NavBar></NavBar>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <AvaiblePlayer PlayerData={PlayerData}></AvaiblePlayer>
      </Suspense>
      <SelectedPlayer></SelectedPlayer>
    </>
  );
}

export default App;
