const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

/**
 * Resolves a file in `public/data/` against the configured base path so the
 * same build works at a domain root and under a GitHub Pages project path.
 */
export function dataUrl(fileName) {
  return `${base}/data/${fileName}`;
}
