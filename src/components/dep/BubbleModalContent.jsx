import Image from "next/image";
import { useState, useEffect } from "react";
import { randColor } from "../../utils/randColor";
import { kaliStack, KSMap } from "./KaliBadges";

export function KaliBody() {
  const [frameworkColors, setFrameworkColors] = useState([]);
  const [commandlineColors, setCommandlineColors] = useState([]);

  useEffect(() => {
    if (frameworkColors.length === 0) {
      setFrameworkColors(kaliStack.framework.map(() => randColor()));
    }
    if (commandlineColors.length === 0) {
      setCommandlineColors(kaliStack.commandline.map(() => randColor()));
    }
  }, [frameworkColors, commandlineColors]);

  return (
    <>
      <span className="fs-5 fw-bold">Frameworks</span>
      <KSMap items={kaliStack.framework} colors={frameworkColors} />
      <hr />
      <span className="fs-5 fw-bold">Commandline</span>
      <KSMap items={kaliStack.commandline} colors={commandlineColors} />
      <hr />
      <a
        className="fs-6 mx-2 mb-2 badge rounded text-bg-danger text-decoration-none"
        href="https://tryhackme.com/p/viralhysteria"
        target="_blank"
        rel="noopener noreferrer"
      >
        TryHackMe
      </a>
      <a
        className="fs-6 mx-2 mb-2 badge rounded text-bg-success text-decoration-none"
        href="https://app.hackthebox.com/users/1564442"
        target="_blank"
        rel="noopener noreferrer"
      >
        HackTheBox
      </a>
    </>
  );
}

export function DesignBody() {
  return (
    <>
      <p>
        I&apos;m a graphic designer with a strong background in traditional art.
        I&apos;ve always had a passion for creating visually stunning designs
        that communicate a message effectively. My experience in traditional art
        has given me a unique perspective and skillset that I apply to my
        digital design work.
        <br />
        <br />
        Over the past decade plus, I&apos;ve become reasonably proficient in
        Photoshop. I&apos;ve worked on a diverse range of projects, including
        branding design, marketing collateral, website design, and packaging. I
        have a keen eye for detail and a strong focus on guideline principles,
        which ensures that every element of my designs is cohesive and
        effective.
        <br />
        <br />I enjoy the challenge of creating designs that not only look great
        but also have a purpose and meaning behind them. I&apos;m constantly
        exploring new techniques and software to keep up-to-date with the latest
        trends and innovations in the industry. Overall, my experience in
        traditional art and digital design, combined with my extensive Photoshop
        knowledge, makes me a strong asset to any team seeking a skilled and
        passionate graphic designer.
      </p>
    </>
  );
}

export function TradingBody() {
  return (
    <>
      <p>
        As all investors tend to do, I tried to find the closest thing to a holy
        grail I could when trying to navigate the markets in a way that
        wouldn&apos;t make me lose my head. I can&apos;t say what exactly drew
        me to technical analysis out the gate, but I continue to constantly find
        new things that keep me engaged.
        <br />
        <br />
        My journey as an analyst originally began focusing on a combination of
        fundamental and a poor foundation of technicals that eventually
        incorporated a sentiment aspect as well. After trying and failing to
        make consistent returns focusing on growth and product potential of
        emerging startups in the cryptocurrency industry, my rabbit hole into
        Bitcoin eventually led me to the concept of price cycles.
        <br />
        <br />
        Since this discovery, my system has continued to become more and more
        price action focused as over the years as it seems that the market can
        usually tell you the news happening the world far before the television
        set can. My approach can be compared to the system used by Marty Zweig.
        <br />
        <br />
        I have over 7 years of weekly experience analysing technicals across a
        wide range of markets including cryptocurrencies, forex, equities,
        indices as well as a truncated public journal of my calls and research
        into the markets through my twitter account.
        <br />
        <br />
        The indicators I rely on are non-proprietary:
        <br />
        <span style={{ fontWeight: "500" }}>
          Price / Volume / S&R / Moving Averages / Ichimoku
          <br />
          Bollinger Bands / AVWAP / VPVR / (Stoch+Std) RSI
        </span>
      </p>
    </>
  );
}

export function WindowsBody() {
  return (
    <>
      <p>
        I started using Windows-based PCs for the first time on a regular basis
        sometime around 2003 with XP. I took an early interest into web
        development with HTML and CSS around the time Myspace was launched and
        got my early start at the age of 8 or 9 learning how to make (overly
        complex) profile designs.
        <br />
        <br />
        Once I managed to get a slightly better PC, I started delving into
        gaming and ended up with a virus called&apos;
        <a href="https://www.microsoft.com/en-us/wdsi/threats/malware-encyclopedia-description?Name=Rogue:Win32/FakeSmoke&threatId=141916">
          WiniBlueSoft
        </a>
        &apos; from downloading a rogue torrent. This was the event that led me
        to start digging more into the filesystem hierarchy in a drawn-out
        attempt to try and &quot;fight off&quot; the virus.
        <br />
        <br />
        Whilst my attempts to thwart the virus were ultimately in vain, I
        continued to have an interest having a deeper understanding of how the
        operating system functions as a whole. This is what inevitably led me
        down the path I now find myself on.
      </p>
    </>
  );
}

export function GamingBody() {
  return (
    <div className="container">
      <Image
        className="img-fluid"
        width="400"
        height="200"
        src="/img/gaming_modal-steam_card.png"
        alt=""
      />
      <Image
        className="img-fluid"
        width="400"
        height="200"
        src="/img/gaming_modal-psn_card.png"
        alt=""
      />
    </div>
  );
}

export function StreamingBody() {
  return (
    <>
      <p>
        I&apos;m well acquainted with handling complex OBS scenes/setups to
        create aesthetically pleasing yet confluent designs. Livestreaming has
        offered me a great outlet for improving my ability to perform under
        pressure whether through solo tasks or multitasking in front of random
        audiences as well as aiding me in developing stronger social skills
        through viewer engagement.
      </p>
    </>
  );
}
