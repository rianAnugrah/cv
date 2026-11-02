import { inkFor } from "@/lib/colors";
import { getAppIcon } from "@/lib/icons";
import { isExternalUrl } from "@/lib/urls";

export function AppTile({ app }) {
  const external = isExternalUrl(app.url);
  const ink = inkFor(app.color);
  const Icon = getAppIcon(app.icon);

  const accessibleName = [
    app.name,
    app.description,
    external ? "opens in a new tab" : null,
  ]
    .filter(Boolean)
    .join(", ");

  let content;

  if (app.size === "small") {
    content = (
      <span className="flex h-full flex-col items-center justify-center gap-1.5">
        <span className="icon-pop">
          <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="max-w-full truncate text-[10px] font-semibold uppercase tracking-wide">
          {app.name}
        </span>
      </span>
    );
  } else if (app.size === "wide") {
    content = (
      <span className="flex h-full items-center gap-4">
        <span className="icon-pop app-icon-plate">
          <Icon size={26} strokeWidth={1.7} aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="app-name">{app.name}</span>
          {app.description ? (
            <span className="app-description line-clamp-2">{app.description}</span>
          ) : null}
        </span>
      </span>
    );
  } else {
    const isLarge = app.size === "large";

    content = (
      <span className="flex h-full flex-col">
        <span className={`icon-pop ${isLarge ? "app-icon-plate app-icon-plate-lg" : ""}`}>
          <Icon
            size={isLarge ? 34 : 26}
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </span>
        <span className="mt-auto block">
          <span className={`app-name ${isLarge ? "app-name-large" : ""}`}>
            {app.name}
          </span>
          {app.description ? (
            <span className="app-description line-clamp-3">{app.description}</span>
          ) : null}
        </span>
      </span>
    );
  }

  return (
    <a
      className="app-tile tile-flip ink-pattern"
      href={app.url}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{ backgroundColor: app.color, color: ink }}
      aria-label={accessibleName}
      title={app.name}
    >
      {content}
    </a>
  );
}
