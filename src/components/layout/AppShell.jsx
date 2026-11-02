"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useProfile } from "@/components/providers/ProfileProvider";
import { titleFor } from "@/lib/routes";
import { Sidebar } from "./Sidebar";
import { SystemHeader } from "./SystemHeader";

export function AppShell({ children }) {
  const pathname = usePathname();
  const { profile } = useProfile();
  const viewportRef = useRef(null);

  useEffect(() => {
    viewportRef.current?.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="app-shell">
      <Sidebar
        monogram={profile?.monogram ?? "RS"}
        githubUrl={profile?.github}
      />

      <div className="shell-main">
        <SystemHeader title={titleFor(pathname)} profile={profile} />
        <div key={pathname} className="route-wipe" aria-hidden="true" />
        <main
          ref={viewportRef}
          id="main-content"
          className="viewport"
          tabIndex={-1}
        >
          <div key={pathname} className="board view-stage">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
