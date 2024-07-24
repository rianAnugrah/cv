import Link from "next/link";
import React from "react";
import {
  DiCss3Full,
  DiFirebase,
  DiHtml5,
  DiJavascript,
  DiMongodb,
  DiNodejs,
  DiPostgresql,
  DiReact,
  DiWordpress,
} from "react-icons/di";
import { RiNextjsFill, RiReactjsFill, RiWordpressFill } from "react-icons/ri";
import ContainerGlass from "@/app/(shared)/components/container-glass";

export default function WorksPage() {
  return (
    <div className="w-full h-screen px-4 lg:px-28 gap-4 flex flex-col items-start justify-start lg:justify-center pt-4">
      <h1 className="text-4xl mb-4">Past projects</h1>
      <ContainerGlass>
        <div className="flex gap-4 items-start lg:items-center">
          <div className="text-7xl">
            <RiReactjsFill />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-xl font-bold">Ravenry</p>
            <Link
              href="https://app.theravenry.com"
              target="_blank"
              className="text-sm underline"
            >
              https://app.theravenry.com
            </Link>
            <div className="flex gap-2 my-3 flex-wrap">
              <Pile>
                <DiReact />
                <p>React</p>
              </Pile>
              <Pile>
                <DiNodejs />
                <p>NodeJs</p>
              </Pile>
              <Pile>
                <DiMongodb />
                <p>MongoDB</p>
              </Pile>
              <Pile>
                <DiCss3Full />
                <p>CSS</p>
              </Pile>
              <Pile>
                <DiFirebase />
                <p>Firebase</p>
              </Pile>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-start lg:items-center">
          <div className="text-7xl">
            <RiNextjsFill />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-xl font-bold">Solos</p>
            <Link
              href="https://solos.page"
              target="_blank"
              className="text-sm underline"
            >
              https://solos.page
            </Link>
            <div className="flex gap-2 my-3 flex-wrap">
              <Pile>
                <DiReact />
                <p>React</p>
              </Pile>
              <Pile>
                <DiNodejs />
                <p>NodeJs</p>
              </Pile>
              <Pile>
                <DiMongodb />
                <p>MongoDB</p>
              </Pile>
              <Pile>
                <DiCss3Full />
                <p>CSS</p>
              </Pile>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-start lg:items-center">
          <div className="text-7xl">
            <RiNextjsFill />
          </div>

          <div className="flex flex-col items-start">
            <p className="text-xl font-bold">Botak Ps</p>
            <Link
              href="https://botak-ps.vercel.app/monitor"
              target="_blank"
              className="text-sm underline"
            >
              https://botak-ps.vercel.app
            </Link>
            <div className="flex gap-2 my-3 flex-wrap">
              <Pile>
                <DiReact />
                <p>React</p>
              </Pile>

              <Pile>
                <DiPostgresql />
                <p>Supabase</p>
              </Pile>
              <Pile>
                <DiCss3Full />
                <p>CSS</p>
              </Pile>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-start lg:items-center">
          <div className="text-7xl">
            <RiWordpressFill />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-xl font-bold">Savicore</p>
            <Link
              href="https://savicore.com"
              target="_blank"
              className="text-sm underline"
            >
              https://savicore.com
            </Link>
            <div className="flex gap-2 my-3 flex-wrap">
              <Pile>
                <DiWordpress />
                <p>Wordpress</p>
              </Pile>
              <Pile>
                <DiHtml5 />
                <p>HTML5</p>
              </Pile>
              <Pile>
                <DiJavascript />
                <p>Javascript</p>
              </Pile>
              <Pile>
                <DiCss3Full />
                <p>CSS</p>
              </Pile>
            </div>
          </div>
        </div>
      </ContainerGlass>
    </div>
  );
}

const Pile = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-1 items-center border rounded-full px-3 text-sm text-slate-300 border-slate-300">
      {children}
    </div>
  );
};
