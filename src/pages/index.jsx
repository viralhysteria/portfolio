import Link from "next/link";
import QuickMenu from "../components/Float";
import SkillsGrid from "../components/Skills";
import DiscordMarquee from "../components/Discord";

// Index
export default function Home() {
  return (
    <>
      <div className="pattern"></div>
      <div className="d-flex" id="Header">
        <QuickMenu />
      </div>
      <div className="d-flex" id="Content">
        <SkillsGrid />
        <DiscordMarquee />
      </div>
    </>
  );
}
