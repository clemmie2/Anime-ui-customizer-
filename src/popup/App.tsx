import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import SettingsPanel from '../components/SettingsPanel';
import FontSelector from '../components/FontSelector';
import BackgroundUploader from '../components/BackgroundUploader';
import WallpaperGallery from '../components/WallpaperGallery';
import { storage } from '../utils/storage';

const App: React.FC = () => {
  const [settings, setSettings] = useState<any>(null);
  const [tab, setTab] = useState<'dashboard' | 'fonts' | 'backgrounds'>('dashboard');

  useEffect(() => {
    storage.get().then(setSettings);
  }, []);

  const update = async (newSettings: any) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    await storage.save(updated);

    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'UPDATE_THEME', theme: updated.currentTheme });
      }
    });
  };

  if (!settings) return <div className="h-96 flex items-center justify-center">Loading...</div>;

  return (
    <div className="w-[400px] h-[560px] bg-zinc-950 text-white flex flex-col overflow-hidden">
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-4 flex items-center gap-3 border-b border-white/10">
        <span className="text-3xl">🌸</span>
        <div>
          <h1 className="text-2xl font-bold">ANIME UI</h1>
          <p className="text-xs opacity-75">Customizer</p>
        </div>
      </div>

      <div className="flex flex-1">
        <Sidebar active={tab} onChange={setTab} />
        <div className="flex-1 p-5 overflow-y-auto">
          {tab === 'dashboard' && <SettingsPanel settings={settings} update={update} />}
          {tab === 'fonts' && <FontSelector settings={settings} update={update} />}
          {tab === 'backgrounds' && (
            <>
              <BackgroundUploader settings={settings} update={update} />
              <WallpaperGallery settings={settings} update={update} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;