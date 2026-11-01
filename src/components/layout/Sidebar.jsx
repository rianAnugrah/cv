"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github } from "lucide-react";
import { PRIMARY_NAV } from "@/config/navigation";
import { isActive } from "@/lib/routes";

export function Sidebar({ monogram = "RS", githubUrl }) {
  const pathname = usePathname();

  return (
    <nav className="rail" aria-label="Primary">
      <span className="rail-mark" aria-hidden="true">
        {monogram}
      </span>

      <ul className="rail-nav" role="list">
        {PRIMARY_NAV.map((item) => {
          if (item.type === "github") {
            if (!githubUrl) return null;

            return (
              <li key="github">
                <a
                  className="rail-item"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub (opens in a new tab)"
                >
                  <Github size={20} strokeWidth={1.75} aria-hidden="true" />
                  <span className="rail-tooltip" aria-hidden="true">
                    GitHub
                  </span>
                </a>
              </li>
            );
          }

          const Icon = item.icon;
          const active = isActive(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                className={`rail-item ${active ? "rail-item-active" : ""}`}
                href={item.href}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
              >
                <Icon
                  size={20}
                  strokeWidth={active ? 2 : 1.75}
                  aria-hidden="true"
                />
                <span className="rail-tooltip" aria-hidden="true">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
