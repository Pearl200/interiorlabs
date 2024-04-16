import React from "react";
import NavBar from "./Navbar";

const Mainpage = () => {
  return (
    <div className="flex flex-col justify-end relative h-full w-full">
          <div className="grid grid-cols-4 h-[45vh] md:justify-evenly">
            <img src="/assets/family.jpg" alt="Family" className="w-[40vw] h-[45vh] col-span-2" />
            <div className="bg-white flex flex-col justify-around h-[45vh] md:justify-items-center">
              <span className="px-4"> PHILOSOPHY </span>
              <span className="px-4 text-[10px]"> 
                We create a space where people can control every parameter they need.
                The relationship between form and function is at the heart of our philosophy. 
              </span>
              <span className="px-4">
                About us {"->"}
              </span>
            </div>
            <div className="h-[45vh]">
              <img src="/assets/Subject 2.png" alt="Family" className="w-full h-full" />
            </div>
          </div>
    </div>
  );
};

export default Mainpage;
