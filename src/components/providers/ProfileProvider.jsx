"use client";

import { createContext, useContext, useMemo } from "react";
import { useJsonData } from "@/hooks/useJsonData";
import { dataUrl } from "@/lib/dataUrl";
import { normalizeProfile } from "@/lib/profile";

const PROFILE_URL = dataUrl("profile.json");

const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
  const request = useJsonData(PROFILE_URL);

  const profile = useMemo(
    () =>
      request.status === "ready" ? normalizeProfile(request.data) : null,
    [request.status, request.data],
  );

  return (
    <ProfileContext.Provider value={{ ...request, profile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider.");
  }

  return context;
}
