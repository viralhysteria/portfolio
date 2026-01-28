import Head from "next/head";
import SkillsGrid from "@/components/Skills";
import Marquee from "@/components/Discord";

export default function Home() {
  return (
    <>
      <Head>
        <title>viralhysteria</title>
      </Head>
      <main
        className="d-flex justify-content-center align-items-center overflow-hidden"
        style={{ height: "100dvh" }}
      >
        <SkillsGrid />
      </main>
      <Marquee />
    </>
  );
}
