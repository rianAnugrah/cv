import Link from "next/link";
import React from "react";
import Image from "next/image";

import {
  DiCss3,
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
    <div className="w-full px-4 lg:px-28 gap-4 flex flex-col items-start justify-start lg:justify-center pt-4">
      <h1 className="text-4xl mb-4 mt-8">Past works</h1>
      <ContainerGlass>
       
        <Image width={1280} height={720} alt="works-img" src="/img/ravenry.PNG" className="w-full lg:w-[360px]  object-cover rounded-lg" />
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

        <Image width={1280} height={720} alt="works-img" src="/img/solos.PNG" className="w-full lg:w-[360px]  object-cover rounded-lg" />
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
        <Image width={1280} height={720} alt="works-img" src="/img/bcendana.PNG" className="w-full lg:w-[360px]  object-cover rounded-lg" />
        <div className="flex gap-4 items-start lg:items-center">
          <div className="text-7xl">
            <RiNextjsFill />
          </div>

          <div className="flex flex-col items-start">
            <p className="text-xl font-bold">Beatrix Cendana</p>
            <Link
              href="https://botak-ps.vercel.app/monitor"
              target="_blank"
              className="text-sm underline"
            >
              https://bcendana.design
            </Link>
            <div className="flex gap-2 my-3 flex-wrap">
              <Pile>
                <DiJavascript />
                <p>Astro JS</p>
              </Pile>

              <Pile>
                <DiCss3 />
                <p>Tailwind</p>
              </Pile>
              <Pile>
                <DiCss3Full />
                <p>CSS</p>
              </Pile>
            </div>
          </div>
        </div>
        <Image width={1280} height={720} alt="works-img" src="/img/savicore.PNG" className="w-full lg:w-[360px]  object-cover rounded-lg" />
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
