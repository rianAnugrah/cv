const ALLOWED_PROTOCOLS = new Set(["http:", "https:", "mailto:"]);

export function isSafeUrl(value) {
  if (typeof value !== "string" || value.trim() === "") return false;
  try {
    return ALLOWED_PROTOCOLS.has(new URL(value).protocol);
  } catch {
    return false;
  }
}

export function isExternalUrl(value) {
  return typeof value === "string" && /^https?:\/\//i.test(value);
}

export function prettyUrl(value) {
  try {
    const url = new URL(value);
    if (url.protocol === "mailto:") return value.replace(/^mailto:/i, "");
    const host = url.host.replace(/^www\./i, "");
    const path = url.pathname === "/" ? "" : url.pathname.replace(/\/$/, "");
    return `${host}${path}`;
  } catch {
    return value;
  }
}

export function hostOf(value) {
  try {
    return new URL(value).host.replace(/^www\./i, "");
  } catch {
    return value;
  }
}
