export function applyTheme(theme: AnimeTheme) {
  const styleId = 'anime-ui-customizer-style';
  let style = document.getElementById(styleId) as HTMLStyleElement | null;

  if (!style) {
    style = document.createElement('style');
    style.id = styleId;
    document.head.appendChild(style);
  }

  style.textContent = `
    * { 
      font-family: ${theme.font === 'anime' ? '"Press Start 2P"' : 
                   theme.font === 'cyber' ? '"VT323"' : 'Inter'}, sans-serif !important;
    }
    body, html {
      background: url('${theme.background}') center/cover fixed !important;
    }
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background: rgba(0,0,20,${1-theme.opacity});
      backdrop-filter: blur(${theme.blur}px);
      z-index: -1;
      pointer-events: none;
    }
    ${theme.glow ? `h1,h2,h3,a,button { text-shadow: 0 0 12px ${theme.accentColor}; }` : ''}
  `;
}