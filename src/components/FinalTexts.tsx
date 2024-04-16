import React from "react";
import { GoArrowRight } from "react-icons/go";


const data = [
  {
    num: 16,
    description: "parameters to regulate in our mobile app",
    details: "More about app ",
  },
  {
    num: 263,
    description: "happy families",
    details: "More about app ",
    
  },
];

const FinalTexts = () => {
  return (
    <div className="flex flex-row text-black h-[45]">
      {data.map((item) => {
        return (
          <div className="bg-white flex flex-col justify-around h-[35vh] text-wrap">
            <span className="px-4 text-bold-[32px]"> {item.num} </span>
            <span className="px-4 text-bold-[8px]">{item.description}</span>
            <span className="px-4">{item.details}  <GoArrowRight /></span>
          


          </div>
        );
      })}
    </div>
  );
};

export default FinalTexts;
