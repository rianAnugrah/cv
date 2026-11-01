const base = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

/**
 * Resolves a file in `public/data/` against the app base so the same build
 * works at a domain root and under a GitHub Pages project path.
 */
export function dataUrl(fileName) {
  return `${base}data/${fileName}`;
}
