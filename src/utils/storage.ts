import { UserSettings } from '../types';

const DEFAULT_SETTINGS: UserSettings = {
  enabled: true,
  currentTheme: {
    id: 'sakura',
    name: 'Sakura Bloom',
    background: 'https://picsum.photos/id/1015/1920/1080',
    font: 'sakura',
    accentColor: '#ff00ff',
    opacity: 0.85,
    blur: 8,
    glow: true
  },
  customWallpapers: [],
  favoriteThemes: [],
  perSiteSettings: {}
};

export const storage = {
  async get(): Promise<UserSettings> {
    const result = await chrome.storage.sync.get('settings');
    return { ...DEFAULT_SETTINGS, ...result.settings };
  },

  async save(settings: UserSettings) {
    await chrome.storage.sync.set({ settings });
  }
};