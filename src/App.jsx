import { Suspense } from "react";
import "./App.css";
import { useState } from "react";
import AvaiblePlayer from "./components/AvaiablePlayer/AvaiblePlayer";
import NavBar from "./components/NavBar/NavBar";
import SelectedPlayer from "./components/SelectedPlayer/SelectedPlayer";
import { ToastContainer } from "react-toastify";

const FetchPlayer = async () => {
  const res = await fetch("./player.json");
  return res.json();
};
const PlayerData = FetchPlayer();
function App() {
  const [AvailableBalance, setAvailableBalance] = useState(600000);
  const [toggle, setToggle] = useState(true);
  const [BuyPlayers, setBuyPlayers] = useState([]);
  const removePlayer = (p) => {
    const UpdatePlayer = BuyPlayers.filter((ply) => ply.name !== p.name);
    setBuyPlayers(UpdatePlayer);
    setAvailableBalance(
      AvailableBalance + parseInt(p.price.split("USDT").join("")),
    );
  };
  return (
    <>
      <NavBar AvailableBalance={AvailableBalance}></NavBar>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        {toggle ? (
          <h1 className="font-bold text-2xl">Available Players</h1>
        ) : (
          <h1 className="font-bold text-2xl">
            Selected Players {BuyPlayers.length}/6
          </h1>
        )}
        <div className="flex">
          <button
            onClick={() => setToggle(true)}
            className={`${toggle ? "bg-[#E7FE29]" : ""} cursor-pointer px-4 py-3 border border-r-0 border-gray-300 rounded-l-2xl`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`${toggle ? "" : "bg-[#E7FE29]"} cursor-pointer px-4 py-3 border border-l-0 border-gray-300 rounded-r-2xl`}
          >
            Selected<span>({BuyPlayers.length}/6)</span>
          </button>
        </div>
      </div>
      {toggle ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvaiblePlayer
            PlayerData={PlayerData}
            AvailableBalance={AvailableBalance}
            setAvailableBalance={setAvailableBalance}
            BuyPlayers={BuyPlayers}
            setBuyPlayers={setBuyPlayers}
          ></AvaiblePlayer>
        </Suspense>
      ) : (
        <SelectedPlayer
          removePlayer={removePlayer}
          BuyPlayers={BuyPlayers}
          setToggle={setToggle}
          
        ></SelectedPlayer>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
