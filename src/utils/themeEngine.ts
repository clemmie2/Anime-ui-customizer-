export function injectTheme(theme: any) {
  const styleId = 'anime-ui-customizer-style';
  let style = document.getElementById(styleId) as HTMLStyleElement;

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
      background-image: url('${theme.background}') !important;
      background-size: cover !important;
      background-attachment: fixed !important;
      position: relative;
    }

    body::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, ${1 - theme.opacity});
      backdrop-filter: blur(${theme.blur}px);
      pointer-events: none;
      z-index: -1;
    }

    ${theme.glow ? `
      a, button, h1, h2, h3 {
        text-shadow: 0 0 10px ${theme.accentColor} !important;
      }
    ` : ''}
  `;
}