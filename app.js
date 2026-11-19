// Configure your invite link here after creating the Discord application.
const DISCORD_INVITE_URL = "https://discord.com/";

document.querySelectorAll("#discordLink,#heroDiscord,#aiDiscord,#joinDiscord").forEach(link => {
  link.href = DISCORD_INVITE_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.querySelector("#year").textContent = new Date().getFullYear();

fetch("/api/status")
  .then(response => response.json())
  .then(data => {
    document.querySelector("#status").textContent = data.website.toUpperCase();
  })
  .catch(() => {
    document.querySelector("#status").textContent = "UNAVAILABLE";
  });
