import { motion } from "framer-motion";
function Banner() {
    return (
        <section id="home"
            className="h-full max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
            <h3 className="text-lg font-titLeFont tracking-wide text-textGreen">Hi, my name is...</h3>
            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-4xl lgl:text-6xl font-titLeFont font-semibold flex flex-col">
                Saidul Islam.
                <span className="lgl:text-5xl text-textDark mt-2 lgl:mt-4">Building web for the future</span>
            </motion.h1>
            <motion.p 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-base md:max-w-[650px] text-textDark font-medium">
                {" "}
                I am an aspiring web developer with hands-on skills in React and front-end technologies. My journey has been marked by continuous 
                learning and valuable experiences, all with the goal of becoming a better person. This pursuit of personal growth is not just a desire;
                 it's a commitment, reflected in my dedication to honing my skills and contributing meaningfully to the world of web development.{" "}
                <a href="https://www.linkedin.com/in/saidul-islam-49427b218" target="_blank">
                    <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">Learn more..</span>
                </a>
            </motion.p>
        </section>
    )
}
export default Banner;