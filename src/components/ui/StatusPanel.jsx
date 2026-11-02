import {
  Inbox,
  LoaderCircle,
  RefreshCw,
  TriangleAlert,
} from "lucide-react";

const ICONS = {
  error: TriangleAlert,
  empty: Inbox,
  loading: LoaderCircle,
};

export function StatusPanel({
  variant = "empty",
  title,
  message,
  actionLabel,
  onAction,
}) {
  const Icon = ICONS[variant] ?? Inbox;

  return (
    <section
      className="status-panel"
      role={variant === "error" ? "alert" : "status"}
    >
      <span
        className={`status-icon ${
          variant === "error"
            ? "bg-metro-red text-white"
            : "bg-metro-paper text-[#111111]"
        }`}
      >
        <span className={variant === "loading" ? "inline-flex animate-spin" : "inline-flex"}>
          <Icon size={22} aria-hidden="true" />
        </span>
      </span>

      <h2 className="status-title">{title}</h2>
      {message ? <p className="status-message">{message}</p> : null}

      {onAction && actionLabel ? (
        <button type="button" className="btn mt-5" onClick={onAction}>
          <RefreshCw size={15} aria-hidden="true" />
          {actionLabel}
        </button>
      ) : null}
    </section>
  );
}
