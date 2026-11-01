import { ContactView } from "@/views/ContactView";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Rian Anugrah by email, GitHub or LinkedIn.",
  alternates: {
    canonical: "contact/",
  },
};

export default function ContactPage() {
  return <ContactView />;
}
