"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({
  label,
  icon,
  href,
}: {
  label: string;
  icon: React.ReactNode;
  href: string;
}) => {
  const pathname = usePathname();

  return (
    <Link href={href} className="tooltip tooltip-right" data-tip={label}>
      <div
        className={`hover:backdrop-blur-sm flex flex-col items-center hover:bg-white/10 relative p-1 lg:p-4 rounded-lg transition-all duration-200  ${
          pathname.includes(href)
            ? "text-white"
            : "text-zinc-400 hover:text-white/60"
        }`}
      >
        
        {icon}
          <div className="lg:hidden text-xs text-center w-full ">{label}</div>
      </div>
    </Link>
  );
};

export default NavItem;
