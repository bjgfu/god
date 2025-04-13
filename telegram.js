export async function sendTelegramMessage(text) {
  const token = "YOUR_BOT_TOKEN";
  const chatId = "YOUR_CHAT_ID";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}