from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time

opt = Options()
opt.add_argument("--load-extension=C:/Users/anany/shieldbrowse-extension")  # path to your extension
opt.add_argument("--disable-extensions-except=C:/Users/anany/shieldbrowse-extension")

driver = webdriver.Chrome(options=opt)

# Let extension load
time.sleep(2)

# Open popup.html manually (this is a workaround since Chrome blocks direct access sometimes)
driver.get("chrome-extension://<pifhcgeddimfgblooeggaenobnoejoeh>/popup.html")

# Check the popup loaded
assert "ShieldBrowse" in driver.page_source
print("✅ Popup loaded")

# Optionally test sandbox page (direct)
driver.get("chrome-extension://<pifhcgeddimfgblooeggaenobnoejoeh>/sandbox.html?url=https://example.com")
time.sleep(2)
assert "example" in driver.page_source.lower()
print("✅ Sandbox loaded with example.com")

driver.quit()
