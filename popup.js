document.getElementById("checkBtn").addEventListener("click", () => {
  const url = document.getElementById("urlInput").value;
  chrome.runtime.sendMessage({ type: "checkUrl", url }, (res) => {
    document.getElementById("result").textContent = JSON.stringify(res, null, 2);

    // Open sandbox in new tab with the entered URL
    const encoded = encodeURIComponent(url);
    chrome.tabs.create({ url: `sandbox.html?url=${encoded}` });
  });
});
