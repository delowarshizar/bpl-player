import "./App.css";
import NavImg from "./assets/logo.png";
import CoinImg from "./assets/DoubleDollar.png";
function App() {
  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className="h-[60px] w-[60px]" src={NavImg} alt="" />
          </a>
        </div>
        <div className="flex">
            <div className="flex gap-3 items-center">
              <span>60000000 </span>
              <span>Coin</span>
              <img src={CoinImg} alt="" />
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
