import React from 'react';

const ToggleSwitch: React.FC<{ label: string; checked: boolean; onChange: (v: boolean) => void }> = ({ label, checked, onChange }) => (
  <label className="flex justify-between items-center cursor-pointer">
    <span>{label}</span>
    <div onClick={() => onChange(!checked)} className={`w-12 h-6 rounded-full relative transition-colors ${checked ? 'bg-pink-600' : 'bg-zinc-700'}`}>
      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
    </div>
  </label>
);