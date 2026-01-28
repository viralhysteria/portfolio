import { useEffect, useState } from "react";
import fetchChannels from "@/utils/discordUtils";
import styles from "@/styles/scss/modules/discord.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const guild = process.env.discord_guild_id;

export default function Marquee() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetchChannels(setChannels);
  }, []);

  function inviteTrigger() {
    window.location.href = "https://discord.gg/invite/xxxxx";
  }

  function channelMap() {
    return channels.map((channel) => (
      <li key={channel.id}>
        <span>{channel.name}</span>
      </li>
    ));
  }

  return (
    <motion.footer
      className="fixed-bottom"
      onClick={inviteTrigger}
      variants={fadeIn}
      initial="init"
      animate="anim"
      transition={{
        delay: 2,
        duration: 1,
        ease: "easeIn",
      }}
    >
      <div
        className={`${styles.marquee} p-0 d-flex container-sm align-items-center overflow-hidden`}
      >
        <FontAwesomeIcon
          icon={faDiscord}
          className={`${styles.discordIcon} z-3 ms-2 p-1 rounded-2`}
        ></FontAwesomeIcon>
        <ul className="p-1 my-1">{channelMap()}</ul>
        <ul className="p-1 my-1" aria-hidden="true">
          {channelMap()}
        </ul>
      </div>
    </motion.footer>
  );
}
