import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
 const Trv =()=>{
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full ">
            <h3 className="flex gap-1 font-medium text-xl font-titLeFont my-2">
                React tutor <span className="text-textGreen tracking-wide">@Sharpener</span>
            </h3>
            <p>
                Oct 2023 - Dec 2023
            </p>
            <ul className="my-2 ">
                <li className="text-base flex gap-2 text-textDark mr-10 p-4" >
                    <span className="text-textGreen"><TiArrowForward />
                    </span>
                    Utilized React skills to teach and assist international students, offering support and solutions to their queries.
                </li>
                <li className="text-base flex gap-2 text-textDark mr-10 p-4" >
                    <span className="text-textGreen"><TiArrowForward />
                    </span>
                    Resolved queries on a doubt portal, provided assistance in project problem-solving, 
                    and played a key role in fostering team growth and development.
                </li>
            </ul>

        </motion.div>
    )
}
export default Trv;