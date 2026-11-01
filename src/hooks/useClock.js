"use client";

import { useEffect, useState } from "react";

/**
 * Returns the current Date and re-renders on each wall-clock second. The
 * initial value is null so server-rendered markup and the first client render
 * match; the clock fills in after mount.
 */
export function useClock() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    let timeoutId;

    setNow(new Date());

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
