import { injectTheme } from '../utils/themeEngine';
import { storage } from '../utils/storage';

let currentSettings: any = null;

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'UPDATE_THEME') {
    currentSettings = message.theme;
    injectTheme(message.theme);
  }
});

async function init() {
  const settings = await storage.get();
  const hostname = window.location.hostname;

  const siteSettings = settings.perSiteSettings[hostname] || settings.currentTheme;

  if (settings.enabled) {
    injectTheme(siteSettings);
  }
}

init();