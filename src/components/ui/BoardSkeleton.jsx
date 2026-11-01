export function BoardSkeleton({ label = "Loading content" }) {
  return (
    <div role="status" aria-live="polite" aria-busy="true">
      <span className="sr-only">{label}</span>
      <div className="skeleton-grid" aria-hidden="true">
        {Array.from({ length: 7 }, (_, index) => (
          <div key={index} className="skeleton" />
        ))}
      </div>
    </div>
  );
}
