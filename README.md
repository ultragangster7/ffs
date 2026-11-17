# Fox Off (For Fox Sake // FFS) 🦊🛡️

> **One-click zero-trust web content purifier. Strip clutter, scripts, and trackers.**  
> Built with strict privacy-by-design for Web, Progressive Web Apps (PWA), and Mobile (Capacitor for Android & iOS).

![Fox Off Icon](www/icon-192.png)

---

## 🌟 Overview

The modern web is overwhelmed by surveillance capitalism: megabytes of tracking beacons, cookie consent walls, telemetry scripts, autoplay popups, and invasive advertisements.

**Fox Off** (For Fox Sake) is a client-side **Zero-Trust Smitten Filter** that inverts this dynamic. Instead of trusting remote code and attempting to patch ads after execution, Fox Off isolates web content inside an ultra-secure client-side sandbox, defusing all scripts, eradicating analytics trackers, and stripping away visual noise.

What remains is pure, distraction-free reading typography — with zero data leaving your device.

---

## 🚀 Key Features

### 🛡️ Zero-Trust Smitten Filter Engine
- **Aggressive Script Neutralization:** Defuses all `<script>` tags, inline event handlers (`onclick`, `onload`, `onerror`), and `javascript:` URIs before rendering.
- **Tracker Eradication:** Identifies and blocks known tracker signatures (Google Analytics, GTM, Meta Pixel, Hotjar, Criteo, Taboola, Outbrain, Segment, Clarity, etc.).
- **Anti-Clutter & Paywall Pruning:** Automatically strips modal popups, cookie consent walls, sticky headers, newsletter overlays, and sponsored content blocks.
- **Client-Side Execution:** 100% of sanitization and content extraction executes locally inside your browser or native webview.

### 📖 Reader Mode & Customization
- **5 Aesthetic Themes:**
  - 🌸 **Fox Rose** (Signature warm cream & crimson rose: `#fff7f9` / `#e11d48`)
  - 📜 **Sepia Paper** (Classic warm editorial look)
  - ☀️ **Modern Light** (Crisp high-contrast white)
  - 🌙 **Slate Dark** (Soft midnight slate for night reading)
  - 🖤 **OLED Black** (True pitch-black for battery saving)
- **Typography Engine:**
  - Font choice: System Sans-Serif, Editorial Serif, or Technical Monospace.
  - Granular font size controls (A− / A+) with live percentage readout.
  - Image toggle (Zero-Data / Text-Only mode).

### 🛠️ Export & Utility Tools
- **📋 Copy Clean Markdown:** Automatically extracts semantic hierarchy into clean Markdown with frontmatter metadata.
- **📄 Copy Plain Text:** Pure prose extraction ready for note-taking apps.
- **🖨️ Print & PDF:** Formatted for clean printing or saving to distraction-free PDFs.
- **💾 Offline Library:** Save articles directly to your local device storage (`localStorage`) for offline reading.
- **🛡️ Audit Inspector:** Full transparency report detailing every script defused, tracker blocked, and clutter element removed.

---

## 📁 Project Structure

```
ffs/
├── package.json              # NPM scripts, dependencies & metadata
├── capacitor.config.json     # Capacitor mobile configuration (com.foxoff.app)
├── server.js                 # Zero-dependency local development server (binds 0.0.0.0:3000)
├── README.md                 # Project documentation
└── www/                      # Application web assets
    ├── index.html            # Main purifier interface, reader view & audit inspector
    ├── style.css             # Responsive theme styling & reader typography
    ├── app.js                # Core Zero-Trust Smitten Filter engine & reader logic
    ├── manifest.json         # PWA Web App Manifest
    ├── sw.js                 # Service worker for offline caching
    ├── privacy.html          # Zero-Trust Privacy Policy
    ├── icon-192.png          # App icon (192x192)
    ├── icon-512.png          # App icon (512x512)
    └── favicon.png           # App favicon (64x64)
```

---

## 💻 Getting Started

### 1. Run Locally (Dev Server)

Fox Off includes a zero-dependency server:

```bash
# Start the server (binds to 0.0.0.0:3000)
npm start
```

Open your browser at `http://localhost:3000`.

### 2. PWA Installation
Fox Off is fully PWA-ready:
- Supports offline usage via `sw.js`.
- Installable directly to your Home Screen / Desktop dock.

---

## 📱 Mobile Hybrid (Capacitor for Android & iOS)

Fox Off is configured for Capacitor (`com.foxoff.app`):

```bash
# Install Capacitor dependencies
npm install

# Setup Android
npm run setup:android
npm run open:android

# Setup iOS (macOS required)
npm run setup:ios
npm run open:ios
```

---

## 🔒 Privacy Architecture Guarantee

Fox Off adheres to strict privacy-by-design:
1. **Zero Tracking:** No analytics, telemetry, or tracking scripts are embedded in this application.
2. **Zero Accounts:** No login or registration required.
3. **Zero Transmission:** Your read articles, URLs, and pasted content are processed locally and never stored on remote servers.
4. **Local Storage Only:** Saved articles and theme preferences remain solely on your device.

Read the full [Privacy Policy](www/privacy.html).

---

## 📄 License

MIT © [ultragangster7](https://github.com/ultragangster7)
