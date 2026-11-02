export function ViewHeader({ kicker, title, subtitle, aside }) {
  return (
    <header className="view-head">
      <div className="min-w-0">
        {kicker ? <p className="view-kicker">{kicker}</p> : null}
        <h1 className="view-title">{title}</h1>
        {subtitle ? <p className="view-subtitle">{subtitle}</p> : null}
      </div>
      {aside ? (
        <p className="count-stamp">
          <span>{aside}</span>
        </p>
      ) : null}
    </header>
  );
}
