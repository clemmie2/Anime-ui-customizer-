import React from 'react';

const presets = [
  { id: 'sakura', name: 'Sakura Bloom', url: 'https://picsum.photos/id/1015/1920/1080' },
  { id: 'night-city', name: 'Neon City', url: 'https://picsum.photos/id/1016/1920/1080' },
  { id: 'cyber', name: 'Cyberpunk Rain', url: 'https://picsum.photos/id/133/1920/1080' },
];

const WallpaperGallery: React.FC<any> = ({ settings, update }) => (
  <div>
    <h2 className="text-lg mb-4">Anime Wallpaper Gallery</h2>
    <div className="grid grid-cols-2 gap-3">
      {presets.map(w => (
        <div
          key={w.id}
          onClick={() => update({ currentTheme: { ...settings.currentTheme, background: w.url, name: w.name } })}
          className="aspect-video bg-cover rounded-2xl cursor-pointer ring-2 ring-offset-2 ring-offset-zinc-950 transition-all hover:ring-pink-500"
          style={{ backgroundImage: `url(${w.url})` }}
        >
          <div className="bg-black/60 h-full flex items-end p-2 rounded-2xl">
            <p className="text-xs">{w.name}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);