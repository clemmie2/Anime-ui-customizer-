import React from 'react';

const fonts = [
  { value: 'sakura', label: 'Sakura (Clean)' },
  { value: 'anime', label: 'Anime (Pixel)' },
  { value: 'cyber', label: 'Cyber (Terminal)' },
];

const FontSelector: React.FC<any> = ({ settings, update }) => (
  <div className="space-y-4">
    <h2 className="text-lg">Choose Font</h2>
    {fonts.map(f => (
      <button
        key={f.value}
        onClick={() => update({ currentTheme: { ...settings.currentTheme, font: f.value } })}
        className={`w-full p-4 rounded-2xl text-left transition-all ${settings.currentTheme.font === f.value ? 'bg-pink-600' : 'bg-zinc-900 hover:bg-zinc-800'}`}
      >
        {f.label}
      </button>
    ))}
  </div>
);