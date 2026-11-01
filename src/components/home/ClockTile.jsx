import { Clock3 } from "lucide-react";
import { useClock } from "../../hooks/useClock";
import {
  formatSeconds,
  formatTileDate,
  formatTileTime,
  getTimeZone,
} from "../../lib/datetime";

export function ClockTile() {
  const now = useClock();

  return (
    <section className="tile tile-dark home-clock" aria-label="Local time">
      <div className="flex items-start justify-between gap-2">
        <p className="tile-label">Local time</p>
        <Clock3
          size={15}
          strokeWidth={1.8}
          className="text-metro-red"
          aria-hidden="true"
        />
      </div>

      <div className="mt-auto">
        <p className="flex items-baseline gap-1.5 tabular-nums">
          <time
            className="tile-name text-4xl lg:text-3xl xl:text-4xl"
            dateTime={now.toISOString()}
          >
            {formatTileTime(now)}
          </time>
          <span
            className="text-xs font-semibold opacity-[0.55]"
            aria-hidden="true"
          >
            {formatSeconds(now)}
          </span>
        </p>
        <p className="tile-note mt-2">{formatTileDate(now)}</p>
        <p className="mt-1 text-[10px] font-semibold text-metro-muted">
          {getTimeZone()}
        </p>
      </div>
    </section>
  );
}
