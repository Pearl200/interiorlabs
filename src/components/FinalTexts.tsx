import React from 'react'

const data = [
    {
        num: 16,
        description: "parameters to regulate in our mobile app",
        details: "More about app ->"
    },
    {
        num: 263,
        description: "parameters to regulate in our mobile app",
        details: "More about app ->"
    }
]

const FinalTexts = () => {
  return (
    <div className='flex flex-row text-black'>
        {data.map((item) => {
            return (
                <div className="bg-white flex flex-col justify-around h-[35vh]">
                    <span className="px-4"> {item.num} </span>
                    <span className="px-4 text-[10px]"> 
                    {item.description}
                    </span>
                    <span className="px-4">
                    {item.details}
                    </span>
                </div>
            )
        })
        }
    </div>
  )
}

export default FinalTexts