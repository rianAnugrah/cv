import { useEffect, useState } from "react";

/**
 * Returns the current Date and re-renders on each wall-clock second.
 */
export function useClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let timeoutId;

    const schedule = () => {
      const delay = 1000 - (Date.now() % 1000);
      timeoutId = window.setTimeout(() => {
        setNow(new Date());
        schedule();
      }, delay);
    };

    schedule();
    return () => window.clearTimeout(timeoutId);
  }, []);

  return now;
}
