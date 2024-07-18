import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
    return (
        <div className="py-20 w-full">
            <h1 className="heading">
                Mi <span className="text-purple">experiencia</span>
            </h1>

            <div className="w-full mt-12 gap-10"> {/*para mas de 1: grid lg:grid-cols-4 grid-cols-1*/}
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        //   random duration will be fun , I think , may be not
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            //   add these two
                            //   you can generate the color from here https://cssgradient.io/
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            // add this border radius to make it more rounded so that the moving border is more realistic
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        // remove bg-white dark:bg-slate-900
                        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <img
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                className="lg:w-32 md:w-26 w-20"
                            />
                            <div className="lg:ms-5">
                                <p className="text-start text-sm md:text-lg text-white-100 mt-3 font-semibold">
                                    {card.dates}
                                </p>
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold">
                                    {card.desc}
                                </p>
                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {card.iconLists.map((icon, index) => (
                                            <div
                                                key={index}
                                                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                style={{
                                                    transform: `translateX(-${5 * index + 2}px)`,
                                                }}
                                            >
                                                <img src={icon} alt="icon5" className="p-2" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Button>

                ))}
            </div>
        </div>
    );
};

export default Experience;