import Link from "next/link";
import {
  ChevronRight,
  Github,
  Globe,
  Grid3x3,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

export function ProfileTile({ profile }) {
  const links = [
    profile.github && {
      label: "GitHub",
      href: profile.github,
      icon: Github,
      external: true,
    },
    profile.linkedin && {
      label: "LinkedIn",
      href: profile.linkedin,
      icon: Linkedin,
      external: true,
    },
    profile.email && {
      label: "Email",
      href: `mailto:${profile.email}`,
      icon: Mail,
      external: false,
    },
    profile.website && {
      label: "Website",
      href: profile.website,
      icon: Globe,
      external: true,
    },
  ].filter(Boolean);

  return (
    <section
      className="tile tile-red home-profile"
      aria-labelledby="profile-name"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="tile-label">{profile.role}</p>
        {profile.location ? (
          <p className="tile-label inline-flex items-center gap-1">
            <MapPin size={12} aria-hidden="true" />
            {profile.location}
          </p>
        ) : null}
      </div>

      <h1 id="profile-name" className="tile-name profile-name mt-4 sm:mt-5">
        {profile.name}
      </h1>

      <p className="mt-3 max-w-[46ch] text-base leading-snug text-white sm:text-lg">
        {profile.tagline}
      </p>

      {profile.bio ? (
        <p className="profile-bio tile-body mt-3 max-w-[70ch]">
          {profile.bio}
        </p>
      ) : null}

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
        <Link className="tile-action" href="/projects">
          Projects
          <ChevronRight size={14} aria-hidden="true" />
        </Link>

        <Link className="tile-action-ghost" href="/apps">
          <Grid3x3 size={13} aria-hidden="true" />
          Apps
        </Link>

        <ul className="ml-auto flex items-center gap-1.5" aria-label="Profile links">
          {links.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                className="social-link"
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={
                  external
                    ? `${label} (opens in a new tab)`
                    : `${label} ${profile.email ?? ""}`.trim()
                }
              >
                <Icon size={15} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
