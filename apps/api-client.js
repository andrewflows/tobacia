// Shared Anthropic API client for personal apps
// Stores user's API key in localStorage (your devices only).
// Calls api.anthropic.com directly from the browser using
// the dangerous-direct-browser-access header.

const STORAGE_KEY = 'tobacia_anthropic_key';
const MODEL_DEFAULT = 'claude-sonnet-4-6';
const MODEL_FAST = 'claude-haiku-4-5';

const TobaciaAPI = {
  hasKey() {
    return !!localStorage.getItem(STORAGE_KEY);
  },

  getKey() {
    return localStorage.getItem(STORAGE_KEY);
  },

  setKey(key) {
    localStorage.setItem(STORAGE_KEY, key);
  },

  clearKey() {
    localStorage.removeItem(STORAGE_KEY);
  },

  async promptForKey() {
    const existing = this.getKey();
    const newKey = window.prompt(
      existing
        ? 'Update your Anthropic API key (leave empty to keep current):'
        : 'Enter your Anthropic API key (sk-ant-...). Stored only on this device.',
      ''
    );
    if (newKey && newKey.startsWith('sk-ant-')) {
      this.setKey(newKey);
      return newKey;
    }
    return existing;
  },

  async ensureKey() {
    if (!this.hasKey()) {
      return await this.promptForKey();
    }
    return this.getKey();
  },

  async call({ prompt, system, model, maxTokens, fast }) {
    const key = await this.ensureKey();
    if (!key) throw new Error('No API key provided.');

    const body = {
      model: model || (fast ? MODEL_FAST : MODEL_DEFAULT),
      max_tokens: maxTokens || 4096,
      messages: [{ role: 'user', content: prompt }],
    };
    if (system) body.system = system;

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Anthropic API error ${res.status}: ${err}`);
    }

    const data = await res.json();
    const text = data.content?.[0]?.text || '';
    return {
      text,
      usage: data.usage,
      model: data.model,
    };
  },

  // Markdown copy-to-clipboard helper
  async copyToClipboard(text, btnEl) {
    try {
      await navigator.clipboard.writeText(text);
      if (btnEl) {
        const original = btnEl.textContent;
        btnEl.textContent = 'Copied ✓';
        btnEl.classList.add('bg-green-700');
        setTimeout(() => {
          btnEl.textContent = original;
          btnEl.classList.remove('bg-green-700');
        }, 1500);
      }
    } catch (e) {
      alert('Copy failed. Please select and copy manually.');
    }
  },
};

// Quick settings UI (key management)
function injectKeyPanel() {
  const panel = document.createElement('div');
  panel.style.cssText = 'position:fixed;bottom:12px;right:12px;z-index:9999;font-size:11px;';
  panel.innerHTML = `
    <button id="tb-key-btn" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;padding:4px 10px;border-radius:6px;cursor:pointer;">
      🔑 ${TobaciaAPI.hasKey() ? 'API key set' : 'Set API key'}
    </button>`;
  document.body.appendChild(panel);
  document.getElementById('tb-key-btn').onclick = async () => {
    await TobaciaAPI.promptForKey();
    document.getElementById('tb-key-btn').textContent =
      `🔑 ${TobaciaAPI.hasKey() ? 'API key set' : 'Set API key'}`;
  };
}
document.addEventListener('DOMContentLoaded', injectKeyPanel);
