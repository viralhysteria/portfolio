import { useEffect, useState } from "react";
import fetchChannels from "@/utils/discordUtils";
import styles from "@/styles/discord.module.css";

export default function DiscordMarquee() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetchChannels(setChannels);
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
