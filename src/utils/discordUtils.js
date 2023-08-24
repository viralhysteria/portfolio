import sortedChannels from "./channelTable";

require("dotenv").config();

export default async function fetchChannels (setChannels) {
  try {
    const response = await fetch("/api/channels");
    if (response.ok) {
      const data = await response.json();
      const hiddenChannels =
        process.env.NEXT_PUBLIC_discord_hidden_channels.split(",");
        const filteredChannels = hiddenChannels.length > 0
        ? data.filter((channel) => {
          return (
            typeof channel.position === "number" &&
            !hiddenChannels.some((name) => channel.name.includes(name))
          );
        })
        : data;

      const strippedChannels = filteredChannels.map((channel) => {
        return {
          ...channel,
          name: channel.name.replace(/\︱/g, " ").trim(),
        };
      });

      const orderedChannels = sortedChannels.reduce((result, { id }) => {
        const channel = strippedChannels.find((c) => c.id === id);
        if (channel) {
          result.push({ ...channel });
        }
        return result;
      }, []);

      setChannels(orderedChannels);
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};
