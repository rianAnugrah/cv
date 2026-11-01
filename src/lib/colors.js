const HEX_PATTERN = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;

export function hexToRgb(hex) {
  if (typeof hex !== "string" || !HEX_PATTERN.test(hex)) return null;

  let value = hex.slice(1);
  if (value.length === 3) {
    value = value
      .split("")
      .map((character) => character + character)
      .join("");
  }

  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16),
  };
}

function channelLuminance(value) {
  const channel = value / 255;
  return channel <= 0.04045
    ? channel / 12.92
    : ((channel + 0.055) / 1.055) ** 2.4;
}

function relativeLuminance({ r, g, b }) {
  return (
    0.2126 * channelLuminance(r) +
    0.7152 * channelLuminance(g) +
    0.0722 * channelLuminance(b)
  );
}

const LIGHT_INK = "#ffffff";
const DARK_INK = "#111111";
const DARK_INK_LUMINANCE = 0.0056;

/**
 * Picks black or white text for a tile background using the WCAG contrast
 * formula. This keeps colors configured entirely from apps.json readable
 * without hand-picking a foreground for every tile.
 */
export function inkFor(backgroundColor) {
  const rgb = hexToRgb(backgroundColor);
  if (!rgb) return LIGHT_INK;

  const luminance = relativeLuminance(rgb);
  const whiteContrast = 1.05 / (luminance + 0.05);
  const darkContrast = (luminance + 0.05) / (DARK_INK_LUMINANCE + 0.05);

  return darkContrast > whiteContrast ? DARK_INK : LIGHT_INK;
}
