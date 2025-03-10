import Image from "next/image";
import { DiReact } from "react-icons/di";
import {
  TiMail,
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import TextReveal from "@/app/(shared)/components/text-reveal";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row w-full lg:max-w-[64rem] bg-slate-950 p-[1px] gap-[1px] ">
      <div className=" h-[400px] bg-[#FFF4B2] flex w-full lg:w-1/2 items-center justify-center text-[#222] ">
        <Image
          src="/img/rian.png"
          alt="Rian"
          width={400}
          height={400}
          className="h-full w-full object-cover   "
        />
      </div>
      <div className=" bg-[#FFC1CC] w-full lg:w-1/2 flex flex-col flex-wrap justify-center  text-[#222] p-12">
        <p className="text-5xl font-semibold">Rian Anugrah </p>

        <p className="text-lg font-semibold">Fullstack Engineer</p>

        <p className="flex-grow break-words text-ellipsis overflow-hidden mt-4">
          Hi, Get ready to convert your figma to Production Ready web/apps!
        </p>
        <p className="text-[#222] border my-6 flex border-slate-950 hover:text-[#f7f7f7] transition-all duration-300  text-xl p-[1rem] relative group cursor-pointer bg-[#FF6600]   flex-col items-center justify-center px-12 w-fit ">
          <a
            href="https://wa.me/6285720880038?text=Hi%20Rian%2C%20I%20want%20to%20discuss%20a%20project%20with%20you!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
        </p>
        <div className="flex gap-6 text-2xl lg:text-3xl">
          <Link
            href="mailto:asnara.dev@gmail.com"
            target="_blank"
            className="hover:scale-125 hover:text-slate-500 transition-all hover:border-slate-500 border border-transparent"
          >
            <TiMail />
          </Link>
          <Link
            href="https://facebook.com/sei.nairuka"
            target="_blank"
            className="hover:scale-125 hover:text-slate-500 transition-all hover:border-slate-500 border border-transparent"
          >
            <TiSocialFacebook />
          </Link>
          <Link
            href="https://id.linkedin.com/in/rian-anugrah-217113118"
            target="_blank"
            className="hover:scale-125 hover:text-slate-500 transition-all hover:border-slate-500 border border-transparent"
          >
            <TiSocialLinkedin />
          </Link>
          <Link
            href="https://twitter.com/@asnaradirdja"
            target="_blank"
            className="hover:scale-125 hover:text-slate-500 transition-all hover:border-slate-500 border border-transparent"
          >
            <TiSocialTwitter />
          </Link>
          <Link
            href="https://github.com/rianAnugrah"
            target="_blank"
            className="hover:scale-125 hover:text-slate-500 transition-all hover:border-slate-500 border border-transparent"
          >
            <TiSocialGithub />
          </Link>
        </div>
      </div>
    </main>
  );
}
