import { ClockTile } from "../components/home/ClockTile";
import { ContactTile } from "../components/home/ContactTile";
import { EducationTile } from "../components/home/EducationTile";
import { FeaturedProjectTile } from "../components/home/FeaturedProjectTile";
import { ProfileTile } from "../components/home/ProfileTile";
import { RoleTile } from "../components/home/RoleTile";
import { SiteTile } from "../components/home/SiteTile";
import { SkillsTile } from "../components/home/SkillsTile";

export function HomeView({ profile, onNavigate }) {
  const featuredOnly = profile.projects.filter((project) => project.featured);
  const featured = (featuredOnly.length > 0 ? featuredOnly : profile.projects).slice(0, 3);

  return (
    <div className="home-grid">
      <ProfileTile profile={profile} onNavigate={onNavigate} />
      <ClockTile />

      {profile.website ? <SiteTile website={profile.website} /> : null}
      {profile.education?.institution ? (
        <EducationTile education={profile.education} />
      ) : null}
      {profile.email ? (
        <ContactTile email={profile.email} />
      ) : profile.currentRole ? (
        <RoleTile currentRole={profile.currentRole} />
      ) : null}
      {profile.skills.length > 0 ? <SkillsTile skills={profile.skills} /> : null}

      {featured.map((project, index) => (
        <FeaturedProjectTile
          key={project.id}
          project={project}
          className={`home-feature-${index + 1}`}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}
