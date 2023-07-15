import { renderToString } from "react-dom/server";

import "@fortawesome/fontawesome-free/css/all.min.css";

const di = "devicon-";
const lg = "linear-gradient(180deg,";

const g = {
  red: `${lg} #e35d6a 0%, #842029 100%)`,
  blue: `${lg}  #3d8bfd 0%, #084298 100%)`,
  green: `${lg} #479f76 0%, #0f5132 100%)`,
  yellow: `${lg} #ffcd39 0%, #997404 100%)`,
  orange: `${lg} #fd9843 0%, #984c0c 100%)`,
  purple: `${lg} #8c68cd 0%, #432874 100%)`,
};

const kFwi = [
  "armitage",
  "autopsy",
  "brim",
  "burpsuite",
  "chisel",
  "covenant",
  "eztools",
  "gophish",
  "impacket",
  "kape",
  "kibana",
  "metasploit",
  "osquery",
  "procdot",
  "redline",
  "remnux",
  "responder",
  "sherlock",
  "sysinternals",
  "volatility",
  "velociraptor",
  "zeek",
  "zap",
];

const kCli = [
  "capa",
  "ffuf",
  "gobuster",
  "hashid",
  "hydra",
  "john",
  "linpeas",
  "mimikatz",
  "nmap",
  "sherlock",
  "sublist3r",
  "sqlmap",
];

function kFwork() {
  return kFwi.map((e, i) => (
    <li key={i} className="list-inline-item">
      {e.toString()}
    </li>
  ));
}

function kCmdLine() {
  return kCli.map((e, i) => (
    <li key={i} className="list-inline-item">
      {e}
    </li>
  ));
}

const skillProps = [
  {
    id: "html",
    icon: `${di}html5-plain`,
    gradient: g.orange,
    useModal: false,
    title: "HTML",
    body: `<p>hello world, placeholder text</p>`,
    level: 5,
    sage: false,
  },
  {
    id: "css",
    icon: `${di}css3-plain`,
    gradient: g.purple,
    useModal: false,
    title: "CSS",
    body: `<p>hello world, placeholder text</p>`,
    level: 5,
    sage: false,
  },
  {
    id: "design",
    icon: `${di}photoshop-line`,
    gradient: g.blue,
    useModal: true,
    title: "Graphic Design",
    body: `<p>
      I'm a graphic designer with a strong background in traditional art. I've always had a passion for creating visually stunning designs that communicate a message effectively. My experience in traditional art has given me a unique perspective and skillset that I apply to my digital design work.
      <br><br>
      Over the past decade plus, I've become reasonably proficient in Photoshop. I've worked on a diverse range of projects, including branding design, marketing collateral, website design, and packaging. I have a keen eye for detail and a strong focus on guideline principles, which ensures that every element of my designs is cohesive and effective.
      <br><br>
      I enjoy the challenge of creating designs that not only look great but also have a purpose and meaning behind them. I'm constantly exploring new techniques and software to keep up-to-date with the latest trends and innovations in the industry. Overall, my experience in traditional art and digital design, combined with my extensive Photoshop knowledge, makes me a strong asset to any team seeking a skilled and passionate graphic designer.
    </p>`,
    level: 4,
    sage: true,
  },
  {
    id: "trade",
    icon: "fas fa-magnifying-glass-chart",
    gradient: g.green,
    useModal: true,
    title: "Technical Analysis",
    body: `<p>
      As all investors tend to do, I tried to find the closest thing to a holy grail I could when trying to navigate the markets in a way that wouldn't make me lose my head. I can't say what exactly drew me to technical analysis out the gate, but I continue to constantly find new things that keep me engaged.
      <br><br>
      My journey as an analyst originally began focusing on a combination of fundamental and a poor foundation of technicals that eventually incorporated a sentiment aspect as well. After trying and failing to make consistent returns focusing on growth and product potential of emerging startups in the cryptocurrency industry, my rabbit hole into Bitcoin eventually led me to the concept of price cycles.
      <br><br>
      Since this discovery, my system has continued to become more and more price action focused as over the years as it seems that the market can usually tell you the news happening the world far before the television set can. My approach can be compared to the system used by Marty Zweig.
      <br><br>
      I have over 7 years of weekly experience analysing technicals across a wide range of markets including cryptocurrencies, forex, equities, indices as well as a truncated public journal of my calls and research into the markets through my twitter account.
      <br><br>
      The indicators I rely on are non-proprietary:<br>
      <span class="text-primary">Price / Volume / S&R / Moving Averages / Ichimoku<br>
      Bollinger Bands / AVWAP / VPVR / (Stoch+Std) RSI</span>
    </p>`,
    level: 4,
    sage: true,
  },
  {
    id: "windows",
    icon: `${di}windows8-original`,
    gradient: g.red,
    useModal: true,
    title: "Windows",
    body: `<p>
      I started using Windows-based PCs for the first time on a regular basis sometime around 2003 with XP. I took an early interest into web development with HTML and CSS around the time Myspace was launched and got my early start at the age of 8 or 9 learning how to make (overly complex) profile designs.
      <br><br>
      Once I managed to get a slightly better PC, I started delving into gaming and ended up with a virus called <a href="https://www.microsoft.com/en-us/wdsi/threats/malware-encyclopedia-description?Name=Rogue:Wi FakeSmoke">WiniBlueSoft</a> from downloading a rogue torrent. This was the event that led me to st digging more into the filesystem hierarchy in a drawn-out attempt to try and "fight off" the virus.
      <br><br>
      Whilst my attempts to thwart the virus were ultimately in vain, I continued to have an interest having a deeper understanding of how the operating system functions as a whole. This is what inevitab likely led me down the path I now find myself on.
    </p>`,
    level: 5,
    sage: false,
  },
  {
    id: "oscp",
    icon: "fa-solid fa-dragon",
    gradient: g.yellow,
    useModal: true,
    title: "Pentesting w/Kali Linux",
    body: `
      <span class="fw-bold text-decoration-underline">Frameworks:</span>
      <ul class="list-inline">
        ${renderToString(kFwork())}
      </ul>
      <span class="fw-bold text-decoration-underline">Commandline:</span>
      <ul class="list-inline">
        ${renderToString(kCmdLine())}
      </ul>
      <a class="text-danger fw-bold text-uppercase fs-6 pb-3 text-decoration-none"
        href="https://tryhackme.com/p/viralhysteria">
        TryHackMe</a>
        `,
        center: true,
    level: 5,
    sage: false,
  },
];

export default skillProps;
