import { UserSettings, AnimeTheme } from '../types';

const DEFAULT_THEME: AnimeTheme = {
  id: 'sakura',
  name: 'Sakura Bloom',
  background: 'https://picsum.photos/id/1015/1920/1080',
  font: 'sakura',
  accentColor: '#ff00ff',
  opacity: 0.75,
  blur: 8,
  glow: true,
};

const DEFAULT_SETTINGS: UserSettings = {
  enabled: true,
  currentTheme: DEFAULT_THEME,
  customWallpapers: [],
  perSiteSettings: {},
};

export const storage = {
  async get(): Promise<UserSettings> {
    const data = await chrome.storage.sync.get('settings');
    return { ...DEFAULT_SETTINGS, ...(data.settings || {}) };
  },

  async save(settings: UserSettings): Promise<void> {
    await chrome.storage.sync.set({ settings });
  }
};