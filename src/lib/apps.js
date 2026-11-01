import { isSafeUrl } from "./urls";

const TILE_SIZES = new Set(["small", "medium", "wide", "large"]);
const HEX_COLOR = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;

const isText = (value) =>
  typeof value === "string" && value.trim().length > 0;

function slugify(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Validates apps.json into a safe view model.
 *
 * - Invalid categories and apps are skipped and counted, never rendered.
 * - `enabled: false` entries are omitted silently.
 * - Unknown sizes fall back to "medium"; unknown colors to a dark surface.
 * - Duplicate ids are rejected so React keys stay unique.
 */
export function normalizeApps(raw) {
  if (!raw || typeof raw !== "object" || !Array.isArray(raw.categories)) {
    return { ok: false, categories: [], skipped: 0 };
  }

  const seenIds = new Set();
  const categories = [];
  let skipped = 0;

  for (const rawCategory of raw.categories) {
    if (
      !rawCategory ||
      typeof rawCategory !== "object" ||
      !isText(rawCategory.name) ||
      !Array.isArray(rawCategory.apps)
    ) {
      skipped += 1;
      continue;
    }

    const apps = [];

    for (const rawApp of rawCategory.apps) {
      if (!rawApp || typeof rawApp !== "object") {
        skipped += 1;
        continue;
      }

      if (rawApp.enabled === false) continue;

      const id = isText(rawApp.id) ? rawApp.id.trim() : null;
      const name = isText(rawApp.name) ? rawApp.name.trim() : null;

      if (!id || !name || !isSafeUrl(rawApp.url) || seenIds.has(id)) {
        skipped += 1;
        continue;
      }

      seenIds.add(id);

      apps.push({
        id,
        name,
        url: rawApp.url.trim(),
        description: isText(rawApp.description)
          ? rawApp.description.trim()
          : "",
        icon: isText(rawApp.icon) ? rawApp.icon.trim() : "globe",
        color:
          typeof rawApp.color === "string" && HEX_COLOR.test(rawApp.color)
            ? rawApp.color
            : "#2e2e2e",
        size: TILE_SIZES.has(rawApp.size) ? rawApp.size : "medium",
      });
    }

    if (apps.length === 0) continue;

    const name = rawCategory.name.trim();
    categories.push({
      id: isText(rawCategory.id) ? rawCategory.id.trim() : slugify(name),
      name,
      apps,
    });
  }

  return { ok: true, categories, skipped };
}
