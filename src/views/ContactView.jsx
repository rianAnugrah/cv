"use client";

import {
  Briefcase,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { useProfile } from "@/components/providers/ProfileProvider";
import { ViewHeader } from "@/components/ui/ViewHeader";
import { prettyUrl } from "@/lib/urls";

const CHANNELS = [
  {
    key: "email",
    label: "Email",
    colorClass: "tile-red",
    icon: Mail,
    value: (profile) => profile.email,
    href: (profile) => (profile.email ? `mailto:${profile.email}` : null),
    external: false,
  },
  {
    key: "github",
    label: "GitHub",
    colorClass: "tile-dark",
    icon: Github,
    value: (profile) => prettyUrl(profile.github),
    href: (profile) => profile.github,
    external: true,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    colorClass: "tile-red-deep",
    icon: Linkedin,
    value: (profile) => prettyUrl(profile.linkedin),
    href: (profile) => profile.linkedin,
    external: true,
  },
  {
    key: "website",
    label: "Website",
    colorClass: "tile-paper",
    icon: Globe,
    value: (profile) => prettyUrl(profile.website),
    href: (profile) => profile.website,
    external: true,
  },
];

export function ContactView() {
  const { profile } = useProfile();

  if (!profile) return null;

  const channels = CHANNELS.filter((channel) => channel.href(profile));
  const education = profile.education;
  const currentRole = profile.currentRole;
  const hasDetails =
    Boolean(profile.location) ||
    Boolean(education?.institution) ||
    Boolean(education?.program) ||
    Boolean(currentRole);

  return (
    <div className="view-column">
      <ViewHeader
        kicker="03 — Reach"
        title="Contact"
        subtitle={`${profile.name}, ${profile.role}`}
      />

      <div className="contact-grid">
        {channels.length > 0 ? (
          <div className="contact-channels">
            {channels.map((channel) => {
              const Icon = channel.icon;
              const value = channel.value(profile);
              const stampClass =
                channel.colorClass === "tile-red" ||
                channel.colorClass === "tile-red-deep"
                  ? "stamp stamp-paper"
                  : "stamp stamp-red";

              return (
                <a
                  key={channel.key}
                  className={`tile tile-link tile-flip ${channel.colorClass} contact-channel`}
                  href={channel.href(profile)}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  aria-label={`${channel.label}: ${value}${
                    channel.external ? " (opens in a new tab)" : ""
                  }`}
                >
                  <p className="contact-watermark" aria-hidden="true">
                    {channel.label}
                  </p>
                  <div className="tile-kicker">
                    <p className={stampClass}>
                      <span>{channel.label}</span>
                    </p>
                    <span className="icon-pop corner-icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={1.8} />
                    </span>
                  </div>

                  <div className="relative z-[1] mt-auto">
                    <p className="contact-value">{value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        ) : null}

        {hasDetails ? (
          <section
            className={`tile tile-dark contact-details ${
              channels.length === 0 ? "lg:col-span-2" : ""
            }`}
            aria-labelledby="contact-details-title"
          >
            <p className="contact-watermark" aria-hidden="true">
              Details
            </p>
            <h2 id="contact-details-title" className="stamp stamp-red">
              <span>Details</span>
            </h2>

            <dl className="relative z-[1] mt-8 grid gap-5 sm:grid-cols-2">
              {currentRole ? (
                <div className="detail-item">
                  <span className="detail-icon" aria-hidden="true">
                    <Briefcase size={16} strokeWidth={1.8} />
                  </span>
                  <div>
                    <dt className="detail-label">Current role</dt>
                    <dd className="detail-value">
                      {currentRole.title}
                      {currentRole.company || currentRole.year ? (
                        <span className="mt-0.5 block text-xs font-normal opacity-70">
                          {[currentRole.company, currentRole.year]
                            .filter(Boolean)
                            .join(", ")}
                        </span>
                      ) : null}
                    </dd>
                  </div>
                </div>
              ) : null}

              {profile.location ? (
                <div className="detail-item">
                  <span className="detail-icon" aria-hidden="true">
                    <MapPin size={16} strokeWidth={1.8} />
                  </span>
                  <div>
                    <dt className="detail-label">Location</dt>
                    <dd className="detail-value">{profile.location}</dd>
                  </div>
                </div>
              ) : null}

              {education?.institution ? (
                <div className="detail-item">
                  <span className="detail-icon" aria-hidden="true">
                    <GraduationCap size={16} strokeWidth={1.8} />
                  </span>
                  <div>
                    <dt className="detail-label">Education</dt>
                    <dd className="detail-value">
                      {education.institution}
                      {education.program ? (
                        <span className="mt-0.5 block text-xs font-normal opacity-70">
                          {education.program}
                        </span>
                      ) : null}
                    </dd>
                  </div>
                </div>
              ) : null}
            </dl>
          </section>
        ) : null}
      </div>
    </div>
  );
}
