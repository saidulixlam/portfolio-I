import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin,SiLeetcode } from "react-icons/si";
const Leftside = () => {
    
return <>
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-textLight" >
        <div className="flex flex-col gap-5">
            <a href="https://github.com/saidulixlam" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <VscGithubInverted />
                </span>
            </a>
            <a href="https://www.linkedin.com/in/saidul-islam-49427b218" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SiLinkedin />
                </span>
            </a>
            <a href="https://leetcode.com/saidulixlam/" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SiLeetcode />
                </span>
            </a>
            <a href="https://leetcode.com/saidulixlam/" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SiLeetcode />
                </span>
            </a>
            <a href="https://leetcode.com/saidulixlam/" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SiLeetcode />
                </span>
            </a>
        </div>
        {/* <div className="w-[2px] h-32 bg-textDark ">

        </div> */}
    </div>
</>
}

export default Leftside;