import { HomeView } from "@/views/HomeView";

export const metadata = {
  alternates: {
    canonical: "./",
  },
};

export default function HomePage() {
  return <HomeView />;
}
