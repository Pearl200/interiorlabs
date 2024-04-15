import React from "react";
import Mainpage from "./components/Mainpage";


const App: React.FC = () => {
  return (
    <main>
      <div className="absolute top-28 left-20 leading-[60px]">
        <p className="  text-yellow-400 font-bold text-[70px] "> We create </p>
        <p className=" text-white font-bold text-[70px] ml-40">more than </p>
        <p className="text-white font- bold text-[100px] ml-64 p-4">
          just interior{" "}
        </p>
      </div>
      <div className="flex flex-row w-full">
        <div className="w-[60%]">
          <Mainpage />
        </div>
        {/* <img src="./assets/interiordesign.JPG" alt="Interior Design" />
      {/* Use the imported image */}
        {/* <img src="./assets/family.jpg" alt="Family" /> */}
        {/* <img src="./assets/Subject 2.png" alt="Subject" /> */}
        <div className="w-[40%] text-white">
          <div className="bg-black">
            <img src="assets/interiordesign.jpg" alt="Interior Design" className=" overflow-auto opacity-70" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
