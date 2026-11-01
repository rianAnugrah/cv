import Link from "next/link";
import { TriangleAlert } from "lucide-react";

export default function NotFound() {
  return (
    <section className="status-panel" role="alert">
      <span className="status-icon bg-metro-red text-white">
        <TriangleAlert size={22} aria-hidden="true" />
      </span>

      <h2 className="status-title">Page not found</h2>
      <p className="status-message">
        The page you were looking for does not exist. Use the rail to open
        Home, Projects, Apps or Contact.
      </p>

      <Link className="btn mt-5" href="/">
        Back to home
      </Link>
    </section>
  );
}
