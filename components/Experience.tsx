import { useState } from "react";
import Cts from "@/components/works/Cts";
import Sharp from "./works/Sharp";
import Trv from "./works/Trv";
const Experience =() => {
    const [cts,setCts]=useState(true);
    const [sharp,setSharp]=useState(false);
    const [trv,setTrv]=useState(false);

    function ctsHandler() {
        setCts(true);
        setSharp(false);
        setTrv(false);
    }

    function sharpHandler() {
        setCts(false);
        setSharp(true);
        setTrv(false);
    }
    function trvHandler() {
        setCts(false);
        setSharp(false);
        setTrv(true);
    }
    return (
        <section id="experience" className="max-w-container mx-auto lgl:px-20 py-24 mb-10">
            <h2 className="font-titLeFont text-2xl font-semibold flex items-center">
                <span className="text-base md:text-lg text-textGreen mr-2">#</span>
                Where I have worked <span className="mb-4 text-textGreen"> &nbsp;____________</span>
            </h2>
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className="md:w-32 flex flex-col">
                    <li 
                    onClick={ctsHandler}
                    className={`${cts ? "border-l-textGreen text-textGreen " : " border-l-hoverColor text-textDark"} 
                    border-l-2   bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer 
                    duration-300 px-8 font-medium`}>
                        Cognizant
                    </li>
                    <li 
                    onClick={sharpHandler}
                    className={`${sharp ? "border-l-textGreen text-textGreen " : " border-l-hoverColor text-textDark"} 
                    border-l-2   bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer 
                    duration-300 px-8 font-medium`}>
                        Sharpener
                    </li>
                    <li 
                    onClick={trvHandler}
                    className={`${trv ? "border-l-textGreen text-textGreen " : " border-l-hoverColor text-textDark"} 
                    border-l-2   bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer 
                    duration-300 px-8 font-medium`}>
                        TriviumEdu
                    </li>
                </ul>
                <div className="mr-16 pr-2">
                {cts && <Cts/>}
                {sharp && <Sharp/>}
                {trv && <Trv/>}
                </div>
            </div>
        </section>
    )
}
export default Experience;