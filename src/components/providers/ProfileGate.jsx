"use client";

import { usePathname } from "next/navigation";
import { BoardSkeleton } from "@/components/ui/BoardSkeleton";
import { StatusPanel } from "@/components/ui/StatusPanel";
import { normalizePath } from "@/lib/routes";
import { useProfile } from "./ProfileProvider";

export function ProfileGate({ children }) {
  const pathname = usePathname();
  const { status, error, reload, profile } = useProfile();

  // The Apps view has its own data source and does not need the profile.
  if (normalizePath(pathname) === "/apps") {
    return children;
  }

  if (status === "loading") {
    return <BoardSkeleton label="Loading profile" />;
  }

  if (status === "error") {
    return (
      <StatusPanel
        variant="error"
        title="Profile could not load"
        message={`${error} Check that public/data/profile.json is available, then try again.`}
        actionLabel="Try again"
        onAction={reload}
      />
    );
  }

  if (!profile) {
    return (
      <StatusPanel
        variant="error"
        title="Profile data is incomplete"
        message="public/data/profile.json needs at least a name, role and tagline. Fix the file and reload; no rebuild is needed."
        actionLabel="Try again"
        onAction={reload}
      />
    );
  }

  return children;
}
