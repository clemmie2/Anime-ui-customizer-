export interface AnimeTheme {
  id: string;
  name: string;
  background: string;
  font: 'sakura' | 'anime' | 'cyber';
  accentColor: string;
  opacity: number;
  blur: number;
  glow: boolean;
}

export interface UserSettings {
  enabled: boolean;
  currentTheme: AnimeTheme;
  customWallpapers: string[];
  perSiteSettings: Record<string, AnimeTheme>;
}