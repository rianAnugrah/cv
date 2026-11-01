const headerTimeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

const headerDateFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "short",
  day: "numeric",
  month: "short",
  year: "numeric",
});

const tileTimeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

const tileDateFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "Local time";

export function formatHeaderTime(date) {
  return headerTimeFormatter.format(date);
}

export function formatHeaderDate(date) {
  return headerDateFormatter.format(date);
}

export function formatTileTime(date) {
  return tileTimeFormatter.format(date);
}

export function formatTileDate(date) {
  return tileDateFormatter.format(date);
}

export function formatSeconds(date) {
  return String(date.getSeconds()).padStart(2, "0");
}

export function getTimeZone() {
  return timeZone.replaceAll("_", " ");
}
