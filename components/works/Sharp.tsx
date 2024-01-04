import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
const Sharp = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full ">
            <h3 className="flex gap-1 font-medium text-xl font-titLeFont my-2">
                Web dev Intern <span className="text-textGreen tracking-wide">@Sharpener</span>
            </h3>
            <p>
                Aug 2022 - March 2023
            </p>
            <ul className="my-2 ">
                <li className="text-base flex gap-2 text-textDark mr-10 p-4" >
                    <span className="text-textGreen"><TiArrowForward />
                    </span>
                    Designed and implemented responsive, real-time applications using a full-stack approach with technologies including React,
                    Redux, and Node.js, while continuously expanding my expertise in the dynamic landscape of front-end development.
                </li>
                <li className="text-base flex gap-2 text-textDark mr-10 p-4" >
                    <span className="text-textGreen"><TiArrowForward />
                    </span>
                    Acquired proficiency in a diverse set of technologies encompassing web development, React, Redux, Node.js, Firebase, Postman, 
                    Bootstrap, Tailwind CSS, and Next.js, demonstrating versatility across the spectrum of modern front-end and full-stack development.
                </li>
            </ul>

        </motion.div>
    )
}
export default Sharp;