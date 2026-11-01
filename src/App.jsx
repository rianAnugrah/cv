import { useEffect, useMemo, useState } from "react";
import { AppShell } from "./components/layout/AppShell";
import { BoardSkeleton } from "./components/ui/BoardSkeleton";
import { StatusPanel } from "./components/ui/StatusPanel";
import { VIEW_META, VIEW_ORDER } from "./config/navigation";
import { useJsonData } from "./hooks/useJsonData";
import { dataUrl } from "./lib/dataUrl";
import { normalizeProfile } from "./lib/profile";
import { AppsView } from "./views/AppsView";
import { ContactView } from "./views/ContactView";
import { HomeView } from "./views/HomeView";
import { ProjectsView } from "./views/ProjectsView";

const PROFILE_URL = dataUrl("profile.json");

function viewFromHash() {
  const hash = window.location.hash.replace(/^#/, "");
  if (hash === "") return "home";
  return VIEW_ORDER.includes(hash) ? hash : null;
}

export default function App() {
  const [view, setView] = useState(() => viewFromHash() ?? "home");
  const profileRequest = useJsonData(PROFILE_URL);

  const profile = useMemo(
    () =>
      profileRequest.status === "ready"
        ? normalizeProfile(profileRequest.data)
        : null,
    [profileRequest.status, profileRequest.data],
  );

  useEffect(() => {
    const syncFromHistory = () => {
      const nextView = viewFromHash();
      if (nextView) setView(nextView);
    };
    window.addEventListener("hashchange", syncFromHistory);
    window.addEventListener("popstate", syncFromHistory);

    return () => {
      window.removeEventListener("hashchange", syncFromHistory);
      window.removeEventListener("popstate", syncFromHistory);
    };
  }, []);

  useEffect(() => {
    const name = profile?.name ?? "Rian Anugrah";
    document.title = `${VIEW_META[view].title} — ${name}`;
  }, [view, profile]);

  function navigate(next) {
    if (!VIEW_ORDER.includes(next)) return;
    if (window.location.hash !== `#${next}`) {
      window.history.pushState(null, "", `#${next}`);
    }
    setView(next);
  }

  let content;

  if (view === "apps") {
    content = <AppsView />;
  } else if (profileRequest.status === "loading") {
    content = <BoardSkeleton label="Loading profile" />;
  } else if (profileRequest.status === "error") {
    content = (
      <StatusPanel
        variant="error"
        title="Profile could not load"
        message={`${profileRequest.error} Check that public/data/profile.json is available, then try again.`}
        actionLabel="Try again"
        onAction={profileRequest.reload}
      />
    );
  } else if (!profile) {
    content = (
      <StatusPanel
        variant="error"
        title="Profile data is incomplete"
        message="public/data/profile.json needs at least a name, role and tagline. Fix the file and reload; no rebuild is needed."
        actionLabel="Try again"
        onAction={profileRequest.reload}
      />
    );
  } else if (view === "projects") {
    content = <ProjectsView profile={profile} />;
  } else if (view === "contact") {
    content = <ContactView profile={profile} />;
  } else {
    content = <HomeView profile={profile} onNavigate={navigate} />;
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <AppShell
        view={view}
        title={VIEW_META[view].title}
        profile={profile}
        onNavigate={navigate}
      >
        {content}
      </AppShell>
    </>
  );
}
