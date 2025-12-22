const ICONS = {
    reorder: '<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" style="width: 23px; height: 23px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"></path><path d="M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"></path></svg>',
    refund: '<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" style="width: 23px; height: 23px; vertical-align: middle; fill: var(--setup-svg-color);"><path fill-rule="evenodd" d="M12.379 4h-7.258c-.395 0-.736 0-1.017.023-.297.024-.592.078-.875.222-.424.216-.768.56-.984.984-.144.283-.198.578-.222.875-.023.28-.023.622-.023 1.017v3.008c0 .395 0 .736.023 1.017.024.297.078.592.222.875.216.424.56.768.984.984.283.144.578.198.875.222.121.01.254.016.397.019.001.243.006.46.022.65.024.297.078.592.222.875.216.424.56.768.984.984.283.144.578.198.875.222.28.023.622.023 1.017.023h7.258c.395 0 .736 0 1.017-.023.297-.024.592-.078.875-.222.424-.216.768-.56.984-.984.144-.283.198-.578.222-.875.023-.28.023-.622.023-1.017v-3.008c0-.395 0-.736-.023-1.017-.024-.297-.078-.592-.222-.875-.216-.424-.56-.768-.983-.984-.284-.144-.58-.198-.876-.222-.121-.01-.254-.016-.397-.019-.001-.243-.006-.46-.022-.65-.024-.297-.078-.592-.222-.875-.216-.424-.56-.768-.984-.984-.283-.144-.578-.198-.875-.222-.28-.023-.622-.023-1.017-.023Zm1.62 2.75h-6.378c-.395 0-.736 0-1.017.023-.297.024-.592.078-.875.222-.424.216-.768.56-.984.984-.144.283-.198.578-.222.875-.023.28-.023.622-.023 1.017v1.874c-.104-.002-.194-.006-.274-.013-.204-.017-.28-.045-.316-.064-.142-.072-.256-.186-.328-.327-.02-.038-.047-.113-.064-.317-.017-.212-.018-.492-.018-.924v-2.95c0-.432 0-.712.018-.924.017-.204.045-.28.064-.316.072-.142.186-.256.328-.328.037-.02.112-.047.316-.064.212-.017.492-.018.924-.018h7.2c.432 0 .712 0 .924.018.204.017.28.045.317.064.14.072.255.186.327.328.02.037.047.112.064.316.011.138.016.305.017.524Zm-6.349 7.75h1.178c-.515-.796-.828-1.848-.828-3 0-1.278.385-2.43 1.002-3.25h-1.352c-.432 0-.712 0-.924.018-.204.017-.28.045-.316.064-.142.072-.256.186-.328.328-.02.037-.047.112-.064.316-.017.212-.018.492-.018.924v2.95c0 .432 0 .712.018.924.017.204.045.28.064.317.072.14.186.255.328.327.037.02.112.047.316.064.212.017.492.018.924.018Zm6.85-3c0-1.278-.384-2.43-1.002-3.25h1.352c.432 0 .712 0 .924.018.204.017.28.045.316.064.142.072.256.186.328.328.02.037.047.112.064.316.017.212.018.492.018.924v2.95c0 .432 0 .712-.018.924-.017.204-.045.28-.064.317-.072.14-.186.255-.328.327-.037.02-.112.047-.316.064-.212.017-.492.018-.924.018h-1.178c.515-.796.828-1.848.828-3Zm-4.332 2.304c-.384-.532-.668-1.342-.668-2.304 0-.962.284-1.772.668-2.304.385-.533.787-.696 1.082-.696.295 0 .697.163 1.082.696.384.532.668 1.342.668 2.304 0 .962-.284 1.772-.668 2.304-.385.533-.787.696-1.082.696-.295 0-.697-.163-1.082-.696Z"></path></svg>',
    selectedItem: '<svg viewBox="0 0 20 20" style="width: 23px; height: 23px; vertical-align: middle; fill: var(--submitted-primary);"><path d="M4.63 8.81a5.5 5.5 0 0 1 6.56-4.18.75.75 0 0 0 .325-1.464 7 7 0 1 0 5.32 8.35.75.75 0 0 0-1.465-.325 5.5 5.5 0 1 1-10.74-2.38Z"></path><path d="M16.03 6.78a.75.75 0 0 0-1.06-1.06l-4.97 4.97-2.22-2.22a.75.75 0 0 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l5.5-5.5Z"></path></svg>'
};

// Default Configuration
const DEFAULT_CONFIG = {
    claimInfo: { id: "20250816083974262", email: "abcd@gmail.com", created: "Aug 16, 08:39 am" },
    colors: { buttonBg: "#5a9a5a", buttonText: "#ffffff" }
};

/**
 * Shared Proxy Logic
 */
const createProxyObject = (initialColors) => ({
    contentSettings: null,
    colorSettings: initialColors,
    isLiveMode: true,
    subscribers: new Set(),
    subscribe(cb) { this.subscribers.add(cb); return () => this.subscribers.delete(cb); },
    notify() { this.subscribers.forEach(cb => cb({ contentSettings: this.contentSettings, colorSettings: this.colorSettings, isLiveMode: this.isLiveMode })); },
    updateColorSettings(settings) {
        this.colorSettings = typeof settings === "function" ? settings(this.colorSettings) : { ...this.colorSettings, ...settings };
        this.applyColorSettings(this.colorSettings);
        this.notify();
    },
    applyColorSettings(s) {
        if (!s || !this.isLiveMode) return;
        document.documentElement.style.setProperty("--submitted-primary", s.buttonBg);
        document.documentElement.style.setProperty("--submitted-primary-text", s.buttonText);
    }
});

/**
 * UI Rendering Logic
 */
const render = (container, props) => {
    const t = (key, fallback) => props.t?.(key, fallback) ?? fallback;
    const items = props.claimedItems || props.ORDER_DATA?.items?.filter(i => i.eligible) || [];
    const reason = props.reasonLabel || "Product damaged";

    const itemsHtml = items.map(item => `
        <div class="submitted-item-box">
            <div class="submitted-item-image" style="background-image: url('${item.image || 'https://picsum.photos/72'}')"></div>
            <div class="submitted-item-content">
                <span class="submitted-text-bold">${item.name}</span>
                <span class="submitted-text-subdued">${item.description || ''}</span>
                <span class="setup-badge critical">Reason: ${reason}</span>
            </div>
            <div class="submitted-item-price">
                <span class="submitted-text-bold">${item.qty || 1} x ${item.price}</span>
            </div>
        </div>
    `).join("");

    container.innerHTML = `
        <div class="submitted-root">
            <header class="submitted-header">
                <div class="submitted-flex-center">
                    <button class="submitted-btn-circle">←</button>
                    <h2 class="submitted-main-title">${t("SubmittedDesignJs.title", "Submitted")}</h2>
                </div>
                <button class="submitted-btn-primary">${t("SubmittedDesignJs.createNewBtn", "Create new")}</button>
            </header>

            <div class="submitted-main-grid">
                <div class="submitted-card">
                    <div class="submitted-card-header">
                        <div class="submitted-flex-center">
                            ${ICONS.selectedItem}
                            <h3>${t("SubmittedDesignJs.statusTitle", "Claim status")}</h3>
                        </div>
                        <span class="submitted-badge-pending">Pending</span>
                    </div>
                    <p class="submitted-text-subdued">${t("SubmittedDesignJs.statusText", "Your claim is currently pending review.")}</p>
                    <div class="submitted-divider"></div>
                    <div class="submitted-card-section">
                        <h4>${t("SubmittedDesignJs.itemsHead", "Claimed items")}</h4>
                        <div class="submitted-items-list">${itemsHtml}</div>
                    </div>
                </div>

                <div class="submitted-card">
                    <div class="submitted-card-section">
                        <h3>${t("SubmittedDesignJs.reorderTitle", "Reorder")}</h3>
                        <p class="submitted-text-subdued">${t("SubmittedDesignJs.reorderText", "Reordering same item(s). This will create a new order.")}</p>
                    </div>
                    <div class="submitted-divider"></div>
                    <div class="submitted-card-section">
                        <h3>General information</h3>
                        <div class="submitted-info-row"><span>Claim ID</span><strong>${props.claimInfo?.id || DEFAULT_CONFIG.claimInfo.id}</strong></div>
                        <div class="submitted-info-row"><span>Contact</span><strong>${props.claimInfo?.email || DEFAULT_CONFIG.claimInfo.email}</strong></div>
                        <div class="submitted-info-row"><span>Created</span><strong>${props.claimInfo?.created || DEFAULT_CONFIG.claimInfo.created}</strong></div>
                    </div>
                </div>
            </div>

            <footer class="submitted-footer">
                <button class="submitted-btn">${t("SubmittedDesignJs.btn1", "Download Receipt")}</button>
                <button class="submitted-btn">${t("SubmittedDesignJs.btn2", "Contact Support")}</button>
                <button class="submitted-btn-primary">${t("SubmittedDesignJs.btn3", "Track Status")}</button>
            </footer>
        </div>
    `;
};

/**
 * Main Mount Function
 */
function mountSubmitted(container, props = {}) {
    ensureSubmittedStyles();
    const host = typeof container === "string" ? document.querySelector(container) : container;
    if (!host) return;

    const mountPoint = document.createElement("div");
    host.appendChild(mountPoint);

    const proxy = createProxyObject(DEFAULT_CONFIG.colors);
    proxy.applyColorSettings(proxy.colorSettings);

    render(mountPoint, props);

    // Global Exposure
    if (typeof window !== "undefined") {
        window.SubmittedProxy = proxy;
        window.ClaimSubmitted = { init: mountSubmitted, proxy };
    }

    return {
        destroy: () => mountPoint.remove(),
        update: (newProps) => render(mountPoint, { ...props, ...newProps }),
        proxy
    };
}

/**
 * CSS Styles Injection
 */
function ensureSubmittedStyles() {
    if (document.getElementById("vanilla-submitted-styles")) return;
    const style = document.createElement("style");
    style.id = "vanilla-submitted-styles";
    style.textContent = `
        :root {
            --submitted-primary: #5a9a5a;
            --submitted-primary-text: #ffffff;
            --submitted-border: #e5e7eb;
            --submitted-text: #202223;
            --submitted-text-subdued: #6b7280;
            --submitted-radius: 12px;
            --setup-critical: #e53e3e;
            --setup-critical-bg: #fff5f5;
        }
        .submitted-root { display: flex; flex-direction: column; gap: 20px; font-family: sans-serif; max-width: 1100px; margin: 0 auto; color: var(--submitted-text); }
        .submitted-header, .submitted-footer, .submitted-card-header { display: flex; justify-content: space-between; align-items: center; }
        .submitted-flex-center { display: flex; align-items: center; gap: 12px; }
        .submitted-main-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 24px; }
        .submitted-card { background: #fff; border: 1px solid var(--submitted-border); border-radius: var(--submitted-radius); padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; flex-direction: column; gap: 16px; }
        .submitted-divider { height: 1px; background: var(--submitted-border); margin: 4px 0; }
        .submitted-item-box { display: flex; gap: 16px; padding: 12px; border: 1px solid var(--submitted-border); border-radius: 8px; align-items: center; }
        .submitted-item-image { width: 56px; height: 56px; background-size: cover; border-radius: 6px; flex-shrink: 0; }
        .submitted-item-content { flex: 1; display: flex; flex-direction: column; gap: 4px; }
        .submitted-text-bold { font-weight: 600; font-size: 15px; }
        .submitted-text-subdued { font-size: 14px; color: var(--submitted-text-subdued); }
        .submitted-btn, .submitted-btn-primary { padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; border: 1px solid var(--submitted-border); background: #fff; transition: 0.2s; }
        .submitted-btn-primary { background: var(--submitted-primary); color: var(--submitted-primary-text); border-color: var(--submitted-primary); }
        .submitted-btn-circle { width: 40px; height: 40px; border-radius: 50%; border: 1px solid var(--submitted-border); background: #fff; cursor: pointer; }
        .submitted-info-row { display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 8px; }
        .setup-badge { padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; }
        .setup-badge.critical { background: var(--setup-critical-bg); color: var(--setup-critical); width: fit-content; }
        .submitted-badge-pending { background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        @media (max-width: 768px) { .submitted-footer { flex-direction: column; gap: 10px; } .submitted-footer button { width: 100%; } }
    `;
    document.head.appendChild(style);
}

// Initialization
if (typeof window !== "undefined") {
    window.mountSubmitted = mountSubmitted;
    window.applySubmittedColorSettings = (s) => window.SubmittedProxy?.updateColorSettings(s);
}

export { mountSubmitted as default };



























// const ICONS = {
//     reorder: '<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"></path><path d="M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"></path></svg>',
//     refund: '<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path fill-rule="evenodd" d="M12.379 4h-7.258c-.395 0-.736 0-1.017.023-.297.024-.592.078-.875.222-.424.216-.768.56-.984.984-.144.283-.198.578-.222.875-.023.28-.023.622-.023 1.017v3.008c0 .395 0 .736.023 1.017.024.297.078.592.222.875.216.424.56.768.984.984.283.144.578.198.875.222.121.01.254.016.397.019.001.243.006.46.022.65.024.297.078.592.222.875.216.424.56.768.984.984.283.144.578.198.875.222.28.023.622.023 1.017.023h7.258c.395 0 .736 0 1.017-.023.297-.024.592-.078.875-.222.424-.216.768-.56.984-.984.144-.283.198-.578.222-.875.023-.28.023-.622.023-1.017v-3.008c0-.395 0-.736-.023-1.017-.024-.297-.078-.592-.222-.875-.216-.424-.56-.768-.983-.984-.284-.144-.58-.198-.876-.222-.121-.01-.254-.016-.397-.019-.001-.243-.006-.46-.022-.65-.024-.297-.078-.592-.222-.875-.216-.424-.56-.768-.984-.984-.283-.144-.578-.198-.875-.222-.28-.023-.622-.023-1.017-.023Zm1.62 2.75h-6.378c-.395 0-.736 0-1.017.023-.297.024-.592.078-.875.222-.424.216-.768.56-.984.984-.144.283-.198.578-.222.875-.023.28-.023.622-.023 1.017v1.874c-.104-.002-.194-.006-.274-.013-.204-.017-.28-.045-.316-.064-.142-.072-.256-.186-.328-.327-.02-.038-.047-.113-.064-.317-.017-.212-.018-.492-.018-.924v-2.95c0-.432 0-.712.018-.924.017-.204.045-.28.064-.316.072-.142.186-.256.328-.328.037-.02.112-.047.316-.064.212-.017.492-.018.924-.018h7.2c.432 0 .712 0 .924.018.204.017.28.045.317.064.14.072.255.186.327.328.02.037.047.112.064.316.011.138.016.305.017.524Zm-6.349 7.75h1.178c-.515-.796-.828-1.848-.828-3 0-1.278.385-2.43 1.002-3.25h-1.352c-.432 0-.712 0-.924.018-.204.017-.28.045-.316.064-.142.072-.256.186-.328.328-.02.037-.047.112-.064.316-.017.212-.018.492-.018.924v2.95c0 .432 0 .712.018.924.017.204.045.28.064.317.072.14.186.255.328.327.037.02.112.047.316.064.212.017.492.018.924.018Zm6.85-3c0-1.278-.384-2.43-1.002-3.25h1.352c.432 0 .712 0 .924.018.204.017.28.045.316.064.142.072.256.186.328.328.02.037.047.112.064.316.017.212.018.492.018.924v2.95c0 .432 0 .712-.018.924-.017.204-.045.28-.064.317-.072.14-.186.255-.328.327-.037.02-.112.047-.316.064-.212.017-.492.018-.924.018h-1.178c.515-.796.828-1.848.828-3Zm-4.332 2.304c-.384-.532-.668-1.342-.668-2.304 0-.962.284-1.772.668-2.304.385-.533.787-.696 1.082-.696.295 0 .697.163 1.082.696.384.532.668 1.342.668 2.304 0 .962-.284 1.772-.668 2.304-.385.533-.787.696-1.082.696-.295 0-.697-.163-1.082-.696Z"></path></svg>',
//     claimedItems: '<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M13 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path fill-rule="evenodd" d="M11.276 3.5a3.75 3.75 0 0 0-2.701 1.149l-4.254 4.417a2.75 2.75 0 0 0 .036 3.852l2.898 2.898a2.5 2.5 0 0 0 3.502.033l4.747-4.571a3.25 3.25 0 0 0 .996-2.341v-2.187a3.25 3.25 0 0 0-3.25-3.25h-1.974Zm-1.62 2.19a2.25 2.25 0 0 1 1.62-.69h1.974c.966 0 1.75.784 1.75 1.75v2.187c0 .475-.194.93-.536 1.26l-4.747 4.572a1 1 0 0 1-1.401-.014l-2.898-2.898a1.25 1.25 0 0 1-.016-1.75l4.253-4.418Z"></path></svg>',
//     selectedItem: '<svg viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M4.63 8.81a5.5 5.5 0 0 1 6.56-4.18.75.75 0 0 0 .325-1.464 7 7 0 1 0 5.32 8.35.75.75 0 0 0-1.465-.325 5.5 5.5 0 1 1-10.74-2.38Z"></path><path d="M16.03 6.78a.75.75 0 0 0-1.06-1.06l-4.97 4.97-2.22-2.22a.75.75 0 0 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l5.5-5.5Z"></path></svg>',
//     claimDetails: '<svg viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"></path><path d="M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path><path fill-rule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"></path></svg>',
//     ineligibleItems: '<svg viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM4.5 10a5.5 5.5 0 0 1 9.546-3.768l-7.814 7.814A5.476 5.476 0 0 1 4.5 10Zm1.732 4.268 7.814-7.814a5.5 5.5 0 0 1-7.814 7.814Z"></path></svg>'
// };


// // Submitted Component - Clean Code with Original Design
// const SUBMITTED_STYLE_ID = "vanilla-submitted-styles";

// // Default claim information
// const DEFAULT_CLAIM_INFO = {
//     id: "20250816083974262",
//     email: "abcd@gmail.com",
//     created: "Aug 16, 08:39 am",
// };

// // Default claimed items - sample products
// const DEFAULT_CLAIMED_ITEMS = [
//     {
//         id: 1,
//         name: "AHMED Aqua perfume by Laiba",
//         description: "Premium fragrance collection",
//         image: "https://picsum.photos/seed/perfume-a/72",
//         price: "€5.95",
//         qty: 2,
//         eligible: true
//     },
//     {
//         id: 2,
//         name: "Luxury Rose Perfume",
//         description: "Classic fragrance collection",
//         image: "https://picsum.photos/seed/perfume-b/72",
//         price: "€7.50",
//         qty: 1,
//         eligible: true
//     }
// ];

// // Green-Yellow theme default colors (matching SubmittedController)
// const DEFAULT_GREEN_YELLOW_COLORS = {
//     buttonBg: "#5a9a5a", // Green color from Green-Yellow theme
//     buttonText: "#ffffff", // White text for contrast
// };

// // CSS class constants for consistent styling
// const CSS_CLASSES = {
//     root: "submitted-root",
//     row: "submitted-row",
//     inline: "submitted-gap-400 submitted-row-center",
//     btn: {
//         base: "submitted-btn",
//         primary: "submitted-btn submitted-btn-primary",
//         tertiary: "submitted-btn submitted-btn-tertiary",
//     },
//     card: "submitted-card",
//     grid: "submitted-grid",
//     badge: "submitted-badge submitted-badge-warning",
//     item: {
//         box: "submitted-item-box",
//         image: "submitted-item-image",
//         textWrap: "submitted-item-textwrap",
//         priceWrap: "submitted-price-wrap",
//     },
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
//     if (typeof price === "number") return price;
//     const numericValue = parseFloat(String(price).replace(/[^\d.]/g, ""));
//     return Number.isFinite(numericValue) ? numericValue : 0;
// };

// /**
//  * Derives claimed items from input data
//  * @param {Object} input - Input data containing claimedItems, ORDER_DATA, quantities
//  * @returns {Array} Array of claimed items
//  */
// const deriveClaimedItems = (input) => {
//     const { claimedItems, ORDER_DATA, quantities = {} } = input || {};

//     // Return existing claimed items if available
//     if (Array.isArray(claimedItems) && claimedItems.length > 0) {
//         return claimedItems;
//     }

//     // Filter eligible items from order data
//     const items = ORDER_DATA?.items || [];
//     const derivedItems = items
//         .filter((item) => item?.eligible && (quantities[item.id] ?? 1) >= 1)
//         .map((item) => ({ ...item, qty: quantities[item.id] ?? 1 }));

//     // If no items found, return default claimed items
//     if (derivedItems.length === 0) {
//         return DEFAULT_CLAIMED_ITEMS;
//     }

//     return derivedItems;
// };

// /**
//  * Derives reason label from claim options
//  * @param {Object} input - Input data containing reasonLabel, CLAIM_OPTIONS, selectedClaimOption
//  * @returns {string} Reason label or empty string
//  */
// const deriveReasonLabel = (input) => {
//     const { reasonLabel, CLAIM_OPTIONS, selectedClaimOption } = input || {};

//     // Return existing reason label if available
//     if (reasonLabel?.trim()) return reasonLabel;

//     // Find matching claim option
//     if (!Array.isArray(CLAIM_OPTIONS) || !selectedClaimOption) {
//         // Return default reason if no options provided
//         return "Product damaged";
//     }

//     const matchedOption = CLAIM_OPTIONS.find((option) =>
//         typeof option === "object"
//             ? option.value === selectedClaimOption
//             : option === selectedClaimOption
//     );

//     return matchedOption?.label || matchedOption || "Product damaged";
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
//     const labelText = String(label ?? "");
//     const hasValue = valueText != null && String(valueText).length > 0;

//     return `
//     <div class="submitted-gap-100">
//       <span class="submitted-text submitted-text-subdued submitted-minw-110 submitted-text-sm">${labelText}</span>
//       ${hasValue
//             ? `<span class="submitted-text submitted-text-sm">${String(
//                 valueText
//             )}</span>`
//             : ""
//         }
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
//     const quantity = item?.qty ?? 1;
//     const price = parsePriceToNumber(item?.price ?? 0);
//     const itemName = item?.name ?? "Unknown Item";
//     const itemDescription = item?.description ?? "No description available";
//     const itemImage = item?.image || "https://picsum.photos/seed/perfume-c/72";
//     const reason = reasonLabel ?? "No reason specified";

//     return `
//     <div class="${CSS_CLASSES.item.box}">
//       <div class="${CSS_CLASSES.item.image}" style="background-image: url('${itemImage}')"></div>
//       <div class="${CSS_CLASSES.item.textWrap}">
//         <span class="submitted-text submitted-text-md submitted-semibold submitted-block">${itemName}</span>
//         <span class="submitted-text submitted-text-sm submitted-subdued submitted-block submitted-mt-2">${itemDescription}</span>
//         <span class="submitted-text submitted-text-sm submitted-subdued submitted-block submitted-mt-2">Reason: ${reason}</span>
//       </div>
//       <div class="${CSS_CLASSES.item.priceWrap}">
//         <span class="submitted-text submitted-text-md submitted-semibold">${quantity} x €${price.toFixed(
//         2
//     )} EUR</span>
//       </div>
//       <div style="display: flex; justify-content: flex-end; margin-top: 8px;">
//           <span class="setup-badge critical">Reason: ${reason}</span>
//         </div>
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
//     if (!settings) return;
//     const root = document.documentElement;
//     const setVar = (key, value) => root.style.setProperty(key, value);

//     // Apply only button colors to CSS variables
//     [
//         ["buttonBg", "--submitted-primary"],
//         ["buttonText", "--submitted-primary-text"],
//     ].forEach(([key, cssVar]) => {
//         if (settings[key]) {
//             setVar(cssVar, settings[key]);
//         }
//     });
// };

// const createHeader = (t) => {
//     return `
//     <div class="${CSS_CLASSES.row}">
//       <div class="${CSS_CLASSES.inline}">
//         <button class="${CSS_CLASSES.btn.tertiary}">${getTranslation(
//         t,
//         "SubmittedDesignJs.backButton",
//         "←"
//     )}</button>
//       <h2 class="submitted-title">${getTranslation(
//         t,
//         "SubmittedDesignJs.title",
//         "Submitted"
//     )}</h2>
//       </div>
//       <button class="${CSS_CLASSES.btn.primary}">${getTranslation(
//         t,
//         "SubmittedDesignJs.createNewBtn",
//         "Create new"
//     )}</button>
//     </div>
//   `;
// };

// /**
//  * Main render function
//  * @param {HTMLElement} container - Container element
//  * @param {Object} props - Component props
//  */
// const render = (container, props) => {
//     try {
//         const { t } = props || {};
//         const claimInfo = props?.claimInfo || DEFAULT_CLAIM_INFO;
//         const claimedItems = deriveClaimedItems(props);
//         const reason = deriveReasonLabel(props);

//         // Validate required data
//         if (!Array.isArray(claimedItems) || claimedItems.length === 0) {
//             console.warn('No claimed items found, using default items');
//         }

//         /**
//          * Creates the left card containing claim status and items
//          * @returns {string} HTML string
//          */
//         const createLeftCard = () => {
//             const itemsHtml = claimedItems
//                 .map((item) => createClaimedItemBox(item, reason))
//                 .join("");

//             return `
//       <div class="${CSS_CLASSES.card}">
//         <div class="submitted-stack submitted-gap-100">
//           <div class="submitted-row">
//           <div class="submitted-row-head">
          
//           <div class="submitted-Heading-text">
//             ${ICONS.selectedItem} 
//           <h3 class="submitted-heading-md">${getTranslation(t, "SubmittedDesignJs.statusTitle", "Claim status")}</h3>
//           </div>
//           <span class="${CSS_CLASSES.badge}">${getTranslation(t, "SubmittedDesignJs.statusBadge", "Pending")}</span>
//           </div>

//             <span class="submitted-text submitted-subdued submitted-text-md">
//               ${getTranslation(t, "SubmittedDesignJs.statusText", "Your claim is currently pending review.")}
//             </span>
//           </div>
//           <div class="submitted-divider"></div>
//           <div class="submitted-items ">
//           <h3 class="submitted-heading-md submitted-mb-2">
//             ${getTranslation(t, "SubmittedDesignJs.itemsHead", "Claimed items")}
//           </h3>
//             ${itemsHtml}
//           </div>
//         </div>
//       </div>
//     `;
//         };

//         /**
//          * Creates the right card containing reorder info and general information
//          * @returns {string} HTML string
//          */
//         const createRightCard = () => {
//             const infoItems = [
//                 {
//                     labelKey: "SubmittedDesignJs.giCidLabel",
//                     label: "Claim ID",
//                     value: claimInfo.id,
//                 },
//                 {
//                     labelKey: "SubmittedDesignJs.giEmailLabel",
//                     label: "Customer contact",
//                     value: claimInfo.email,
//                 },
//                 {
//                     labelKey: "SubmittedDesignJs.giCreatedLabel",
//                     label: "Created time",
//                     value: claimInfo.created,
//                 },
//             ];

//             const infoItemsHtml = infoItems
//                 .map(
//                     ({ labelKey, label, value }) => `
//         <h4 class="submitted-heading-sm">${getTranslation(
//                         t,
//                         labelKey,
//                         label
//                     )}</h4>
//         ${createInfoRow(label, value)}
//       `
//                 )
//                 .join("");

//             return `
//       <div class="${CSS_CLASSES.card}">
//         <div class="submitted-stack submitted-gap-100 ">
//           <div class="submitted-mb-2">
//             <h3 class="submitted-heading-md">${getTranslation(
//                 t,
//                 "SubmittedDesignJs.reorderTitle",
//                 "Reorder"
//             )}</h3>
//             <span class="submitted-text submitted-subdued submitted-text-md">
//               ${getTranslation(
//                 t,
//                 "SubmittedDesignJs.reorderText",
//                 "Reordering same item(s). This will create a new order."
//             )}
//             </span>
//           </div>
//           <div class="submitted-divider"></div>
//           <div class="">
//             <h3 class="submitted-heading-md submitted-mb-2">
//               ${getTranslation(
//                 t,
//                 "SubmittedDesignJs.giTitle1",
//                 "General information"
//             )}
//             </h3>
//             ${infoItemsHtml}
//           </div>
//         </div>
//       </div>
//     `;
//         };

//         /**
//          * Creates the footer with action buttons
//          * @returns {string} HTML string
//          */
//         const createFooter = () => {
//             const buttons = [
//                 {
//                     key: "SubmittedDesignJs.btn1",
//                     text: "Download Receipt",
//                     className: CSS_CLASSES.btn.base,
//                 },
//                 {
//                     key: "SubmittedDesignJs.btn2",
//                     text: "Contact Support",
//                     className: CSS_CLASSES.btn.base,
//                 },
//                 {
//                     key: "SubmittedDesignJs.btn3",
//                     text: "Track Status",
//                     className: CSS_CLASSES.btn.primary,
//                 },
//             ];

//             const buttonsHtml = buttons
//                 .map(
//                     ({ key, text, className }) =>
//                         `<button class="${className}">${getTranslation(
//                             t,
//                             key,
//                             text
//                         )}</button>`
//                 )
//                 .join("");

//             return `
//       <div class="submitted-footer">
//         ${buttonsHtml}
//       </div>
//     `;
//         };

//         // Generate complete HTML template
//         const htmlTemplate = `
//     <div class="${CSS_CLASSES.root}">
//       ${createHeader(t)}
//       <div class="${CSS_CLASSES.grid}">
//         ${createLeftCard()}
//         ${createRightCard()}
//       </div>
//       ${createFooter()}
//     </div>
//   `;

//         container.innerHTML = htmlTemplate;
//     } catch (error) {
//         console.error('Error rendering submitted component:', error);
//         container.innerHTML = `
//             <div class="submitted-error">
//                 <h3>Error Loading Component</h3>
//                 <p>There was an error loading the submitted component. Please try refreshing the page.</p>
//                 <details>
//                     <summary>Error Details</summary>
//                     <pre>${error.message}</pre>
//                 </details>
//             </div>
//         `;
//     }
// };

// /**
//  * Main mount function for the submitted component
//  * @param {HTMLElement|string} container - Container element or selector
//  * @param {Object} props - Component properties
//  * @returns {Object} Component instance with destroy and update methods
//  */
// function mountSubmitted(container, props = {}) {
//     ensureSubmittedStyles();

//     // Validate container
//     if (!container) {
//         throw new Error("mountSubmitted: container is required");
//     }

//     const host =
//         container instanceof HTMLElement
//             ? container
//             : document.querySelector(container);
//     if (!host) {
//         throw new Error("mountSubmitted: container not found");
//     }

//     // Initialize component state
//     let currentProps = { ...props };

//     const mountPoint = document.createElement("div");
//     mountPoint.className = "submitted-mount";
//     host.appendChild(mountPoint);

//     // Add proxy object with loop prevention
//     const proxy = {
//         contentSettings: null,
//         colorSettings: {
//             ...DEFAULT_GREEN_YELLOW_COLORS, // Use Green-Yellow theme as default
//         },
//         isLiveMode: true,
//         subscribers: new Set(),
//         _updating: false, // Flag to prevent circular updates

//         subscribe(cb) {
//             this.subscribers.add(cb);
//             return () => this.subscribers.delete(cb);
//         },

//         notify() {
//             if (this._updating) return; // Prevent circular notifications
//             for (const cb of this.subscribers)
//                 cb({
//                     contentSettings: this.contentSettings,
//                     colorSettings: this.colorSettings,
//                     isLiveMode: this.isLiveMode,
//                 });
//         },

//         updateContentSettings(settings) {
//             if (this._updating) return; // Prevent circular updates
//             this._updating = true;
//             try {
//                 this.contentSettings =
//                     typeof settings === "function"
//                         ? settings(this.contentSettings)
//                         : { ...this.contentSettings, ...settings };
//                 this.notify();
//             } finally {
//                 this._updating = false;
//             }
//         },

//         updateColorSettings(settings) {
//             if (this._updating) return; // Prevent circular updates
//             this._updating = true;
//             try {
//                 this.colorSettings =
//                     typeof settings === "function"
//                         ? settings(this.colorSettings)
//                         : { ...this.colorSettings, ...settings };
//                 this.notify();
//                 this.applyColorSettings(this.colorSettings);
//             } finally {
//                 this._updating = false;
//             }
//         },

//         getContentSettings() {
//             return this.contentSettings;
//         },

//         getColorSettings() {
//             return this.colorSettings;
//         },

//         applyColorSettings(settings) {
//             if (!settings || !this.isLiveMode) return;
//             applySubmittedColorSettings(settings);
//         },

//         toggleLiveMode() {
//             this.isLiveMode = !this.isLiveMode;
//             this.applyColorSettings(this.colorSettings);
//             this.notify();
//             return this.isLiveMode;
//         },
//     };

//     // DISABLED: proxy integration to prevent infinite loops
//     // The following proxy integration code is disabled to prevent circular updates
//     let proxyUnsubscribe = null;

//     // Only apply default colors without subscribing to prevent loops
//     proxy.updateColorSettings(DEFAULT_GREEN_YELLOW_COLORS);
//     proxy.applyColorSettings(DEFAULT_GREEN_YELLOW_COLORS);

//     // DISABLED: External proxy integration to prevent loops
//     // if (typeof window !== 'undefined' && window.Submitted?.proxy) {
//     //     // This code is disabled to prevent infinite loops
//     // }

//     // Initial render with error handling
//     try {
//         render(mountPoint, currentProps);
//     } catch (error) {
//         console.error("Failed to render submitted component:", error);
//         mountPoint.innerHTML =
//             '<div class="submitted-error">Error loading component</div>';
//     }

//     // Set the proxy globally like 
//     if (typeof window !== "undefined") {
//         if (window.ClaimSubmitted) {
//             window.ClaimSubmitted.proxy = proxy;
//         }

//         // Also set up window.Submitted.proxy for ExternalSubmitted integration
//         if (!window.Submitted) {
//             window.Submitted = {};
//         }
//         window.Submitted.proxy = proxy;

//         // Also expose as SubmittedProxy for storage bridge
//         window.SubmittedProxy = proxy;
//     }

//     // Return component instance
//     return {
//         /**
//          * Destroys the component and cleans up DOM
//          */
//         destroy() {
//             try {
//                 if (proxyUnsubscribe) {
//                     proxyUnsubscribe();
//                 }
//                 if (mountPoint?.parentNode) {
//                     mountPoint.parentNode.removeChild(mountPoint);
//                 }
//             } catch (error) {
//                 console.warn("Failed to destroy component:", error);
//             }
//         },

//         /**
//          * Updates component with new props
//          * @param {Object} nextProps - New properties to merge
//          */
//         update(nextProps = {}) {
//             try {
//                 currentProps = { ...currentProps, ...nextProps };
//                 render(mountPoint, currentProps);
//             } catch (error) {
//                 console.error("Failed to update component:", error);
//             }
//         },

//         proxy, // Expose proxy like 
//     };
// }

// // Inject original complete CSS styles
// const ensureSubmittedStyles = () => {
//     if (document.getElementById(SUBMITTED_STYLE_ID)) return;

//     const style = document.createElement('style');
//     style.id = SUBMITTED_STYLE_ID;
//     style.textContent = `
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
//     --setup-critical: #e53e3e;
//     --setup-critical-bg: #fff5f5;
//     --setup-border: #e2e8f0;
//     --setup-text-muted: #718096;
//     --setup-bg: #f7f9fc;
//   }
// .setup-badge {
//     display: inline-flex;
//     align-items: center;
//     padding: 4px 10px;
//     border-radius: 99px;
//     font-size: 11px;
//     font-weight: 700;
//     text-transform: uppercase;
//     letter-spacing: 0.05em;
//     background: var(--setup-bg);
//     color: var(--setup-text-muted);
//     border: 1px solid var(--setup-border);
// }

// .setup-badge.critical {
//     background: var(--setup-critical-bg);
//     color: var(--setup-critical);
//     border-color: transparent;
// }
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
//     padding: var(--submitted-space-200);
//   }
//     .submitted-Heading-text{
//     display:flex;
//     align-items: center;
//     gap: 10px;
//     }

//     .submitted-row-head{
//     display:flex;
//     align-items: center;
//     justify-content: space-between;
//     }

//   .submitted-gap-100 { column-gap: var(--submitted-space-100); }
//   .submitted-gap-400 { column-gap: var(--submitted-space-400); }
//   .submitted-mb-2 { margin-bottom: var(--submitted-space-100); }
//   .submitted-mt-2 { margin-top: 4px; }
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
//     padding: var(--submitted-space-200);
//   }

//   .submitted-item-box {
//     display: flex;
//     align-items: center;
//     min-height: 64px;
//     padding: var(--submitted-space-200);
//     background: var(--submitted-bg-surface);
//     border: 2px solid var(--submitted-border);
//     border-radius: var(--submitted-radius);
//     cursor: pointer;
//     transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
//   }

//   .submitted-item-box:hover {
//     border-color: var(--submitted-primary);
//   }

//   .submitted-item-image {
//     width: 56px;
//     height: 56px;
//     border-radius: 6px;
//     background: #f1f5f9;
//     border: 1px solid var(--submitted-border);
//     margin-right: var(--submitted-space-200);
//     background-size: cover !important;
//     background-position: center !important;
//     background-repeat: no-repeat !important;
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
//     document.head.appendChild(style);
// };

// /**
//  * Injects styles into document head
//  * Prevents duplicate style injection by checking for existing style element
//  */
// const injectSubmittedStyles = () => {
//     if (
//         typeof document === "undefined" ||
//         document.getElementById(SUBMITTED_STYLE_ID)
//     ) {
//         return;
//     }

//     ensureSubmittedStyles();
// };

// // Initialize styles
// injectSubmittedStyles();

// // Make it available globally like 
// if (typeof window !== "undefined") {
//     window.ClaimSubmitted = {
//         init: mountSubmitted,
//         proxy: null // Will be set when component is initialized
//     };

//     // Also make it available as expected by ExternalSubmitted.jsx
//     window.mountSubmitted = mountSubmitted;
//     window.mountClaimSubmitted = mountSubmitted;
//     window.initSubmitted = mountSubmitted;
//     window.applySubmittedColorSettings = applySubmittedColorSettings;

//     // Initialize SubmittedProxy immediately if not already set
//     if (!window.SubmittedProxy) {
//         // Create a temporary proxy that will be replaced when mountSubmitted is called
//         window.SubmittedProxy = {
//             contentSettings: null,
//             colorSettings: {
//                 buttonBg: "#5a9a5a", // Green-Yellow theme default
//                 buttonText: "#ffffff",
//             },
//             isLiveMode: true,
//             subscribers: new Set(),
//             _updating: false, // Flag to prevent circular updates

//             subscribe(cb) {
//                 this.subscribers.add(cb);
//                 return () => this.subscribers.delete(cb);
//             },

//             notify() {
//                 if (this._updating) return; // Prevent circular notifications
//                 for (const cb of this.subscribers)
//                     cb({
//                         contentSettings: this.contentSettings,
//                         colorSettings: this.colorSettings,
//                         isLiveMode: this.isLiveMode,
//                     });
//             },

//             updateContentSettings(settings) {
//                 if (this._updating) return; // Prevent circular updates
//                 this._updating = true;
//                 try {
//                     this.contentSettings =
//                         typeof settings === "function"
//                             ? settings(this.contentSettings)
//                             : { ...this.contentSettings, ...settings };
//                     this.notify();
//                 } finally {
//                     this._updating = false;
//                 }
//             },

//             updateColorSettings(settings) {
//                 if (this._updating) return; // Prevent circular updates
//                 this._updating = true;
//                 try {
//                     this.colorSettings =
//                         typeof settings === "function"
//                             ? settings(this.colorSettings)
//                             : { ...this.colorSettings, ...settings };
//                     this.notify();
//                     this.applyColorSettings(this.colorSettings);
//                 } finally {
//                     this._updating = false;
//                 }
//             },

//             getContentSettings() {
//                 return this.contentSettings;
//             },

//             getColorSettings() {
//                 return this.colorSettings;
//             },

//             applyColorSettings(settings) {
//                 if (!settings || !this.isLiveMode) return;
//                 applySubmittedColorSettings(settings);
//             },

//             toggleLiveMode() {
//                 this.isLiveMode = !this.isLiveMode;
//                 this.applyColorSettings(this.colorSettings);
//                 this.notify();
//                 return this.isLiveMode;
//             },
//         };
//     }
// }

// // Export the applySubmittedColorSettings function
// export { applySubmittedColorSettings };

// // Export the mount function as default
// export default mountSubmitted;

















// // const ICONS = {
// //     reorder: '<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"></path><path d="M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"></path></svg>',
// //     refund: '<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path fill-rule="evenodd" d="M12.379 4h-7.258c-.395 0-.736 0-1.017.023-.297.024-.592.078-.875.222-.424.216-.768.56-.984.984-.144.283-.198.578-.222.875-.023.28-.023.622-.023 1.017v3.008c0 .395 0 .736.023 1.017.024.297.078.592.222.875.216.424.56.768.984.984.283.144.578.198.875.222.121.01.254.016.397.019.001.243.006.46.022.65.024.297.078.592.222.875.216.424.56.768.984.984.283.144.578.198.875.222.28.023.622.023 1.017.023h7.258c.395 0 .736 0 1.017-.023.297-.024.592-.078.875-.222.424-.216.768-.56.984-.984.144-.283.198-.578.222-.875.023-.28.023-.622.023-1.017v-3.008c0-.395 0-.736-.023-1.017-.024-.297-.078-.592-.222-.875-.216-.424-.56-.768-.983-.984-.284-.144-.58-.198-.876-.222-.121-.01-.254-.016-.397-.019-.001-.243-.006-.46-.022-.65-.024-.297-.078-.592-.222-.875-.216-.424-.56-.768-.984-.984-.283-.144-.578-.198-.875-.222-.28-.023-.622-.023-1.017-.023Zm1.62 2.75h-6.378c-.395 0-.736 0-1.017.023-.297.024-.592.078-.875.222-.424.216-.768.56-.984.984-.144.283-.198.578-.222.875-.023.28-.023.622-.023 1.017v1.874c-.104-.002-.194-.006-.274-.013-.204-.017-.28-.045-.316-.064-.142-.072-.256-.186-.328-.327-.02-.038-.047-.113-.064-.317-.017-.212-.018-.492-.018-.924v-2.95c0-.432 0-.712.018-.924.017-.204.045-.28.064-.316.072-.142.186-.256.328-.328.037-.02.112-.047.316-.064.212-.017.492-.018.924-.018h7.2c.432 0 .712 0 .924.018.204.017.28.045.317.064.14.072.255.186.327.328.02.037.047.112.064.316.011.138.016.305.017.524Zm-6.349 7.75h1.178c-.515-.796-.828-1.848-.828-3 0-1.278.385-2.43 1.002-3.25h-1.352c-.432 0-.712 0-.924.018-.204.017-.28.045-.316.064-.142.072-.256.186-.328.328-.02.037-.047.112-.064.316-.017.212-.018.492-.018.924v2.95c0 .432 0 .712.018.924.017.204.045.28.064.317.072.14.186.255.328.327.037.02.112.047.316.064.212.017.492.018.924.018Zm6.85-3c0-1.278-.384-2.43-1.002-3.25h1.352c.432 0 .712 0 .924.018.204.017.28.045.316.064.142.072.256.186.328.328.02.037.047.112.064.316.017.212.018.492.018.924v2.95c0 .432 0 .712-.018.924-.017.204-.045.28-.064.317-.072.14-.186.255-.328.327-.037.02-.112.047-.316.064-.212.017-.492.018-.924.018h-1.178c.515-.796.828-1.848.828-3Zm-4.332 2.304c-.384-.532-.668-1.342-.668-2.304 0-.962.284-1.772.668-2.304.385-.533.787-.696 1.082-.696.295 0 .697.163 1.082.696.384.532.668 1.342.668 2.304 0 .962-.284 1.772-.668 2.304-.385.533-.787.696-1.082.696-.295 0-.697-.163-1.082-.696Z"></path></svg>',
// //     claimedItems: '<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M13 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path fill-rule="evenodd" d="M11.276 3.5a3.75 3.75 0 0 0-2.701 1.149l-4.254 4.417a2.75 2.75 0 0 0 .036 3.852l2.898 2.898a2.5 2.5 0 0 0 3.502.033l4.747-4.571a3.25 3.25 0 0 0 .996-2.341v-2.187a3.25 3.25 0 0 0-3.25-3.25h-1.974Zm-1.62 2.19a2.25 2.25 0 0 1 1.62-.69h1.974c.966 0 1.75.784 1.75 1.75v2.187c0 .475-.194.93-.536 1.26l-4.747 4.572a1 1 0 0 1-1.401-.014l-2.898-2.898a1.25 1.25 0 0 1-.016-1.75l4.253-4.418Z"></path></svg>',
// //     selectedItem: '<svg viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M4.63 8.81a5.5 5.5 0 0 1 6.56-4.18.75.75 0 0 0 .325-1.464 7 7 0 1 0 5.32 8.35.75.75 0 0 0-1.465-.325 5.5 5.5 0 1 1-10.74-2.38Z"></path><path d="M16.03 6.78a.75.75 0 0 0-1.06-1.06l-4.97 4.97-2.22-2.22a.75.75 0 0 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l5.5-5.5Z"></path></svg>',
// //     claimDetails: '<svg viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"></path><path d="M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path><path fill-rule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"></path></svg>',
// //     ineligibleItems: '<svg viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM4.5 10a5.5 5.5 0 0 1 9.546-3.768l-7.814 7.814A5.476 5.476 0 0 1 4.5 10Zm1.732 4.268 7.814-7.814a5.5 5.5 0 0 1-7.814 7.814Z"></path></svg>'
// // };


// // // Submitted Component - Clean Code with Original Design
// // const SUBMITTED_STYLE_ID = "vanilla-submitted-styles";

// // // Default claim information
// // const DEFAULT_CLAIM_INFO = {
// //     id: "20250816083974262",
// //     email: "abcd@gmail.com",
// //     created: "Aug 16, 08:39 am",
// // };

// // // Default claimed items - sample products
// // const DEFAULT_CLAIMED_ITEMS = [
// //     {
// //         id: 1,
// //         name: "AHMED Aqua perfume by Laiba",
// //         description: "Premium fragrance collection",
// //         image: "https://picsum.photos/seed/perfume-a/72",
// //         price: "€5.95",
// //         qty: 2,
// //         eligible: true
// //     },
// //     {
// //         id: 2,
// //         name: "Luxury Rose Perfume",
// //         description: "Classic fragrance collection",
// //         image: "https://picsum.photos/seed/perfume-b/72",
// //         price: "€7.50",
// //         qty: 1,
// //         eligible: true
// //     }
// // ];

// // // Green-Yellow theme default colors (matching SubmittedController)
// // const DEFAULT_GREEN_YELLOW_COLORS = {
// //     buttonBg: "#5a9a5a", // Green color from Green-Yellow theme
// //     buttonText: "#ffffff", // White text for contrast
// // };

// // // CSS class constants for consistent styling
// // const CSS_CLASSES = {
// //     root: "submitted-root",
// //     row: "submitted-row submitted-row-between submitted-row-center",
// //     inline: "submitted-inline submitted-gap-400 submitted-row-center",
// //     btn: {
// //         base: "submitted-btn",
// //         primary: "submitted-btn submitted-btn-primary",
// //         tertiary: "submitted-btn submitted-btn-tertiary",
// //     },
// //     card: "submitted-card",
// //     grid: "submitted-grid",
// //     badge: "submitted-badge submitted-badge-warning",
// //     item: {
// //         box: "submitted-item-box",
// //         image: "submitted-item-image",
// //         textWrap: "submitted-item-textwrap",
// //         priceWrap: "submitted-price-wrap",
// //     },
// // };

// // /**
// //  * Utility Functions
// //  */

// // /**
// //  * Converts price string to number
// //  * @param {string|number} price - Price value
// //  * @returns {number} Parsed price or 0 if invalid
// //  */
// // const parsePriceToNumber = (price) => {
// //     if (typeof price === "number") return price;
// //     const numericValue = parseFloat(String(price).replace(/[^\d.]/g, ""));
// //     return Number.isFinite(numericValue) ? numericValue : 0;
// // };

// // /**
// //  * Derives claimed items from input data
// //  * @param {Object} input - Input data containing claimedItems, ORDER_DATA, quantities
// //  * @returns {Array} Array of claimed items
// //  */
// // const deriveClaimedItems = (input) => {
// //     const { claimedItems, ORDER_DATA, quantities = {} } = input || {};

// //     // Return existing claimed items if available
// //     if (Array.isArray(claimedItems) && claimedItems.length > 0) {
// //         return claimedItems;
// //     }

// //     // Filter eligible items from order data
// //     const items = ORDER_DATA?.items || [];
// //     const derivedItems = items
// //         .filter((item) => item?.eligible && (quantities[item.id] ?? 1) >= 1)
// //         .map((item) => ({ ...item, qty: quantities[item.id] ?? 1 }));

// //     // If no items found, return default claimed items
// //     if (derivedItems.length === 0) {
// //         return DEFAULT_CLAIMED_ITEMS;
// //     }

// //     return derivedItems;
// // };

// // /**
// //  * Derives reason label from claim options
// //  * @param {Object} input - Input data containing reasonLabel, CLAIM_OPTIONS, selectedClaimOption
// //  * @returns {string} Reason label or empty string
// //  */
// // const deriveReasonLabel = (input) => {
// //     const { reasonLabel, CLAIM_OPTIONS, selectedClaimOption } = input || {};

// //     // Return existing reason label if available
// //     if (reasonLabel?.trim()) return reasonLabel;

// //     // Find matching claim option
// //     if (!Array.isArray(CLAIM_OPTIONS) || !selectedClaimOption) {
// //         // Return default reason if no options provided
// //         return "Product damaged";
// //     }

// //     const matchedOption = CLAIM_OPTIONS.find((option) =>
// //         typeof option === "object"
// //             ? option.value === selectedClaimOption
// //             : option === selectedClaimOption
// //     );

// //     return matchedOption?.label || matchedOption || "Product damaged";
// // };

// // /**
// //  * HTML Template Generators
// //  */

// // /**
// //  * Creates an information row with label and value
// //  * @param {string} label - Label text
// //  * @param {string} valueText - Value text
// //  * @returns {string} HTML string
// //  */
// // const createInfoRow = (label, valueText) => {
// //     const labelText = String(label ?? "");
// //     const hasValue = valueText != null && String(valueText).length > 0;

// //     return `
// //     <div class="submitted-inline submitted-gap-100">
// //       <span class="submitted-text submitted-text-subdued submitted-minw-110 submitted-text-sm">${labelText}</span>
// //       ${hasValue
// //             ? `<span class="submitted-text submitted-text-sm">${String(
// //                 valueText
// //             )}</span>`
// //             : ""
// //         }
// //     </div>
// //   `;
// // };

// // /**
// //  * Creates a claimed item box
// //  * @param {Object} item - Item data
// //  * @param {string} reasonLabel - Reason for claim
// //  * @returns {string} HTML string
// //  */
// // const createClaimedItemBox = (item, reasonLabel) => {
// //     const quantity = item?.qty ?? 1;
// //     const price = parsePriceToNumber(item?.price ?? 0);
// //     const itemName = item?.name ?? "Unknown Item";
// //     const itemDescription = item?.description ?? "No description available";
// //     const itemImage = item?.image || "https://picsum.photos/seed/perfume-c/72";
// //     const reason = reasonLabel ?? "No reason specified";

// //     return `
// //     <div class="${CSS_CLASSES.item.box}">
// //       <div class="${CSS_CLASSES.item.image}" style="background-image: url('${itemImage}')"></div>
// //       <div class="${CSS_CLASSES.item.textWrap}">
// //         <span class="submitted-text submitted-text-md submitted-semibold submitted-block">${itemName}</span>
// //         <span class="submitted-text submitted-text-sm submitted-subdued submitted-block submitted-mt-2">${itemDescription}</span>
// //         <span class="submitted-text submitted-text-sm submitted-subdued submitted-block submitted-mt-2">Reason: ${reason}</span>
// //       </div>
// //       <div class="${CSS_CLASSES.item.priceWrap}">
// //         <span class="submitted-text submitted-text-md submitted-semibold">${quantity} x €${price.toFixed(
// //             2
// //         )} EUR</span>
// //       </div>
// //       <div style="display: flex; justify-content: flex-end; margin-top: 8px;">
// //           <span class="setup-badge critical">Reason: ${reason}</span>
// //         </div>
// //     </div>
// //   `;
// // };

// // /**
// //  * Gets translation with fallback
// //  * @param {Function} t - Translation function
// //  * @param {string} key - Translation key
// //  * @param {string} fallback - Fallback text
// //  * @returns {string} Translated text or fallback
// //  */
// // const getTranslation = (t, key, fallback) => t?.(key, fallback) ?? fallback;

// // /**
// //  * Apply color settings to CSS variables for submitted component
// //  * @param {Object} settings - Color settings object
// //  */
// // const applySubmittedColorSettings = (settings) => {
// //     if (!settings) return;
// //     const root = document.documentElement;
// //     const setVar = (key, value) => root.style.setProperty(key, value);

// //     // Apply only button colors to CSS variables
// //     [
// //         ["buttonBg", "--submitted-primary"],
// //         ["buttonText", "--submitted-primary-text"],
// //     ].forEach(([key, cssVar]) => {
// //         if (settings[key]) {
// //             setVar(cssVar, settings[key]);
// //         }
// //     });
// // };

// // const createHeader = (t) => {
// //     return `
// //     <div class="${CSS_CLASSES.row}">
// //       <div class="${CSS_CLASSES.inline}">
// //         <button class="${CSS_CLASSES.btn.tertiary}">${getTranslation(
// //         t,
// //         "SubmittedDesignJs.backButton",
// //         "←"
// //     )}</button>
// //       <h2 class="submitted-title">${getTranslation(
// //         t,
// //         "SubmittedDesignJs.title",
// //         "Submitted"
// //     )}</h2>
// //       </div>
// //       <button class="${CSS_CLASSES.btn.primary}">${getTranslation(
// //         t,
// //         "SubmittedDesignJs.createNewBtn",
// //         "Create new"
// //     )}</button>
// //     </div>
// //   `;
// // };

// // /**
// //  * Main render function
// //  * @param {HTMLElement} container - Container element
// //  * @param {Object} props - Component props
// //  */
// // const render = (container, props) => {
// //     try {
// //         const { t } = props || {};
// //         const claimInfo = props?.claimInfo || DEFAULT_CLAIM_INFO;
// //         const claimedItems = deriveClaimedItems(props);
// //         const reason = deriveReasonLabel(props);

// //         // Validate required data
// //         if (!Array.isArray(claimedItems) || claimedItems.length === 0) {
// //             console.warn('No claimed items found, using default items');
// //         }

// //     /**
// //      * Creates the left card containing claim status and items
// //      * @returns {string} HTML string
// //      */
// //     const createLeftCard = () => {
// //         const itemsHtml = claimedItems
// //             .map((item) => createClaimedItemBox(item, reason))
// //             .join("");

// //         return `
// //       <div class="${CSS_CLASSES.card}">
// //         <div class="submitted-stack submitted-gap-100">
// //           <div class="submitted-row submitted-row-between submitted-row-center submitted-mb-2 submitted-p-2">
// //             ${ICONS.selectedItem} 
// //           <h3 class="submitted-heading-md">${getTranslation(t, "SubmittedDesignJs.statusTitle", "Claim status")}</h3>
// //             <span class="${CSS_CLASSES.badge}">${getTranslation(t, "SubmittedDesignJs.statusBadge", "Pending")}</span>
// //             <span class="submitted-text submitted-subdued submitted-text-md">
// //               ${getTranslation(t, "SubmittedDesignJs.statusText", "Your claim is currently pending review.")}
// //             </span>
// //           </div>
// //           <div class="submitted-divider"></div>
// //           <div class="submitted-items submitted-p-2">
// //           <h3 class="submitted-heading-md submitted-mb-2">
// //             ${getTranslation(t, "SubmittedDesignJs.itemsHead", "Claimed items")}
// //           </h3>
// //             ${itemsHtml}
// //           </div>
// //         </div>
// //       </div>
// //     `;
// //     };

// //     /**
// //      * Creates the right card containing reorder info and general information
// //      * @returns {string} HTML string
// //      */
// //     const createRightCard = () => {
// //         const infoItems = [
// //             {
// //                 labelKey: "SubmittedDesignJs.giCidLabel",
// //                 label: "Claim ID",
// //                 value: claimInfo.id,
// //             },
// //             {
// //                 labelKey: "SubmittedDesignJs.giEmailLabel",
// //                 label: "Customer contact",
// //                 value: claimInfo.email,
// //             },
// //             {
// //                 labelKey: "SubmittedDesignJs.giCreatedLabel",
// //                 label: "Created time",
// //                 value: claimInfo.created,
// //             },
// //         ];

// //         const infoItemsHtml = infoItems
// //             .map(
// //                 ({ labelKey, label, value }) => `
// //         <h4 class="submitted-heading-sm">${getTranslation(
// //                     t,
// //                     labelKey,
// //                     label
// //                 )}</h4>
// //         ${createInfoRow(label, value)}
// //       `
// //             )
// //             .join("");

// //         return `
// //       <div class="${CSS_CLASSES.card}">
// //         <div class="submitted-stack submitted-gap-100 submitted-p-2">
// //           <div class="submitted-mb-2">
// //             <h3 class="submitted-heading-md">${getTranslation(
// //             t,
// //             "SubmittedDesignJs.reorderTitle",
// //             "Reorder"
// //         )}</h3>
// //             <span class="submitted-text submitted-subdued submitted-text-md">
// //               ${getTranslation(
// //             t,
// //             "SubmittedDesignJs.reorderText",
// //             "Reordering same item(s). This will create a new order."
// //         )}
// //             </span>
// //           </div>
// //           <div class="submitted-divider"></div>
// //           <div class="submitted-p-2">
// //             <h3 class="submitted-heading-md submitted-mb-2">
// //               ${getTranslation(
// //             t,
// //             "SubmittedDesignJs.giTitle1",
// //             "General information"
// //         )}
// //             </h3>
// //             ${infoItemsHtml}
// //           </div>
// //         </div>
// //       </div>
// //     `;
// //     };

// //     /**
// //      * Creates the footer with action buttons
// //      * @returns {string} HTML string
// //      */
// //     const createFooter = () => {
// //         const buttons = [
// //             {
// //                 key: "SubmittedDesignJs.btn1",
// //                 text: "Download Receipt",
// //                 className: CSS_CLASSES.btn.base,
// //             },
// //             {
// //                 key: "SubmittedDesignJs.btn2",
// //                 text: "Contact Support",
// //                 className: CSS_CLASSES.btn.base,
// //             },
// //             {
// //                 key: "SubmittedDesignJs.btn3",
// //                 text: "Track Status",
// //                 className: CSS_CLASSES.btn.primary,
// //             },
// //         ];

// //         const buttonsHtml = buttons
// //             .map(
// //                 ({ key, text, className }) =>
// //                     `<button class="${className}">${getTranslation(
// //                         t,
// //                         key,
// //                         text
// //                     )}</button>`
// //             )
// //             .join("");

// //         return `
// //       <div class="submitted-footer">
// //         ${buttonsHtml}
// //       </div>
// //     `;
// //     };

// //     // Generate complete HTML template
// //     const htmlTemplate = `
// //     <div class="${CSS_CLASSES.root}">
// //       ${createHeader(t)}
// //       <div class="${CSS_CLASSES.grid}">
// //         ${createLeftCard()}
// //         ${createRightCard()}
// //       </div>
// //       ${createFooter()}
// //     </div>
// //   `;

// //     container.innerHTML = htmlTemplate;
// //     } catch (error) {
// //         console.error('Error rendering submitted component:', error);
// //         container.innerHTML = `
// //             <div class="submitted-error">
// //                 <h3>Error Loading Component</h3>
// //                 <p>There was an error loading the submitted component. Please try refreshing the page.</p>
// //                 <details>
// //                     <summary>Error Details</summary>
// //                     <pre>${error.message}</pre>
// //                 </details>
// //             </div>
// //         `;
// //     }
// // };

// // /**
// //  * Main mount function for the submitted component
// //  * @param {HTMLElement|string} container - Container element or selector
// //  * @param {Object} props - Component properties
// //  * @returns {Object} Component instance with destroy and update methods
// //  */
// // function mountSubmitted(container, props = {}) {
// //     ensureSubmittedStyles();

// //     // Validate container
// //     if (!container) {
// //         throw new Error("mountSubmitted: container is required");
// //     }

// //     const host =
// //         container instanceof HTMLElement
// //             ? container
// //             : document.querySelector(container);
// //     if (!host) {
// //         throw new Error("mountSubmitted: container not found");
// //     }

// //     // Initialize component state
// //     let currentProps = { ...props };

// //     const mountPoint = document.createElement("div");
// //     mountPoint.className = "submitted-mount";
// //     host.appendChild(mountPoint);

// //     // Add proxy object with loop prevention
// //     const proxy = {
// //         contentSettings: null,
// //         colorSettings: {
// //             ...DEFAULT_GREEN_YELLOW_COLORS, // Use Green-Yellow theme as default
// //         },
// //         isLiveMode: true,
// //         subscribers: new Set(),
// //         _updating: false, // Flag to prevent circular updates

// //         subscribe(cb) {
// //             this.subscribers.add(cb);
// //             return () => this.subscribers.delete(cb);
// //         },

// //         notify() {
// //             if (this._updating) return; // Prevent circular notifications
// //             for (const cb of this.subscribers)
// //                 cb({
// //                     contentSettings: this.contentSettings,
// //                     colorSettings: this.colorSettings,
// //                     isLiveMode: this.isLiveMode,
// //                 });
// //         },

// //         updateContentSettings(settings) {
// //             if (this._updating) return; // Prevent circular updates
// //             this._updating = true;
// //             try {
// //                 this.contentSettings =
// //                     typeof settings === "function"
// //                         ? settings(this.contentSettings)
// //                         : { ...this.contentSettings, ...settings };
// //                 this.notify();
// //             } finally {
// //                 this._updating = false;
// //             }
// //         },

// //         updateColorSettings(settings) {
// //             if (this._updating) return; // Prevent circular updates
// //             this._updating = true;
// //             try {
// //                 this.colorSettings =
// //                     typeof settings === "function"
// //                         ? settings(this.colorSettings)
// //                         : { ...this.colorSettings, ...settings };
// //                 this.notify();
// //                 this.applyColorSettings(this.colorSettings);
// //             } finally {
// //                 this._updating = false;
// //             }
// //         },

// //         getContentSettings() {
// //             return this.contentSettings;
// //         },

// //         getColorSettings() {
// //             return this.colorSettings;
// //         },

// //         applyColorSettings(settings) {
// //             if (!settings || !this.isLiveMode) return;
// //             applySubmittedColorSettings(settings);
// //         },

// //         toggleLiveMode() {
// //             this.isLiveMode = !this.isLiveMode;
// //             this.applyColorSettings(this.colorSettings);
// //             this.notify();
// //             return this.isLiveMode;
// //         },
// //     };

// //     // DISABLED: proxy integration to prevent infinite loops
// //     // The following proxy integration code is disabled to prevent circular updates
// //     let proxyUnsubscribe = null;
    
// //     // Only apply default colors without subscribing to prevent loops
// //     proxy.updateColorSettings(DEFAULT_GREEN_YELLOW_COLORS);
// //     proxy.applyColorSettings(DEFAULT_GREEN_YELLOW_COLORS);

// //     // DISABLED: External proxy integration to prevent loops
// //     // if (typeof window !== 'undefined' && window.Submitted?.proxy) {
// //     //     // This code is disabled to prevent infinite loops
// //     // }

// //     // Initial render with error handling
// //     try {
// //         render(mountPoint, currentProps);
// //     } catch (error) {
// //         console.error("Failed to render submitted component:", error);
// //         mountPoint.innerHTML =
// //             '<div class="submitted-error">Error loading component</div>';
// //     }

// //     // Set the proxy globally like 
// //     if (typeof window !== "undefined") {
// //         if (window.ClaimSubmitted) {
// //             window.ClaimSubmitted.proxy = proxy;
// //         }

// //         // Also set up window.Submitted.proxy for ExternalSubmitted integration
// //         if (!window.Submitted) {
// //             window.Submitted = {};
// //         }
// //         window.Submitted.proxy = proxy;

// //         // Also expose as SubmittedProxy for storage bridge
// //         window.SubmittedProxy = proxy;
// //     }

// //     // Return component instance
// //     return {
// //         /**
// //          * Destroys the component and cleans up DOM
// //          */
// //         destroy() {
// //             try {
// //                 if (proxyUnsubscribe) {
// //                     proxyUnsubscribe();
// //                 }
// //                 if (mountPoint?.parentNode) {
// //                     mountPoint.parentNode.removeChild(mountPoint);
// //                 }
// //             } catch (error) {
// //                 console.warn("Failed to destroy component:", error);
// //             }
// //         },

// //         /**
// //          * Updates component with new props
// //          * @param {Object} nextProps - New properties to merge
// //          */
// //         update(nextProps = {}) {
// //             try {
// //                 currentProps = { ...currentProps, ...nextProps };
// //                 render(mountPoint, currentProps);
// //             } catch (error) {
// //                 console.error("Failed to update component:", error);
// //             }
// //         },

// //         proxy, // Expose proxy like 
// //     };
// // }

// // // Inject original complete CSS styles
// // const ensureSubmittedStyles = () => {
// //     if (document.getElementById(SUBMITTED_STYLE_ID)) return;

// //     const style = document.createElement('style');
// //     style.id = SUBMITTED_STYLE_ID;
// //     style.textContent = `
// //   :root {
// //     --submitted-bg-surface: #ffffff;
// //     --submitted-bg-muted: #f9f9f9;
// //     --submitted-border: #e5e7eb;
// //     --submitted-border-strong: #d1d5db;
// //     --submitted-text: #202223;
// //     --submitted-text-subdued: #6b7280;
// //     --submitted-primary: #5a9a5a;
// //     --submitted-primary-dark: #4a8a4a;
// //     --submitted-primary-light: #edfff6;
// //     --submitted-primary-text: #ffffff;
// //     --submitted-radius: 12px;
// //     --submitted-space-50: 4px;
// //     --submitted-space-100: 8px;
// //     --submitted-space-150: 12px;
// //     --submitted-space-200: 16px;
// //     --submitted-space-300: 20px;
// //     --submitted-space-400: 24px;
// //     --submitted-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
// //     --submitted-shadow-hover: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
// //     --setup-critical: #e53e3e;
// //     --setup-critical-bg: #fff5f5;
// //     --setup-border: #e2e8f0;
// //     --setup-text-muted: #718096;
// //     --setup-bg: #f7f9fc;
// //   }
// // .setup-badge {
// //     display: inline-flex;
// //     align-items: center;
// //     padding: 4px 10px;
// //     border-radius: 99px;
// //     font-size: 11px;
// //     font-weight: 700;
// //     text-transform: uppercase;
// //     letter-spacing: 0.05em;
// //     background: var(--setup-bg);
// //     color: var(--setup-text-muted);
// //     border: 1px solid var(--setup-border);
// // }

// // .setup-badge.critical {
// //     background: var(--setup-critical-bg);
// //     color: var(--setup-critical);
// //     border-color: transparent;
// // }
// //   .submitted-root {
// //     display: flex;
// //     flex-direction: column;
// //     gap: var(--submitted-space-200);
// //     color: var(--submitted-text);
// //     max-width: 1200px;
// //     margin: 0 auto;
// //     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
// //   }

// //   .submitted-row {
// //     display: flex;
// //   }
// //   .submitted-row-between {
// //     justify-content: space-between;
// //   }
// //   .submitted-row-center {
// //     align-items: center;
// //   }

// //   .submitted-inline {
// //     display: inline-flex;
// //   }
// //   .submitted-gap-100 { column-gap: var(--submitted-space-100); }
// //   .submitted-gap-400 { column-gap: var(--submitted-space-400); }
// //   .submitted-mb-2 { margin-bottom: var(--submitted-space-100); }
// //   .submitted-mt-2 { margin-top: 4px; }
// //   .submitted-minw-110 { min-width: 110px; }
// //   .submitted-block { display: block; }

// //   .submitted-text { color: var(--submitted-text); }
// //   .submitted-text-sm { font-size: 14px; line-height: 1.4; }
// //   .submitted-text-md { font-size: 16px; line-height: 1.5; }
// //   .submitted-subdued { color: var(--submitted-text-subdued); }
// //   .submitted-semibold { font-weight: 600; }

// //   .submitted-title {
// //     font-size: 20px;
// //     font-weight: 700;
// //     margin: 0;
// //     color: var(--submitted-text);
// //   }
// //   .submitted-heading-md { 
// //     font-size: 16px; 
// //     font-weight: 700; 
// //     margin: 0;
// //     color: var(--submitted-text);
// //   }
// //   .submitted-heading-sm { 
// //     font-size: 13px; 
// //     font-weight: 600; 
// //     margin: 0 0 var(--submitted-space-50) 0;
// //     color: var(--submitted-text);
// //   }

// //   .submitted-btn {
// //     appearance: none;
// //     border: 1px solid var(--submitted-border);
// //     background: #ffffff;
// //     color: var(--submitted-text);
// //     border-radius: 8px;
// //     padding: 12px 24px;
// //     cursor: pointer;
// //     font-size: 14px;
// //     font-weight: 600;
// //     transition: all 0.2s;
// //     display: inline-flex;
// //     align-items: center;
// //     justify-content: center;
// //   }

// //   .submitted-btn:hover {
// //     background: var(--submitted-bg-muted);
// //     border-color: #cbd5e0;
// //   }

// //   .submitted-btn-primary {
// //     background: var(--submitted-primary);
// //     border-color: var(--submitted-primary);
// //     color: var(--submitted-primary-text);
// //     box-shadow: 0 2px 4px rgba(90, 154, 90, 0.2);
// //   }

// //   .submitted-btn-primary:hover {
// //     background: var(--submitted-primary-dark);
// //     border-color: var(--submitted-primary-dark);
// //     transform: translateY(-1px);
// //     box-shadow: 0 4px 6px rgba(90, 154, 90, 0.3);
// //   }

// //   .submitted-btn-tertiary {
// //     background: transparent;
// //     border-color: transparent;
// //     padding: 8px;
// //     min-width: 40px;
// //     border-radius: 50%;
// //   }

// //   .submitted-grid {
// //     display: grid;
// //     grid-template-columns: 1fr;
// //     gap: var(--submitted-space-300);
// //   }
// //   @media (min-width: 768px) {
// //     .submitted-grid { 
// //       grid-template-columns: 1fr 1fr; 
// //       gap: var(--submitted-space-400);
// //     }
// //   }

// //   .submitted-card {
// //     background: var(--submitted-bg-surface);
// //     border: 1px solid var(--submitted-border);
// //     border-radius: var(--submitted-radius);
// //     box-shadow: var(--submitted-shadow);
// //     transition: box-shadow 0.2s ease;
// //     overflow: hidden;
// //   }

// //   .submitted-divider {
// //     height: 1px;
// //     width: 100%;
// //     background: var(--submitted-border);
// //     margin: var(--submitted-space-200) 0;
// //   }

// //   .submitted-badge {
// //     display: inline-flex;
// //     align-items: center;
// //     padding: 4px 10px;
// //     border-radius: 99px;
// //     font-size: 11px;
// //     font-weight: 700;
// //     text-transform: uppercase;
// //     letter-spacing: 0.05em;
// //     background: #fef3c7;
// //     color: #92400e;
// //     border: 1px solid transparent;
// //   }

// //   .submitted-items { 
// //     display: flex; 
// //     flex-direction: column; 
// //     gap: var(--submitted-space-100); 
// //   }

// //   .submitted-item-box {
// //     display: flex;
// //     align-items: center;
// //     min-height: 64px;
// //     padding: var(--submitted-space-200);
// //     background: var(--submitted-bg-surface);
// //     border: 2px solid var(--submitted-border);
// //     border-radius: var(--submitted-radius);
// //     cursor: pointer;
// //     transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
// //   }

// //   .submitted-item-box:hover {
// //     border-color: var(--submitted-primary);
// //   }

// //   .submitted-item-image {
// //     width: 56px;
// //     height: 56px;
// //     border-radius: 6px;
// //     background: #f1f5f9;
// //     border: 1px solid var(--submitted-border);
// //     margin-right: var(--submitted-space-200);
// //     background-size: cover !important;
// //     background-position: center !important;
// //     background-repeat: no-repeat !important;
// //   }

// //   .submitted-item-box:hover .submitted-item-image {
// //     transform: scale(1.05);
// //     transition: transform 0.2s ease;
// //   }

// //   .submitted-item-textwrap { 
// //     flex: 1 1 auto; 
// //     min-width: 0; 
// //   }
  
// //   .submitted-price-wrap { 
// //     margin-left: auto; 
// //     text-align: right;
// //   }

// //   .submitted-footer {
// //     display: flex;
// //     justify-content: flex-end;
// //     gap: var(--submitted-space-200);
// //     padding-top: var(--submitted-space-300);
// //     border-top: 1px solid var(--submitted-border);
// //     margin-top: var(--submitted-space-300);
// //   }

// //   @media (max-width: 767px) {
// //     .submitted-footer {
// //       flex-direction: column;
// //       gap: var(--submitted-space-100);
// //     }
// //     .submitted-btn {
// //       width: 100%;
// //     }
// //   }

// //   .submitted-mount { 
// //     width: 100%; 
// //   }

// //   .submitted-error {
// //     padding: var(--submitted-space-300);
// //     background: #fee2e2;
// //     border: 1px solid #fecaca;
// //     border-radius: var(--submitted-radius);
// //     color: #dc2626;
// //     text-align: center;
// //   }

// //   .submitted-stack {
// //     display: flex;
// //     flex-direction: column;
// //   }
// //   `;
// //     document.head.appendChild(style);
// // };

// // /**
// //  * Injects styles into document head
// //  * Prevents duplicate style injection by checking for existing style element
// //  */
// // const injectSubmittedStyles = () => {
// //     if (
// //         typeof document === "undefined" ||
// //         document.getElementById(SUBMITTED_STYLE_ID)
// //     ) {
// //         return;
// //     }

// //     ensureSubmittedStyles();
// // };

// // // Initialize styles
// // injectSubmittedStyles();

// // // Make it available globally like 
// // if (typeof window !== "undefined") {
// //     window.ClaimSubmitted = {
// //         init: mountSubmitted,
// //         proxy: null // Will be set when component is initialized
// //     };

// //     // Also make it available as expected by ExternalSubmitted.jsx
// //     window.mountSubmitted = mountSubmitted;
// //     window.mountClaimSubmitted = mountSubmitted;
// //     window.initSubmitted = mountSubmitted;
// //     window.applySubmittedColorSettings = applySubmittedColorSettings;

// //     // Initialize SubmittedProxy immediately if not already set
// //     if (!window.SubmittedProxy) {
// //         // Create a temporary proxy that will be replaced when mountSubmitted is called
// //         window.SubmittedProxy = {
// //             contentSettings: null,
// //             colorSettings: {
// //                 buttonBg: "#5a9a5a", // Green-Yellow theme default
// //                 buttonText: "#ffffff",
// //             },
// //             isLiveMode: true,
// //             subscribers: new Set(),
// //             _updating: false, // Flag to prevent circular updates

// //             subscribe(cb) {
// //                 this.subscribers.add(cb);
// //                 return () => this.subscribers.delete(cb);
// //             },

// //             notify() {
// //                 if (this._updating) return; // Prevent circular notifications
// //                 for (const cb of this.subscribers)
// //                     cb({
// //                         contentSettings: this.contentSettings,
// //                         colorSettings: this.colorSettings,
// //                         isLiveMode: this.isLiveMode,
// //                     });
// //             },

// //             updateContentSettings(settings) {
// //                 if (this._updating) return; // Prevent circular updates
// //                 this._updating = true;
// //                 try {
// //                     this.contentSettings =
// //                         typeof settings === "function"
// //                             ? settings(this.contentSettings)
// //                             : { ...this.contentSettings, ...settings };
// //                     this.notify();
// //                 } finally {
// //                     this._updating = false;
// //                 }
// //             },

// //             updateColorSettings(settings) {
// //                 if (this._updating) return; // Prevent circular updates
// //                 this._updating = true;
// //                 try {
// //                     this.colorSettings =
// //                         typeof settings === "function"
// //                             ? settings(this.colorSettings)
// //                             : { ...this.colorSettings, ...settings };
// //                     this.notify();
// //                     this.applyColorSettings(this.colorSettings);
// //                 } finally {
// //                     this._updating = false;
// //                 }
// //             },

// //             getContentSettings() {
// //                 return this.contentSettings;
// //             },

// //             getColorSettings() {
// //                 return this.colorSettings;
// //             },

// //             applyColorSettings(settings) {
// //                 if (!settings || !this.isLiveMode) return;
// //                 applySubmittedColorSettings(settings);
// //             },

// //             toggleLiveMode() {
// //                 this.isLiveMode = !this.isLiveMode;
// //                 this.applyColorSettings(this.colorSettings);
// //                 this.notify();
// //                 return this.isLiveMode;
// //             },
// //         };
// //     }
// // }

// // // Export the applySubmittedColorSettings function
// // export { applySubmittedColorSettings };

// // // Export the mount function as default
// // export default mountSubmitted;
