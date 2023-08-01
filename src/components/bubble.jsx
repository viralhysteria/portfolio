import "@fortawesome/fontawesome-free/css/all.min.css";
import { renderToPipeableStream } from "react-dom/server";

const gradients = [
  { name: "red", colors: ["#e35d6a", "#842029"] },
  { name: "blue", colors: ["#3d8bfd", "#084298"] },
  { name: "cyan", colors: ["#3dd5f3", "#087990"] },
  { name: "gray", colors: ["#ced4da", "#495057"] },
  { name: "pink", colors: ["#de5c9d", "#801f4f"] },
  { name: "green", colors: ["#479f76", "#0f5132"] },
  { name: "yellow", colors: ["#ffcd39", "#997404"] },
  { name: "orange", colors: ["#fd9843", "#984c0c"] },
  { name: "purple", colors: ["#8c68cd", "#432874"] },
];

const g = gradients.reduce((acc, { name, colors }) => {
  acc[name] = genGradient(...colors);
  return acc;
}, {});

function genGradient(color1, color2) {
  return `linear-gradient(180deg, ${color1} 0%, ${color2} 100%)`;
}

const kaliStack = {
  framework: [
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
  ],
  commandline: [
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
  ],
};

function kaliBody() {
  const frameworks = kaliStack.framework;
  const commandline = kaliStack.commandline;

  return (
    <>
      <span className="fw-bold text-decoration-underline">Frameworks:</span>
      <ul className="list-inline">
        {frameworks.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <span className="fw-bold text-decoration-underline">Commandline:</span>
      <ul className="list-inline">
        {commandline.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
      <a
        class="text-danger fw-bold fs-6 pb-3 text-decoration-none"
        href="https://tryhackme.com/p/viralhysteria"
      >
        TryHackMe
      </a>
    </>
  );
}

const di = "devicon-";

const Properties = [
  {
    id: "html",
    icon: `${di}html5-plain`,
    color: g.orange,
    title: "HTML",
    body: `<p>hello world, placeholder text</p>`,
    rank: 5,
    sage: false,
  },
  {
    id: "css",
    icon: `${di}css3-plain`,
    color: g.purple,
    title: "CSS",
    body: `<p>hello world, placeholder text</p>`,
    rank: 5,
    sage: false,
  },
  {
    id: "design",
    icon: `${di}photoshop-line`,
    color: g.blue,
    title: "Graphic Design",
    body: `<p>
      I'm a graphic designer with a strong background in traditional art. I've always had a passion for creating visually stunning designs that communicate a message effectively. My experience in traditional art has given me a unique perspective and skillset that I apply to my digital design work.
      <br><br>
      Over the past decade plus, I've become reasonably proficient in Photoshop. I've worked on a diverse range of projects, including branding design, marketing collateral, website design, and packaging. I have a keen eye for detail and a strong focus on guideline principles, which ensures that every element of my designs is cohesive and effective.
      <br><br>
      I enjoy the challenge of creating designs that not only look great but also have a purpose and meaning behind them. I'm constantly exploring new techniques and software to keep up-to-date with the latest trends and innovations in the industry. Overall, my experience in traditional art and digital design, combined with my extensive Photoshop knowledge, makes me a strong asset to any team seeking a skilled and passionate graphic designer.
    </p>`,
    rank: 3,
    sage: true,
  },
  {
    id: "trade",
    icon: "fas fa-magnifying-glass-chart",
    color: g.red,
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
    rank: 4,
    sage: true,
  },
  {
    id: "win",
    icon: `${di}windows8-original`,
    color: g.yellow,
    title: "Windows",
    body: `<p>
      I started using Windows-based PCs for the first time on a regular basis sometime around 2003 with XP. I took an early interest into web development with HTML and CSS around the time Myspace was launched and got my early start at the age of 8 or 9 learning how to make (overly complex) profile designs.
      <br><br>
      Once I managed to get a slightly better PC, I started delving into gaming and ended up with a virus called <a href="https://www.microsoft.com/en-us/wdsi/threats/malware-encyclopedia-description?Name=Rogue:Wi FakeSmoke">WiniBlueSoft</a> from downloading a rogue torrent. This was the event that led me to st digging more into the filesystem hierarchy in a drawn-out attempt to try and "fight off" the virus.
      <br><br>
      Whilst my attempts to thwart the virus were ultimately in vain, I continued to have an interest having a deeper understanding of how the operating system functions as a whole. This is what inevitab likely led me down the path I now find myself on.
    </p>`,
    rank: 5,
    sage: false,
  },
  {
    id: "oscp",
    icon: "fas fa-dragon",
    color: g.cyan,
    title: "Pentesting w/Kali Linux",
    body: `${renderToPipeableStream(kaliBody())}`,
    center: true,
    rank: 4,
    sage: false,
  },
  {
    id: "py",
    icon: `${di}python-plain`,
    color: g.green,
    title: "Python",
    body: `a`,
    rank: 3,
  },
  {
    id: "react",
    icon: `${di}react-original`,
    color: g.cyan,
    title: "React",
    body: `<p>text</p>`,
    rank: 4,
  },
  {
    id: "btc",
    icon: "fab fa-bitcoin",
    color: g.orange,
    title: "Bitcoin",
    body: `asffs`,
    rank: 3,
  },
  {
    id: "eth",
    icon: "fab fa-ethereum",
    color: g.gray,
    title: "Ethereum",
    body: `fff`,
    rank: 3,
  },
  {
    id: "daw",
    icon: "fas fa-pepper-hot",
    color: g.orange,
    title: "FL Studio",
    body: ``,
    rank: 4,
  },
  {
    id: "vg",
    icon: "fas fa-gamepad",
    color: g.pink,
    title: "Game Testing/Competition",
    body: `<p>
    <Image src="/img/psn-card.png" alt="" />
    </p>`,
    rank: 5,
  },
  {
    id: "obs",
    icon: "fab fa-twitch",
    color: g.purple,
    title: "Livestreaming",
    body: `<p>
    I am an experienced streamer of nearly 2 years.<br>
    I'm well acquainted with handling complex OBS
    scenes/setups to create aesthetically pleasing yet confluent designs. Livestreaming has
    offered
    me a great outlet for improving my ability to perform under pressure whether through solo
    tasks
    or multitasking in front of random
    audiences as well as aiding me in developing stronger social skills through viewer
    engagement.
  </p>`,
    rank: 4,
  },
  {
    id: "dav",
    icon: "fas fa-clapperboard",
    color: g.blue,
    title: "Video Production",
    body: ``,
    rank: 3,
  },
  {
    id: "fit",
    icon: "fas fa-dumbbell",
    color: g.gray,
    title: "Nutrition/Fitness",
    body: `<p>
    I have an intermediate foundational understanding of a variety of topics related to strength
    training<br>
    e.g., diet structuring, optimizing workout plans, managing supplement cycles

    As well as over 4 years of weekly personal experience training (cut short by a common
    weightlifting
    injury, i.e. inguinal hernia)
    </p>`,
    rank: 4,
  },
  {
    id: "deb",
    icon: `${di}debian-plain`,
    color: g.red,
    title: "Linux (Debian)",
    body: ``,
    rank: 4,
  },
  {
    id: "js",
    icon: `${di}javascript-plain`,
    color: g.yellow,
    title: "Javascript",
    body: ``,
    rank: 3,
  },
  {
    id: "node",
    icon: `${di}nodejs-plain`,
    color: g.green,
    title: "NodeJS",
    body: ``,
    rank: 2,
  }
];

export default Properties;
