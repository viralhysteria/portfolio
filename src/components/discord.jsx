import { useEffect, useState } from "react";
import styles from "../styles/discord.module.css";

export default function DiscordMarquee() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await fetch("/api/channels");
        if (response.ok) {
          const data = await response.json();
          // const hiddenChannels = process.env.discord_hidden_channels.split(",");
          // const filteredChannels = hiddenChannels.length > 0
          //   ? data.filter((channel) => {
          //       return (
          //         typeof channel.position === "number" &&
          //         !hiddenChannels.some((name) => channel.name.includes(name))
          //       );
          //     })
          //   : data;
          const sortedChannels = data.sort(
            (a, b) => a.position - b.position
          );
          setChannels(sortedChannels);
        } else {
          console.error("Error:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchChannels();
  }, []);

  function inviteTrigger() {
    window.location.href = "https://discord.gg/invite/xxxxx";
  }

  function channelMap() {
    return channels.map((channel) => <li key={channel.id}>{channel.name}</li>);
  }

  return (
    <div className="fixed-bottom" onClick={inviteTrigger}>
      <div className={styles.scroll}>
        <ul>{channelMap()}</ul>
        <ul aria-hidden="true" className={styles.scrollLoop}>
          {channelMap()}
        </ul>
      </div>
    </div>
  );
}

// "💬︱chill",
// "🎭︱humor",
// "🎮︱gaming",
// "🎵︱music",
// "🎥︱videos",
// "🎨︱artwork",
// "🤓︱coding",
// "💻︱technology",
// "🤖︱commands",
// "🔞︱eyebleach",
// "💊︱substances",
// "📜︱quotes",
// "🔬︱research",
// "💬︱general",
// "🤡︱memes",
// "📈︱charts",
// "💱︱trading",
// "🌎︱economy",
// "🌛︱wenmoon",
// "🐤︱banter",
// "🧭︱analysts",
// "🚨︱breaking",
// "📰︱news",
// "🎫︱nifties",
// "🧭︱projects",
// "📊︱ecosystem",
// "🧠︱education",
// "✨︱metaverse",
// "🧰︱toolbox",
// "🧩︱misc",
// "🚀︱hopium",
// "🎯︱signals",
