import React from 'react';

const Sidebar: React.FC<{ active: string; onChange: (tab: any) => void }> = ({ active, onChange }) => (
  <div className="w-28 bg-zinc-900 border-r border-white/10 p-3 flex flex-col gap-2">
    {['dashboard', 'fonts', 'backgrounds'].map(tab => (
      <button
        key={tab}
        onClick={() => onChange(tab)}
        className={`p-3 rounded-xl text-sm capitalize transition-all ${active === tab ? 'bg-white/10 text-neon-pink' : 'hover:bg-white/5'}`}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default Sidebar;