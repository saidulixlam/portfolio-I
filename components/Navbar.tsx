import logo1 from "@/public/assets/images/logo1.png";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin, SiLeetcode } from "react-icons/si";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
const Navbar = () => {

    const [menu, setMenu] = useState(false);
    function menuHandler() {
        setMenu(true);
    }

    return (
        <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
            <div className="container h-full mx-auto py-1 font-titLeFont flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image className="w-14" src={logo1} alt="logo" />
                </motion.div>
                <div className="hidden mdl:inline-flex items-center gap-7">
                    <ul className="flex text-[13px] gap-7">
                        <Link href="#home" className="flex items-center gap-1 font-medium text text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1 }}
                            >
                                Home
                            </motion.li>
                        </Link>
                        <Link href="#about" className="flex items-center gap-1 font-medium text text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.2 }}
                            >
                                About
                            </motion.li>
                        </Link>
                        <Link href="#experience" className="flex items-center gap-1 font-medium text text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.4 }}
                            >
                                Experience
                            </motion.li>
                        </Link>
                        <Link href="#projects" className="flex items-center gap-1 font-medium text text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.6 }}
                            >
                                Projects
                            </motion.li>
                        </Link>
                        <Link href="#contact" className="flex items-center gap-1 font-medium text text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.7 }}
                            >
                                Contact
                            </motion.li>
                        </Link>
                    </ul>
                    <a href="assets/Resume_Saidul_Islam.pdf" target="_blank">
                        <motion.button
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.9 }}
                            className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
                            Resume
                        </motion.button>
                    </a>
                </div>
                <div onClick={menuHandler} className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
                </div>
                {menu && (
                    <div className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end">
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.1 }}
                            className="w-[70%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
                        >
                            <MdOutlineClose
                                onClick={() => setMenu(false)}
                                className=" text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4" />
                            <div>
                                <ul className="flex flex-col text-[13px] gap-7 ml-3">
                                    <Link
                                        onClick={() => setMenu(false)}
                                        href="#home" className="flex items-center gap-1 font-medium text text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">

                                        <motion.li
                                            initial={{ y: -10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.1 }}
                                        >
                                            Home
                                        </motion.li>
                                    </Link>
                                    <Link
                                        onClick={() => setMenu(false)}
                                        href="#about" className="flex items-center gap-1 font-medium text text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                        <motion.li
                                            initial={{ y: -10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.1, delay: 0.2 }}
                                        >
                                            About
                                        </motion.li>
                                    </Link>
                                    <Link
                                        onClick={() => setMenu(false)}
                                        href="#experience" className="flex items-center gap-1 font-medium text text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                        <motion.li
                                            initial={{ y: -10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.1, delay: 0.4 }}
                                        >
                                            Experience
                                        </motion.li>
                                    </Link>
                                    <Link
                                        onClick={() => setMenu(false)}
                                        href="#projects" className="flex items-center gap-1 font-medium text text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                        <motion.li
                                            initial={{ y: -10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.1, delay: 0.6 }}
                                        >
                                            Projects
                                        </motion.li>
                                    </Link>
                                    <Link
                                        onClick={() => setMenu(false)}
                                        href="#contact" className="flex items-center gap-1 font-medium text text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                        <motion.li
                                            initial={{ y: -10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.1, delay: 0.7 }}
                                        >
                                            Contact
                                        </motion.li>
                                    </Link>
                                    
                                                                        
                                </ul>
                                
                                <a href="assets/Saidul's  Resume.pdf" target="_blank">
                                    <motion.button
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.1, delay: 0.9 }}
                                        className="mt-6 px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
                                        Resume
                                    </motion.button>
                                </a>
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}


                                className="mt-4 inline-flex items-center justify-center w-full py-4 gap-6 mb-6">
                                <a href="https://github.com/saidulixlam" target="_blank">
                                    <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700  rounded-full inline-flex 
                                        items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                        <VscGithubInverted />
                                    </span>
                                </a>
                                <a href="https://www.linkedin.com/in/saidul-islam-49427b218" target="_blank">
                                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center 
                                     hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                        <SiLinkedin />
                                    </span>
                                </a>
                                <a href="https://leetcode.com/saidulixlam/" target="_blank">
                                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center 
                                     hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                        <SiLeetcode />
                                    </span>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;