# 📑 Anime UI Customizer - Complete File Index

## 📚 Documentation Files (START HERE!)

| File | Purpose | Read Time |
|------|---------|-----------|
| **QUICKSTART.md** | ⚡ Get running in 5 minutes | 5 min |
| **README.md** | 📖 Full feature documentation | 10 min |
| **BUILDING.md** | 🛠️ Development guide | 15 min |
| **PROJECT_SUMMARY.md** | 📊 Comprehensive overview | 10 min |
| **SETUP_CHECKLIST.md** | ✅ Installation verification | 5 min |

**→ Start with QUICKSTART.md for fastest setup**

---

## 📂 Project Structure

### Configuration Files (5 files)
```
manifest.json          - Chrome extension configuration (Manifest V3)
vite.config.ts         - Build tool configuration
tailwind.config.ts     - Styling framework config
tsconfig.json          - TypeScript main config
tsconfig.node.json     - TypeScript node config
postcss.config.js      - CSS processing config
package.json           - Dependencies & scripts
```

### Source Code Structure

#### 🎯 Popup UI (React Application)
```
src/popup/
├── index.html          - HTML entry point
└── App.tsx             - Main React app component
```

#### 📄 Popup Components
```
src/components/
├── Dashboard.tsx            - Main container (95 lines)
├── ThemeSelector.tsx        - Theme selection grid
├── ThemePresets.tsx         - Preset themes display
├── FontSelector.tsx         - Font selection UI
├── BackgroundUploader.tsx   - Image upload handler
├── SettingsPanel.tsx        - Settings & data management
└── index.ts                 - Export index
```

#### 🔧 Extension Logic
```
src/background/
└── service-worker.ts   - Service worker (96 lines)
                          Message routing hub

src/content/
└── index.ts            - Content script (208 lines)
                          Page injection & styling

src/injected/
└── injected.ts         - Injected script
                          Advanced DOM manipulation
```

#### 🎣 React Hooks
```
src/hooks/
└── index.ts            - Custom hooks (278 lines)
                          • useTheme()
                          • useSiteSettings()
                          • useThemes()
                          • useFavorites()
                          • useDebouncedValue()
                          • usePrevious()
                          • useAsync()
                          • useLocalStorage()
                          • useResizeObserver()
                          • useAnimation()
                          • useClipboard()
```

#### 🛠️ Utilities
```
src/utils/
├── StorageManager.ts   - Chrome storage wrapper (287 lines)
│                         • Site settings management
│                         • Theme CRUD operations
│                         • Favorites system
│                         • Import/Export
│
├── ThemeEngine.ts      - Theme management (156 lines)
│                         • 8 preset themes
│                         • CSS generation
│                         • Font stacks
│                         • Neon colors
│
├── DOMUtils.ts         - DOM utilities (212 lines)
│                         • Safe DOM manipulation
│                         • CSS injection
│                         • Background overlays
│                         • Debounced updates
│
└── helpers.ts          - Helper functions (168 lines)
                          • String utilities
                          • File operations
                          • Validation
                          • Formatting
```

#### 🎨 Styling
```
src/styles/
└── global.css          - Global styles (185 lines)
                          • Animations
                          • Utilities
                          • Dark mode
                          • Neon effects
```

---

## 📊 File Statistics

| Category | Count | Total Lines | Purpose |
|----------|-------|------------|---------|
| **TypeScript/TSX** | 16 | ~1,800 | Core logic |
| **Configuration** | 7 | ~200 | Build & setup |
| **Documentation** | 5 | ~2,000 | Guides |
| **CSS** | 1 | ~185 | Styling |
| **JSON** | 2 | ~100 | Data |
| **TOTAL** | **31** | **~4,300** | Complete extension |

---

## 🚀 Getting Started

### Quick Navigation

1. **Want to get it running?**
   → Read: QUICKSTART.md

2. **Want full feature details?**
   → Read: README.md

3. **Want to develop?**
   → Read: BUILDING.md

4. **Want complete overview?**
   → Read: PROJECT_SUMMARY.md

5. **Want to verify setup?**
   → Use: SETUP_CHECKLIST.md

### Installation Command
```bash
cd anime-ui-customizer
npm install
npm run build
# Load dist/ folder in Chrome
```

---

## 📦 Build & Output

### Build Commands
```bash
npm run dev       # Development with watch
npm run build     # Production build
npm run preview   # Preview build
npm run type-check  # TypeScript check
npm run lint      # Code linting
npm run format    # Code formatting
npm run clean     # Remove dist/
```

### Output Files (dist/)
```
dist/
├── manifest.json              - Extension config
├── background/
│   └── service-worker.js      - Compiled background script
├── content/
│   └── index.js               - Compiled content script
├── popup/
│   ├── index.html             - Popup HTML
│   └── App.js                 - Compiled React app
├── injected/
│   └── injected.js            - Compiled injected script
└── *.css                       - Compiled styles
```

---

## 🎯 Key Features by File

### Theme Management
- **ThemeEngine.ts**: 8 presets, CSS generation
- **StorageManager.ts**: Save/load themes
- **Dashboard.tsx**: UI selection

### Font System
- **ThemeEngine.ts**: Font definitions
- **FontSelector.tsx**: Font selection UI
- **DOMUtils.ts**: Font injection

### Storage System
- **StorageManager.ts**: Chrome storage wrapper
- **SettingsPanel.tsx**: Data management UI
- **service-worker.ts**: Storage coordination

### DOM Manipulation
- **DOMUtils.ts**: Safe DOM operations
- **content/index.ts**: Page injection
- **injected/injected.ts**: Advanced manipulation

---

## 💾 Data Flow

```
Popup (Dashboard.tsx)
    ↓ sends message
Service Worker (service-worker.ts)
    ↓ stores/routes
Chrome Storage API
    ↓ + message
Content Script (content/index.ts)
    ↓ injects
Webpage DOM
```

---

## 🎨 Component Hierarchy

```
App
└── Dashboard
    ├── Tab: Themes
    │   ├── ThemePresets
    │   └── ThemeSelector
    ├── Tab: Fonts
    │   ├── FontSelector
    │   └── BackgroundUploader
    └── Tab: Settings
        └── SettingsPanel
```

---

## 🔌 Message Types

### Popup → Background
```
APPLY_THEME | APPLY_FONT | APPLY_BACKGROUND | 
SAVE_DOMAIN_SETTINGS | TOGGLE_SITE
```

### Background → Content
```
APPLY_THEME | APPLY_FONT | APPLY_BACKGROUND | 
TOGGLE_EXTENSION | TAB_ACTIVATED
```

### Content → Page
```
CSS injection via DOMUtils
Font application via ThemeEngine
Background overlay creation
```

---

## 🎓 Learning Path

### Beginner
1. Read QUICKSTART.md (5 min)
2. Install and test (5 min)
3. Use all features (10 min)

### Intermediate
1. Read README.md (10 min)
2. Review PROJECT_SUMMARY.md (10 min)
3. Explore src/ folder (15 min)

### Advanced
1. Read BUILDING.md (15 min)
2. Review source code (30 min)
3. Modify and extend (varies)

### Expert
1. Understand architecture (20 min)
2. Add new features (varies)
3. Contribute improvements (varies)

---

## 🔍 Finding Things

### Where are the themes?
→ `src/utils/ThemeEngine.ts` (lines 1-70)

### Where are the fonts?
→ `src/utils/ThemeEngine.ts` (lines 71-80)

### Where is storage handled?
→ `src/utils/StorageManager.ts`

### Where is the popup UI?
→ `src/components/Dashboard.tsx`

### Where is page injection?
→ `src/content/index.ts`

### Where is configuration?
→ `manifest.json` & `vite.config.ts`

### Where are custom hooks?
→ `src/hooks/index.ts`

### Where are utilities?
→ `src/utils/helpers.ts`

### Where is global styling?
→ `src/styles/global.css`

### Where is dark mode?
→ `Dashboard.tsx` + `tailwind.config.ts`

---

## 📋 File Checklist

Before using the extension, verify these files exist:

**Source Files**
- [ ] src/popup/index.html
- [ ] src/popup/App.tsx
- [ ] src/components/Dashboard.tsx
- [ ] src/components/ThemeSelector.tsx
- [ ] src/components/FontSelector.tsx
- [ ] src/components/BackgroundUploader.tsx
- [ ] src/components/SettingsPanel.tsx
- [ ] src/components/ThemePresets.tsx
- [ ] src/background/service-worker.ts
- [ ] src/content/index.ts
- [ ] src/injected/injected.ts
- [ ] src/hooks/index.ts
- [ ] src/utils/StorageManager.ts
- [ ] src/utils/ThemeEngine.ts
- [ ] src/utils/DOMUtils.ts
- [ ] src/utils/helpers.ts
- [ ] src/styles/global.css

**Config Files**
- [ ] manifest.json
- [ ] vite.config.ts
- [ ] tailwind.config.ts
- [ ] tsconfig.json
- [ ] package.json

**Documentation**
- [ ] README.md
- [ ] QUICKSTART.md
- [ ] BUILDING.md
- [ ] PROJECT_SUMMARY.md
- [ ] SETUP_CHECKLIST.md

---

## 🚀 Next Steps

1. **Start Here**: Read QUICKSTART.md
2. **Install**: Run `npm install && npm run build`
3. **Load**: Add dist/ folder to Chrome
4. **Test**: Use all features
5. **Explore**: Review source code
6. **Customize**: Modify to your needs
7. **Share**: Export themes & settings

---

## 📞 Help Resources

| Need | Resource |
|------|----------|
| Installation help | QUICKSTART.md |
| Feature details | README.md |
| Development guide | BUILDING.md |
| Architecture overview | PROJECT_SUMMARY.md |
| Setup verification | SETUP_CHECKLIST.md |
| Source code | src/ folder |
| TypeScript help | tsconfig.json |
| Styling help | tailwind.config.ts |

---

## ✅ Quality Assurance

- ✅ 16 TypeScript files (strict mode)
- ✅ 6 React components
- ✅ 11 custom hooks
- ✅ 4 utility classes
- ✅ 8 preset themes
- ✅ 6 anime fonts
- ✅ 100% documented
- ✅ Production ready

---

**Total Package**: Complete, professional Chrome extension with documentation
**Status**: ✅ Ready to use
**License**: MIT

**Transform your web, one website at a time!** ✨

---

*Last Updated*: January 2024  
*Version*: 1.0.0  
*Built With*: ❤️ for anime fans
