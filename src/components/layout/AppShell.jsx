import { useEffect, useRef } from "react";
import { Sidebar } from "./Sidebar";
import { SystemHeader } from "./SystemHeader";

export function AppShell({ view, title, profile, onNavigate, children }) {
  const viewportRef = useRef(null);

  useEffect(() => {
    viewportRef.current?.scrollTo({ top: 0 });
  }, [view]);

  return (
    <div className="app-shell">
      <Sidebar
        current={view}
        onNavigate={onNavigate}
        monogram={profile?.monogram ?? "RS"}
        githubUrl={profile?.github}
      />

      <div className="shell-main">
        <SystemHeader title={title} profile={profile} />
        <main
          ref={viewportRef}
          id="main-content"
          className="viewport"
          tabIndex={-1}
        >
          <div className="board">{children}</div>
        </main>
      </div>
    </div>
  );
}
