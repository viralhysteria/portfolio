import { useEffect, useState } from "react";
import fetchChannels from "@/utils/discordUtils";
import styles from "@/styles/scss/discord.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";

const guild = process.env.discord_guild_id;

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
    <motion.div
      className="fixed-bottom"
      onClick={inviteTrigger}
      initial="0"
      animate="1"
      variants={fadeIn}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <div className={styles.scroll}>
        <ul>{channelMap()}</ul>
        <ul aria-hidden="true" className={styles.scrollLoop}>
          {channelMap()}
        </ul>
      </div>
    </motion.div>
  );
}
