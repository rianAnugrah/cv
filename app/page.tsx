import Image from "next/image";
import { DiReact } from "react-icons/di";
import {
  TiMail,
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import TextReveal from "./(shared)/components/text-reveal";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");
}
