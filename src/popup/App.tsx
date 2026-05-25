import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import FontSelector from '../components/FontSelector';
import BackgroundUploader from '../components/BackgroundUploader';
import WallpaperGallery from '../components/WallpaperGallery';
import SettingsPanel from '../components/SettingsPanel';
import { storage } from '../utils/storage';

function App() {
  const [settings, setSettings] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'fonts' | 'backgrounds' | 'presets'>('home');

  useEffect(() => {
    storage.get().then(setSettings);
  }, []);

  const updateSettings = async (newSettings: any) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    await storage.save(updated);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id!, {
        type: 'UPDATE_THEME',
        theme: updated.currentTheme
      });
    });
  };

  if (!settings) return <div className="flex items-center justify-center h-96">Loading...</div>;

  return (
    <div className="w-[380px] h-[520px] bg-zinc-950 text-white overflow-hidden flex flex-col font-sans">
      {/* Neon Header */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 p-4 flex items-center gap-3">
        <div className="text-2xl">🌸</div>
        <div>
          <h1 className="text-xl font-bold tracking-wider">ANIME UI</h1>
          <p className="text-xs opacity-75 -mt-1">Customizer</p>
        </div>
      </div>

      <div className="flex h-full">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 p-4 overflow-auto">
          {activeTab === 'home' && <SettingsPanel settings={settings} updateSettings={updateSettings} />}
          {activeTab === 'fonts' && <FontSelector settings={settings} updateSettings={updateSettings} />}
          {activeTab === 'backgrounds' && (
            <>
              <BackgroundUploader settings={settings} updateSettings={updateSettings} />
              <WallpaperGallery settings={settings} updateSettings={updateSettings} />
            </>
          )}
          {activeTab === 'presets' && <div>Presets coming soon...</div>}
        </div>
      </div>
    </div>
  );
}

export default App;