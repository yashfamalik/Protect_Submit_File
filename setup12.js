const ClaimSetupForm = {
    config: {
        styleId: "claim-setup-styles",
        containerId: "setup-container",
        previewId: "preview_setup_form",
        defaults: {
            pageTitle: "Setup Claim",
            stepTitle: "Configure Your Claim",
            description: "Review and configure your claim details",
            submitButtonText: "Submit Claim",
            backButtonText: "Back",
            itemsHeading: "Selected Items",
            claimDetailsHeading: "Claim Details",
            actionOptionsHeading: "Action Options",
            claimReasons: [
                "Product damaged",
                "Product defective", 
                "Wrong item received",
                "Missing parts"
            ]
        },
    },

    proxy: {
        contentSettings: null,
        colorSettings: null,
        subscribers: new Set(),

        subscribe(cb) {
            this.subscribers.add(cb);
            return () => this.subscribers.delete(cb);
        },

        notify() {
            for (const cb of this.subscribers)
                cb({
                    contentSettings: this.contentSettings,
                    colorSettings: this.colorSettings,
                });
        },

        updateContentSettings(settings) {
            this.contentSettings =
                typeof settings === "function"
                    ? settings(this.contentSettings)
                    : { ...this.contentSettings, ...settings };
            this.notify();
        },

        updateColorSettings(settings) {
            this.colorSettings =
                typeof settings === "function"
                    ? settings(this.colorSettings)
                    : { ...this.colorSettings, ...settings };
            this.notify();
        },

        getContentSettings() {
            return this.contentSettings;
        },

        getColorSettings() {
            return this.colorSettings;
        },
    },

    async shouldUsePreview() {
        if (document.getElementById(this.config.previewId)) return true;
        return (await this.waitForShopifyApp()) === true;
    },

    waitForShopifyApp(timeout = 5000, interval = 100) {
        return new Promise((resolve) => {
            const start = Date.now();
            (function check() {
                if (typeof window.isShopifyApp !== "undefined")
                    return resolve(window.isShopifyApp);
                if (Date.now() - start >= timeout) return resolve(false);
                setTimeout(check, interval);
            })();
        });
    },

    injectStyles() {
        if (document.getElementById(this.config.styleId)) return;
        const css = `
      :root {
        --setup-primary: #008060;
        --setup-primary-dark: #006e52;
        --setup-primary-light: #edfff6;
        --setup-bg: #f7f9fc;
        --setup-surface: #ffffff;
        --setup-surface-hover: #f9fafb;
        --setup-border: #e2e8f0;
        --setup-border-focus: #008060;
        --setup-text-heading: #1a202c;
        --setup-text-body: #4a5568;
        --setup-text-muted: #718096;
        --setup-text-white: #ffffff;
        --setup-critical: #e53e3e;
        --setup-critical-bg: #fff5f5;
        --setup-success: #38a169;
        --setup-success-bg: #f0fff4;
        --setup-warning: #d69e2e;
        --setup-radius-sm: 6px;
        --setup-radius-md: 12px;
        --setup-radius-lg: 16px;
        --setup-space-xs: 4px;
        --setup-space-sm: 8px;
        --setup-space-md: 16px;
        --setup-space-lg: 24px;
        --setup-space-xl: 32px;
        --setup-shadow-card: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        --setup-shadow-hover: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
        --setup-focus-ring: 0 0 0 3px rgba(0, 128, 96, 0.15);
        --setup-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        
        /* Selected item specific colors */
        --setup-selected-item-bg: #edfff6;
        --setup-selected-item-text: #202223;
        --setup-badge-bg: #008060;
        --setup-badge-text: #ffffff;
        --setup-selected-item-border: #bed1c7;
      }

      .setup-container {
        font-family: var(--setup-font-family);
        color: var(--setup-text-body);
        background-color: transparent;
        display: flex;
        flex-direction: column;
        gap: var(--setup-space-lg);
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
      }

      .setup-container * { box-sizing: border-box; }

      .setup-row {
        display: flex;
        gap: var(--setup-space-lg);
        align-items: flex-start;
      }
      @media (max-width: 850px) {
        .setup-row { flex-direction: column; }
      }

      .setup-col {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: var(--setup-space-lg);
        min-width: 0;
      }

      .setup-card {
        background: var(--setup-surface);
        border: 1px solid var(--setup-border);
        border-radius: var(--setup-radius-md);
        box-shadow: var(--setup-shadow-card);
        overflow: hidden;
        transition: box-shadow 0.2s ease;
      }

      .setup-card-header {
        padding: var(--setup-space-md);
        border-bottom: 1px solid var(--setup-border);
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #f9f9f9;
      }

      .setup-card-body {
        padding: var(--setup-space-lg);
      }

      .setup-heading {
        font-size: 16px;
        font-weight: 700;
        color: var(--setup-text-heading);
        letter-spacing: -0.01em;
      }
      
      .setup-text-subdued {
        font-size: 13px;
        color: var(--setup-text-muted);
        line-height: 1.5;
      }

      .setup-label {
        display: block;
        font-size: 13px;
        font-weight: 600;
        color: var(--setup-text-heading);
        margin-bottom: var(--setup-space-sm);
      }

      .setup-item-card {
        background: var(--setup-surface);
        border: 1px solid var(--setup-border);
        border-radius: var(--setup-radius-md);
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }
      
      .setup-card-body .setup-item-card { margin-bottom: var(--setup-space-md); }
      .setup-card-body .setup-item-card:last-child { margin-bottom: 0; }

      .setup-item-card:hover {
        border-color: var(--setup-primary);
        background-color: var(--setup-surface-hover);
      }

      .setup-item-card:hover .setup-item-name {
        color: var(--setup-primary);
      }

      .setup-item-card.selected {
        background-color: var(--setup-selected-item-bg);
        border-color: var(--setup-selected-item-border, var(--setup-selected-item-bg));
        color: var(--setup-selected-item-text);
      }

      .setup-item-card.selected .setup-item-name {
        color: var(--setup-selected-item-text);
      }

      .setup-item-card.selected .setup-badge {
        background: var(--setup-badge-bg);
        color: var(--setup-badge-text);
        border-color: transparent;
      }

      .setup-item-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--setup-space-md);
        gap: var(--setup-space-md);
        border-bottom: 1px solid var(--setup-border);
      }

      .setup-item {
        display: flex;
        gap: var(--setup-space-md);
        align-items: center;
        flex: 1;
      }

      .setup-item img {
        width: 56px;
        height: 56px;
        border-radius: var(--setup-radius-sm);
        object-fit: cover;
        border: 1px solid var(--setup-border);
        background: #f1f5f9;
      }

      .setup-item-info { flex: 1; }
      
      .setup-item-name {
        font-size: 14px;
        font-weight: 600;
        color: var(--setup-text-heading);
        margin-bottom: 2px;
      }
      
      .setup-item-collection {
        font-size: 12px;
        color: var(--setup-text-muted);
      }

      .setup-badge {
        display: inline-flex;
        align-items: center;
        padding: 4px 10px;
        border-radius: 99px;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        background: var(--setup-bg);
        color: var(--setup-text-muted);
        border: 1px solid var(--setup-border);
      }
      
      .setup-badge.success {
        background: var(--setup-success-bg);
        color: var(--setup-success);
        border-color: transparent;
      }
      
      .setup-badge.critical {
        background: var(--setup-critical-bg);
        color: var(--setup-critical);
        border-color: transparent;
      }

      .setup-qty-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--setup-space-sm) var(--setup-space-md);
        background-color: rgba(255,255,255,0.6);
      }

      .setup-qty {
        display: flex;
        align-items: center;
        background: #ffffff;
        border: 1px solid var(--setup-border);
        border-radius: var(--setup-radius-sm);
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      }

      .setup-qty button {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 6px 10px;
        color: var(--setup-text-muted);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color 0.2s;
      }
      .setup-qty button:hover { color: var(--setup-primary); }

      .setup-qty-value {
        font-size: 14px;
        font-weight: 600;
        width: 24px;
        text-align: center;
        color: var(--setup-text-heading);
      }

      .setup-select, .setup-input, .setup-textarea {
        width: 100%;
        padding: 10px 14px;
        border: 1px solid var(--setup-border);
        border-radius: var(--setup-radius-sm);
        background-color: #ffffff;
        font-size: 14px;
        color: var(--setup-text-heading);
        transition: all 0.2s;
        font-family: inherit;
      }
      
      .setup-select {
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234a5568'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 14px center;
        background-size: 16px;
        padding-right: 40px;
      }

      .setup-textarea {
        min-height: 100px;
        resize: vertical;
      }

      .setup-select:focus, .setup-input:focus, .setup-textarea:focus {
        outline: none;
        border-color: var(--setup-primary);
        box-shadow: var(--setup-focus-ring);
      }

      .setup-button {
        padding: 12px 24px;
        border-radius: var(--setup-radius-sm);
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s;
        border: 1px solid var(--setup-border);
        background: #ffffff;
        color: var(--setup-text-body);
      }

      .setup-button:hover:not([disabled]) {
        background: var(--setup-surface-hover);
        border-color: #cbd5e0;
      }

      .setup-button.primary {
        background: var(--setup-primary);
        color: var(--setup-text-white);
        border-color: var(--setup-primary);
        box-shadow: 0 2px 4px rgba(0, 128, 96, 0.2);
      }

      .setup-button.primary:hover:not([disabled]) {
        background: var(--setup-primary-dark);
        border-color: var(--setup-primary-dark);
        transform: translateY(-1px);
        box-shadow: 0 4px 6px rgba(0, 128, 96, 0.3);
      }

      .setup-button[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `;
        const style = document.createElement("style");
        style.id = this.config.styleId;
        style.textContent = css;
        document.head.appendChild(style);
    },

    applyColorSettings(settings) {
        if (!settings) return;
        const root = document.documentElement;
        
        // Helper function to generate border color (slightly darker than background)
        const generateBorderColor = (bgColor) => {
            if (!bgColor) return null;
            
            // Convert hex to RGB
            const hex = bgColor.replace('#', '');
            const r = parseInt(hex.substr(0, 2), 16);
            const g = parseInt(hex.substr(2, 2), 16);
            const b = parseInt(hex.substr(4, 2), 16);
            
            // Darken by 20%
            const darkenedR = Math.max(0, Math.floor(r * 0.8));
            const darkenedG = Math.max(0, Math.floor(g * 0.8));
            const darkenedB = Math.max(0, Math.floor(b * 0.8));
            
            return `#${darkenedR.toString(16).padStart(2, '0')}${darkenedG.toString(16).padStart(2, '0')}${darkenedB.toString(16).padStart(2, '0')}`;
        };

        const colorMap = [
            ["selectedItemBg", "--setup-selected-item-bg"],
            ["selectedItemText", "--setup-selected-item-text"],
            ["badgeBg", "--setup-badge-bg"],
            ["badgeText", "--setup-badge-text"],
        ];

        for (const [key, cssVar] of colorMap) {
            if (settings[key]) {
                root.style.setProperty(cssVar, settings[key]);
            }
        }

        // Auto-generate border color based on selected item background
        if (settings.selectedItemBg) {
            const borderColor = generateBorderColor(settings.selectedItemBg);
            if (borderColor) {
                root.style.setProperty('--setup-selected-item-border', borderColor);
            }
        }
    },

    applyContentSettings(settings) {
        if (!settings) return;
        
        // Update claim reasons in select dropdown
        if (settings.claimReasons && Array.isArray(settings.claimReasons)) {
            const select = document.querySelector('.setup-select');
            if (select) {
                select.innerHTML = settings.claimReasons.map(reason => 
                    `<option value="${reason}">${reason}</option>`
                ).join('');
            }
        }
        
        // Apply other content settings if needed
        // This can be extended based on what content needs to be updated
    },

    async getTargetContainer() {
        if (await this.shouldUsePreview()) {
            return document.getElementById(this.config.previewId) || document.body;
        }
        return document.body;
    },

    async init(cb) {
        this.injectStyles();
        
        // Subscribe to proxy changes
        this.proxy.subscribe(({ contentSettings, colorSettings }) => {
            this.applyContentSettings(contentSettings);
            this.applyColorSettings(colorSettings);
        });

        const target = await this.getTargetContainer();
        
        // Create basic setup container
        const setupContainer = document.createElement("div");
        setupContainer.id = this.config.containerId;
        setupContainer.className = "setup-container";
        setupContainer.innerHTML = `
            <div class="setup-card">
                <div class="setup-card-header">
                    <div class="setup-heading">Setup Preview</div>
                </div>
                <div class="setup-card-body">
                    <p>Setup component loaded successfully. Proxy integration active.</p>
                    <select class="setup-select">
                        ${this.config.defaults.claimReasons.map(reason => 
                            `<option value="${reason}">${reason}</option>`
                        ).join('')}
                    </select>
                </div>
            </div>
        `;

        const addToPage = () => {
            this.destroy();
            target.appendChild(setupContainer);
        };

        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", addToPage);
        } else {
            addToPage();
        }

        return setupContainer;
    },

    destroy() {
        const c = document.getElementById(this.config.containerId);
        if (c) c.remove();
    },
};

if (typeof window !== "undefined") {
    const run = () => ClaimSetupForm.init();
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", run);
    } else {
        run();
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = ClaimSetupForm;
} else if (typeof define === "function" && define.amd) {
    define(() => ClaimSetupForm);
} else {
    window.ClaimSetup = ClaimSetupForm;
}
