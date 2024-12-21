import React from "react";
import { teams } from "../../utils/data";
import Title from "../Title/Title";
function Team() {
    return (
        <div className="mt-[70px]">
            <Title title="Leadership" text="Team" />
            <div className="flex md:flex-row flex-col md:justify-start justify-center md:items-start items-center mt-16 gap-12">
                {teams &&
                    teams?.map((team, index) => (
                        <div
                            key={index}
                            className="md:w-[400px] w-full relative mt-4 h-[430px] group mx-auto dark:bg-black  bg-white dark:border-0 border rounded-md dark:text-white text-black flex hover:cursor-pointer flex-col"
                        >
                            <div className="w-full  rounded-t-md h-[350px] group-hover:h-[410px] overflow-hidden transition-all duration-300">
                                <img
                                    className="h-full w-full  scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300"
                                    src={team.image}
                                    alt=""
                                />
                            </div>
                            <article className="relative overflow-hidden  flex-grow">
                                <div className="info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300">
                                    <p className="md:text-2xl font-semibold">
                                        {team.name}
                                    </p>
                                    <p className="sm:text-base text-sm">
                                        {team.position}
                                    </p>
                                </div>
                                <button className="absolute h-10 -bottom-8 opacity-0 group-hover:opacity-100 cursor-pointer group-hover:bottom-3  text-3xl font-medium transition-all duration-300 w-full text-center">
                                    {team.position}
                                </button>
                            </article>
                        </div>
                    ))}
            </div>
        </div>
    );
}
export default Team;
