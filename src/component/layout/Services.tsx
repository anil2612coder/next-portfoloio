import Service from "@/static/Service";
import ContactBtn from "../menu/elements/ContactBtn";

function Services() {
    return <div id="Services" className="flex text-white min-h-full flex-col items-center bg-slate-800">
        <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
        <p className="flex text-4xl my-8 justify-center text-white font-bold">Services</p>
        <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
        <div className="flex min-h-full flex-col desktop:w-1/3 m-4 mobile:w-3/4 p-8 rounded-md transition-colors bg-slate-700 hover:bg-slate-600">
       
        <p className="text-3xl font-bold text-blue-600">Frontend Developer</p>
        <p className="mt-3 text-lg">Development of responsive web apps such as portfolios, landingpages and dashboards ,more</p>
        
    </div>
        <div className="flex min-h-full flex-col desktop:w-1/3 m-4 mobile:w-3/4 p-8 rounded-md transition-colors bg-slate-700 hover:bg-slate-600">
       
        <p className="text-3xl font-bold text-blue-600">Backend Developer</p>
        <p className="mt-3 text-lg">Development of rest api in next.js & node.js,  connect with cloud database,  more </p>
    </div>
        <div className="flex min-h-full bg-slate-700 flex-col desktop:w-1/3 m-4 mobile:w-3/4 p-8 rounded-md transition-colors hover:bg-slate-600">
       
        <p className="text-3xl font-bold text-blue-600">Full Stack Developer</p>
        <p className="mt-3 text-lg">Development of full stack application in MERN Stack make sure it has api , auth, and beautiful interface </p>
    </div>
        </div>
        <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center mb-4">You have a project? Get in Touch</p>
        <p className="font-semibold text-center mb-4">Mobile No.= +918941914392 </p>
        <p className="font-semibold text-center mb-4">G-mail.= ak26122k@gmail.com </p>
        <ContactBtn title={"Contact Me"} />

    </div>
}

export default Services;