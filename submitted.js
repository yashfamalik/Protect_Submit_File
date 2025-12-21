// Submitted Component - Clean Code with Original Design
const SUBMITTED_STYLE_ID = "vanilla-submitted-styles";

// Default claim information
const DEFAULT_CLAIM_INFO = {
  id: "20250816083974262",
  email: "abcd@gmail.com",
  created: "Aug 16, 08:39 am",
};

// Default claimed items - sample products
const DEFAULT_CLAIMED_ITEMS = [
  {
    id: 1,
    name: "AHMED Aqua perfume by Laiba",
    description: "Premium fragrance collection",
    image: "https://via.placeholder.com/72x72/f0f0f0/666?text=Product",
    price: "€5.95",
    qty: 2,
    eligible: true
  },
  {
    id: 2,
    name: "Luxury Rose Perfume",
    description: "Classic fragrance collection", 
    image: "https://via.placeholder.com/72x72/f0f0f0/666?text=Product",
    price: "€7.50",
    qty: 1,
    eligible: true
  },
  {
    id: 3,
    name: "Ocean Breeze Cologne",
    description: "Fresh summer collection",
    image: "https://via.placeholder.com/72x72/f0f0f0/666?text=Product", 
    price: "€6.25",
    qty: 1,
    eligible: true
  }
];

// Green-Yellow theme default colors (matching Setup.js)
const DEFAULT_GREEN_YELLOW_COLORS = {
  buttonBg: "#5a9a5a",
  buttonText: "#ffffff",
};

// CSS class constants for consistent styling
const CSS_CLASSES = {
  root: "submitted-root",
  row: "submitted-row submitted-row-between submitted-row-center",
  inline: "submitted-inline submitted-gap-400 submitted-row-center",
  btn: {
    base: "submitted-btn",
    primary: "submitted-btn submitted-btn-primary",
    tertiary: "submitted-btn submitted-btn-tertiary",
  },
  card: "submitted-card",
  grid: "submitted-grid",
  badge: "submitted-badge submitted-badge-warning",
  item: {
    box: "submitted-item-box",
    image: "submitted-item-image",
    textWrap: "submitted-item-textwrap",
    priceWrap: "submitted-price-wrap",
  },
};

/**
 * Utility Functions
 */

/**
 * Converts price string to number
 * @param {string|number} price - Price value
 * @returns {number} Parsed price or 0 if invalid
 */
const parsePriceToNumber = (price) => {
  if (typeof price === "number") return price;
  const numericValue = parseFloat(String(price).replace(/[^\d.]/g, ""));
  return Number.isFinite(numericValue) ? numericValue : 0;
};

/**
 * Derives claimed items from input data
 * @param {Object} input - Input data containing claimedItems, ORDER_DATA, quantities
 * @returns {Array} Array of claimed items
 */
const deriveClaimedItems = (input) => {
  const { claimedItems, ORDER_DATA, quantities = {} } = input || {};

  // Return existing claimed items if available
  if (Array.isArray(claimedItems) && claimedItems.length > 0) {
    return claimedItems;
  }

  // Filter eligible items from order data
  const items = ORDER_DATA?.items || [];
  const derivedItems = items
    .filter((item) => item?.eligible && (quantities[item.id] ?? 1) >= 1)
    .map((item) => ({ ...item, qty: quantities[item.id] ?? 1 }));

  // If no items found, return default claimed items
  if (derivedItems.length === 0) {
    return DEFAULT_CLAIMED_ITEMS;
  }

  return derivedItems;
};

/**
 * Derives reason label from claim options
 * @param {Object} input - Input data containing reasonLabel, CLAIM_OPTIONS, selectedClaimOption
 * @returns {string} Reason label or empty string
 */
const deriveReasonLabel = (input) => {
  const { reasonLabel, CLAIM_OPTIONS, selectedClaimOption } = input || {};

  // Return existing reason label if available
  if (reasonLabel?.trim()) return reasonLabel;

  // Find matching claim option
  if (!Array.isArray(CLAIM_OPTIONS) || !selectedClaimOption) {
    // Return default reason if no options provided
    return "Product damaged";
  }

  const matchedOption = CLAIM_OPTIONS.find((option) =>
    typeof option === "object"
      ? option.value === selectedClaimOption
      : option === selectedClaimOption
  );

  return matchedOption?.label || matchedOption || "Product damaged";
};

/**
 * HTML Template Generators
 */

/**
 * Creates an information row with label and value
 * @param {string} label - Label text
 * @param {string} valueText - Value text
 * @returns {string} HTML string
 */
const createInfoRow = (label, valueText) => {
  const labelText = String(label ?? "");
  const hasValue = valueText != null && String(valueText).length > 0;

  return `
    <div class="submitted-inline submitted-gap-100">
      <span class="submitted-text submitted-text-subdued submitted-minw-110 submitted-text-sm">${labelText}</span>
      ${
        hasValue
          ? `<span class="submitted-text submitted-text-sm">${String(
              valueText
            )}</span>`
          : ""
      }
    </div>
  `;
};

/**
 * Creates a claimed item box
 * @param {Object} item - Item data
 * @param {string} reasonLabel - Reason for claim
 * @returns {string} HTML string
 */
const createClaimedItemBox = (item, reasonLabel) => {
  const quantity = item.qty ?? 1;
  const price = parsePriceToNumber(item.price);
  const itemName = item.name ?? "";
  const itemDescription = item.description ?? "";
  const itemImage = item.image || "";
  const reason = reasonLabel ?? "";

  return `
    <div class="${CSS_CLASSES.item.box}">
      <img class="${
        CSS_CLASSES.item.image
      }" src="${itemImage}" alt="${itemName}" />
      <div class="${CSS_CLASSES.item.textWrap}">
        <span class="submitted-text submitted-text-md submitted-semibold submitted-block">${itemName}</span>
        <span class="submitted-text submitted-text-sm submitted-subdued submitted-block submitted-mt-2">${itemDescription}</span>
        <span class="submitted-text submitted-text-sm submitted-subdued submitted-block submitted-mt-2">Reason: ${reason}</span>
      </div>
      <div class="${CSS_CLASSES.item.priceWrap}">
        <span class="submitted-text submitted-text-md submitted-semibold">${quantity} x €${price.toFixed(
    2
  )} EUR</span>
      </div>
    </div>
  `;
};

/**
 * Gets translation with fallback
 * @param {Function} t - Translation function
 * @param {string} key - Translation key
 * @param {string} fallback - Fallback text
 * @returns {string} Translated text or fallback
 */
const getTranslation = (t, key, fallback) => t?.(key, fallback) ?? fallback;

/**
 * Apply color settings to CSS variables for submitted component
 * @param {Object} settings - Color settings object
 */
const applySubmittedColorSettings = (settings) => {
  if (!settings) return;
  const root = document.documentElement;
  const setVar = (key, value) => root.style.setProperty(key, value);

  // Apply only button colors to CSS variables
  [
    ["buttonBg", "--submitted-primary"],
    ["buttonText", "--submitted-primary-text"],
  ].forEach(([key, cssVar]) => {
    if (settings[key]) {
      setVar(cssVar, settings[key]);
    }
  });
};

const createHeader = (t) => {
  return `
    <div class="${CSS_CLASSES.row}">
      <div class="${CSS_CLASSES.inline}">
        <button class="${CSS_CLASSES.btn.tertiary}">${getTranslation(
    t,
    "SubmittedDesignJs.backButton",
    "←"
  )}</button>
      <h2 class="submitted-title">${getTranslation(
          t,
          "SubmittedDesignJs.title",
          "Submitted"
        )}</h2>
      </div>
      <button class="${CSS_CLASSES.btn.primary}">${getTranslation(
    t,
    "SubmittedDesignJs.createNewBtn",
    "Create new"
  )}</button>
    </div>
  `;
};

/**
 * Main render function
 * @param {HTMLElement} container - Container element
 * @param {Object} props - Component props
 */
const render = (container, props) => {
  const { t } = props;
  const claimInfo = props.claimInfo || DEFAULT_CLAIM_INFO;
  const claimedItems = deriveClaimedItems(props);
  const reason = deriveReasonLabel(props);

  /**
   * Creates the left card containing claim status and items
   * @returns {string} HTML string
   */
  const createLeftCard = () => {
    const itemsHtml = claimedItems
      .map((item) => createClaimedItemBox(item, reason))
      .join("");

    return `
      <div class="${CSS_CLASSES.card}">
        <div class="submitted-stack submitted-gap-100 submitted-p-2">
          <div class="submitted-row submitted-row-between submitted-row-center submitted-mb-2">
            <h3 class="submitted-heading-md">${getTranslation(
              t,
              "SubmittedDesignJs.statusTitle",
              "Claim status"
            )}</h3>
            <span class="${CSS_CLASSES.badge}">${getTranslation(
      t,
      "SubmittedDesignJs.statusBadge",
      "Pending"
    )}</span>
          </div>
          <span class="submitted-text submitted-subdued submitted-text-md">
            ${getTranslation(
              t,
              "SubmittedDesignJs.statusText",
              "Your claim is currently pending review."
            )}
          </span>
          <div class="submitted-divider"></div>
          <h3 class="submitted-heading-md submitted-mb-2">
            ${getTranslation(t, "SubmittedDesignJs.itemsHead", "Claimed items")}
          </h3>
          <div class="submitted-items">
            ${itemsHtml}
          </div>
        </div>
      </div>
    `;
  };

  /**
   * Creates the right card containing reorder info and general information
   * @returns {string} HTML string
   */
  const createRightCard = () => {
    const infoItems = [
      {
        labelKey: "SubmittedDesignJs.giCidLabel",
        label: "Claim ID",
        value: claimInfo.id,
      },
      {
        labelKey: "SubmittedDesignJs.giEmailLabel",
        label: "Customer contact",
        value: claimInfo.email,
      },
      {
        labelKey: "SubmittedDesignJs.giCreatedLabel",
        label: "Created time",
        value: claimInfo.created,
      },
    ];

    const infoItemsHtml = infoItems
      .map(
        ({ labelKey, label, value }) => `
        <h4 class="submitted-heading-sm">${getTranslation(
          t,
          labelKey,
          label
        )}</h4>
        ${createInfoRow(label, value)}
      `
      )
      .join("");

    return `
      <div class="${CSS_CLASSES.card}">
        <div class="submitted-stack submitted-gap-100 submitted-p-2">
          <div class="submitted-mb-2">
            <h3 class="submitted-heading-md">${getTranslation(
              t,
              "SubmittedDesignJs.reorderTitle",
              "Reorder"
            )}</h3>
            <span class="submitted-text submitted-subdued submitted-text-md">
              ${getTranslation(
                t,
                "SubmittedDesignJs.reorderText",
                "Reordering same item(s). This will create a new order."
              )}
            </span>
          </div>
          <div class="submitted-divider"></div>
          <div class="submitted-p-2">
            <h3 class="submitted-heading-md submitted-mb-2">
              ${getTranslation(
                t,
                "SubmittedDesignJs.giTitle1",
                "General information"
              )}
            </h3>
            ${infoItemsHtml}
          </div>
        </div>
      </div>
    `;
  };

  /**
   * Creates the footer with action buttons
   * @returns {string} HTML string
   */
  const createFooter = () => {
    const buttons = [
      {
        key: "SubmittedDesignJs.btn1",
        text: "Download Receipt",
        className: CSS_CLASSES.btn.base,
      },
      {
        key: "SubmittedDesignJs.btn2",
        text: "Contact Support",
        className: CSS_CLASSES.btn.base,
      },
      {
        key: "SubmittedDesignJs.btn3",
        text: "Track Status",
        className: CSS_CLASSES.btn.primary,
      },
    ];

    const buttonsHtml = buttons
      .map(
        ({ key, text, className }) =>
          `<button class="${className}">${getTranslation(
            t,
            key,
            text
          )}</button>`
      )
      .join("");

    return `
      <div class="submitted-footer">
        ${buttonsHtml}
      </div>
    `;
  };

  // Generate complete HTML template
  const htmlTemplate = `
    <div class="${CSS_CLASSES.root}">
      ${createHeader(t)}
      <div class="${CSS_CLASSES.grid}">
        ${createLeftCard()}
        ${createRightCard()}
      </div>
      ${createFooter()}
    </div>
  `;

  container.innerHTML = htmlTemplate;
};

/**
 * Main mount function for the submitted component
 * @param {HTMLElement|string} container - Container element or selector
 * @param {Object} props - Component properties
 * @returns {Object} Component instance with destroy and update methods
 */
function mountSubmitted(container, props = {}) {
  ensureSubmittedStyles();

  // Validate container
  if (!container) {
    throw new Error("mountSubmitted: container is required");
  }

  const host =
    container instanceof HTMLElement
      ? container
      : document.querySelector(container);
  if (!host) {
    throw new Error("mountSubmitted: container not found");
  }

  // Initialize component state
  let currentProps = { ...props };
  const mountPoint = document.createElement("div");
  mountPoint.className = "submitted-mount";
  host.appendChild(mountPoint);

  // Add proxy object like Setup.js
  const proxy = {
    contentSettings: null,
    colorSettings: {
      ...DEFAULT_GREEN_YELLOW_COLORS, // Use Green-Yellow theme as default
    },
    isLiveMode: true,
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
          isLiveMode: this.isLiveMode,
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
      this.applyColorSettings(this.colorSettings);
    },

    getContentSettings() {
      return this.contentSettings;
    },

    getColorSettings() {
      return this.colorSettings;
    },

    applyColorSettings(settings) {
      if (!settings || !this.isLiveMode) return;
      applySubmittedColorSettings(settings);
    },

    toggleLiveMode() {
      this.isLiveMode = !this.isLiveMode;
      this.applyColorSettings(this.colorSettings);
      this.notify();
      return this.isLiveMode;
    },
  };

  // Setup proxy integration for color settings
  let proxyUnsubscribe = null;
  if (typeof window !== 'undefined' && window.SubmittedProxy) {
    const localProxy = window.SubmittedProxy;
    
    // Apply initial colors if available
    const initialColors = localProxy.getColorSettings?.();
    if (initialColors) {
      proxy.applyColorSettings(initialColors);
    } else {
      // Apply Green-Yellow theme as default
      proxy.applyColorSettings(DEFAULT_GREEN_YELLOW_COLORS);
    }

    // Subscribe to changes
    proxyUnsubscribe = localProxy.subscribe?.((snapshot) => {
      if (snapshot.colorSettings) {
        proxy.applyColorSettings(snapshot.colorSettings);
      }
    });
  } else {
    // Apply Green-Yellow theme as default
    proxy.applyColorSettings(DEFAULT_GREEN_YELLOW_COLORS);
  }

  // Also check for external Submitted proxy integration
  if (typeof window !== 'undefined' && window.Submitted?.proxy) {
    const extProxy = window.Submitted.proxy;
    
    // Apply initial colors from external proxy
    const extColors = extProxy.getColorSettings?.();
    if (extColors) {
      proxy.applyColorSettings(extColors);
    }

    // Subscribe to external proxy changes
    const extUnsubscribe = extProxy.subscribe?.((snapshot) => {
      if (snapshot.colorSettings) {
        proxy.applyColorSettings(snapshot.colorSettings);
      }
    });

    if (extUnsubscribe) {
      const originalCleanup = proxyUnsubscribe;
      proxyUnsubscribe = () => {
        if (originalCleanup) originalCleanup();
        extUnsubscribe();
      };
    }
  }

  // Initial render with error handling
  try {
    render(mountPoint, currentProps);
  } catch (error) {
    console.error("Failed to render submitted component:", error);
    mountPoint.innerHTML =
      '<div class="submitted-error">Error loading component</div>';
  }

  // Set the proxy globally like Setup.js
  if (typeof window !== "undefined") {
    if (window.ClaimSubmitted) {
      window.ClaimSubmitted.proxy = proxy;
    }
    
    // Also set up window.Submitted.proxy for ExternalSubmitted integration
    if (!window.Submitted) {
      window.Submitted = {};
    }
    window.Submitted.proxy = proxy;
  }

  // Return component instance
  return {
    /**
     * Destroys the component and cleans up DOM
     */
    destroy() {
      try {
        if (proxyUnsubscribe) {
          proxyUnsubscribe();
        }
        if (mountPoint?.parentNode) {
          mountPoint.parentNode.removeChild(mountPoint);
        }
      } catch (error) {
        console.warn("Failed to destroy component:", error);
      }
    },

    /**
     * Updates component with new props
     * @param {Object} nextProps - New properties to merge
     */
    update(nextProps = {}) {
      try {
        currentProps = { ...currentProps, ...nextProps };
        render(mountPoint, currentProps);
      } catch (error) {
        console.error("Failed to update component:", error);
      }
    },

    proxy, // Expose proxy like Setup.js
  };
}

// Inject original complete CSS styles
const ensureSubmittedStyles = () => {
  if (document.getElementById(SUBMITTED_STYLE_ID)) return;
  
  const style = document.createElement('style');
  style.id = SUBMITTED_STYLE_ID;
  style.textContent = `
  :root {
    --submitted-bg-surface: #ffffff;
    --submitted-bg-muted: #f9f9f9;
    --submitted-border: #e5e7eb;
    --submitted-border-strong: #d1d5db;
    --submitted-text: #202223;
    --submitted-text-subdued: #6b7280;
    --submitted-primary: #5a9a5a;
    --submitted-primary-dark: #4a8a4a;
    --submitted-primary-light: #edfff6;
    --submitted-primary-text: #ffffff;
    --submitted-radius: 12px;
    --submitted-space-50: 4px;
    --submitted-space-100: 8px;
    --submitted-space-150: 12px;
    --submitted-space-200: 16px;
    --submitted-space-300: 20px;
    --submitted-space-400: 24px;
    --submitted-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --submitted-shadow-hover: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .submitted-root {
    display: flex;
    flex-direction: column;
    gap: var(--submitted-space-200);
    color: var(--submitted-text);
    max-width: 1200px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .submitted-row {
    display: flex;
  }
  .submitted-row-between {
    justify-content: space-between;
  }
  .submitted-row-center {
    align-items: center;
  }

  .submitted-inline {
    display: inline-flex;
  }
  .submitted-gap-100 { column-gap: var(--submitted-space-100); }
  .submitted-gap-400 { column-gap: var(--submitted-space-400); }
  .submitted-mb-2 { margin-bottom: var(--submitted-space-100); }
  .submitted-mt-2 { margin-top: 4px; }
  .submitted-p-2 { padding: var(--submitted-space-200); }
  .submitted-minw-110 { min-width: 110px; }
  .submitted-block { display: block; }

  .submitted-text { color: var(--submitted-text); }
  .submitted-text-sm { font-size: 14px; line-height: 1.4; }
  .submitted-text-md { font-size: 16px; line-height: 1.5; }
  .submitted-subdued { color: var(--submitted-text-subdued); }
  .submitted-semibold { font-weight: 600; }

  .submitted-title {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    color: var(--submitted-text);
  }
  .submitted-heading-md { 
    font-size: 16px; 
    font-weight: 700; 
    margin: 0;
    color: var(--submitted-text);
  }
  .submitted-heading-sm { 
    font-size: 13px; 
    font-weight: 600; 
    margin: 0 0 var(--submitted-space-50) 0;
    color: var(--submitted-text);
  }

  .submitted-btn {
    appearance: none;
    border: 1px solid var(--submitted-border);
    background: #ffffff;
    color: var(--submitted-text);
    border-radius: 8px;
    padding: 12px 24px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .submitted-btn:hover {
    background: var(--submitted-bg-muted);
    border-color: #cbd5e0;
  }

  .submitted-btn-primary {
    background: var(--submitted-primary);
    border-color: var(--submitted-primary);
    color: var(--submitted-primary-text);
    box-shadow: 0 2px 4px rgba(90, 154, 90, 0.2);
  }

  .submitted-btn-primary:hover {
    background: var(--submitted-primary-dark);
    border-color: var(--submitted-primary-dark);
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(90, 154, 90, 0.3);
  }

  .submitted-btn-tertiary {
    background: transparent;
    border-color: transparent;
    padding: 8px;
    min-width: 40px;
    border-radius: 50%;
  }

  .submitted-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--submitted-space-300);
  }
  @media (min-width: 768px) {
    .submitted-grid { 
      grid-template-columns: 1fr 1fr; 
      gap: var(--submitted-space-400);
    }
  }

  .submitted-card {
    background: var(--submitted-bg-surface);
    border: 1px solid var(--submitted-border);
    border-radius: var(--submitted-radius);
    box-shadow: var(--submitted-shadow);
    transition: box-shadow 0.2s ease;
    overflow: hidden;
  }

  .submitted-divider {
    height: 1px;
    width: 100%;
    background: var(--submitted-border);
    margin: var(--submitted-space-200) 0;
  }

  .submitted-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 99px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: #fef3c7;
    color: #92400e;
    border: 1px solid transparent;
  }

  .submitted-items { 
    display: flex; 
    flex-direction: column; 
    gap: var(--submitted-space-100); 
  }

  .submitted-item-box {
    display: flex;
    align-items: center;
    min-height: 64px;
    padding: var(--submitted-space-200);
    background: var(--submitted-bg-surface);
    border: 1px solid var(--submitted-border);
    border-radius: var(--submitted-radius);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .submitted-item-box:hover {
    border-color: var(--submitted-primary);
    background-color: var(--submitted-bg-muted);
    box-shadow: var(--submitted-shadow-hover);
    transform: translateY(-1px);
  }

  .submitted-item-image {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 6px;
    background: #f1f5f9;
    border: 1px solid var(--submitted-border);
    margin-right: var(--submitted-space-200);
  }

  .submitted-item-box:hover .submitted-item-image {
    transform: scale(1.05);
    transition: transform 0.2s ease;
  }

  .submitted-item-textwrap { 
    flex: 1 1 auto; 
    min-width: 0; 
  }
  
  .submitted-price-wrap { 
    margin-left: auto; 
    text-align: right;
  }

  .submitted-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--submitted-space-200);
    padding-top: var(--submitted-space-300);
    border-top: 1px solid var(--submitted-border);
    margin-top: var(--submitted-space-300);
  }

  @media (max-width: 767px) {
    .submitted-footer {
      flex-direction: column;
      gap: var(--submitted-space-100);
    }
    .submitted-btn {
      width: 100%;
    }
  }

  .submitted-mount { 
    width: 100%; 
  }

  .submitted-error {
    padding: var(--submitted-space-300);
    background: #fee2e2;
    border: 1px solid #fecaca;
    border-radius: var(--submitted-radius);
    color: #dc2626;
    text-align: center;
  }

  .submitted-stack {
    display: flex;
    flex-direction: column;
  }
  `;
  document.head.appendChild(style);
};

/**
 * Injects styles into document head
 * Prevents duplicate style injection by checking for existing style element
 */
const injectSubmittedStyles = () => {
  if (
    typeof document === "undefined" ||
    document.getElementById(SUBMITTED_STYLE_ID)
  ) {
    return;
  }

  ensureSubmittedStyles();
};

// Initialize styles
injectSubmittedStyles();

// Make it available globally like Setup.js
if (typeof window !== "undefined") {
  window.ClaimSubmitted = { 
    init: mountSubmitted,
    proxy: null // Will be set when component is initialized
  };
  
  // Also make it available as expected by ExternalSubmitted.jsx
  window.mountSubmitted = mountSubmitted;
  window.mountClaimSubmitted = mountSubmitted;
  window.initSubmitted = mountSubmitted;
  window.applySubmittedColorSettings = applySubmittedColorSettings;
}

// Export the applySubmittedColorSettings function
export { applySubmittedColorSettings };

// Export the mount function as default
export default mountSubmitted;












// // Submitted Component - Clean Code with Original Design
// const SUBMITTED_STYLE_ID = "vanilla-submitted-styles";

// // Default claim information
// const DEFAULT_CLAIM_INFO = {
//   id: "20250816083974262",
//   email: "abcd@gmail.com",
//   created: "Aug 16, 08:39 am",
// };

// // Default claimed items - sample products
// const DEFAULT_CLAIMED_ITEMS = [
//   {
//     id: 1,
//     name: "AHMED Aqua perfume by Laiba",
//     description: "Premium fragrance collection",
//     image: "https://via.placeholder.com/72x72/f0f0f0/666?text=Product",
//     price: "€5.95",
//     qty: 2,
//     eligible: true
//   },
//   {
//     id: 2,
//     name: "Luxury Rose Perfume",
//     description: "Classic fragrance collection", 
//     image: "https://via.placeholder.com/72x72/f0f0f0/666?text=Product",
//     price: "€7.50",
//     qty: 1,
//     eligible: true
//   },
//   {
//     id: 3,
//     name: "Ocean Breeze Cologne",
//     description: "Fresh summer collection",
//     image: "https://via.placeholder.com/72x72/f0f0f0/666?text=Product", 
//     price: "€6.25",
//     qty: 1,
//     eligible: true
//   }
// ];

// // Green-Yellow theme default colors (matching Setup.js)
// const DEFAULT_GREEN_YELLOW_COLORS = {
//   buttonBg: "#5a9a5a",
//   buttonText: "#ffffff",
// };

// // CSS class constants for consistent styling
// const CSS_CLASSES = {
//   root: "submitted-root",
//   row: "submitted-row submitted-row-between submitted-row-center",
//   inline: "submitted-inline submitted-gap-400 submitted-row-center",
//   btn: {
//     base: "submitted-btn",
//     primary: "submitted-btn submitted-btn-primary",
//     tertiary: "submitted-btn submitted-btn-tertiary",
//   },
//   card: "submitted-card",
//   grid: "submitted-grid",
//   badge: "submitted-badge submitted-badge-warning",
//   item: {
//     box: "submitted-item-box",
//     image: "submitted-item-image",
//     textWrap: "submitted-item-textwrap",
//     priceWrap: "submitted-price-wrap",
//   },
// };

// /**
//  * Utility Functions
//  */

// /**
//  * Converts price string to number
//  * @param {string|number} price - Price value
//  * @returns {number} Parsed price or 0 if invalid
//  */
// const parsePriceToNumber = (price) => {
//   if (typeof price === "number") return price;
//   const numericValue = parseFloat(String(price).replace(/[^\d.]/g, ""));
//   return Number.isFinite(numericValue) ? numericValue : 0;
// };

// /**
//  * Derives claimed items from input data
//  * @param {Object} input - Input data containing claimedItems, ORDER_DATA, quantities
//  * @returns {Array} Array of claimed items
//  */
// const deriveClaimedItems = (input) => {
//   const { claimedItems, ORDER_DATA, quantities = {} } = input || {};

//   // Return existing claimed items if available
//   if (Array.isArray(claimedItems) && claimedItems.length > 0) {
//     return claimedItems;
//   }

//   // Filter eligible items from order data
//   const items = ORDER_DATA?.items || [];
//   const derivedItems = items
//     .filter((item) => item?.eligible && (quantities[item.id] ?? 1) >= 1)
//     .map((item) => ({ ...item, qty: quantities[item.id] ?? 1 }));

//   // If no items found, return default claimed items
//   if (derivedItems.length === 0) {
//     return DEFAULT_CLAIMED_ITEMS;
//   }

//   return derivedItems;
// };

// /**
//  * Derives reason label from claim options
//  * @param {Object} input - Input data containing reasonLabel, CLAIM_OPTIONS, selectedClaimOption
//  * @returns {string} Reason label or empty string
//  */
// const deriveReasonLabel = (input) => {
//   const { reasonLabel, CLAIM_OPTIONS, selectedClaimOption } = input || {};

//   // Return existing reason label if available
//   if (reasonLabel?.trim()) return reasonLabel;

//   // Find matching claim option
//   if (!Array.isArray(CLAIM_OPTIONS) || !selectedClaimOption) {
//     // Return default reason if no options provided
//     return "Product damaged";
//   }

//   const matchedOption = CLAIM_OPTIONS.find((option) =>
//     typeof option === "object"
//       ? option.value === selectedClaimOption
//       : option === selectedClaimOption
//   );

//   return matchedOption?.label || matchedOption || "Product damaged";
// };

// /**
//  * HTML Template Generators
//  */

// /**
//  * Creates an information row with label and value
//  * @param {string} label - Label text
//  * @param {string} valueText - Value text
//  * @returns {string} HTML string
//  */
// const createInfoRow = (label, valueText) => {
//   const labelText = String(label ?? "");
//   const hasValue = valueText != null && String(valueText).length > 0;

//   return `
//     <div class="submitted-inline submitted-gap-100">
//       <span class="submitted-text submitted-text-subdued submitted-minw-110 submitted-text-sm">${labelText}</span>
//       ${
//         hasValue
//           ? `<span class="submitted-text submitted-text-sm">${String(
//               valueText
//             )}</span>`
//           : ""
//       }
//     </div>
//   `;
// };

// /**
//  * Creates a claimed item box
//  * @param {Object} item - Item data
//  * @param {string} reasonLabel - Reason for claim
//  * @returns {string} HTML string
//  */
// const createClaimedItemBox = (item, reasonLabel) => {
//   const quantity = item.qty ?? 1;
//   const price = parsePriceToNumber(item.price);
//   const itemName = item.name ?? "";
//   const itemDescription = item.description ?? "";
//   const itemImage = item.image || "";
//   const reason = reasonLabel ?? "";

//   return `
//     <div class="${CSS_CLASSES.item.box}">
//       <img class="${
//         CSS_CLASSES.item.image
//       }" src="${itemImage}" alt="${itemName}" />
//       <div class="${CSS_CLASSES.item.textWrap}">
//         <span class="submitted-text submitted-text-md submitted-semibold submitted-block">${itemName}</span>
//         <span class="submitted-text submitted-text-sm submitted-subdued submitted-block submitted-mt-2">${itemDescription}</span>
//         <span class="submitted-text submitted-text-sm submitted-subdued submitted-block submitted-mt-2">Reason: ${reason}</span>
//       </div>
//       <div class="${CSS_CLASSES.item.priceWrap}">
//         <span class="submitted-text submitted-text-md submitted-semibold">${quantity} x €${price.toFixed(
//     2
//   )} EUR</span>
//       </div>
//     </div>
//   `;
// };

// /**
//  * Gets translation with fallback
//  * @param {Function} t - Translation function
//  * @param {string} key - Translation key
//  * @param {string} fallback - Fallback text
//  * @returns {string} Translated text or fallback
//  */
// const getTranslation = (t, key, fallback) => t?.(key, fallback) ?? fallback;

// /**
//  * Apply color settings to CSS variables for submitted component
//  * @param {Object} settings - Color settings object
//  */
// const applySubmittedColorSettings = (settings) => {
//   if (!settings) return;
//   const root = document.documentElement;
//   const setVar = (key, value) => root.style.setProperty(key, value);

//   // Apply only button colors to CSS variables
//   [
//     ["buttonBg", "--submitted-primary"],
//     ["buttonText", "--submitted-primary-text"],
//   ].forEach(([key, cssVar]) => {
//     if (settings[key]) {
//       setVar(cssVar, settings[key]);
//     }
//   });
// };

// const createHeader = (t) => {
//   return `
//     <div class="${CSS_CLASSES.row}">
//       <div class="${CSS_CLASSES.inline}">
//         <button class="${CSS_CLASSES.btn.tertiary}">${getTranslation(
//     t,
//     "SubmittedDesignJs.backButton",
//     "←"
//   )}</button>
//       <h2 class="submitted-title">${getTranslation(
//           t,
//           "SubmittedDesignJs.title",
//           "Submitted"
//         )}</h2>
//       </div>
//       <button class="${CSS_CLASSES.btn.primary}">${getTranslation(
//     t,
//     "SubmittedDesignJs.createNewBtn",
//     "Create new"
//   )}</button>
//     </div>
//   `;
// };

// /**
//  * Main render function
//  * @param {HTMLElement} container - Container element
//  * @param {Object} props - Component props
//  */
// const render = (container, props) => {
//   const { t } = props;
//   const claimInfo = props.claimInfo || DEFAULT_CLAIM_INFO;
//   const claimedItems = deriveClaimedItems(props);
//   const reason = deriveReasonLabel(props);

//   /**
//    * Creates the left card containing claim status and items
//    * @returns {string} HTML string
//    */
//   const createLeftCard = () => {
//     const itemsHtml = claimedItems
//       .map((item) => createClaimedItemBox(item, reason))
//       .join("");

//     return `
//       <div class="${CSS_CLASSES.card}">
//         <div class="submitted-stack submitted-gap-100 submitted-p-2">
//           <div class="submitted-row submitted-row-between submitted-row-center submitted-mb-2">
//             <h3 class="submitted-heading-md">${getTranslation(
//               t,
//               "SubmittedDesignJs.statusTitle",
//               "Claim status"
//             )}</h3>
//             <span class="${CSS_CLASSES.badge}">${getTranslation(
//       t,
//       "SubmittedDesignJs.statusBadge",
//       "Pending"
//     )}</span>
//           </div>
//           <span class="submitted-text submitted-subdued submitted-text-md">
//             ${getTranslation(
//               t,
//               "SubmittedDesignJs.statusText",
//               "Your claim is currently pending review."
//             )}
//           </span>
//           <div class="submitted-divider"></div>
//           <h3 class="submitted-heading-md submitted-mb-2">
//             ${getTranslation(t, "SubmittedDesignJs.itemsHead", "Claimed items")}
//           </h3>
//           <div class="submitted-items">
//             ${itemsHtml}
//           </div>
//         </div>
//       </div>
//     `;
//   };

//   /**
//    * Creates the right card containing reorder info and general information
//    * @returns {string} HTML string
//    */
//   const createRightCard = () => {
//     const infoItems = [
//       {
//         labelKey: "SubmittedDesignJs.giCidLabel",
//         label: "Claim ID",
//         value: claimInfo.id,
//       },
//       {
//         labelKey: "SubmittedDesignJs.giEmailLabel",
//         label: "Customer contact",
//         value: claimInfo.email,
//       },
//       {
//         labelKey: "SubmittedDesignJs.giCreatedLabel",
//         label: "Created time",
//         value: claimInfo.created,
//       },
//     ];

//     const infoItemsHtml = infoItems
//       .map(
//         ({ labelKey, label, value }) => `
//         <h4 class="submitted-heading-sm">${getTranslation(
//           t,
//           labelKey,
//           label
//         )}</h4>
//         ${createInfoRow(label, value)}
//       `
//       )
//       .join("");

//     return `
//       <div class="${CSS_CLASSES.card}">
//         <div class="submitted-stack submitted-gap-100 submitted-p-2">
//           <div class="submitted-mb-2">
//             <h3 class="submitted-heading-md">${getTranslation(
//               t,
//               "SubmittedDesignJs.reorderTitle",
//               "Reorder"
//             )}</h3>
//             <span class="submitted-text submitted-subdued submitted-text-md">
//               ${getTranslation(
//                 t,
//                 "SubmittedDesignJs.reorderText",
//                 "Reordering same item(s). This will create a new order."
//               )}
//             </span>
//           </div>
//           <div class="submitted-divider"></div>
//           <div class="submitted-p-2">
//             <h3 class="submitted-heading-md submitted-mb-2">
//               ${getTranslation(
//                 t,
//                 "SubmittedDesignJs.giTitle1",
//                 "General information"
//               )}
//             </h3>
//             ${infoItemsHtml}
//           </div>
//         </div>
//       </div>
//     `;
//   };

//   /**
//    * Creates the footer with action buttons
//    * @returns {string} HTML string
//    */
//   const createFooter = () => {
//     const buttons = [
//       {
//         key: "SubmittedDesignJs.btn1",
//         text: "Download Receipt",
//         className: CSS_CLASSES.btn.base,
//       },
//       {
//         key: "SubmittedDesignJs.btn2",
//         text: "Contact Support",
//         className: CSS_CLASSES.btn.base,
//       },
//       {
//         key: "SubmittedDesignJs.btn3",
//         text: "Track Status",
//         className: CSS_CLASSES.btn.primary,
//       },
//     ];

//     const buttonsHtml = buttons
//       .map(
//         ({ key, text, className }) =>
//           `<button class="${className}">${getTranslation(
//             t,
//             key,
//             text
//           )}</button>`
//       )
//       .join("");

//     return `
//       <div class="submitted-footer">
//         ${buttonsHtml}
//       </div>
//     `;
//   };

//   // Generate complete HTML template
//   const htmlTemplate = `
//     <div class="${CSS_CLASSES.root}">
//       ${createHeader(t)}
//       <div class="${CSS_CLASSES.grid}">
//         ${createLeftCard()}
//         ${createRightCard()}
//       </div>
//       ${createFooter()}
//     </div>
//   `;

//   container.innerHTML = htmlTemplate;
// };

// /**
//  * Main mount function for the submitted component
//  * @param {HTMLElement|string} container - Container element or selector
//  * @param {Object} props - Component properties
//  * @returns {Object} Component instance with destroy and update methods
//  */
// function mountSubmitted(container, props = {}) {
//   ensureSubmittedStyles();

//   // Validate container
//   if (!container) {
//     throw new Error("mountSubmitted: container is required");
//   }

//   const host =
//     container instanceof HTMLElement
//       ? container
//       : document.querySelector(container);
//   if (!host) {
//     throw new Error("mountSubmitted: container not found");
//   }

//   // Initialize component state
//   let currentProps = { ...props };
//   const mountPoint = document.createElement("div");
//   mountPoint.className = "submitted-mount";
//   host.appendChild(mountPoint);

//   // Add proxy object like Setup.js
//   const proxy = {
//     contentSettings: null,
//     colorSettings: {
//       ...DEFAULT_GREEN_YELLOW_COLORS, // Use Green-Yellow theme as default
//     },
//     isLiveMode: true,
//     subscribers: new Set(),

//     subscribe(cb) {
//       this.subscribers.add(cb);
//       return () => this.subscribers.delete(cb);
//     },

//     notify() {
//       for (const cb of this.subscribers)
//         cb({
//           contentSettings: this.contentSettings,
//           colorSettings: this.colorSettings,
//           isLiveMode: this.isLiveMode,
//         });
//     },

//     updateContentSettings(settings) {
//       this.contentSettings =
//         typeof settings === "function"
//           ? settings(this.contentSettings)
//           : { ...this.contentSettings, ...settings };
//       this.notify();
//     },

//     updateColorSettings(settings) {
//       this.colorSettings =
//         typeof settings === "function"
//           ? settings(this.colorSettings)
//           : { ...this.colorSettings, ...settings };
//       this.notify();
//       this.applyColorSettings(this.colorSettings);
//     },

//     getContentSettings() {
//       return this.contentSettings;
//     },

//     getColorSettings() {
//       return this.colorSettings;
//     },

//     applyColorSettings(settings) {
//       if (!settings || !this.isLiveMode) return;
//       applySubmittedColorSettings(settings);
//     },

//     toggleLiveMode() {
//       this.isLiveMode = !this.isLiveMode;
//       this.applyColorSettings(this.colorSettings);
//       this.notify();
//       return this.isLiveMode;
//     },
//   };

//   // Setup proxy integration for color settings
//   let proxyUnsubscribe = null;
//   if (typeof window !== 'undefined' && window.SubmittedProxy) {
//     const localProxy = window.SubmittedProxy;
    
//     // Apply initial colors if available
//     const initialColors = localProxy.getColorSettings?.();
//     if (initialColors) {
//       proxy.applyColorSettings(initialColors);
//     } else {
//       // Apply Green-Yellow theme as default
//       proxy.applyColorSettings(DEFAULT_GREEN_YELLOW_COLORS);
//     }

//     // Subscribe to changes
//     proxyUnsubscribe = localProxy.subscribe?.((snapshot) => {
//       if (snapshot.colorSettings) {
//         proxy.applyColorSettings(snapshot.colorSettings);
//       }
//     });
//   } else {
//     // Apply Green-Yellow theme as default
//     proxy.applyColorSettings(DEFAULT_GREEN_YELLOW_COLORS);
//   }

//   // Also check for external Submitted proxy integration
//   if (typeof window !== 'undefined' && window.Submitted?.proxy) {
//     const extProxy = window.Submitted.proxy;
    
//     // Apply initial colors from external proxy
//     const extColors = extProxy.getColorSettings?.();
//     if (extColors) {
//       proxy.applyColorSettings(extColors);
//     }

//     // Subscribe to external proxy changes
//     const extUnsubscribe = extProxy.subscribe?.((snapshot) => {
//       if (snapshot.colorSettings) {
//         proxy.applyColorSettings(snapshot.colorSettings);
//       }
//     });

//     if (extUnsubscribe) {
//       const originalCleanup = proxyUnsubscribe;
//       proxyUnsubscribe = () => {
//         if (originalCleanup) originalCleanup();
//         extUnsubscribe();
//       };
//     }
//   }

//   // Initial render with error handling
//   try {
//     render(mountPoint, currentProps);
//   } catch (error) {
//     console.error("Failed to render submitted component:", error);
//     mountPoint.innerHTML =
//       '<div class="submitted-error">Error loading component</div>';
//   }

//   // Set the proxy globally like Setup.js
//   if (typeof window !== "undefined" && window.ClaimSubmitted) {
//     window.ClaimSubmitted.proxy = proxy;
//   }

//   // Return component instance
//   return {
//     /**
//      * Destroys the component and cleans up DOM
//      */
//     destroy() {
//       try {
//         if (proxyUnsubscribe) {
//           proxyUnsubscribe();
//         }
//         if (mountPoint?.parentNode) {
//           mountPoint.parentNode.removeChild(mountPoint);
//         }
//       } catch (error) {
//         console.warn("Failed to destroy component:", error);
//       }
//     },

//     /**
//      * Updates component with new props
//      * @param {Object} nextProps - New properties to merge
//      */
//     update(nextProps = {}) {
//       try {
//         currentProps = { ...currentProps, ...nextProps };
//         render(mountPoint, currentProps);
//       } catch (error) {
//         console.error("Failed to update component:", error);
//       }
//     },

//     proxy, // Expose proxy like Setup.js
//   };
// }

// // Inject original complete CSS styles
// const ensureSubmittedStyles = () => {
//   if (document.getElementById(SUBMITTED_STYLE_ID)) return;
  
//   const style = document.createElement('style');
//   style.id = SUBMITTED_STYLE_ID;
//   style.textContent = `
//   :root {
//     --submitted-bg-surface: #ffffff;
//     --submitted-bg-muted: #f9f9f9;
//     --submitted-border: #e5e7eb;
//     --submitted-border-strong: #d1d5db;
//     --submitted-text: #202223;
//     --submitted-text-subdued: #6b7280;
//     --submitted-primary: #5a9a5a;
//     --submitted-primary-dark: #4a8a4a;
//     --submitted-primary-light: #edfff6;
//     --submitted-primary-text: #ffffff;
//     --submitted-radius: 12px;
//     --submitted-space-50: 4px;
//     --submitted-space-100: 8px;
//     --submitted-space-150: 12px;
//     --submitted-space-200: 16px;
//     --submitted-space-300: 20px;
//     --submitted-space-400: 24px;
//     --submitted-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
//     --submitted-shadow-hover: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//   }

//   .submitted-root {
//     display: flex;
//     flex-direction: column;
//     gap: var(--submitted-space-200);
//     color: var(--submitted-text);
//     max-width: 1200px;
//     margin: 0 auto;
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
//   }

//   .submitted-row {
//     display: flex;
//   }
//   .submitted-row-between {
//     justify-content: space-between;
//   }
//   .submitted-row-center {
//     align-items: center;
//   }

//   .submitted-inline {
//     display: inline-flex;
//   }
//   .submitted-gap-100 { column-gap: var(--submitted-space-100); }
//   .submitted-gap-400 { column-gap: var(--submitted-space-400); }
//   .submitted-mb-2 { margin-bottom: var(--submitted-space-100); }
//   .submitted-mt-2 { margin-top: 4px; }
//   .submitted-p-2 { padding: var(--submitted-space-200); }
//   .submitted-minw-110 { min-width: 110px; }
//   .submitted-block { display: block; }

//   .submitted-text { color: var(--submitted-text); }
//   .submitted-text-sm { font-size: 14px; line-height: 1.4; }
//   .submitted-text-md { font-size: 16px; line-height: 1.5; }
//   .submitted-subdued { color: var(--submitted-text-subdued); }
//   .submitted-semibold { font-weight: 600; }

//   .submitted-title {
//     font-size: 20px;
//     font-weight: 700;
//     margin: 0;
//     color: var(--submitted-text);
//   }
//   .submitted-heading-md { 
//     font-size: 16px; 
//     font-weight: 700; 
//     margin: 0;
//     color: var(--submitted-text);
//   }
//   .submitted-heading-sm { 
//     font-size: 13px; 
//     font-weight: 600; 
//     margin: 0 0 var(--submitted-space-50) 0;
//     color: var(--submitted-text);
//   }

//   .submitted-btn {
//     appearance: none;
//     border: 1px solid var(--submitted-border);
//     background: #ffffff;
//     color: var(--submitted-text);
//     border-radius: 8px;
//     padding: 12px 24px;
//     cursor: pointer;
//     font-size: 14px;
//     font-weight: 600;
//     transition: all 0.2s;
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .submitted-btn:hover {
//     background: var(--submitted-bg-muted);
//     border-color: #cbd5e0;
//   }

//   .submitted-btn-primary {
//     background: var(--submitted-primary);
//     border-color: var(--submitted-primary);
//     color: var(--submitted-primary-text);
//     box-shadow: 0 2px 4px rgba(90, 154, 90, 0.2);
//   }

//   .submitted-btn-primary:hover {
//     background: var(--submitted-primary-dark);
//     border-color: var(--submitted-primary-dark);
//     transform: translateY(-1px);
//     box-shadow: 0 4px 6px rgba(90, 154, 90, 0.3);
//   }

//   .submitted-btn-tertiary {
//     background: transparent;
//     border-color: transparent;
//     padding: 8px;
//     min-width: 40px;
//     border-radius: 50%;
//   }

//   .submitted-grid {
//     display: grid;
//     grid-template-columns: 1fr;
//     gap: var(--submitted-space-300);
//   }
//   @media (min-width: 768px) {
//     .submitted-grid { 
//       grid-template-columns: 1fr 1fr; 
//       gap: var(--submitted-space-400);
//     }
//   }

//   .submitted-card {
//     background: var(--submitted-bg-surface);
//     border: 1px solid var(--submitted-border);
//     border-radius: var(--submitted-radius);
//     box-shadow: var(--submitted-shadow);
//     transition: box-shadow 0.2s ease;
//     overflow: hidden;
//   }

//   .submitted-divider {
//     height: 1px;
//     width: 100%;
//     background: var(--submitted-border);
//     margin: var(--submitted-space-200) 0;
//   }

//   .submitted-badge {
//     display: inline-flex;
//     align-items: center;
//     padding: 4px 10px;
//     border-radius: 99px;
//     font-size: 11px;
//     font-weight: 700;
//     text-transform: uppercase;
//     letter-spacing: 0.05em;
//     background: #fef3c7;
//     color: #92400e;
//     border: 1px solid transparent;
//   }

//   .submitted-items { 
//     display: flex; 
//     flex-direction: column; 
//     gap: var(--submitted-space-100); 
//   }

//   .submitted-item-box {
//     display: flex;
//     align-items: center;
//     min-height: 64px;
//     padding: var(--submitted-space-200);
//     background: var(--submitted-bg-surface);
//     border: 1px solid var(--submitted-border);
//     border-radius: var(--submitted-radius);
//     cursor: pointer;
//     transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
//   }

//   .submitted-item-box:hover {
//     border-color: var(--submitted-primary);
//     background-color: var(--submitted-bg-muted);
//     box-shadow: var(--submitted-shadow-hover);
//     transform: translateY(-1px);
//   }

//   .submitted-item-image {
//     width: 56px;
//     height: 56px;
//     object-fit: cover;
//     border-radius: 6px;
//     background: #f1f5f9;
//     border: 1px solid var(--submitted-border);
//     margin-right: var(--submitted-space-200);
//   }

//   .submitted-item-box:hover .submitted-item-image {
//     transform: scale(1.05);
//     transition: transform 0.2s ease;
//   }

//   .submitted-item-textwrap { 
//     flex: 1 1 auto; 
//     min-width: 0; 
//   }
  
//   .submitted-price-wrap { 
//     margin-left: auto; 
//     text-align: right;
//   }

//   .submitted-footer {
//     display: flex;
//     justify-content: flex-end;
//     gap: var(--submitted-space-200);
//     padding-top: var(--submitted-space-300);
//     border-top: 1px solid var(--submitted-border);
//     margin-top: var(--submitted-space-300);
//   }

//   @media (max-width: 767px) {
//     .submitted-footer {
//       flex-direction: column;
//       gap: var(--submitted-space-100);
//     }
//     .submitted-btn {
//       width: 100%;
//     }
//   }

//   .submitted-mount { 
//     width: 100%; 
//   }

//   .submitted-error {
//     padding: var(--submitted-space-300);
//     background: #fee2e2;
//     border: 1px solid #fecaca;
//     border-radius: var(--submitted-radius);
//     color: #dc2626;
//     text-align: center;
//   }

//   .submitted-stack {
//     display: flex;
//     flex-direction: column;
//   }
//   `;
//   document.head.appendChild(style);
// };

// /**
//  * Injects styles into document head
//  * Prevents duplicate style injection by checking for existing style element
//  */
// const injectSubmittedStyles = () => {
//   if (
//     typeof document === "undefined" ||
//     document.getElementById(SUBMITTED_STYLE_ID)
//   ) {
//     return;
//   }

//   ensureSubmittedStyles();
// };

// // Initialize styles
// injectSubmittedStyles();

// // Make it available globally like Setup.js
// if (typeof window !== "undefined") {
//   window.ClaimSubmitted = { 
//     init: mountSubmitted,
//     proxy: null // Will be set when component is initialized
//   };
  
//   // Also make it available as expected by ExternalSubmitted.jsx
//   window.mountSubmitted = mountSubmitted;
//   window.mountClaimSubmitted = mountSubmitted;
//   window.initSubmitted = mountSubmitted;
//   window.applySubmittedColorSettings = applySubmittedColorSettings;
// }

// // Export the applySubmittedColorSettings function
// export { applySubmittedColorSettings };

// // Export the mount function as default
// export default mountSubmitted;
