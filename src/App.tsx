import React from "react";
import Mainpage from "./components/Mainpage";
import BottomPage from "./components/BottomPage ";
import FinalTexts from "./components/FinalTexts";
import NavBar from "./components/Navbar";


const App: React.FC = () => {
  return (
    <main>
      <div className="absolute top-28 left-40 leading-[60px]">
        <p className="  text-yellow-400 font-bold text-[70px] "> We create </p>
        <p className=" text-white font-bold text-[70px] ml-40">more than </p>
        <p className="text-white font- bold text-[100px] ml-64 p-4">
          just interior{" "}
        </p>
      </div>
      <div className="flex flex-row w-full">
        <div className="w-[60%] h-[95vh]">
          <NavBar />
          <Mainpage />
          {/* <BottomPage /> */}
        </div>
        {/* <img src="./assets/interiordesign.JPG" alt="Interior Design" />
      {/* Use the imported image */}
        {/* <img src="./assets/family.jpg" alt="Family" /> */}
        {/* <img src="./assets/Subject 2.png" alt="Subject" /> */}
        <div className="w-[40%] text-white h-[95vh]">
          <div className="bg-black">
            <img src="assets/interiordesign.jpg" alt="Interior Design" className="overflow-auto opacity-70" />
            <FinalTexts />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
