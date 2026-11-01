export function ViewHeader({ title, subtitle, aside }) {
  return (
    <header className="view-head">
      <div className="min-w-0">
        <h1 className="view-title">{title}</h1>
        {subtitle ? <p className="view-subtitle">{subtitle}</p> : null}
      </div>
      {aside ? <p className="view-count">{aside}</p> : null}
    </header>
  );
}
