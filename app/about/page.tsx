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

    <>
      <div className="w-full lg:max-w-[64rem] text-[#222]">
        <h1 className="text-2xl mb-4 mt-8 px-4 lg:px-0">About Me</h1>
      </div>
      <main className="flex flex-col md:flex-row w-full lg:max-w-[64rem] p-[1px] gap-[1px] bg-slate-950 ">
        <div className=" h-[400px] bg-[#FFF4B2] flex w-full items-start justify-start text-[#222] p-4">
          <div className="flex flex-col lg:flex-row gap-6 ">
            <div className="flex flex-col gap-4">
              {" "}
              <p className="font-bold text-xl">What I do</p>
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
                  With expertise in building scalable, high-performance
                  server-side applications using Node.js, MongoDB, MySQL,
                  SQLite. Experienced in API development, database design, and
                  deployment, ensuring secure and efficient backend solutions.
                </p>
              </div>
              <div>
                <p className="font-bold text-sm">Software Architect</p>
                <p className="text-sm">
                  Experienced Software Architect skilled in designing and
                  developing scalable and efficient software solutions.
                  Proficient in system architecture, technology integration, and
                  ensuring high-quality performance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[400px] bg-[#A9D6EB] flex w-full items-start justify-start text-[#222] p-4">

        <div className="flex flex-col gap-4 text-[#222]">
            {" "}
            <p className="font-bold text-xl ">Working Skills</p>
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
      </main>
    </>
  );
}

const Pile = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-1 items-center border rounded-full px-3 text-md text-[#222] border-[#222]">
      {children}
    </div>
  );
};
