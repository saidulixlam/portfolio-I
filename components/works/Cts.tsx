import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
const Cts = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full">
            <h3 className="flex gap-1 font-medium text-xl font-titLeFont">
                Engineer Trainee<span className="text-textGreen tracking-wide">@Cognizant</span>
            </h3>
            <p>
                Aug 2022 - March 2023
            </p>
            <ul className="my-2 ">
                <li className="text-base flex gap-2 text-textDark mr-10 p-4" >
                    <span className="text-textGreen"><TiArrowForward />
                    </span>
                    As an Engineer Trainee at Cognizant, my primary focus was on problem-solving. While development wasn't the central aspect of 
                    my position, I gained valuable exposure to teamwork and actively contributed to collaborative projects. This experience refined
                     my skills in both teamwork and problem-solving.
                </li>
                <li className="text-base flex gap-2 text-textDark mr-10 p-4" >
                    <span className="text-textGreen"><TiArrowForward />
                    </span>
                    In addition to my assigned responsibilities, I took the initiative to independently explore and learn more about development,
                     showcasing my commitment to continuous learning and professional growth.
                </li>
            </ul>

        </motion.div>
    )
}
export default Cts;