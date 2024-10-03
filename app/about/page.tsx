import React from "react";
import {
  RiBrush2Fill,
  RiCss3Fill,
  RiDatabase2Fill,
  RiDatabaseFill,
  RiGithubFill,
  RiGithubLine,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsLine,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SlSettings } from "react-icons/sl";
import ContainerGlass from "@/app/(shared)/components/container-glass";

export default function AboutPage() {
  return (
    <div className="w-full px-4 lg:px-28 gap-4 flex flex-col items-start justify-start lg:justify-center pt-4">
      <h1 className="text-4xl mb-4 mt-8">About Me</h1>
      <ContainerGlass>
        <div>
          Hi, I am Experienced Software Engineer with a proven track record of
          success in developing user-friendly and efficient web applications.
          With over 6 years of experience in the field,
        </div>
        <div className="flex flex-col lg:flex-row gap-6 ">
          <div className="flex flex-col gap-4">
            {" "}
            <p className="font-bold text-xl mt-6">What I do</p>
            <div>
              <p className="font-bold text-sm">Advanced frontend engineer</p>
              <p className="text-sm">
                Experienced App Developer skilled in developing responsive
                websites or applications. Proficient in creating responsive,
                user-friendly, and high-performing solutions using the latest
                technologies.
              </p>
            </div>
            <div>
              <p className="font-bold text-sm">Backend Engineer</p>
              <p className="text-sm">
                With expertise in building scalable, high-performance server-side
                applications using Node.js, MongoDB, MySQL, SQLite. Experienced
                in API development, database design, and deployment,
                ensuring secure and efficient backend solutions.
              </p>
            </div>
            <div>
              <p className="font-bold text-sm">Software Architect</p>
              <p className="text-sm">
                Experienced Software Architect skilled in designing and
                developing scalable and efficient software solutions. Proficient
                in system architecture, technology integration, and ensuring
                high-quality performance.
              </p>
            </div>
          </div>

          <div className="block h-[px] w-full lg:h-3/5 lg:w-[1px] bg-white/30 self-center"></div>
          <div className="flex flex-col gap-4">
            {" "}
            <p className="font-bold text-xl mt-6">Working Skills</p>
            <div className="flex flex-wrap gap-2">
              <div className="flex">
                <Pile>
                  <RiNextjsLine />
                  <p>NextJs</p>
                </Pile>
              </div>
              <div className="flex">
                <Pile>
                  <RiReactjsFill />
                  <p>ReactJs</p>
                </Pile>
              </div>
              <div className="flex">
                <Pile>
                  <RiTailwindCssFill />
                  <p>Tailwind</p>
                </Pile>
              </div>
              <div className="flex">
                <Pile>
                  <RiHtml5Fill />
                  <p>HTML</p>
                </Pile>
              </div>
              <div className="flex">
                <Pile>
                  <RiCss3Fill />
                  <p>CSS</p>
                </Pile>
              </div>
              <div className="flex">
                <Pile>
                  <RiDatabaseFill />
                  <p>MongoDB</p>
                </Pile>
              </div>
              <div className="flex">
                <Pile>
                  <RiJavascriptFill />
                  <p>Javascript</p>
                </Pile>
              </div>
              <div className="flex">
                <Pile>
                  <RiNodejsFill />
                  <p>Node</p>
                </Pile>
              </div>
              <div className="flex">
                <Pile>
                  <RiDatabase2Fill />
                  <p>MySQL</p>
                </Pile>
              </div>
              <div className="flex">
                <Pile>
                  <RiBrush2Fill />
                  <p>Figma</p>
                </Pile>
              </div>
              <div className="flex">
                <Pile>
                  <RiBrush2Fill />
                  <p>Photoshop</p>
                </Pile>
              </div>{" "}
              <div className="flex">
                <Pile>
                  <RiNodejsFill />
                  <p>Express</p>
                </Pile>
              </div>{" "}
              <div className="flex">
                <Pile>
                  <RiBrush2Fill />
                  <p>Illustrator</p>
                </Pile>
              </div>{" "}
              <div className="flex">
                <Pile>
                  <RiJavascriptFill />
                  <p>Vercel</p>
                </Pile>
              </div>{" "}
              <div className="flex">
                <Pile>
                  <RiJavascriptFill />
                  <p>Netlify</p>
                </Pile>
              </div>{" "}
              <div className="flex">
                <Pile>
                  <RiGithubFill />
                  <p>Github</p>
                </Pile>
              </div>
            </div>
          </div>
        </div>
      </ContainerGlass>
    </div>
  );
}

const Pile = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-1 items-center border rounded-full px-3 text-md text-slate-300 border-slate-300">
      {children}
    </div>
  );
};
