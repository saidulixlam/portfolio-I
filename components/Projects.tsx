import Image from "next/image";
import email from "@/public/assets/images/emailClone.png";
import school from "@/public/assets/images/school.png";
import expense from "@/public/assets/images/expense.png";
import ecommerce from "@/public/assets/images/ecommerce.png";
import { VscGithubInverted } from "react-icons/vsc";
const Projects = () => {
    return (
        <section className="max-w-container mx-auto lgl:px-20 py-24 mt-10 grid gap-8" id="projects">
    

            <h2 className="font-titLeFont text-3xl font-semibold flex items-center">
                <span className="text-base md:text-lg text-textGreen mr-2">#</span>
                Some of My Works<span className="mb-4 text-textGreen"> &nbsp;____________</span>
            </h2>
            <div className="w-full flex flex-col items-center justify-center gap-28 my-12">
                <div className="flex flex-col xl:flex-row gap-6">
                    <a
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="https://remail-341c0.web.app" target="_blank">
                        <div>
                            <Image
                                className="w-full h-full object-contain"
                                src={email} alt="Email" />
                        </div>

                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10 ">
                        <p className="font-titleFont text-textGreen text-sm tracking-wide">
                            Featured project
                        </p>
                        <h3 className="text-2xl font-bold">Email clone V1</h3>
                        <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-left">
                            <span className="text-textGreen">Email-clone</span> is an application
                            where user can send and receive
                            mails. Each user have their own&nbsp;<span className="text-textGreen">account</span> where they can &nbsp;
                            &nbsp;<span className="text-textGreen">login</span>. Sent items and inbox are maintained separately at the backend.
                        </p>
                        <ul className="text-xs md:text-sm font-titLeFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                            <li>
                                ReactJs
                            </li>
                            <li>
                                Redux
                            </li>
                            <li>
                                Bootstrap
                            </li>
                            <li>
                                Firebase
                            </li>
                        </ul>
                        <div className="text-2xl flex gap-4">
                            <a
                                className="hover:text-textGreen duration-300 "
                                href="https://github.com/saidulixlam/ReEmail
                             "
                                target="_blank"
                            >
                                <VscGithubInverted />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full flex flex-col items-center justify-center gap-28 my-12">
                <div className="flex flex-col xl:flex-row gap-6">
                    <a
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="https://expensehoisting.web.app/login" target="_blank">
                        <div>
                            <Image
                                className="w-full h-full object-contain"
                                src={expense} alt="expense" />
                        </div>

                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10 ">
                        <p className="font-titleFont text-textGreen text-sm tracking-wide">
                            Featured project
                        </p>
                        <h3 className="text-2xl font-bold">Expense Tracker</h3>
                        <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-left">
                            Expense Tracker allows user to
                            track their expenses and premium
                            users can get extra benefits like
                            provision to <span className="text-textGreen">download</span> their
                            expense in an excel format and
                            change theme feature. Users
                            expenses data is protected using&nbsp;
                            <span className="text-textGreen">authentication</span> method and &nbsp;<span className="text-textGreen">dark-mode</span> is added.
                        </p>
                        <ul className="text-xs md:text-sm font-titLeFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                            <li>
                                ReactJs
                            </li>
                            <li>
                                Redux
                            </li>
                            <li>
                                Bootstrap
                            </li>
                            <li>
                                Firebase
                            </li>
                            <li>
                                JavaScript
                            </li>
                        </ul>
                        <div className="text-2xl flex gap-4">
                            <a
                                className="hover:text-textGreen duration-300 "
                                href="https://github.com/saidulixlam/ExpenseApp"

                                target="_blank"
                            >
                                <VscGithubInverted />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full flex flex-col items-center justify-center gap-28 my-12">
                <div className="flex flex-col xl:flex-row gap-6">
                    <a
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="https://ecommercev1-a01a9.web.app" target="_blank">
                        <div>
                            <Image
                                className="w-full h-full object-contain"
                                src={ecommerce} alt="ecommerce" />
                        </div>

                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10 ">
                        <p className="font-titleFont text-textGreen text-sm tracking-wide">
                            Featured project
                        </p>
                        <h3 className="text-2xl font-bold">Ecommerce app</h3>
                        <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-left">
                            E-commerce website is an
                            application that provides
                            &nbsp;<span className="text-textGreen">authentication</span>&nbsp;
                            and then access to users of their
                            own cart.&nbsp; <span className="text-textGreen">Context-Api</span> is used to
                            manage the app-wise state.
                        </p>
                        <ul className="text-xs md:text-sm font-titLeFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                            <li>
                                ReactJs
                            </li>

                            <li>
                                Bootstrap
                            </li>
                            <li>
                                Firebase
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                Html & CSS
                            </li>
                        </ul>
                        <div className="text-2xl flex gap-4">
                            <a
                                className="hover:text-textGreen duration-300 "
                                href="https://github.com/saidulixlam/Ecom-firebase"
                                target="_blank"
                            >
                                <VscGithubInverted />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full flex flex-col items-center justify-center gap-28 my-12">
                <div className="flex flex-col xl:flex-row gap-6">
                    <a
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="https://saidulixlam.github.io/SchoolWebsiteV1/" target="_blank">
                        <div>
                            <Image
                                className="w-full h-full object-contain"
                                src={school} alt="school" />
                        </div>

                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center text-right xl:-ml-16 z-10 ">
                        <p className="font-titleFont text-textGreen text-sm tracking-wide">
                            Featured project
                        </p>
                        <h3 className="text-2xl font-bold">School website</h3>
                        <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-left">
                            Delving into the realms of <span className="text-textGreen">HTML, CSS, and JavaScript</span>, this project was both educational and enjoyable.
                            Exploring the intricacies of responsive design, It is
                            designed to seamlessly <span className="text-textGreen">adapt</span> &nbsp;to various devices. The culmination of my efforts resulted in a
                            user-friendly experience <span className="text-textGreen">fit</span> for all devices.
                        </p>

                        <ul className="text-xs md:text-sm font-titLeFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                            <li>
                                JavaScript
                            </li>

                            <li>
                                Html & CSS
                            </li>
                            <li>
                                Bootstrap
                            </li>

                        </ul>
                        <div className="text-2xl flex gap-4">
                            <a
                                className="hover:text-textGreen duration-300 "
                                href="https://github.com/saidulixlam/SchoolWebsiteV1"
                                target="_blank"
                            >
                                <VscGithubInverted />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Projects;