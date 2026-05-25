export interface AnimeTheme {
  id: string;
  name: string;
  background: string;
  font: string;
  accentColor: string;
  opacity: number;
  blur: number;
  glow: boolean;
}

export interface UserSettings {
  enabled: boolean;
  currentTheme: AnimeTheme;
  customWallpapers: string[];
  favoriteThemes: string[];
  perSiteSettings: Record<string, AnimeTheme>;
}