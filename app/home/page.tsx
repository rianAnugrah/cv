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
      <div className=" h-[400px] bg-[#FFF4B2] flex w-full lg:w-1/2 items-center justify-center text-[#222] p-4">
        <Image
          src="/img/rian.jpeg"
          alt="Rian"
          width={400}
          height={400}
          className="h-full w-auto aspect-square rounded-xl border  border-slate-950"
        />
      </div>
      <div className=" h-[400px] bg-[#FFC1CC] w-full lg:w-1/2 flex flex-col flex-wrap justify-center  text-[#222] p-12">
        <p className="text-5xl font-semibold">Rian Anugrah </p>

        <p className="text-lg font-semibold">Fullstack Engineer</p>

        <p className="flex-grow break-words text-ellipsis overflow-hidden">
          Hi, I am Experienced Software Engineer with a proven track record of
          success in developing user-friendly and efficient web applications.
          With over 6 years of experience in the field,
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
