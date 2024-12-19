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
    <div className="w-full max-w-[64rem] gap-4 flex flex-col items-start justify-start lg:justify-center pt-4 text-[#222]">
      <h1 className="text-2xl mb-4 mt-8  px-4 lg:px-0">Past works</h1>
      <div className="w-full flex flex-col gap-4">
        <Card>
          <Image
            width={1280}
            height={720}
            alt="works-img"
            src="/img/ravenry.PNG"
            className="w-full lg:w-[360px]  object-cover rounded-lg border border-slate-950 drop-shadow-[5px_5px_0px_rgba(0,0,0,0.9)]"
          />
          <DescBox>
            <div className="text-7xl">
              <RiReactjsFill />
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-xl font-bold">Ravenry</p>
              <Link
                href="https://app.theravenry.com"
                target="_blank"
                className="text-sm underline"
              >
                https://app.theravenry.com
              </Link>
              <div className="flex gap-2 my-3 flex-wrap justify-center lg:justify-start">
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
          </DescBox>
        </Card>
        <Card>
          <Image
            width={1280}
            height={720}
            alt="works-img"
            src="/img/solos.PNG"
            className="w-full lg:w-[360px]  object-cover rounded-lg border border-slate-950 drop-shadow-[5px_5px_0px_rgba(0,0,0,0.9)]"
          />
          <DescBox>
            <div className="text-7xl">
              <RiNextjsFill />
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-xl font-bold">Solos</p>
              <Link
                href="https://solos.page"
                target="_blank"
                className="text-sm underline"
              >
                https://solos.page
              </Link>
              <div className="flex gap-2 my-3 flex-wrap justify-center lg:justify-start">
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
          </DescBox>
        </Card>
        <Card>
          <Image
            width={1280}
            height={720}
            alt="works-img"
            src="/img/bcendana.PNG"
            className="w-full lg:w-[360px]  object-cover rounded-lg border border-slate-950 drop-shadow-[5px_5px_0px_rgba(0,0,0,0.9)]"
          />
          <DescBox>
            <div className="text-7xl">
              <RiNextjsFill />
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <p className="text-xl font-bold">Beatrix Cendana</p>
              <Link
                href="https://botak-ps.vercel.app/monitor"
                target="_blank"
                className="text-sm underline"
              >
                https://bcendana.design
              </Link>
              <div className="flex gap-2 my-3 flex-wrap justify-center lg:justify-start">
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
          </DescBox>
        </Card>
        <Card>
          <Image
            width={1280}
            height={720}
            alt="works-img"
            src="/img/savicore.PNG"
            className="w-full lg:w-[360px]  object-cover rounded-lg border border-slate-950 drop-shadow-[5px_5px_0px_rgba(0,0,0,0.9)]"
          />
          <DescBox>
            <div className="text-7xl">
              <RiWordpressFill />
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-xl font-bold">Savicore</p>
              <Link
                href="https://savicore.com"
                target="_blank"
                className="text-sm underline"
              >
                https://savicore.com
              </Link>
              <div className="flex gap-2 my-3 flex-wrap justify-center lg:justify-start">
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
          </DescBox>
        </Card>
      </div>
    </div>
  );
}

const Pile = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-1 items-center border  px-3 text-sm text-[#222] bg-pastel-peach border-[#222]">
      {children}
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col lg:flex-row border p-10 gap-6 border-slate-950 w-full">{children}</div>;
};


const DescBox = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-4 flex-col items-center lg:items-start">{children}</div>;
};
