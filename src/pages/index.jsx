import SkillsGrid from "@/components/Skills";
import DiscordMarquee from "@/components/Discord";

export default function Home() {
  return (
    <>
      <div className="d-flex" id="Content" style={{ minHeight: "100vh" }}>
        <SkillsGrid />
        <DiscordMarquee />
      </div>
    </>
  );
}
