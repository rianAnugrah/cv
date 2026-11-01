import { Github, Globe, Mail } from "lucide-react";
import { useClock } from "../../hooks/useClock";
import { formatHeaderDate, formatHeaderTime } from "../../lib/datetime";

export function SystemHeader({ title, profile }) {
  const now = useClock();

  return (
    <header className="system-header">
      <div className="system-title">
        <span className="system-title-mark" aria-hidden="true" />
        <span className="system-title-text">{title}</span>
      </div>

      <div className="system-meta">
        {profile ? (
          <nav className="header-links" aria-label="Quick links">
            {profile.website ? (
              <a
                className="header-link"
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website (opens in a new tab)"
              >
                <Globe size={16} aria-hidden="true" />
              </a>
            ) : null}

            {profile.github ? (
              <a
                className="header-link"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
              >
                <Github size={16} aria-hidden="true" />
              </a>
            ) : null}

            {profile.email ? (
              <a
                className="header-link"
                href={`mailto:${profile.email}`}
                aria-label={`Email ${profile.email}`}
              >
                <Mail size={16} aria-hidden="true" />
              </a>
            ) : null}
          </nav>
        ) : null}

        <span className="header-divider" aria-hidden="true" />

        <span className="header-clock">
          <span className="header-date">{formatHeaderDate(now)}</span>
          <time className="header-time" dateTime={now.toISOString()}>
            {formatHeaderTime(now)}
          </time>
        </span>
      </div>
    </header>
  );
}
