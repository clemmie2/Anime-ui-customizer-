import React from 'react';
import ToggleSwitch from './ToggleSwitch';

const SettingsPanel: React.FC<any> = ({ settings, update }) => (
  <div className="space-y-6">
    <div className="glass p-5 rounded-2xl">
      <h2 className="text-lg mb-4">Global Controls</h2>
      <ToggleSwitch label="Extension Enabled" checked={settings.enabled} onChange={v => update({ enabled: v })} />
    </div>

    <div className="glass p-5 rounded-2xl">
      <h2 className="text-lg mb-4">Current Theme</h2>
      <p className="text-sm opacity-75">{settings.currentTheme.name}</p>
    </div>
  </div>
);