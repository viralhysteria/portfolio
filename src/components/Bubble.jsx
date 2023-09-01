import "@fortawesome/fontawesome-free/css/all.min.css";
import { gradient } from "@/utils/genGradient";
import * as Content from "./include/BubbleModal";

const di = "devicon";

const Details = [
  {
    id: "html",
    icon: `${di}-html5-plain`,
    color: gradient.orange,
    title: "HTML",
    rank: 5,
  },
  {
    id: "css",
    icon: `${di}-css3-plain`,
    color: gradient.purple,
    title: "CSS",
    rank: 5,
  },
  {
    id: "design",
    icon: `${di}-photoshop-line`,
    color: gradient.blue,
    title: "Graphic Design",
    body: <Content.DesignBody />,
    rank: 3,
  },
  {
    id: "trade",
    icon: "fas fa-magnifying-glass-chart",
    color: gradient.red,
    title: "Technical Analysis + Swing Trading",
    body: <Content.TradingBody />,
    rank: 4,
  },
  {
    id: "win",
    icon: `${di}-windows8-original`,
    color: gradient.yellow,
    title: "Windows",
    body: <Content.WindowsBody />,
    rank: 5,
  },
  {
    id: "oscp",
    icon: "fas fa-dragon",
    color: gradient.cyan,
    title: "Pentesting w/Kali + Offensive Security",
    body: <Content.KaliBody />,
    rank: 4,
  },
  {
    id: "py",
    icon: `${di}-python-plain`,
    color: gradient.green,
    title: "Python",
    rank: 3,
  },
  {
    id: "react",
    icon: `${di}-react-original`,
    color: gradient.cyan,
    title: "React",
    rank: 4,
  },
  {
    id: "btc",
    icon: "fab fa-bitcoin",
    color: gradient.orange,
    title: "Bitcoin",
    rank: 3,
  },
  {
    id: "eth",
    icon: "fab fa-ethereum",
    color: gradient.gray,
    title: "Ethereum",
    rank: 3,
  },
  {
    id: "daw",
    icon: "fas fa-pepper-hot",
    color: gradient.orange,
    title: "FL Studio",
    rank: 4,
  },
  {
    id: "vg",
    icon: "fas fa-gamepad",
    color: gradient.pink,
    title: "Competitive Gaming",
    body: <Content.GamingBody />,
    rank: 5,
  },
  {
    id: "obs",
    icon: "fab fa-twitch",
    color: gradient.purple,
    title: "Livestreaming",
    body: <Content.StreamingBody />,
    rank: 4,
  },
  {
    id: "dav",
    icon: "fas fa-clapperboard",
    color: gradient.blue,
    title: "Video Production",
    rank: 3,
  },
  {
    id: "fit",
    icon: "fas fa-dumbbell",
    color: gradient.gray,
    title: "Nutrition/Fitness",
    body: ``,
    rank: 4,
  },
  {
    id: "deb",
    icon: `${di}-debian-plain`,
    color: gradient.red,
    title: "Linux (Debian)",
    rank: 4,
  },
  {
    id: "js",
    icon: `${di}-javascript-plain`,
    color: gradient.yellow,
    title: "Javascript",
    rank: 3,
  },
  {
    id: "node",
    icon: `${di}-nodejs-plain`,
    color: gradient.green,
    title: "NodeJS",
    rank: 2,
  },
];

export default Details;
