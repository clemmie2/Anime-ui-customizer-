import React from 'react';

const BackgroundUploader: React.FC<any> = ({ settings, update }) => {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      update({
        customWallpapers: [...settings.customWallpapers, reader.result as string],
        currentTheme: { ...settings.currentTheme, background: reader.result }
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg mb-3">Upload Custom Wallpaper</h2>
      <label className="block border-2 border-dashed border-white/30 rounded-3xl p-8 text-center cursor-pointer hover:border-pink-500 transition-colors">
        <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
        <span className="text-4xl">📸</span>
        <p className="mt-2">Drop anime image or click</p>
      </label>
    </div>
  );
};