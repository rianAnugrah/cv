import { Mail } from "lucide-react";

export function ContactTile({ email }) {
  return (
    <a
      className="tile tile-red-deep tile-link home-side"
      href={`mailto:${email}`}
      aria-label={`Email ${email}`}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="tile-label">Email</p>
        <Mail size={18} strokeWidth={1.8} className="opacity-70" aria-hidden="true" />
      </div>

      <div className="mt-auto">
        <p className="tile-title">Email me</p>
        <p className="mt-1 break-all text-[11px] font-normal leading-snug">
          {email}
        </p>
      </div>
    </a>
  );
}
