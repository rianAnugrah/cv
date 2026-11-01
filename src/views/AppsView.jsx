import { useMemo } from "react";
import { AppTile } from "../components/apps/AppTile";
import { StatusPanel } from "../components/ui/StatusPanel";
import { ViewHeader } from "../components/ui/ViewHeader";
import { useJsonData } from "../hooks/useJsonData";
import { normalizeApps } from "../lib/apps";
import { dataUrl } from "../lib/dataUrl";

const APPS_URL = dataUrl("apps.json");
const SKELETON_SIZES = [
  "large",
  "medium",
  "wide",
  "medium",
  "small",
  "medium",
  "wide",
];

function AppsSkeleton() {
  return (
    <div role="status" aria-live="polite" aria-busy="true">
      <span className="sr-only">Loading shortcuts</span>
      <div className="apps-skeleton-grid" aria-hidden="true">
        {SKELETON_SIZES.map((size, index) => (
          <div key={index} className={`skeleton app-size-${size}`} />
        ))}
      </div>
    </div>
  );
}

export function AppsView() {
  const { status, data, error, reload } = useJsonData(APPS_URL);

  const normalized = useMemo(
    () => (status === "ready" ? normalizeApps(data) : null),
    [status, data],
  );

  const total =
    normalized?.categories.reduce(
      (sum, category) => sum + category.apps.length,
      0,
    ) ?? 0;

  return (
    <div>
      <ViewHeader
        title="Apps"
        subtitle="Tools, references and projects in one launcher."
        aside={
          status === "ready" && normalized?.ok ? `${total} shortcuts` : undefined
        }
      />

      {status === "loading" ? <AppsSkeleton /> : null}

      {status === "error" ? (
        <StatusPanel
          variant="error"
          title="Shortcuts could not load"
          message={`${error} Check that public/data/apps.json is available, then try again.`}
          actionLabel="Try again"
          onAction={reload}
        />
      ) : null}

      {status === "ready" && normalized && !normalized.ok ? (
        <StatusPanel
          variant="error"
          title="Shortcut data is malformed"
          message="apps.json must contain a top-level categories array. Fix the file and reload; no rebuild is needed."
          actionLabel="Try again"
          onAction={reload}
        />
      ) : null}

      {status === "ready" &&
      normalized?.ok &&
      normalized.categories.length === 0 ? (
        <StatusPanel
          title="No shortcuts yet"
          message="Add an enabled app to public/data/apps.json and reload the page to see it here."
        />
      ) : null}

      {status === "ready" && normalized?.ok && normalized.categories.length > 0 ? (
        <div>
          {normalized.skipped > 0 ? (
            <p className="apps-note" role="status">
              {normalized.skipped} invalid{" "}
              {normalized.skipped === 1 ? "entry was" : "entries were"} skipped.
            </p>
          ) : null}

          {normalized.categories.map((category, categoryIndex) => {
            const headingId = `category-${categoryIndex}`;

            return (
              <section
                key={`${category.id}-${categoryIndex}`}
                className="category-block"
                aria-labelledby={headingId}
              >
                <h2 id={headingId} className="category-title">
                  {category.name}
                  <span className="sr-only">
                    , {category.apps.length} shortcuts
                  </span>
                  <span aria-hidden="true" className="category-count">
                    {category.apps.length}
                  </span>
                </h2>

                <ul className="app-grid" role="list">
                  {category.apps.map((app) => (
                    <li key={app.id} className={`app-size-${app.size}`}>
                      <AppTile app={app} />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
