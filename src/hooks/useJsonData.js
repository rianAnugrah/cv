import { useEffect, useState } from "react";

const REQUEST_TIMEOUT_MS = 10000;

/**
 * Fetches and parses a JSON file at runtime with explicit loading, error and
 * retry states. Requests are aborted on unmount or when a new attempt starts.
 */
export function useJsonData(url) {
  const [request, setRequest] = useState({
    status: "loading",
    data: null,
    error: null,
  });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      REQUEST_TIMEOUT_MS,
    );
    let active = true;

    setRequest({ status: "loading", data: null, error: null });

    fetch(url, { signal: controller.signal, cache: "no-cache" })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`The server returned ${response.status}.`);
        }

        const text = await response.text();
        const contentType = response.headers.get("content-type") ?? "";

        if (contentType.includes("text/html") || /^\s*</.test(text)) {
          throw new Error("The data file could not be found.");
        }

        try {
          return JSON.parse(text);
        } catch {
          throw new Error("The data file is not valid JSON.");
        }
      })
      .then((data) => {
        if (active) setRequest({ status: "ready", data, error: null });
      })
      .catch((error) => {
        if (!active) return;
        const timedOut = error.name === "AbortError";
        setRequest({
          status: "error",
          data: null,
          error: timedOut
            ? "The request timed out."
            : error.message || "The data file could not be loaded.",
        });
      })
      .finally(() => window.clearTimeout(timeoutId));

    return () => {
      active = false;
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, [url, attempt]);

  return {
    ...request,
    reload: () => {
      setRequest({ status: "loading", data: null, error: null });
      setAttempt((current) => current + 1);
    },
  };
}
