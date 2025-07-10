chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
  if (req.type === "checkUrl") {
    const url = req.url;

    // Replace YOUR_API_KEY with your real VirusTotal API Key
    fetch("https://www.virustotal.com/api/v3/urls", {
      method: "POST",
      headers: {
        "x-apikey": "YOUR_API_KEY",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({ url })
    })
    .then(res => res.json())
    .then(data => sendRes(data))
    .catch(err => sendRes({ error: err.message }));

    return true; // Keeps the message channel open for async sendRes
  }
});
