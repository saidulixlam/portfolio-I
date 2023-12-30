import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin, SiLeetcode } from "react-icons/si";
const Rightside = () => {

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-textLight" >
            <a href="mailto:saidulixlam@gmail.com">
                <p className="text-sm rotate-90 w-70 -tracking-wide text-textGreen hover:text-textLight cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    saidulixlam@gmail.com
                </p>
            </a>
        </div>
    );
}

export default Rightside;