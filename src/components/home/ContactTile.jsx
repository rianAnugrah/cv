import { Mail } from "lucide-react";

export function ContactTile({ email }) {
  return (
    <a
      className="tile tile-red-deep tile-link tile-flip home-side"
      href={`mailto:${email}`}
      aria-label={`Email ${email}`}
    >
      <div className="tile-kicker">
        <p className="tile-label">Email</p>
        <span className="corner-icon" aria-hidden="true">
          <Mail size={16} strokeWidth={1.8} />
        </span>
      </div>

      <div className="mt-auto">
        <p className="poster-title">Email me</p>
        <p className="mt-1 break-all text-[11px] font-normal leading-snug">
          {email}
        </p>
      </div>
    </a>
  );
}
