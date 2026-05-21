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
        {/* Slanted Image Card with P3R double shadow effect */}
        <div className="relative w-[340px] h-[400px] md:w-[400px] md:h-[450px] skew-x-[-8deg] overflow-hidden border-2 border-[#00f0ff] bg-[#050e21] shadow-[8px_8px_0px_#ff3e6c] transition-all duration-300 hover:shadow-[12px_12px_0px_#00f0ff]">
          
          {/* Inner image container (reverse-skewed & scaled to prevent cutoffs) */}
          <div className="absolute inset-0 skew-x-[8deg] scale-110 relative group">
            <Image
              src="/img/rian.png"
              alt="Rian Anugrah Portrait"
              width={500}
              height={500}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Holographic scanning overlay lines */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00f0ff]/10 to-transparent pointer-events-none opacity-40 mix-blend-overlay"></div>
            {/* Blue fluid vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#02050f] via-transparent to-transparent opacity-80 pointer-events-none"></div>
          </div>
          
          {/* Accent Ribbon Decoration (Top Left & Bottom Right) */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#00f0ff]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#ff3e6c]"></div>
        </div>
      </div>

      {/* RIGHT PANEL: Stylized Character HUD Stats */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-white px-4 md:px-0 space-y-6 md:space-y-8">
        
        {/* Name in high contrast black & blue slanted box */}
        <div className="skew-x-[-12deg] bg-[#02050f] border-l-4 border-[#ff3e6c] px-6 py-3 shadow-[4px_4px_0px_#00f0ff] w-fit">
          <h2 className="skew-x-[12deg] text-4xl md:text-5xl font-black tracking-wider uppercase p3r-font-display text-white p3r-text-glow">
            Rian Anugrah
          </h2>
        </div>

        {/* Job Title inside skewed bright cyan block */}
        <div className="skew-x-[-12deg] bg-[#00f0ff] px-4 py-1.5 shadow-[2px_2px_0px_rgba(255,255,255,0.8)] w-fit">
          <p className="skew-x-[12deg] text-black font-extrabold tracking-widest text-md md:text-lg p3r-font-display uppercase">
            Fullstack Engineer
          </p>
        </div>

        {/* Stylized Description with subtle side borders */}
        <div className="border-l-2 border-white/20 pl-4 py-2 max-w-md">
          <p className="text-gray-300 text-md md:text-lg leading-relaxed font-light">
            Hey, get ready to convert your Figma designs to production-ready, ultra-smooth web applications. Let&apos;s build something spectacular.
          </p>
        </div>

        {/* Hire Me (Combat Option Style) */}
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <button className="skew-x-[-12deg] bg-[#ff3e6c] hover:bg-white text-white hover:text-black transition-all duration-200 border-2 border-[#ff3e6c] shadow-[4px_4px_0px_#00f0ff] hover:shadow-[0_0_15px_#00f0ff] px-8 py-3.5 text-lg font-black tracking-widest uppercase p3r-font-display cursor-pointer">
            <a
              href="https://wa.me/6285720880038?text=Hi%20Rian%2C%20I%20want%20to%20discuss%20a%20project%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="skew-x-[12deg] block"
            >
              COMMENCE.CMD
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
                className="w-10 h-10 rounded-none border border-[#00f0ff]/30 flex items-center justify-center text-xl text-[#00f0ff] hover:text-[#02050f] hover:bg-[#00f0ff] hover:border-[#00f0ff] hover:shadow-[0_0_10px_#00f0ff] hover:skew-x-[-8deg] transition-all duration-200"
              >
                <div className="skew-x-[0deg]">{social.icon}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
