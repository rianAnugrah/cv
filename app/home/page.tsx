import Image from "next/image";
import {
  TiMail,
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row w-full lg:max-w-[64rem] bg-transparent gap-6 md:gap-8 items-center py-8">
      
      {/* LEFT PANEL: Stylized Character Portrait */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        {/* Neon Image Card with Retro 80s double shadow effect */}
        <div className="relative w-[340px] h-[400px] md:w-[400px] md:h-[450px] overflow-hidden border-4 border-[#00ffff] bg-[#100720] retro-box-glow transition-all duration-300 hover:shadow-[0_0_30px_#ff00ff]">
          
          {/* Inner image container */}
          <div className="absolute inset-0 relative group">
            <Image
              src="/img/rian.png"
              alt="Rian Anugrah Portrait"
              width={500}
              height={500}
              className="h-full w-full object-cover sepia contrast-125 transition-transform duration-500 group-hover:scale-105"
            />
            {/* Retro scanning overlay lines */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff00ff]/20 to-[#00ffff]/20 pointer-events-none opacity-60 mix-blend-overlay"></div>
            {/* Purple fluid vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#100720] via-transparent to-transparent opacity-90 pointer-events-none"></div>
          </div>
          
          {/* Accent Ribbon Decoration (Top Left & Bottom Right) */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-8 border-l-8 border-[#ff00ff]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-8 border-r-8 border-[#00ffff]"></div>
        </div>
      </div>

      {/* RIGHT PANEL: Stylized Character HUD Stats */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-white px-4 md:px-0 space-y-6 md:space-y-8">
        
        {/* Name in high contrast black & pink box */}
        <div className="bg-[#100720] border-l-8 border-[#ff00ff] px-6 py-3 shadow-[8px_8px_0px_#00ffff] w-fit">
          <h2 className="text-4xl md:text-5xl font-black tracking-wider uppercase retro-font-display text-[#00ffff] retro-text-glow retro-glitch">
            Rian Anugrah
          </h2>
        </div>

        {/* Job Title inside bright cyan block */}
        <div className="bg-[#ff00ff] px-4 py-1.5 shadow-[4px_4px_0px_rgba(0,255,255,0.8)] w-fit">
          <p className="text-[#100720] font-extrabold tracking-widest text-md md:text-xl retro-font-display uppercase">
            Fullstack Engineer
          </p>
        </div>

        {/* Stylized Description with subtle side borders */}
        <div className="border-l-4 border-[#00ffff]/50 pl-4 py-2 max-w-md bg-[#100720]/50 backdrop-blur-sm">
          <p className="text-gray-200 text-md md:text-lg leading-relaxed font-light">
            Hey, get ready to convert your Figma designs to production-ready, ultra-smooth web applications. Let&apos;s build something spectacular.
          </p>
        </div>

        {/* Hire Me (Arcade Option Style) */}
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <button className="bg-[#ff00ff] hover:bg-[#00ffff] text-[#100720] transition-all duration-200 border-4 border-[#100720] shadow-[6px_6px_0px_#00ffff] hover:shadow-[0_0_20px_#ff00ff] px-8 py-3.5 text-xl font-black tracking-widest uppercase retro-font-display cursor-pointer">
            <a
              href="https://wa.me/6285720880038?text=Hi%20Rian%2C%20I%20want%20to%20discuss%20a%20project%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="block animate-pulse"
            >
              START GAME
            </a>
          </button>

          {/* Styled Social Icons */}
          <div className="flex gap-4 items-center">
            {[
              { icon: <TiMail />, href: "mailto:asnara.dev@gmail.com" },
              { icon: <TiSocialFacebook />, href: "https://facebook.com/sei.nairuka" },
              { icon: <TiSocialLinkedin />, href: "https://id.linkedin.com/in/rian-anugrah-217113118" },
              { icon: <TiSocialTwitter />, href: "https://twitter.com/@asnaradirdja" },
              { icon: <TiSocialGithub />, href: "https://github.com/rianAnugrah" }
            ].map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                target="_blank"
                className="w-10 h-10 rounded-none border-2 border-[#00ffff] bg-[#100720] flex items-center justify-center text-xl text-[#00ffff] hover:text-[#100720] hover:bg-[#00ffff] hover:shadow-[0_0_15px_#00ffff] transition-all duration-200"
              >
                <div>{social.icon}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
