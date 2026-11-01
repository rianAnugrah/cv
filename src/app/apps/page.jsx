import { AppsView } from "@/views/AppsView";

export const metadata = {
  title: "Apps",
  description: "Tools, references and projects in one launcher.",
  alternates: {
    canonical: "apps/",
  },
};

export default function AppsPage() {
  return <AppsView />;
}
