import { FaReact, FaJava, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiRedux, SiBootstrap, SiTailwindcss, SiPostman, SiFirebase, SiNpm } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import profile from "@/public/assets/images/profile.png";

const About = () => {
    return (
        <section id="about" className="max-w-containerSmall py-10 lgl:py-32 flex-col gap-8">
            <h2 className="font-titLeFont text-3xl font-semibold flex items-center">
                <span className="text-base md:text-lg text-textGreen mr-2">#</span>
                About me
            </h2>
            <div className="mt-8 flex flex-col lgl:flex-row gap-12">
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                    <p>Greetings! I am Saidul, a budding front-end developer driven by a deep passion for shaping and constructing
                        responsive websites. Embarking on my web development journey two years ago, I deliberately chose this path.
                        Since that pivotal decision, my days have been marked by an unwavering commitment to perpetual learning,
                        constant creation, and ongoing refinement.
                    </p>
                    <p>
                        Here are few <span className="text-textGreen" >technologies</span> I have been working with recently :
                    </p>
                    <ul className="max-w-[450px] text-sm font-titLeFont grid grid-cols-2 gap-2 mt-6">
                        <li className="flex items-center gap-2"><span className="text-textGreen" ><AiFillThunderbolt /></span>
                            JavaScript <p className="text-textGreen" ><DiJavascript /></p>
                        </li>
                        <li className="flex items-center gap-2"><span className="text-textGreen" ><AiFillThunderbolt /></span>
                            React <p className="text-textGreen" ><FaReact /></p>
                        </li>
                        <li className="flex items-center gap-2"><span className="text-textGreen" ><AiFillThunderbolt /></span>
                            Redux <p className="text-textGreen" ><SiRedux /></p>
                        </li>
                        <li className="flex items-center gap-2"><span className="text-textGreen" ><AiFillThunderbolt /></span>
                            NodeJs <p className="text-textGreen" ><SiNpm /></p>
                        </li>
                        <li className="flex items-center gap-2"><span className="text-textGreen" ><AiFillThunderbolt /></span>
                            Tailwind <p className="text-textGreen" ><SiTailwindcss /></p>
                        </li>
                        <li className="flex items-center gap-2"><span className="text-textGreen" ><AiFillThunderbolt /></span>
                            Java <p className="text-textGreen" ><FaJava /></p>
                        </li>
                        <li className="flex items-center gap-2"><span className="text-textGreen" ><AiFillThunderbolt /></span>
                            Bootstrap <p className="text-textGreen" ><SiBootstrap /></p>
                        </li>
                        <li className="flex items-center gap-2"><span className="text-textGreen" ><AiFillThunderbolt /></span>
                            Html <p className="text-textGreen" ><FaHtml5 /></p>
                        </li>
                        <li className="flex items-center gap-2"><span className="text-textGreen" ><AiFillThunderbolt /></span>
                            CSS <p className="text-textGreen" ><FaCss3 /></p>
                        </li>
                        <li className="flex items-center gap-2"><span className="text-textGreen" ><AiFillThunderbolt /></span>
                            firebase <p className="text-textGreen" ><SiFirebase /></p>
                        </li>
                        <li className="flex items-center gap-2"><span className="text-textGreen" ><AiFillThunderbolt /></span>
                            Github <p className="text-textGreen" ><VscGithubInverted /></p>
                        </li>
                        <li className="flex items-center gap-2"><span className="text-textGreen" ><AiFillThunderbolt /></span>
                            Postman <p className="text-textGreen" ><SiPostman /></p>
                        </li>
                    </ul>
                </div>
                
                    <div className="bg-text-textGreen mdl:w-1/3 p-6 mr-12 sm:mr-0 rounded-full ">
                        <div className="overflow-hidden rounded-full h-70 md:w-60 w-full object-cover shadow-md p-4 hover:shadow-textGreen">
                            <Image
                                className="w-full h-full rounded-full object-cover transition-transform transform group-hover:scale-105"
                                src={profile}
                                alt="profile"
                            />
                        </div>
                    </div>
               

            </div>
        </section>
    )
}
export default About;