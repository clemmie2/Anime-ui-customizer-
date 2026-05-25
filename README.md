# 🎨 Anime UI Customizer

A modern, production-ready Chrome browser extension that transforms any website with anime-inspired aesthetics, custom fonts, and beautiful wallpapers.

## ✨ Features

### Core Functionality
- **Dynamic Font Switching** - Change website fonts to anime-inspired typefaces in real-time
- **Custom Wallpapers** - Upload your own anime images as website backgrounds
- **Built-in Wallpaper Gallery** - Pre-made anime-inspired theme presets
- **Multiple Fonts** - 6+ anime and modern fonts to choose from
- **Per-Site Customization** - Different settings for each website
- **Dark Mode & Neon UI** - Anime-inspired dark theme with neon accents
- **Real-Time Preview** - See changes instantly as you adjust settings
- **Toggle On/Off** - Enable/disable the extension per website
- **Keyboard Shortcuts** - Quick toggle with Ctrl+Shift+A (Cmd+Shift+A on Mac)
- **Import/Export Settings** - Backup and restore your customizations

### Technical Highlights
- ✅ Chrome Manifest V3 compatible
- ✅ React 18 with TypeScript
- ✅ TailwindCSS styling
- ✅ Service Worker background script
- ✅ Content script injection
- ✅ Chrome Storage API integration
- ✅ Zero dependencies bloat
- ✅ Performance optimized DOM updates
- ✅ Memory leak prevention
- ✅ Responsive popup UI

## 🚀 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Chrome browser (version 88+)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourname/anime-ui-customizer.git
cd anime-ui-customizer
```

2. **Install dependencies**
```bash
npm install
```

3. **Build the extension**
```bash
npm run build
```

4. **Load in Chrome**
- Open `chrome://extensions/`
- Enable "Developer mode" (top right)
- Click "Load unpacked"
- Select the `dist` folder

## 🎮 Usage

### Quick Start
1. Click the extension icon in your toolbar
2. Select a theme from the presets
3. Toggle the extension ON
4. Enjoy your customized website!

### Customization

#### Change Fonts
1. Go to the "🔤 Fonts" tab
2. Select from available anime fonts
3. Adjust size and letter spacing with sliders
4. Changes apply instantly

#### Upload Backgrounds
1. Click "📸 Click to upload image"
2. Select a PNG, JPG, or WebP file (max 5MB)
3. Adjust opacity and blur using sliders
4. Background applies to all pages

#### Theme Management
1. Browse preset themes
2. Click to apply
3. Click heart ❤️ to favorite
4. View all your custom themes

#### Settings
- **Auto-enable on new sites** - Enable extension automatically
- **Sync across devices** - Keep settings synchronized
- **Export/Import** - Backup your customizations

## 📁 Project Structure

```
anime-ui-customizer/
├── src/
│   ├── background/
│   │   └── service-worker.ts         # Background script
│   ├── content/
│   │   └── index.ts                  # Content script
│   ├── popup/
│   │   ├── index.html               # Popup UI
│   │   └── App.tsx                  # React app
│   ├── components/
│   │   ├── Dashboard.tsx            # Main component
│   │   ├── ThemeSelector.tsx        # Theme selection
│   │   ├── ThemePresets.tsx         # Preset themes
│   │   ├── FontSelector.tsx         # Font selection
│   │   ├── BackgroundUploader.tsx   # Image upload
│   │   └── SettingsPanel.tsx        # Settings
│   ├── hooks/
│   │   └── index.ts                 # Custom React hooks
│   ├── utils/
│   │   ├── StorageManager.ts        # Chrome storage
│   │   ├── ThemeEngine.ts           # Theme logic
│   │   ├── DOMUtils.ts              # DOM manipulation
│   │   └── helpers.ts               # Utilities
│   └── styles/
│       └── global.css               # Global styles
├── public/
│   └── assets/
│       ├── icons/                   # Extension icons
│       ├── fonts/                   # Custom fonts
│       └── images/                  # Preset images
├── manifest.json                    # Extension manifest
├── vite.config.ts                   # Build config
├── tailwind.config.ts               # Tailwind config
├── tsconfig.json                    # TypeScript config
└── package.json                     # Dependencies
```

## 🔧 Development

### Development Server
```bash
npm run dev
```

This builds the extension and watches for changes.

### Type Checking
```bash
npm run type-check
```

### Linting & Formatting
```bash
npm run lint
npm run format
```

### Production Build
```bash
npm run build
```

## 🎨 Preset Themes

The extension includes 8 beautiful anime-inspired presets:

1. **🌸 Sakura Dreams** - Cherry blossom pink gradient
2. **🌃 Cyberpunk Neon** - Dark cyberpunk aesthetic
3. **🌅 Twilight Essence** - Purple sunset vibes
4. **🌙 Midnight Ocean** - Deep blue nighttime
5. **🌅 Sunset Paradise** - Warm orange tones
6. **🍵 Matcha Harmony** - Green tea inspired
7. **🌸 Light Sakura** - Light pink aesthetic
8. **🚀 Deep Space** - Cosmic dark theme

## 📝 Available Fonts

- Anime Ace
- Manga Gothic
- JetBrains Mono
- Comic Sans MS
- Arial
- Georgia

## 🔌 Message Protocol

### Content Script → Background
```typescript
{
  type: 'APPLY_THEME' | 'APPLY_FONT' | 'APPLY_BACKGROUND' | 'RESET_STYLES',
  theme?: ThemeSettings,
  fontFamily?: string,
  background?: BackgroundSettings
}
```

### Background → Content Script
```typescript
{
  type: 'TOGGLE_EXTENSION' | 'TAB_ACTIVATED',
  enabled?: boolean,
  domain?: string
}
```

## 💾 Storage Schema

### Site Settings
```typescript
{
  domain: string,
  enabled: boolean,
  theme: ThemeSettings,
  timestamp: number
}
```

### Theme Settings
```typescript
{
  id: string,
  name: string,
  font: FontSettings,
  background: BackgroundSettings,
  neonGlow: boolean,
  neonAccent: 'pink' | 'purple' | 'blue' | 'cyan',
  darkMode: boolean
}
```

## 🚨 Known Limitations

- Some websites with strict CSP headers may have limited styling
- Animated backgrounds may impact performance on some pages
- YouTube and similar services have additional restrictions

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🙏 Credits

- Anime UI inspiration from popular anime aesthetic design
- Built with React, TypeScript, and TailwindCSS
- Chrome Extension APIs documentation

## 📞 Support

For issues, feature requests, or questions:
- Open an issue on GitHub
- Check existing documentation
- Review FAQ section

## 🎯 Roadmap

- [ ] Custom theme creator UI
- [ ] Community theme sharing
- [ ] Animation effects library
- [ ] Advanced color picker
- [ ] Theme scheduling (apply at specific times)
- [ ] Integration with anime streaming services
- [ ] Performance metrics dashboard
- [ ] Accessibility improvements

## 🔐 Privacy & Security

This extension:
- ✅ Stores all data locally
- ✅ Does NOT collect user data
- ✅ Does NOT track browsing
- ✅ Does NOT require accounts
- ✅ Open source and auditable

---

Made with 💜 for anime fans everywhere. Transform your web, one website at a time! ✨
