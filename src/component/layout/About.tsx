import Summary from "@/static/Summary";
import { DiMongodb } from "react-icons/di";
import { FaBootstrap, FaCss3Alt, FaGit, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

import { SiCloudinary, SiExpress, SiNextdotjs, SiPrisma, SiRedux, SiSocketdotio, SiTypescript } from "react-icons/si";

function About() {
    return <div className="bg-slate-800 " id="About">
        <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
        <div className="flex justify-between items-center text-white w-full">
            <div className="flex flex-row mobile:flex-col  w-full" >
                <div className="flex desktop:w-1/2 mobile:w-full mobile:p-4 flex-col desktop:p-20">
                    <Summary />
                </div>
                {/* <div className="border-2 border-blue-500">Anil</div> */}
                <div className="grid   mobile:w-full desktop:w-1/2 desktop:pr-3  grid-cols-4">
                <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <SiNextdotjs className="w-8 h-8" />
              <div className="font-semibold mt-3">Next.js</div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <FaReact className="w-8 h-8" />
              <div>React.js</div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <SiTypescript className="w-8 h-8" />
              <div>TypeScript</div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <IoLogoJavascript className="w-8 h-8" />
              <div>JavaScript</div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <FaNodeJs className="w-8 h-8" />
              <div>Node.js</div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <SiExpress className="w-8 h-8" />
              <div>Express.js</div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <DiMongodb className="w-8 h-8" />
              <div>MongoDB</div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <RiTailwindCssFill className="w-8 h-8" />
              <div>Tailwind</div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <SiRedux className="w-8 h-8" />
              <div>Redux</div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <SiCloudinary className="w-8 h-8" />
              <div>Cloudinary</div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <SiPrisma className="w-8 h-8" />
              <div>Prisma</div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <FaGit className="w-8 h-8" />
              <div>Git</div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <FaHtml5 className="w-8 h-8" />
              <div>HTML</div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <FaCss3Alt className="w-8 h-8" />
              <div>CSS</div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <FaBootstrap className="w-8 h-8" />
              <div>Bootstrap</div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center">
              <SiSocketdotio className="w-8 h-8" />
              <div>Socket.Io</div>
            </div>
                </div>
            </div>
        </div>
    </div>
}

export default About;