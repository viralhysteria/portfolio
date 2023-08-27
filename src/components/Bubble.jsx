import "@fortawesome/fontawesome-free/css/all.min.css";
import { gradient } from "../utils/genGradient";
import * as Content from "./dep/BubbleModalContent";

const di = "devicon";

const Details = [
  {
    id: "html",
    icon: `${di}-html5-plain`,
    color: gradientorange,
    title: "HTML",
    rank: 5,
  },
  {
    id: "css",
    icon: `${di}-css3-plain`,
    color: gradientpurple,
    title: "CSS",
    rank: 5,
  },
  {
    id: "design",
    icon: `${di}-photoshop-line`,
    color: gradientblue,
    title: "Graphic Design",
    body: <Content.DesignBody />,
    rank: 3,
  },
  {
    id: "trade",
    icon: "fas fa-magnifying-glass-chart",
    color: gradientred,
    title: "Technical Analysis + Swing Trading",
    body: <Content.TradingBody />,
    rank: 4,
  },
  {
    id: "win",
    icon: `${di}-windows8-original`,
    color: gradientyellow,
    title: "Windows",
    body: <Content.WindowsBody />,
    rank: 5,
  },
  {
    id: "oscp",
    icon: "fas fa-dragon",
    color: gradientcyan,
    title: "Pentesting w/Kali + Offensive Security",
    body: <Content.KaliBody />,
    rank: 4,
  },
  {
    id: "py",
    icon: `${di}-python-plain`,
    color: gradientgreen,
    title: "Python",
    rank: 3,
  },
  {
    id: "react",
    icon: `${di}-react-original`,
    color: gradientcyan,
    title: "React",
    rank: 4,
  },
  {
    id: "btc",
    icon: "fab fa-bitcoin",
    color: gradientorange,
    title: "Bitcoin",
    rank: 3,
  },
  {
    id: "eth",
    icon: "fab fa-ethereum",
    color: gradientgray,
    title: "Ethereum",
    rank: 3,
  },
  {
    id: "daw",
    icon: "fas fa-pepper-hot",
    color: gradientorange,
    title: "FL Studio",
    rank: 4,
  },
  {
    id: "vg",
    icon: "fas fa-gamepad",
    color: gradientpink,
    title: "Competitive Gaming",
    body: <Content.GamingBody />,
    rank: 5,
  },
  {
    id: "obs",
    icon: "fab fa-twitch",
    color: gradientpurple,
    title: "Livestreaming",
    body: <Content.StreamingBody />,
    rank: 4,
  },
  {
    id: "dav",
    icon: "fas fa-clapperboard",
    color: gradientblue,
    title: "Video Production",
    rank: 3,
  },
  {
    id: "fit",
    icon: "fas fa-dumbbell",
    color: gradientgray,
    title: "Nutrition/Fitness",
    body: ``,
    rank: 4,
  },
  {
    id: "deb",
    icon: `${di}-debian-plain`,
    color: gradientred,
    title: "Linux (Debian)",
    rank: 4,
  },
  {
    id: "js",
    icon: `${di}-javascript-plain`,
    color: gradientyellow,
    title: "Javascript",
    rank: 3,
  },
  {
    id: "node",
    icon: `${di}-nodejs-plain`,
    color: gradientgreen,
    title: "NodeJS",
    rank: 2,
  },
];

export default Details;
