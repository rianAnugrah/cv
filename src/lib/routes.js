import { VIEW_META } from "@/config/navigation";

const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

/**
 * Returns the app-relative path for the current URL, without the configured
 * basePath or a trailing slash, so route checks work at a domain root and
 * under a GitHub Pages project subpath alike.
 */
export function normalizePath(pathname) {
  let path = pathname || "/";

  if (BASE_PATH && path.startsWith(BASE_PATH)) {
    path = path.slice(BASE_PATH.length) || "/";
  }

  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  return path || "/";
}

export function titleFor(pathname) {
  return VIEW_META[normalizePath(pathname)]?.title ?? "Page not found";
}

export function isActive(pathname, href) {
  return normalizePath(pathname) === href;
}
