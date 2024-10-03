import Image from "next/image";
import { DiReact } from "react-icons/di";
import { TiMail, TiSocialFacebook, TiSocialGithub, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import TextReveal from "@/app/(shared)/components/text-reveal";
import Link from "next/link";

export default function Home() {
  return (
  <main className="w-full h-screen p-4 lg:px-28 gap-4 flex flex-col items-center lg:items-start justify-center">
    <Image src="/img/rian.jpeg" alt="Rian" width={200} height={200} className="rounded-lg shadow"/>
    <p className="text-3xl lg:text-7xl text-center lg:text-left">Rian Anugrah </p>
    
    <TextReveal />
    <div className="flex gap-6 text-3xl lg:text-5xl">
      <Link href="mailto:asnara.dev@gmail.com" target="_blank" className="hover:scale-125 hover:text-amber-300 transition-all"><TiMail /></Link>      
      <Link href="https://facebook.com/sei.nairuka" target="_blank" className="hover:scale-125 hover:text-amber-300 transition-all"><TiSocialFacebook /></Link>
      <Link href="https://id.linkedin.com/in/rian-anugrah-217113118" target="_blank" className="hover:scale-125 hover:text-amber-300 transition-all"><TiSocialLinkedin /></Link>
      <Link href="https://twitter.com/@asnaradirdja" target="_blank" className="hover:scale-125 hover:text-amber-300 transition-all"><TiSocialTwitter /></Link>
      <Link href="https://github.com/rianAnugrah" target="_blank" className="hover:scale-125 hover:text-amber-300 transition-all"><TiSocialGithub /></Link>
    </div>
  </main>
  );
}
