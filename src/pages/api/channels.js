export default async function handler(req, res) {
  const token = process.env.discord_bot_token;
  const server_id = process.env.discord_server_id;

  try {
    const response = await fetch(
      `https://discord.com/api/v9/guilds/${server_id}/channels`,
      {
        headers: {
          Authorization: `Bot ${token}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      res.status(response.status).json({ error: response.statusText });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
