import { Github } from "lucide-react";
import { PRIMARY_NAV } from "../../config/navigation";

export function Sidebar({ current, onNavigate, monogram = "RS", githubUrl }) {
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
          const isActive = current === item.view;

          return (
            <li key={item.view}>
              <button
                type="button"
                className={`rail-item ${isActive ? "rail-item-active" : ""}`}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                onClick={() => onNavigate(item.view)}
              >
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2 : 1.75}
                  aria-hidden="true"
                />
                <span className="rail-tooltip" aria-hidden="true">
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
