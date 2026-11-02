import { Clock3 } from "lucide-react";
import { useClock } from "@/hooks/useClock";
import {
  formatSeconds,
  formatTileDate,
  formatTileTime,
  getTimeZone,
} from "@/lib/datetime";

export function ClockTile() {
  const now = useClock();

  return (
    <section className="tile tile-dark home-clock" aria-label="Local time">
      <div className="tile-kicker">
        <p className="tile-label">Local time</p>
        <span className="corner-icon" aria-hidden="true">
          <Clock3 size={16} strokeWidth={1.9} />
        </span>
      </div>

      <div className="mt-auto">
        <p className="clock-row">
          <time
            className="clock-time"
            dateTime={now ? now.toISOString() : undefined}
          >
            {now ? formatTileTime(now) : "--:--"}
          </time>
          <span className="clock-seconds" aria-hidden="true">
            {now ? formatSeconds(now) : "--"}
          </span>
        </p>
        <p className="tile-note clock-date">{now ? formatTileDate(now) : " "}</p>
        {now ? (
          <p className="clock-zone">
            <span className="live-dot" aria-hidden="true" />
            {getTimeZone()}
          </p>
        ) : null}
      </div>
    </section>
  );
}
