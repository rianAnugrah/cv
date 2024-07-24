import Image from "next/image";
import { DiReact } from "react-icons/di";
import { TiMail, TiSocialFacebook, TiSocialGithub, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import TextReveal from "@/app/(shared)/components/text-reveal";

export default function Home() {
  return (
  <main className="w-full h-screen p-4 lg:px-28 gap-4 flex flex-col items-center lg:items-start justify-center">
    <Image src="/img/rian.jpeg" alt="Rian" width={200} height={200} className="rounded-lg shadow"/>
    <p className="text-3xl lg:text-7xl text-center lg:text-left">Rian Anugrah </p>
    
    <TextReveal />
    <div className="flex gap-6 text-xl lg:text-3xl">
      <div className="hover:scale-125 hover:text-amber-300 transition-all"><TiMail /></div>      
      <div className="hover:scale-125 hover:text-amber-300 transition-all"><TiSocialFacebook /></div>
      <div className="hover:scale-125 hover:text-amber-300 transition-all"><TiSocialLinkedin /></div>
      <div className="hover:scale-125 hover:text-amber-300 transition-all"><TiSocialTwitter /></div>
      <div className="hover:scale-125 hover:text-amber-300 transition-all"><TiSocialGithub /></div>
    </div>
  </main>
  );
}
