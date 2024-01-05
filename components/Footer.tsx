import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin,SiLeetcode } from "react-icons/si";
const Footer = ()=>{
return(
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-4 gap-4 mb-6">
        <a href="https://github.com/saidulixlam" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700  rounded-full inline-flex items-center justify-center 
                hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
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
    </div>
)
}
export default Footer;