import Link from "next/link";
import {
  ChevronRight,
  Github,
  Globe,
  Grid3x3,
  Linkedin,
  Mail,
} from "lucide-react";
import { PortraitSlot, TornEdge } from "@/components/visual/Marks";

function splitName(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length < 2) return { first: name.trim(), rest: "" };
  return { first: parts[0], rest: parts.slice(1).join(" ") };
}

export function ProfileTile({ profile }) {
  const { first, rest } = splitName(profile.name);
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
      <span className="profile-band" aria-hidden="true" />
      <TornEdge />

      <div className="profile-layout">
        <div className="profile-head">
          <p className="stamp stamp-paper">
            <span>{profile.role}</span>
          </p>
          <PortraitSlot monogram={profile.monogram} avatar={profile.avatar} />
        </div>

        <h1 id="profile-name" className="profile-name">
          <span className="profile-first">{first}</span>
          {rest ? (
            <>
              {" "}
              <span className="name-plate">
                <span>{rest}</span>
              </span>
            </>
          ) : null}
        </h1>

        <p className="profile-tagline">{profile.tagline}</p>

        {profile.bio ? <p className="profile-bio">{profile.bio}</p> : null}

        <div className="profile-actions">
          <Link className="tile-action" href="/projects">
            <span>Projects</span>
            <ChevronRight size={14} aria-hidden="true" />
          </Link>

          <Link className="tile-action-ghost" href="/apps">
            <Grid3x3 size={13} aria-hidden="true" />
            <span>Apps</span>
          </Link>

          {links.length > 0 ? (
            <ul className="profile-links" aria-label="Profile links">
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
          ) : null}
        </div>
      </div>
    </section>
  );
}
