import React from "react";
import styles from "../styles/discord.module.css";

const channels = [
  "💬︱chill",
  "🎭︱humor",
  "🎮︱gaming",
  "🎵︱music",
  "🎥︱videos",
  "🎨︱artwork",
  "🤓︱coding",
  "💻︱technology",
  "🤖︱commands",
  "🔞︱eyebleach",
  "💊︱substances",
  "📜︱quotes",
  "🔬︱research",
  "💬︱general",
  "🤡︱memes",
  "📈︱charts",
  "💱︱trading",
  "🌎︱economy",
  "🌛︱wenmoon",
  "🐤︱banter",
  "🧭︱analysts",
  "🚨︱breaking",
  "📰︱news",
  "🎫︱nifties",
  "🧭︱projects",
  "📊︱ecosystem",
  "🧠︱education",
  "✨︱metaverse",
  "🧰︱toolbox",
  "🧩︱misc",
  "🚀︱hopium",
  "🎯︱signals",
];

export default function Preview() {
  function inviteTrigger() {
    window.location.href = "https://discord.gg/invite/xxxxx";
  }

  function chList() {
    return channels.map((ch, i) => <li key={i}>{ch}</li>);
  }

  return (
    <div className={`${styles.container} fixed-bottom`} onClick={inviteTrigger}>
      <div className={styles.scroll}>
        <ul>{chList()}</ul>
        <ul aria-hidden="true" className={styles.scrollLoop}>
          {chList()}
        </ul>
      </div>
    </div>
  );
}
