import { applyTheme } from '../utils/themeEngine';
import { storage } from '../utils/storage';

async function init() {
  const settings = await storage.get();
  const hostname = window.location.hostname;
  const theme = settings.perSiteSettings[hostname] || settings.currentTheme;

  if (settings.enabled) applyTheme(theme);
}

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'UPDATE_THEME') applyTheme(msg.theme);
});

init();