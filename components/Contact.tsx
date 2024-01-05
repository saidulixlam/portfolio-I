const Contact = ()=>{
return (
    <section id="contact"
    className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center">
        <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
            # What Next?
        </p>
        <h2 className="font-titleFont text-5xl font-semibold">
            Get In Touch
        </h2>
        <p className="max-w-[600px] text-textDark text-align-center">
        I am currently exploring opportunities and welcome communication. My inbox is always open, whether you have a question or just want to say hi.
         I am committed to responding promptly. If you have specific inquiries in mind, 
        feel free to reach out. I am open to discussions related to my areas of expertise and interests. Looking forward to connecting with you!
        </p>
        <a href="mailto:saidulixlam@gmail.com" target="_blank">
            <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md 
            hover:bg-hoverColor duration-300">
                Say Hello!
            </button>
        </a>
    </section>
)
}
export default Contact;