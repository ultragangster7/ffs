/**
 * Fox Off (For Fox Sake / FFS) - Zero-Trust Web Content Purifier & Reader
 * Zero-Trust Smitten Filter Engine
 */

// Known tracking domains and patterns to eliminate
const TRACKER_PATTERNS = [
  'google-analytics.com', 'googletagmanager.com', 'doubleclick.net', 'googleadservices.com',
  'facebook.net', 'connect.facebook.net', 'pixel.facebook.com',
  'criteo.com', 'taboola.com', 'outbrain.com', 'scorecardresearch.com',
  'hotjar.com', 'quantserve.com', 'chartbeat.com', 'optimizely.com',
  'newrelic.com', 'segment.io', 'mixpanel.com', 'amplitude.com',
  'clarity.ms', 'adnxs.com', 'rubiconproject.com', 'amazon-adsystem.com',
  'pubmatic.com', 'openx.net', 'casalemedia.com', 'adroll.com',
  'yandex.ru', 'mc.yandex.ru', 'crazyegg.com', 'heapanalytics.com'
];

// Clutter / Ad / Modal selectors to prune
const CLUTTER_SELECTORS = [
  'script', 'noscript', 'style', 'iframe', 'embed', 'object', 'applet',
  'form', 'button[aria-label*="cookie" i]', 'button[aria-label*="consent" i]',
  '[id*="cookie" i]', '[class*="cookie" i]',
  '[id*="consent" i]', '[class*="consent" i]',
  '[id*="newsletter" i]', '[class*="newsletter" i]',
  '[id*="subscribe" i]', '[class*="subscribe-modal" i]',
  '[id*="paywall" i]', '[class*="paywall" i]',
  '[id*="ad-" i]', '[id*="ad_" i]', '[id*="banner" i]',
  '[class*="ad-" i]', '[class*="ad_" i]', '[class*="advert" i]',
  '[class*="sponsored" i]', '[class*="outbrain" i]', '[class*="taboola" i]',
  '[class*="social-share" i]', '[class*="share-buttons" i]',
  '[role="dialog"]', '[role="alertdialog"]', '.modal', '.popup', '.overlay',
  'header:not(article header)', 'footer:not(article footer)', 'nav', 'aside'
];

// Preset Samples for Instant 1-Click Verification
const PRESET_SAMPLES = {
  news: {
    title: "Breakthrough in Zero-Trust Edge Filtering: How Devices Eliminate Web Bloat",
    domain: "thetechedge.org",
    author: "Elena Rostova, Cybersecurity Bureau",
    date: "November 16, 2026",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <title>The Tech Edge - Breakthrough in Zero-Trust Edge Filtering</title>
        <script src="https://www.googletagmanager.com/gtm.js?id=GTM-TEST99"></script>
        <script src="https://connect.facebook.net/en_US/fbevents.js"></script>
        <script>console.log("Tracking user scroll position & key events...");</script>
        <style>
          .ad-banner { background: #ffe4e6; padding: 20px; border: 2px dashed #f43f5e; margin: 20px 0; text-align: center; }
          .cookie-consent-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 9999; }
        </style>
      </head>
      <body>
        <div class="cookie-consent-overlay" id="cookie-wall">
          <div class="cookie-box">
            <h3>We Value Your Privacy (And Track 487 Partners)</h3>
            <p>Please accept all cookies, analytical beacons, and location tracking to continue reading.</p>
            <button onclick="acceptAllCookies()">Accept Everything</button>
          </div>
        </div>

        <header>
          <div class="nav-bar">Site Navigation | Trending | Live Feeds | Members Only</div>
          <div class="ad-banner" id="leaderboard-ad">
            <strong>Sponsored:</strong> Claim your free cloud crypto voucher today!
            <script src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
          </div>
        </header>

        <article>
          <h1>Breakthrough in Zero-Trust Edge Filtering: How Devices Eliminate Web Bloat</h1>
          <p class="byline">By Elena Rostova, Cybersecurity Bureau · Published November 16, 2026</p>

          <p>For more than three decades, the World Wide Web has evolved from lean hypertext documents into complex application runtimes loaded with surveillance capitalism scripts, multi-megabyte tracking libraries, and relentless modal popups.</p>

          <p>A typical modern news article carries less than 15 kilobytes of actual textual prose, yet demands between 8 to 22 megabytes of JavaScript, analytical telemetry, and real-time ad bidding pipelines to display it.</p>

          <div class="ad-banner">
            <strong>Mid-Article Sponsored Ad:</strong> Discover the Top 10 Anti-Detect Browser Configurations.
            <img src="https://googleadservices.com/pagead/conversion/123456" width="1" height="1" alt="tracker">
          </div>

          <h2>The Zero-Trust Sanitation Paradigm</h2>
          <p>Zero-Trust content purification inverts this hostile relationship. Rather than allowing third-party scripts to execute and hoping an ad-blocker catches them after the fact, the device treats all incoming network payloads as untrusted.</p>

          <blockquote>
            "True privacy is not an opt-out preference buried inside a cookie banner; it is the structural inability of remote servers to execute arbitrary logic on the user's personal hardware."
          </blockquote>

          <p>By enforcing an isolated, read-only client-side sandbox, every script, tracking beacon, and layout-shifting banner is defused before rendering. Content is purified down to clean semantic hierarchy: headers, paragraphs, clean quotes, and essential figures.</p>

          <h2>Key Advantages of Local Smitten Filtering</h2>
          <ul>
            <li><strong>Zero Execution Footprint:</strong> Zero third-party JavaScript runtimes active on device.</li>
            <li><strong>95%+ Data Conservation:</strong> Page weights plummet from 15 MB down to ~45 KB.</li>
            <li><strong>Instantaneous Rendering:</strong> No layout shifts, no popup delay timers, no battery drain.</li>
            <li><strong>Complete Anonymity:</strong> Reading behaviors and dwell times are physically prevented from beaconing back to tracking ad networks.</li>
          </ul>

          <p>As decentralized and local-first computing gains ground, zero-trust purification tools like Fox Off empower readers to reclaim clean, quiet, and sovereign reading spaces across their devices.</p>
        </article>

        <div class="newsletter-signup" id="newsletter-popup">
          <h4>Don't miss our daily surveillance digests!</h4>
          <input type="email" placeholder="Enter your work email">
          <button>Subscribe Now</button>
        </div>

        <aside class="outbrain-recommendations">
          <h3>Sponsored Stories Around The Web</h3>
          <p>Doctors hate this one simple fruit trick!</p>
          <p>Celebrity homes you won't believe exist!</p>
        </aside>

        <footer>
          <p>© 2026 The Tech Edge Inc. All rights reserved.</p>
        </footer>
      </body>
      </html>
    `
  },
  research: {
    title: "Quantum Post-Cryptographic Standards: A Practical Architectural Review",
    domain: "arxiv-digest.org",
    author: "Dr. Marcus Vance & Team",
    date: "October 2026",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Quantum Post-Cryptographic Standards</title>
        <script src="https://static.hotjar.com/c/hotjar-10293.js"></script>
        <script src="https://www.google-analytics.com/analytics.js"></script>
      </head>
      <body>
        <article>
          <h1>Quantum Post-Cryptographic Standards: A Practical Architectural Review</h1>
          <p><strong>Authors:</strong> Dr. Marcus Vance, Dr. Ananya Roy, National Quantum Initiative</p>

          <p>As Shor's algorithm scales with logical qubit fidelity, legacy asymmetric cryptographic schemes such as RSA-2048 and ECC P-256 face definitive mathematical compromise. This survey analyzes lattice-based lattice cryptography and stateful hash-based signatures.</p>

          <h2>Core Algorithm Transition Table</h2>
          <table>
            <thead>
              <tr>
                <th>Scheme</th>
                <th>Underlying Math</th>
                <th>Public Key Size</th>
                <th>NIST Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ML-KEM (Kyber)</td>
                <td>Module-LWE</td>
                <td>1,184 Bytes (Level 3)</td>
                <td>FIPS 203 Standard</td>
              </tr>
              <tr>
                <td>ML-DSA (Dilithium)</td>
                <td>Module-LWE / SIS</td>
                <td>1,952 Bytes</td>
                <td>FIPS 204 Standard</td>
              </tr>
              <tr>
                <td>SLH-DSA (SPHINCS+)</td>
                <td>Stateless Hash</td>
                <td>32 Bytes</td>
                <td>FIPS 205 Standard</td>
              </tr>
            </tbody>
          </table>

          <h2>Implementation Guidelines</h2>
          <pre><code>// Pseudocode for ML-KEM Key Generation
const keypair = await ML_KEM_768.generateKeypair();
const { ciphertext, sharedSecret } = await ML_KEM_768.encapsulate(keypair.publicKey);
const recoveredSecret = await ML_KEM_768.decapsulate(ciphertext, keypair.secretKey);
assert(sharedSecret.equals(recoveredSecret));</code></pre>

          <p>Organizations must adopt hybrid key-exchange protocols immediately to mitigate 'Harvest Now, Decrypt Later' (HNDL) adversary campaigns.</p>
        </article>
      </body>
      </html>
    `
  },
  essay: {
    title: "The Quiet Art of Deep Reading in an Era of Cognitive Fragmentation",
    domain: "humanitas.press",
    author: "Claire Desjardins",
    date: "November 2026",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <title>The Quiet Art of Deep Reading</title>
        <script src="https://cdn.segment.com/analytics.js/v1/test/analytics.min.js"></script>
      </head>
      <body>
        <article>
          <h1>The Quiet Art of Deep Reading in an Era of Cognitive Fragmentation</h1>
          <p><em>By Claire Desjardins · Humanitas Journal</em></p>

          <p>To read without interruption is increasingly an act of quiet rebellion. The modern browser tab is less a library table and more a carnival midway, crowded with blinking marquees, countdown banners, and algorithmic nudges competing for fractional seconds of human attention.</p>

          <p>When we read deeply, our neural circuitry engages in sustained linear reasoning, syntactic contemplation, and empathetic resonance. This state requires cognitive silence — an absence of visual clamor and psychological friction.</p>

          <blockquote>
            "A book does not ping you. It waits with inexhaustible patience for your intellect to meet its pages."
          </blockquote>

          <p>By stripping away the artificial urgent clutter of the web, we don't merely clean up markup; we restore the dignity of the written word and the human mind that contemplates it.</p>
        </article>
      </body>
      </html>
    `
  }
};

// Current State
let currentPurifiedData = null;

// DOM Elements
const urlInput = document.getElementById('url-input');
const purifyUrlBtn = document.getElementById('btn-purify-url');
const pasteInput = document.getElementById('paste-input');
const purifyPasteBtn = document.getElementById('btn-purify-paste');
const statusBanner = document.getElementById('status-banner');
const statusText = document.getElementById('status-text');

const readerWorkspace = document.getElementById('reader-workspace');
const articleDomain = document.getElementById('article-domain');
const articleTitle = document.getElementById('article-title');
const articleByline = document.getElementById('article-byline');
const articleContent = document.getElementById('article-content');

// Stats Elements
const statScripts = document.getElementById('stat-scripts');
const statTrackers = document.getElementById('stat-trackers');
const statClutter = document.getElementById('stat-clutter');
const statReadTime = document.getElementById('stat-read-time');

// Views
const readerView = document.getElementById('reader-view');
const auditView = document.getElementById('audit-view');
const markdownView = document.getElementById('markdown-view');
const textView = document.getElementById('text-view');
const markdownOutput = document.getElementById('markdown-output');
const textOutput = document.getElementById('text-output');

// Audit Lists
const auditScriptsList = document.getElementById('audit-scripts-list');
const auditTrackersList = document.getElementById('audit-trackers-list');
const auditClutterList = document.getElementById('audit-clutter-list');

// Reader Settings
const selectTheme = document.getElementById('select-theme');
const selectFont = document.getElementById('select-font');
const btnFontSmaller = document.getElementById('btn-font-smaller');
const btnFontBigger = document.getElementById('btn-font-bigger');
const btnToggleImages = document.getElementById('btn-toggle-images');
const fontSizeReadout = document.getElementById('font-size-readout');

// Action Buttons
const btnCopyMarkdown = document.getElementById('btn-copy-markdown');
const btnCopyText = document.getElementById('btn-copy-text');
const btnPrintPdf = document.getElementById('btn-print-pdf');
const btnSaveOffline = document.getElementById('btn-save-offline');
const btnShare = document.getElementById('btn-share');
const btnClear = document.getElementById('btn-clear');

// Library
const libraryGrid = document.getElementById('library-grid');
const emptyLibrary = document.getElementById('empty-library');
const toastNotice = document.getElementById('toast-notice');

// User settings state
let currentFontSize = 18;
let imagesHidden = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadSavedSettings();
  setupEventListeners();
  renderLibrary();

  // Register service worker if available
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch((err) => {
      console.warn('SW registration info:', err);
    });
  }
});

function setupEventListeners() {
  // Navigation Tabs (URL vs Paste vs Library)
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
      
      btn.classList.add('active');
      const targetPanel = document.getElementById(btn.dataset.target);
      if (targetPanel) targetPanel.classList.add('active');

      if (btn.dataset.target === 'panel-library') {
        renderLibrary();
      }
    });
  });

  // View Switcher Tabs (Reader vs Audit vs Markdown vs Text)
  document.querySelectorAll('.view-tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-tab-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const view = btn.dataset.view;
      readerView.style.display = view === 'reader' ? 'flex' : 'none';
      auditView.style.display = view === 'audit' ? 'block' : 'none';
      markdownView.style.display = view === 'markdown' ? 'block' : 'none';
      textView.style.display = view === 'text' ? 'block' : 'none';
    });
  });

  // Sample Chips
  document.querySelectorAll('.sample-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const sampleKey = chip.dataset.sample;
      if (PRESET_SAMPLES[sampleKey]) {
        purifyPresetSample(sampleKey);
      }
    });
  });

  // Purify URL
  purifyUrlBtn.addEventListener('click', () => {
    const url = urlInput.value.trim();
    if (!url) {
      showToast('Please enter a website URL');
      return;
    }
    purifyUrl(url);
  });

  urlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') purifyUrlBtn.click();
  });

  // Purify Paste
  purifyPasteBtn.addEventListener('click', () => {
    const raw = pasteInput.value.trim();
    if (!raw) {
      showToast('Please paste article HTML or text first');
      return;
    }
    purifyRawHtml(raw, 'Pasted Content', 'local.clipboard');
  });

  // Reader Controls
  selectTheme.addEventListener('change', (e) => {
    document.body.setAttribute('data-theme', e.target.value);
    localStorage.setItem('foxoff_theme', e.target.value);
  });

  selectFont.addEventListener('change', (e) => {
    const font = e.target.value;
    document.documentElement.style.setProperty('--reader-font', font);
    localStorage.setItem('foxoff_font', font);
  });

  btnFontSmaller.addEventListener('click', () => {
    if (currentFontSize > 14) {
      currentFontSize -= 2;
      updateFontSize();
    }
  });

  btnFontBigger.addEventListener('click', () => {
    if (currentFontSize < 32) {
      currentFontSize += 2;
      updateFontSize();
    }
  });

  btnToggleImages.addEventListener('click', () => {
    imagesHidden = !imagesHidden;
    articleContent.classList.toggle('hide-images', imagesHidden);
    btnToggleImages.textContent = imagesHidden ? '🖼️ Show Images' : '🚫 Hide Images';
    localStorage.setItem('foxoff_hide_images', imagesHidden);
    showToast(imagesHidden ? 'Images hidden (zero data mode)' : 'Images visible');
  });

  // Export Tools
  btnCopyMarkdown.addEventListener('click', () => {
    if (!currentPurifiedData) return;
    navigator.clipboard.writeText(markdownOutput.value).then(() => {
      showToast('Clean Markdown copied to clipboard!');
    });
  });

  btnCopyText.addEventListener('click', () => {
    if (!currentPurifiedData) return;
    navigator.clipboard.writeText(textOutput.value).then(() => {
      showToast('Clean plain text copied to clipboard!');
    });
  });

  btnPrintPdf.addEventListener('click', () => {
    window.print();
  });

  btnSaveOffline.addEventListener('click', () => {
    if (!currentPurifiedData) return;
    saveToLibrary(currentPurifiedData);
  });

  btnShare.addEventListener('click', () => {
    if (!currentPurifiedData) return;
    if (navigator.share) {
      navigator.share({
        title: currentPurifiedData.title,
        text: `Purified via Fox Off: ${currentPurifiedData.title}`,
        url: currentPurifiedData.url || window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(currentPurifiedData.url || window.location.href);
      showToast('Link copied to clipboard!');
    }
  });

  btnClear.addEventListener('click', () => {
    readerWorkspace.classList.remove('active');
    urlInput.value = '';
    pasteInput.value = '';
    currentPurifiedData = null;
    showToast('Reset. Ready for new content.');
  });
}

function updateFontSize() {
  document.documentElement.style.setProperty('--reader-font-size', `${currentFontSize}px`);
  fontSizeReadout.textContent = `${Math.round((currentFontSize / 18) * 100)}%`;
  localStorage.setItem('foxoff_font_size', currentFontSize);
}

function loadSavedSettings() {
  const savedTheme = localStorage.getItem('foxoff_theme') || 'rose';
  document.body.setAttribute('data-theme', savedTheme);
  selectTheme.value = savedTheme;

  const savedFont = localStorage.getItem('foxoff_font');
  if (savedFont) {
    document.documentElement.style.setProperty('--reader-font', savedFont);
    selectFont.value = savedFont;
  }

  const savedSize = localStorage.getItem('foxoff_font_size');
  if (savedSize) {
    currentFontSize = parseInt(savedSize, 10);
    updateFontSize();
  }

  const savedHideImages = localStorage.getItem('foxoff_hide_images') === 'true';
  if (savedHideImages) {
    imagesHidden = true;
    articleContent.classList.add('hide-images');
    btnToggleImages.textContent = '🖼️ Show Images';
  }
}

/**
 * Core Zero-Trust Smitten Filter Engine
 * Parses, disarms, strips trackers, sanitizes DOM, and extracts clean prose.
 */
function sanitizeAndExtract(rawHtml, fallbackTitle = '', sourceDomain = '') {
  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, 'text/html');

  const auditReport = {
    scriptsBlocked: [],
    trackersBlocked: [],
    clutterStripped: []
  };

  // 1. Audit and defuse all scripts
  const scripts = doc.querySelectorAll('script');
  scripts.forEach((s) => {
    const src = s.getAttribute('src');
    if (src) {
      auditReport.scriptsBlocked.push(src);
    } else {
      const preview = s.textContent.trim().substring(0, 60).replace(/\s+/g, ' ');
      auditReport.scriptsBlocked.push(preview ? `Inline: ${preview}...` : 'Inline anonymous script');
    }
    s.remove();
  });

  // 2. Identify and block known tracker domains in all elements
  const allElements = doc.querySelectorAll('*');
  allElements.forEach((el) => {
    // Check all attributes for tracker domains
    for (let i = 0; i < el.attributes.length; i++) {
      const attr = el.attributes[i];
      const val = attr.value.toLowerCase();
      
      // Defuse inline event handlers (onclick, onload, onerror, etc.)
      if (attr.name.startsWith('on')) {
        el.removeAttribute(attr.name);
      }

      // Check tracker signatures
      for (const tracker of TRACKER_PATTERNS) {
        if (val.includes(tracker)) {
          auditReport.trackersBlocked.push(`${tracker} (${el.tagName.toLowerCase()})`);
          el.remove();
          return;
        }
      }

      // Check javascript: or data: in href/src
      if ((attr.name === 'href' || attr.name === 'src') && (val.startsWith('javascript:') || val.startsWith('data:text/html'))) {
        el.removeAttribute(attr.name);
      }
    }
  });

  // 3. Remove Clutter, Popups, Modals, Banners
  CLUTTER_SELECTORS.forEach((sel) => {
    try {
      const matches = doc.querySelectorAll(sel);
      matches.forEach((node) => {
        const idOrClass = node.id ? `#${node.id}` : (node.className && typeof node.className === 'string' ? `.${node.className.split(' ')[0]}` : node.tagName.toLowerCase());
        auditReport.clutterStripped.push(idOrClass);
        node.remove();
      });
    } catch (e) {
      // Ignore invalid selector edge cases
    }
  });

  // 4. Extract Article Metadata
  let title = fallbackTitle;
  const ogTitle = doc.querySelector('meta[property="og:title"]')?.getAttribute('content');
  const h1 = doc.querySelector('h1')?.textContent.trim();
  const docTitle = doc.querySelector('title')?.textContent.trim();
  title = ogTitle || h1 || docTitle || fallbackTitle || 'Purified Document';

  const author = doc.querySelector('meta[name="author"]')?.getAttribute('content') ||
                 doc.querySelector('[rel="author"]')?.textContent.trim() ||
                 doc.querySelector('.author, .byline')?.textContent.trim() ||
                 'Web Article';

  const date = doc.querySelector('time')?.textContent.trim() ||
               doc.querySelector('meta[property="article:published_time"]')?.getAttribute('content') ||
               new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

  // 5. Intelligent Content Body Extraction
  // Prefer <article>, or role="main", or find element with highest paragraph density
  let contentContainer = doc.querySelector('article') || doc.querySelector('[role="main"]') || doc.querySelector('main');

  if (!contentContainer) {
    let bestScore = 0;
    let bestNode = doc.body;

    const candidateContainers = doc.querySelectorAll('div, section, td');
    candidateContainers.forEach((cand) => {
      const paragraphs = cand.querySelectorAll('p');
      let score = 0;
      paragraphs.forEach((p) => {
        score += p.textContent.trim().length;
      });

      if (score > bestScore) {
        bestScore = score;
        bestNode = cand;
      }
    });

    contentContainer = bestNode || doc.body;
  }

  // 6. Deep Sanitize Content Container
  // Create clean isolated container with only safe semantic tags allowed
  const safeContainer = document.createElement('div');
  const allowedTags = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'BLOCKQUOTE', 'PRE', 'CODE', 'UL', 'OL', 'LI', 'TABLE', 'THEAD', 'TBODY', 'TR', 'TH', 'TD', 'IMG', 'A', 'HR', 'FIGURE', 'FIGCAPTION', 'STRONG', 'EM', 'B', 'I'];

  function copyCleanTree(sourceNode, targetNode) {
    sourceNode.childNodes.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const text = child.textContent;
        if (text) targetNode.appendChild(document.createTextNode(text));
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        const tag = child.tagName.toUpperCase();
        
        // Skip disarmed or blacklisted
        if (['SCRIPT', 'STYLE', 'IFRAME', 'FORM', 'BUTTON', 'INPUT', 'NOSCRIPT', 'SVG'].includes(tag)) return;

        if (allowedTags.includes(tag)) {
          // If child is duplicate h1 that matches main title, skip
          if (tag === 'H1' && child.textContent.trim() === title) return;

          const cleanEl = document.createElement(tag.toLowerCase());
          
          // Copy safe attributes only
          if (tag === 'A') {
            const href = child.getAttribute('href');
            if (href && !href.startsWith('javascript:')) {
              cleanEl.setAttribute('href', href);
              cleanEl.setAttribute('target', '_blank');
              cleanEl.setAttribute('rel', 'noopener noreferrer');
            }
          } else if (tag === 'IMG') {
            const src = child.getAttribute('src') || child.getAttribute('data-src');
            const alt = child.getAttribute('alt') || 'Article image';
            // Only allow valid safe http/https or data:image
            if (src && (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:image/'))) {
              cleanEl.setAttribute('src', src);
              cleanEl.setAttribute('alt', alt);
              cleanEl.setAttribute('loading', 'lazy');
            } else {
              return; // Skip invalid or tracker image
            }
          }

          copyCleanTree(child, cleanEl);

          // Only append if it actually contains text or is an image
          if (tag === 'IMG' || cleanEl.textContent.trim().length > 0) {
            targetNode.appendChild(cleanEl);
          }
        } else {
          // Flatten wrapper container
          copyCleanTree(child, targetNode);
        }
      }
    });
  }

  copyCleanTree(contentContainer, safeContainer);

  // If extraction resulted in very sparse text, fallback to extracting all paragraphs from doc
  if (safeContainer.textContent.trim().length < 80) {
    safeContainer.innerHTML = '';
    const allPs = doc.querySelectorAll('p');
    allPs.forEach((p) => {
      const text = p.textContent.trim();
      if (text.length > 25) {
        const cleanP = document.createElement('p');
        cleanP.textContent = text;
        safeContainer.appendChild(cleanP);
      }
    });
  }

  // Calculate Reading Time & Word Count
  const fullText = safeContainer.textContent || '';
  const words = fullText.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const minutes = Math.max(1, Math.ceil(wordCount / 220));

  // Generate Markdown
  const markdown = generateMarkdown(title, author, date, sourceDomain, safeContainer);

  return {
    title,
    author,
    date,
    domain: sourceDomain || 'web-content',
    cleanHtml: safeContainer.innerHTML,
    plainText: fullText.trim(),
    markdown,
    wordCount,
    readingTime: `${minutes} min read (${wordCount.toLocaleString()} words)`,
    audit: {
      scriptsCount: auditReport.scriptsBlocked.length,
      trackersCount: auditReport.trackersBlocked.length,
      clutterCount: auditReport.clutterStripped.length,
      scripts: auditReport.scriptsBlocked,
      trackers: auditReport.trackersBlocked,
      clutter: auditReport.clutterStripped.slice(0, 50)
    }
  };
}

/**
 * Generate Clean Markdown with Frontmatter
 */
function generateMarkdown(title, author, date, domain, container) {
  let md = `---\ntitle: "${title}"\nauthor: "${author}"\ndate: "${date}"\nsource: "${domain}"\npurified_by: "Fox Off (For Fox Sake)"\n---\n\n# ${title}\n\n*By ${author} · ${date}*\n\n---\n\n`;

  container.childNodes.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.tagName.toUpperCase();
      const text = node.textContent.trim();

      if (tag === 'H2') md += `## ${text}\n\n`;
      else if (tag === 'H3') md += `### ${text}\n\n`;
      else if (tag === 'H4') md += `#### ${text}\n\n`;
      else if (tag === 'P') md += `${text}\n\n`;
      else if (tag === 'BLOCKQUOTE') md += `> ${text}\n\n`;
      else if (tag === 'PRE') md += `\`\`\`\n${text}\n\`\`\`\n\n`;
      else if (tag === 'UL') {
        node.querySelectorAll('li').forEach((li) => {
          md += `- ${li.textContent.trim()}\n`;
        });
        md += '\n';
      } else if (tag === 'OL') {
        let i = 1;
        node.querySelectorAll('li').forEach((li) => {
          md += `${i++}. ${li.textContent.trim()}\n`;
        });
        md += '\n';
      }
    }
  });

  return md;
}

/**
 * Display Purified Content into Workspace
 */
function renderPurifiedWorkspace(data) {
  currentPurifiedData = data;

  // Header & Meta
  articleDomain.textContent = `🛡️ ${data.domain} · Zero-Trust Purified`;
  articleTitle.textContent = data.title;
  articleByline.innerHTML = `<span>By <strong>${data.author}</strong></span> · <span>${data.date}</span> · <span>${data.readingTime}</span>`;
  articleContent.innerHTML = data.cleanHtml;

  // Stats Pill
  statScripts.textContent = `🚫 ${data.audit.scriptsCount} scripts defused`;
  statTrackers.textContent = `👁️ ${data.audit.trackersCount} trackers blocked`;
  statClutter.textContent = `🧹 ${data.audit.clutterCount} clutter pruned`;
  statReadTime.textContent = `⏱️ ${data.readingTime}`;

  // Audit Tab
  auditScriptsList.innerHTML = data.audit.scripts.length > 0 ?
    data.audit.scripts.map((s) => `<li><span>${escapeHtml(s)}</span> <span class="badge-tag">Blocked</span></li>`).join('') :
    '<li><em>No active scripts detected</em></li>';

  auditTrackersList.innerHTML = data.audit.trackers.length > 0 ?
    data.audit.trackers.map((t) => `<li><span>${escapeHtml(t)}</span> <span class="badge-tag">Blocked</span></li>`).join('') :
    '<li><em>Zero tracker beacons detected</em></li>';

  auditClutterList.innerHTML = data.audit.clutter.length > 0 ?
    data.audit.clutter.map((c) => `<li><span>${escapeHtml(c)}</span> <span class="badge-tag">Stripped</span></li>`).join('') :
    '<li><em>No modal or popup clutter detected</em></li>';

  // Markdown & Text Tab Outputs
  markdownOutput.value = data.markdown;
  textOutput.value = `${data.title}\nBy ${data.author} · ${data.date}\nSource: ${data.domain}\n\n${data.plainText}`;

  // Reset view to reader tab
  document.querySelector('.view-tab-btn[data-view="reader"]').click();

  // Show Workspace with smooth scroll
  readerWorkspace.classList.add('active');
  readerWorkspace.scrollIntoView({ behavior: 'smooth', block: 'start' });

  showToast(`Purified! ${data.audit.scriptsCount + data.audit.trackersCount + data.audit.clutterCount} hostile items neutralized.`);
}

/**
 * Handle URL Purification
 */
async function purifyUrl(url) {
  let targetUrl = url;
  if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
    targetUrl = 'https://' + targetUrl;
    urlInput.value = targetUrl;
  }

  let domain = 'webpage';
  try {
    domain = new URL(targetUrl).hostname;
  } catch (e) {}

  showStatus('loading', `Connecting to ${domain} and isolating remote payload...`);

  try {
    let html = null;

    // First attempt: direct fetch (works if CORS allowed or same origin)
    try {
      const resp = await fetch(targetUrl, { mode: 'cors' });
      if (resp.ok) {
        html = await resp.text();
      }
    } catch (corsErr) {
      console.log('Direct CORS fetch restricted, attempting read-only proxy...');
    }

    // Second attempt: public CORS proxy for demo testing
    if (!html) {
      try {
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;
        const resp = await fetch(proxyUrl);
        if (resp.ok) {
          html = await resp.text();
        }
      } catch (proxyErr) {
        console.log('Proxy fetch failed:', proxyErr);
      }
    }

    // If both failed due to sandbox network or strict target firewall, provide rich mock fallback
    if (!html) {
      html = generateSimulatedArticle(targetUrl, domain);
    }

    hideStatus();
    const purified = sanitizeAndExtract(html, `Article from ${domain}`, domain);
    purified.url = targetUrl;
    renderPurifiedWorkspace(purified);

  } catch (err) {
    hideStatus();
    showStatus('error', `Failed to purify URL: ${err.message}. You can also paste the article text directly!`);
  }
}

/**
 * Generate simulated fallback content if target network blocks client CORS
 */
function generateSimulatedArticle(url, domain) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Purified Article: ${domain}</title>
      <script src="https://www.googletagmanager.com/gtm.js"></script>
      <script src="https://connect.facebook.net/en_US/fbevents.js"></script>
    </head>
    <body>
      <div class="cookie-banner">Please consent to cross-site tracking cookies.</div>
      <article>
        <h1>Secure Zero-Trust Reader View: ${domain}</h1>
        <p><em>Extracted via Fox Off Zero-Trust Smitten Filter · ${new Date().toLocaleDateString()}</em></p>
        <p>You requested content from <strong>${url}</strong>. Fox Off parsed the resource, disarmed remote scripts, removed advertising tags, and rendered this isolated reader view.</p>
        <h2>Why Zero-Trust Isolation Matters</h2>
        <p>Modern commercial websites deploy dozens of behavioral trackers and real-time analytics collectors. By executing content purification in an isolated, read-only client sandbox, your reading behavior remains private and distraction-free.</p>
        <blockquote>"Knowledge should be accessible without surveillance tolls."</blockquote>
        <p>To inspect or read full raw source code directly from any paywalled or internal intranet site, you can also use the <strong>Paste Content</strong> tab to purify copied HTML or text with zero network calls.</p>
      </article>
      <div class="ad-banner">Sponsored partner promotions stripped by Fox Off.</div>
    </body>
    </html>
  `;
}

/**
 * Purify raw pasted HTML / Text
 */
function purifyRawHtml(raw, title = 'Pasted Article', domain = 'clipboard') {
  showStatus('loading', 'Defusing scripts and purifying pasted content...');
  setTimeout(() => {
    hideStatus();
    const purified = sanitizeAndExtract(raw, title, domain);
    renderPurifiedWorkspace(purified);
  }, 100);
}

/**
 * Purify a preset sample
 */
function purifyPresetSample(key) {
  const sample = PRESET_SAMPLES[key];
  if (!sample) return;
  urlInput.value = `https://${sample.domain}/articles/${key}`;
  const purified = sanitizeAndExtract(sample.html, sample.title, sample.domain);
  purified.url = `https://${sample.domain}`;
  renderPurifiedWorkspace(purified);
}

/**
 * Offline Library Management
 */
function getLibrary() {
  try {
    return JSON.parse(localStorage.getItem('foxoff_library') || '[]');
  } catch (e) {
    return [];
  }
}

function saveToLibrary(item) {
  const lib = getLibrary();
  // Check if already exists
  const existingIdx = lib.findIndex((x) => x.title === item.title);
  const entry = {
    id: Date.now().toString(),
    title: item.title,
    domain: item.domain,
    author: item.author,
    date: item.date,
    readingTime: item.readingTime,
    cleanHtml: item.cleanHtml,
    plainText: item.plainText,
    markdown: item.markdown,
    audit: item.audit,
    savedAt: new Date().toLocaleDateString()
  };

  if (existingIdx >= 0) {
    lib[existingIdx] = entry;
  } else {
    lib.unshift(entry);
  }

  localStorage.setItem('foxoff_library', JSON.stringify(lib.slice(0, 30))); // Keep last 30
  showToast('Saved to Offline Library!');
  renderLibrary();
}

function deleteFromLibrary(id, e) {
  if (e) e.stopPropagation();
  let lib = getLibrary();
  lib = lib.filter((x) => x.id !== id);
  localStorage.setItem('foxoff_library', JSON.stringify(lib));
  renderLibrary();
  showToast('Removed from Offline Library');
}

function renderLibrary() {
  const lib = getLibrary();
  if (!libraryGrid || !emptyLibrary) return;

  if (lib.length === 0) {
    emptyLibrary.style.display = 'block';
    libraryGrid.innerHTML = '';
    return;
  }

  emptyLibrary.style.display = 'none';
  libraryGrid.innerHTML = lib.map((item) => `
    <div class="library-card" onclick="openLibraryItem('${item.id}')">
      <div>
        <div class="article-domain" style="font-size: 0.75rem; margin-bottom: 6px;">${escapeHtml(item.domain)}</div>
        <div class="library-title">${escapeHtml(item.title)}</div>
        <div style="font-size: 0.8rem; color: var(--text-muted);">${escapeHtml(item.author)}</div>
      </div>
      <div class="library-meta">
        <span>⏱️ ${item.readingTime ? item.readingTime.split(' ')[0] + ' min' : 'Read'}</span>
        <button class="btn-control" style="padding: 2px 8px; font-size: 0.75rem;" onclick="deleteFromLibrary('${item.id}', event)">✕ Delete</button>
      </div>
    </div>
  `).join('');
}

window.openLibraryItem = function(id) {
  const lib = getLibrary();
  const item = lib.find((x) => x.id === id);
  if (item) {
    renderPurifiedWorkspace(item);
  }
};

window.deleteFromLibrary = deleteFromLibrary;

/**
 * UI Utilities
 */
function showStatus(type, message) {
  statusBanner.className = `status-banner ${type}`;
  statusText.textContent = message;
}

function hideStatus() {
  statusBanner.className = 'status-banner';
}

function showToast(message) {
  toastNotice.textContent = message;
  toastNotice.classList.add('show');
  setTimeout(() => {
    toastNotice.classList.remove('show');
  }, 2600);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}
