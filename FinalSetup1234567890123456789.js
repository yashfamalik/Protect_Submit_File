// SVG Icons defined as constants
const ICONS = {
    reorder: '<svg class="setup-svg-fill" viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"></path><path d="M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"></path></svg>',
    refund: '<svg class="setup-svg-fill" viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path fill-rule="evenodd" d="M12.379 4h-7.258c-.395 0-.736 0-1.017.023-.297.024-.592.078-.875.222-.424.216-.768.56-.984.984-.144.283-.198.578-.222.875-.023.28-.023.622-.023 1.017v3.008c0 .395 0 .736.023 1.017.024.297.078.592.222.875.216.424.56.768.984.984.283.144.578.198.875.222.121.01.254.016.397.019.001.243.006.46.022.65.024.297.078.592.222.875.216.424.56.768.984.984.283.144.578.198.875.222.28.023.622.023 1.017.023h7.258c.395 0 .736 0 1.017-.023.297-.024.592-.078.875-.222.424-.216.768-.56.984-.984.144-.283.198-.578.222-.875.023-.28.023-.622.023-1.017v-3.008c0-.395 0-.736-.023-1.017-.024-.297-.078-.592-.222-.875-.216-.424-.56-.768-.983-.984-.284-.144-.58-.198-.876-.222-.121-.01-.254-.016-.397-.019-.001-.243-.006-.46-.022-.65-.024-.297-.078-.592-.222-.875-.216-.424-.56-.768-.984-.984-.283-.144-.578-.198-.875-.222-.28-.023-.622-.023-1.017-.023Zm1.62 2.75h-6.378c-.395 0-.736 0-1.017.023-.297.024-.592.078-.875.222-.424.216-.768.56-.984.984-.144.283-.198.578-.222.875-.023.28-.023.622-.023 1.017v1.874c-.104-.002-.194-.006-.274-.013-.204-.017-.28-.045-.316-.064-.142-.072-.256-.186-.328-.327-.02-.038-.047-.113-.064-.317-.017-.212-.018-.492-.018-.924v-2.95c0-.432 0-.712.018-.924.017-.204.045-.28.064-.316.072-.142.186-.256.328-.328.037-.02.112-.047.316-.064.212-.017.492-.018.924-.018h7.2c.432 0 .712 0 .924.018.204.017.28.045.317.064.14.072.255.186.327.328.02.037.047.112.064.316.011.138.016.305.017.524Zm-6.349 7.75h1.178c-.515-.796-.828-1.848-.828-3 0-1.278.385-2.43 1.002-3.25h-1.352c-.432 0-.712 0-.924.018-.204.017-.28.045-.316.064-.142.072-.256.186-.328.328-.02.037-.047.112-.064.316-.017.212-.018.492-.018.924v2.95c0 .432 0 .712.018.924.017.204.045.28.064.317.072.14.186.255.328.327.037.02.112.047.316.064.212.017.492.018.924.018Zm6.85-3c0-1.278-.384-2.43-1.002-3.25h1.352c.432 0 .712 0 .924.018.204.017.28.045.316.064.142.072.256.186.328.328.02.037.047.112.064.316.017.212.018.492.018.924v2.95c0 .432 0 .712-.018.924-.017.204-.045.28-.064.317-.072.14-.186.255-.328.327-.037.02-.112.047-.316.064-.212.017-.492.018-.924.018h-1.178c.515-.796.828-1.848.828-3Zm-4.332 2.304c-.384-.532-.668-1.342-.668-2.304 0-.962.284-1.772.668-2.304.385-.533.787-.696 1.082-.696.295 0 .697.163 1.082.696.384.532.668 1.342.668 2.304 0 .962-.284 1.772-.668 2.304-.385.533-.787.696-1.082.696-.295 0-.697-.163-1.082-.696Z"></path></svg>',
    claimedItems: '<svg class="setup-svg-fill" viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M13 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path fill-rule="evenodd" d="M11.276 3.5a3.75 3.75 0 0 0-2.701 1.149l-4.254 4.417a2.75 2.75 0 0 0 .036 3.852l2.898 2.898a2.5 2.5 0 0 0 3.502.033l4.747-4.571a3.25 3.25 0 0 0 .996-2.341v-2.187a3.25 3.25 0 0 0-3.25-3.25h-1.974Zm-1.62 2.19a2.25 2.25 0 0 1 1.62-.69h1.974c.966 0 1.75.784 1.75 1.75v2.187c0 .475-.194.93-.536 1.26l-4.747 4.572a1 1 0 0 1-1.401-.014l-2.898-2.898a1.25 1.25 0 0 1-.016-1.75l4.253-4.418Z"></path></svg>',
    selectedItem: '<svg class="setup-svg-fill" viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M4.63 8.81a5.5 5.5 0 0 1 6.56-4.18.75.75 0 0 0 .325-1.464 7 7 0 1 0 5.32 8.35.75.75 0 0 0-1.465-.325 5.5 5.5 0 1 1-10.74-2.38Z"></path><path d="M16.03 6.78a.75.75 0 0 0-1.06-1.06l-4.97 4.97-2.22-2.22a.75.75 0 0 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l5.5-5.5Z"></path></svg>',
    claimDetails: '<svg class="setup-svg-fill" viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"></path><path d="M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path><path fill-rule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"></path></svg>',
    ineligibleItems: '<svg class="setup-svg-fill" viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM4.5 10a5.5 5.5 0 0 1 9.546-3.768l-7.814 7.814A5.476 5.476 0 0 1 4.5 10Zm1.732 4.268 7.814-7.814a5.5 5.5 0 0 1-7.814 7.814Z"></path></svg>'
};

// Setup Component - Clean Code with Original Design
const SETUP_STYLE_ID = "vanilla-setup-styles";

// Inject original complete CSS styles
const ensureSetupStyles = () => {
    if (document.getElementById(SETUP_STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = SETUP_STYLE_ID;
    style.textContent = `
  :root {
    --setup-primary: #72D9A3;
    --setup-primary-dark: #5a9a5a;
    --setup-primary-light: #b8e6b8;
    --setup-bg: #f7f9fc;
    --setup-surface: #ffffff;
    --setup-surface-hover: #f9fafb;
    --setup-border: #e2e8f0;
    --setup-border-focus: #72D9A3;
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
    --setup-focus-ring: 0 0 0 3px rgba(114, 217, 163, 0.15);
    --setup-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    
    /* Selected item specific colors - Green-Yellow theme defaults */
    --setup-selected-item-bg: #b8e6b8;
    --setup-selected-item-text: #2d5a2d;
    --setup-badge-bg: #5a9a5a;
    --setup-badge-text: #ffffff;
    --setup-selected-item-border: #7db87d;
    --setup-use-gradient: true;
    --setup-gradient-start: #72D9A3;
    --setup-gradient-end: #F3EEA5;
    
    /* Button colors - Green-Yellow theme matched */
    --setup-button-bg: #5a9a5a;
    --setup-button-text: #ffffff;
    
    /* Primary color for selected states - Green-Yellow theme */
    --setup-primary-color: #72D9A3;
    --setup-primary-light: #b8e6b8;
    --setup-primary-border: #5a9a5a;
    --setup-svg-color: #5a9a5a;
  }

  .setup-svg-fill{
   fill: var(--setup-primary-border);
  }

  .setup-container {
    font-family: var(--setup-font-family);
    color: var(--setup-text-body);
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: var(--setup-space-md);
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    padding: 20px;
    box-sizing: border-box !important;
  }

  .setup-container * { box-sizing: border-box; }

  .setup-row {
    display: flex;
    gap: var(--setup-space-md);
    align-items: flex-start;
  }
  @media (max-width: 850px) {
    .setup-row { flex-direction: column; }
  }

  .setup-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--setup-space-md);
    min-width: 0;
  }

  .setup-card {
    background: var(--setup-surface);
    border: 1px solid var(--setup-border);
    border-radius: var(--setup-radius-md);
    box-shadow: var(--setup-shadow-card);
    overflow: visible;
    transition: box-shadow 0.2s ease;
    display: flex;
    flex-direction: column;
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
    overflow: visible;
  }

  .setup-heading {
    font-size: 16px;
    font-weight: 700;
    color: var(--setup-text-heading);
    letter-spacing: -0.01em;
  }
  
  .setup-heading , .setup-action-title{
   display: flex;
    align-items: center;
    gap: 10px;
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
    border: 2px solid var(--setup-border);
    border-radius: var(--setup-radius-md);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  
  .setup-card-body .setup-item-card { margin-bottom: var(--setup-space-md); }
  .setup-card-body .setup-item-card:last-child { margin-bottom: 0; }

  .setup-item-card:hover {
    border-color: var(--setup-primary-border);
  }


  .setup-item-card.selected {
    background: var(--setup-primary-light);
    border-color: var(--setup-primary-border);
    color: var(--setup-primary-border);
    // box-shadow: 0 0 0 1px var(--setup-primary-border) inset;
  }

  /* Apply gradient to selected items when gradient is enabled */
  .setup-item-card.selected[data-use-gradient="true"] {
    background: linear-gradient(135deg, var(--setup-gradient-start), var(--setup-gradient-end));
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
    // border-bottom: 1px solid var(--setup-border);
  }

  .setup-item {
    display: flex;
    gap: var(--setup-space-md);
    align-items: center;
    flex: 1;
  }

  .setup-item img, .setup-item-image-bg {
    width: 56px;
    height: 56px;
    border-radius: var(--setup-radius-md);
    object-fit: cover;
    border: 1px solid var(--setup-border);
    background: #f1f5f9;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
  }

//   .setup-item-info { flex: 1; }
  
  .setup-item-name {
    font-size: 14px;
    font-weight: 600;
    color: var(--setup-text-heading);
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
  .setup-qty button:hover { color: var(--setup-primary-color); }

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
    border-radius: var(--setup-radius-md);
        border: 2px solid var(--setup-border);
  }

  .setup-select:focus, .setup-input:focus, .setup-textarea:focus {
    outline: none;
    border-color: var(--setup-primary);
    box-shadow: var(--setup-focus-ring);
  }

  .setup-upload {
    border: 2px dashed var(--setup-border);
    border-radius: var(--setup-radius-md);
    padding: var(--setup-space-lg);
    text-align: center;
    background: var(--setup-surface-hover);
    color: var(--setup-text-muted);
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .setup-upload:hover {
    border-color: var(--setup-primary-border);
    // background: var(--setup-primary-light);
    color: var(--setup-primary-color);
  }

  .setup-file-previews {
    display: flex;
    gap: var(--setup-space-sm);
    margin-top: var(--setup-space-md);
    flex-wrap: wrap;
  }

  .setup-file-thumb, .setup-file-generic {
    width: 60px;
    height: 60px;
    border-radius: var(--setup-radius-sm);
    overflow: hidden;
    border: 1px solid var(--setup-border);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  .setup-file-thumb img { width: 100%; height: 100%; object-fit: cover; }
  .setup-file-generic span { font-size: 10px; text-align: center; padding: 2px; line-height: 1.1; }

  .setup-action-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--setup-space-md);
  }

  .setup-action-card {
    position: relative;
    border: 1px solid var(--setup-border);
    border-radius: var(--setup-radius-md);
    padding: var(--setup-space-md);
    background: #ffffff;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .setup-action-card:hover {
    border-color: var(--setup-primary-border);
    box-shadow: var(--setup-shadow-hover);
    box-shadow: 0 0 0 1px var(--setup-primary-border) inset;
    // background: var(--setup-primary-light);
  }

  .setup-action-card.selected {
    border-color: var(--setup-primary-border);
    background: var(--setup-primary-light);
    color: var(--setup-primary-border);
    box-shadow: 0 0 0 1px var(--setup-primary-border) inset;
  }

  .setup-action-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--setup-space-sm);
  }
  
  .setup-action-title { font-weight: 700; color: var(--setup-text-heading); }
  
  .setup-action-card.selected .setup-action-title { 
    color: var(--setup-primary-border); 
  }
  
  .setup-action-card input[type="radio"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid var(--setup-border);
    border-radius: 50%;
    margin: 0;
    cursor: pointer;
    position: relative;
    background: #fff;
    transition: all 0.2s;
  }

  .setup-action-card.selected input[type="radio"] {
    border-color: var(--setup-primary-border);
    background: var(--setup-primary-border);
  }
  .setup-action-card.selected input[type="radio"]::after {
    content: '';
    position: absolute;
    top: 4px; left: 4px;
    width: 6px; height: 6px;
    background: #fff;
    border-radius: 50%;
  }

  .setup-total {
    background: #ffffff;
    border: 1px solid var(--setup-border);
    border-radius: var(--setup-radius-md);
    padding: var(--setup-space-md) var(--setup-space-lg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--setup-shadow-card);
  }

  .setup-green-dot {
    display: inline-block;
    width: 15px; height: 15px;
    background: var(--setup-success);
    border-radius: 50%;
    box-shadow: 0 0 0 3px var(--setup-success-bg);
  }

  .setup-total-value {
    font-size: 18px;
    font-weight: 700;
    color: var(--setup-text-heading);
  }

  .setup-actions {
    display: flex;
    justify-content: flex-end;
    gap: var(--setup-space-md);
    // margin-top: var(--setup-space-lg);
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
    background: var(--setup-primary-light);
    border-color: var(--setup-primary-border);
  }

  .setup-button.primary {
    background: var(--setup-button-bg);
    color: var(--setup-button-text);
    border-color: var(--setup-button-bg);
    box-shadow: 0 2px 4px rgba(0, 128, 96, 0.2);
  }

  .setup-button.primary:hover:not([disabled]) {
    background: var(--setup-button-bg);
    border-color: var(--setup-button-bg);
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 128, 96, 0.3);
    filter: brightness(0.9);
  }

  .setup-button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .setup-margin-bottom { margin-bottom: var(--setup-space-md); }
  .setup-spacer { margin-top: var(--setup-space-md); }
  .setup-mt-8 { margin-top: 8px; }
  .setup-hidden { display: none; }
  .setup-text-critical { color: var(--setup-critical); }
  .setup-text-warning { font-size: 21px; color: var(--setup-warning); }
  .setup-text-light { color: var(--setup-text-muted); font-weight: 400; }
  .setup-disabled-area { opacity: 0.5; pointer-events: none; filter: grayscale(1); }
  
  .setup-item-wrapper {
    background: var(--setup-surface);
    border: 1px solid var(--setup-border);
    border-radius: var(--setup-radius-md);
    padding: var(--setup-space-md);
    gap: var(--setup-space-md);
    margin-bottom: var(--setup-space-md);
  }
  
  .setup-item-wrapper:last-child {
    margin-bottom: 0;
  }
  `;
    document.head.appendChild(style);
};

// Helper functions
const parsePrice = (priceStr) => {
    const num = parseFloat(String(priceStr).replace(/[^\d.]/g, ""));
    return isNaN(num) ? 0 : num;
};

const formatCurrency = (amount) => `€${amount.toFixed(2)} EUR`;

const createIcon = (type) => {
    const icons = {
        minus: '<svg width="16" height="16" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="2" rx="1" fill="currentColor"></rect></svg>',
        plus: '<svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path></svg>',
        reorder: 'Reorder',
        refund: 'Refund',
        claimedItems: 'Claimed items',
        selectedItem: 'Selected Item',
        claimDetails: 'Claim Details'
    };
    return icons[type] || '';
};

// Apply color settings to CSS variables
const applyColorSettings = (settings) => {
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
        ["gradientStart", "--setup-gradient-start"],
        ["gradientEnd", "--setup-gradient-end"],
        ["buttonBg", "--setup-button-bg"],
        ["buttonText", "--setup-button-text"],
        ["primaryColor", "--setup-primary-color"],
        ["primaryLight", "--setup-primary-light"],
        ["primaryBorder", "--setup-primary-border"],
    ];

    for (const [key, cssVar] of colorMap) {
        if (settings[key]) {
            root.style.setProperty(cssVar, settings[key]);
        }
    }

    // Handle gradient toggle
    if (typeof settings.useGradient !== 'undefined') {
        root.style.setProperty('--setup-use-gradient', settings.useGradient ? 'true' : 'false');
    }

    // Auto-generate border color based on selected item background
    if (settings.selectedItemBg) {
        const borderColor = generateBorderColor(settings.selectedItemBg);
        if (borderColor) {
            root.style.setProperty('--setup-selected-item-border', borderColor);
        }
    }

    // Apply gradient or solid background to selected items
    const selectedCards = document.querySelectorAll('.setup-item-card.selected');
    selectedCards.forEach(card => {
        if (settings.useGradient) {
            card.setAttribute('data-use-gradient', 'true');
        } else {
            card.setAttribute('data-use-gradient', 'false');
        }
    });
};

// Main Setup Component
export default function mountSetup(container, props = {}) {
    ensureSetupStyles();

    // State
    const state = {
        selectedEligibleId: null,
        quantities: {},
        selectedAction: "reorder",
        selectedClaimOption: "Product damaged", // Default to first option
        claimDetails: "",
        supportingFiles: [],
        submitting: false,
        claimSubmitted: false,
    };

    // Hardcoded translations - no dependency on external translation files
    const translations = {
        "ManualClaim.selectedItems.heading": "Selected Item",
        "ManualClaim.selectedItems.verifiedBadge": "Verified",
        "ManualClaim.ineligibleItems.heading": "Ineligible items",
        "ManualClaim.claimDetails.heading": "Claim Details",
        "ManualClaim.claimDetails.helpText": "Help us process your claim quickly",
        "ManualClaim.claimDetails.reasonLabel": "Reason for claim",
        "ManualClaim.claimDetails.reasonRequired": "*",
        "ManualClaim.claimDetails.additionalDetailsLabel": "Additional details",
        "ManualClaim.claimDetails.additionalDetailsOptional": "(optional)",
        "ManualClaim.claimDetails.additionalDetailsPlaceholder": "Please describe the issue in detail. The more information you provide, the faster we can process your claim.",
        "ManualClaim.claimDetails.supportingEvidenceLabel": "Supporting evidence",
        "ManualClaim.claimDetails.supportingEvidenceOptional": "(optional)",
        "ManualClaim.claimDetails.uploadHint": "PNG, JPG, PDF up to 10MB each",
        "ManualClaim.actionOptions.heading": "Choose a claim option",
        "ManualClaim.actionOptions.reorder.title": "Reorder",
        "ManualClaim.actionOptions.reorder.description": "Reorder same items. This will create a new order.",
        "ManualClaim.actionOptions.refund.title": "Refund",
        "ManualClaim.actionOptions.refund.description": "Refund will go to your original payment method.",
        "ManualClaim.claimedItems.heading": "Claimed items",
        "ManualClaim.badgeReasons.reason": "Reason:",
        "ManualClaim.orderTotal.label": "Order Total:",
        "ManualClaim.buttons.back": "Back",
        "ManualClaim.buttons.submit": "Submit",
        "ManualClaim.buttons.submitting": "Submitting...",
        "ManualClaim.productInfo.quantity": "Quantity to claim",
        "ManualClaim.actionSummary.whatHappensNext": "What happens next:",
        "ManualClaim.actionSummary.reorder.title": "Reorder",
        "ManualClaim.actionSummary.reorder.description": "Reordering same item(s). This will create a new order.",
        "ManualClaim.actionSummary.refund.title": "Refund",
        "ManualClaim.actionSummary.refund.description": "Refund will go to your original payment method."
    };

    const t = (key, opts) => {
        return translations[key] || key;
    };

    // Default order data with hardcoded sample data
    const ORDER_DATA = props.ORDER_DATA || {
        orderNumber: "ORD-123456",
        date: "2024-06-10",
        customer: "Ali Raza",
        email: "ali@example.com",
        items: [
            {
                id: 1,
                name: "AHMED Aqua perfume by Laiba",
                sku: "PERF-001",
                qty: 2,
                price: "€5.95 EUR",
                image: "https://picsum.photos/seed/perfume-a/72",
                status: "In Stock",
                eligible: true,
                rating: 4.8,
                reviews: 43,
                collection: "Premium fragrance collection",
                verified: true
            },
            {
                id: 2,
                name: "AHMED Aqua perfume by Laiba",
                sku: "PERF-001",
                qty: 1,
                price: "€5.95",
                image: "https://picsum.photos/seed/perfume-b/72",
                status: "Out Of Stock",
                eligible: false,
                rating: 4.8,
                reviews: 43,
                collection: "Premium fragrance collection",
                verified: false
            },
            {
                id: 3,
                name: "Another Eligible Perfume",
                sku: "PERF-022",
                qty: 3,
                price: "€7.50 EUR",
                image: "https://picsum.photos/seed/perfume-c/72",
                status: "In Stock",
                eligible: true,
                rating: 4.5,
                reviews: 12,
                collection: "Classic fragrance collection",
                verified: false
            }
        ],
        status: "Delivered",
        total: "€11.90 EUR"
    };

    // Default claim options - hardcoded with "Product damaged" first
    const CLAIM_OPTIONS = props.CLAIM_OPTIONS || [
        "Product damaged",
        "Defective item",
        "Wrong item received",
        "Item not received",
        "Other reason"
    ];
    const onBack = props.onBack || (() => { });
    const onSubmitted = props.onSubmitted || (() => { });

    // Add proxy object like gitLogin.js
    const proxy = {
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
            this.applyContentSettings(this.contentSettings);
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

        applyContentSettings(settings) {
            if (!settings) return;

            // Update claim reasons in select dropdown - Use complete list from SetupController
            if (settings.claimReasons && Array.isArray(settings.claimReasons)) {
                // Use the complete list from SetupController as the source of truth
                CLAIM_OPTIONS.length = 0; // Clear existing
                CLAIM_OPTIONS.push(...settings.claimReasons); // Add all from SetupController

                // Update the proxy's contentSettings to reflect current state
                this.contentSettings = {
                    ...this.contentSettings,
                    claimReasons: [...CLAIM_OPTIONS]
                };

                // If there are reasons, set the last one as selected (newest added)
                if (CLAIM_OPTIONS.length > 0) {
                    // Set the last reason as selected (this will be the newest one added)
                    state.selectedClaimOption = CLAIM_OPTIONS[CLAIM_OPTIONS.length - 1];
                }

                // Update the select dropdown with all options
                const select = document.querySelector('.setup-select');
                if (select) {
                    select.innerHTML = CLAIM_OPTIONS.map(reason =>
                        `<option value="${reason}">${reason}</option>`
                    ).join('');

                    // Set the selected value
                    select.value = state.selectedClaimOption;
                }
            }
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
                ["gradientStart", "--setup-gradient-start"],
                ["gradientEnd", "--setup-gradient-end"],
                ["buttonBg", "--setup-button-bg"],
                ["buttonText", "--setup-button-text"],
                ["primaryColor", "--setup-primary-color"],
                ["primaryLight", "--setup-primary-light"],
                ["primaryBorder", "--setup-primary-border"],
                ["svgColor", "--setup-svg-color"],
            ];

            for (const [key, cssVar] of colorMap) {
                if (settings[key]) {
                    root.style.setProperty(cssVar, settings[key]);
                }
            }

            // Handle gradient toggle
            if (typeof settings.useGradient !== 'undefined') {
                root.style.setProperty('--setup-use-gradient', settings.useGradient ? 'true' : 'false');
            }

            // Auto-generate border color based on selected item background
            if (settings.selectedItemBg) {
                const borderColor = generateBorderColor(settings.selectedItemBg);
                if (borderColor) {
                    root.style.setProperty('--setup-selected-item-border', borderColor);
                }
            }

            // Ensure SVG color is always set from primary color or primary border
            const svgColor = settings.primaryColor || settings.primaryBorder;
            if (svgColor) {
                const svgBorderColor = generateBorderColor(svgColor);
                if (svgBorderColor) {
                    root.style.setProperty('--setup-svg-color', svgBorderColor);
                }
            }

            // Apply gradient or solid background to selected items
            const selectedCards = document.querySelectorAll('.setup-item-card.selected');
            selectedCards.forEach(card => {
                if (settings.useGradient) {
                    card.setAttribute('data-use-gradient', 'true');
                } else {
                    card.setAttribute('data-use-gradient', 'false');
                }
            });
        },
    };

    // Setup proxy integration for color settings and content
    let proxyUnsubscribe = null;
    if (typeof window !== 'undefined' && window.SetupProxy) {
        const localProxy = window.SetupProxy;

        // Apply initial colors if available
        const initialColors = localProxy.getColorSettings?.();
        if (initialColors) {
            proxy.applyColorSettings(initialColors);
        } else {
            // If no colors available, apply Green-Yellow theme as default
            const greenYellowTheme = {
                useGradient: true,
                gradientStart: "#72D9A3",
                gradientEnd: "#F3EEA5",
                primaryColor: "#72D9A3",
                primaryLight: "#b8e6b8",
                primaryBorder: "#5a9a5a",
                selectedItemBg: "#b8e6b8",
                selectedItemText: "#2d5a2d",
                badgeBg: "#5a9a5a",
                badgeText: "#ffffff",
                buttonBg: "#5a9a5a",
                buttonText: "#ffffff"
            };
            proxy.applyColorSettings(greenYellowTheme);
        }

        // Get claim reasons from content settings and apply them
        const contentSettings = localProxy.getContentSettings?.();
        if (contentSettings) {
            proxy.applyContentSettings(contentSettings);
        } else {
            // If no content settings available, initialize proxy with default CLAIM_OPTIONS
            proxy.contentSettings = {
                claimReasons: [...CLAIM_OPTIONS]
            };
        }

        // Subscribe to changes
        proxyUnsubscribe = localProxy.subscribe?.((snapshot) => {
            if (snapshot.colorSettings) {
                proxy.applyColorSettings(snapshot.colorSettings);
            }
            if (snapshot.contentSettings) {
                proxy.applyContentSettings(snapshot.contentSettings);
            }
        });
    } else {
        // If no SetupProxy available, apply Green-Yellow theme directly
        const greenYellowTheme = {
            useGradient: true,
            gradientStart: "#72D9A3",
            gradientEnd: "#F3EEA5",
            primaryColor: "#72D9A3",
            primaryLight: "#b8e6b8",
            primaryBorder: "#5a9a5a",
            selectedItemBg: "#b8e6b8",
            selectedItemText: "#2d5a2d",
            badgeBg: "#5a9a5a",
            badgeText: "#ffffff",
            buttonBg: "#5a9a5a",
            buttonText: "#ffffff"
        };
        proxy.applyColorSettings(greenYellowTheme);
    }

    // Filter items
    const eligibleItems = ORDER_DATA.items.filter(item => item.eligible);
    const ineligibleItems = ORDER_DATA.items.filter(item => !item.eligible);

    // Set initial selection and quantities
    if (eligibleItems.length) {
        state.selectedEligibleId = eligibleItems[0]?.id;
        // Initialize all eligible items with quantity 1 (default value)
        eligibleItems.forEach(item => {
            if (state.quantities[item.id] === undefined) {
                state.quantities[item.id] = 1;
            }
        });
    }

    // Helper functions
    const getClaimedItems = () =>
        ORDER_DATA.items.filter(item => {
            const quantity = state.quantities[item.id] || 0;
            // Only include items with quantity > 0 and eligible
            return item.eligible && quantity > 0;
        });

    const getTotalValue = () =>
        getClaimedItems().reduce((total, item) =>
            total + parsePrice(item.price) * (state.quantities[item.id] || 0), 0);

    const getSelectedClaimReasonLabel = () => {
        const option = CLAIM_OPTIONS.find(opt =>
            typeof opt === "object" ? opt.value === state.selectedClaimOption : opt === state.selectedClaimOption
        );
        return typeof option === "object" ? option.label : option || "";
    };

    // Create HTML elements
    const createElement = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html.trim();
        return div.firstElementChild;
    };

    function createEligibleItemsCard() {
        if (!eligibleItems.length) return null;

        const isAllVerified = eligibleItems.every(item => item.verified);
        const card = createElement(`
      <div class="setup-card">
        <div class="setup-card-header">
          <div class="setup-heading">
            ${ICONS.selectedItem}
            ${t("ManualClaim.selectedItems.heading")}
          </div>
          ${isAllVerified ? `<span class="setup-badge success">${t("ManualClaim.selectedItems.verifiedBadge")}</span>` : ''}
        </div>
        <div class="setup-card-body"></div>
      </div>
    `);

        const body = card.querySelector('.setup-card-body');
        eligibleItems.forEach(item => body.appendChild(renderItemCard(item)));
        return card;
    }

    function createIneligibleItemsCard() {
        if (!ineligibleItems.length) return null;

        const card = createElement(`
      <div class="setup-card">
        <div class="setup-card-header">
          <div class="setup-heading">
            ${ICONS.ineligibleItems}
            ${t("ManualClaim.ineligibleItems.heading")}
          </div>
        </div>
        <div class="setup-card-body setup-disabled-area"></div>
      </div>
    `);

        const body = card.querySelector('.setup-card-body');
        ineligibleItems.forEach(item => body.appendChild(renderIneligibleItem(item)));
        return card;
    }

    function createClaimDetailsCard() {
        const card = createElement(`
      <div class="setup-card">
        <div class="setup-card-header">
           <div style='display: flex; align-items: center; justify-content: space-between; width: 100%;'>
                <div class="setup-heading">
                    ${ICONS.claimDetails}
                    ${t("ManualClaim.claimDetails.heading")}
                    </div>
                <div class="setup-text-subdued">${t("ManualClaim.claimDetails.helpText")}</div>
            </div>
        </div>
        <div class="setup-card-body">
          <label class="setup-label">
            ${t("ManualClaim.claimDetails.reasonLabel")} 
            <span class="setup-text-critical">${t("ManualClaim.claimDetails.reasonRequired")}</span>
          </label>
          <select class="setup-select"></select>
          <div class="setup-spacer"></div>
          
          <label class="setup-label">
            ${t("ManualClaim.claimDetails.additionalDetailsLabel")} 
            <span class="setup-text-light">${t("ManualClaim.claimDetails.additionalDetailsOptional")}</span>
          </label>
          <textarea class="setup-textarea" rows="4" maxlength="500" 
                    placeholder="${t("ManualClaim.claimDetails.additionalDetailsPlaceholder")}"></textarea>
          <div class="setup-spacer"></div>
          
          <label class="setup-label">
            ${t("ManualClaim.claimDetails.supportingEvidenceLabel")} 
            <span class="setup-text-light">${t("ManualClaim.claimDetails.supportingEvidenceOptional")}</span>
          </label>
          <div class="setup-upload">${t("ManualClaim.claimDetails.uploadHint")}</div>
          <input type="file" multiple accept="image/*,application/pdf" class="setup-hidden">
          <div class="setup-file-previews"></div>
          <div class="file-count-display"></div>
        </div>
      </div>
    `);

        // Setup select
        const select = card.querySelector('select');
        select.innerHTML = CLAIM_OPTIONS.map(opt =>
            `<option value="${typeof opt === 'object' ? opt.value : opt}">
        ${typeof opt === 'object' ? opt.label : opt}
      </option>`
        ).join('');
        select.value = state.selectedClaimOption;
        select.onchange = () => {
            state.selectedClaimOption = select.value;
            rerender();
        };

        // Setup textarea
        const textarea = card.querySelector('textarea');
        textarea.value = state.claimDetails;
        textarea.oninput = () => state.claimDetails = textarea.value;

        // Setup file upload
        const upload = card.querySelector('.setup-upload');
        const fileInput = card.querySelector('input[type="file"]');
        upload.onclick = () => fileInput.click();
        fileInput.onchange = () => {
            state.supportingFiles = Array.from(fileInput.files || []).slice(0, 3);
            rerender();
        };

        // File previews
        const previews = card.querySelector('.setup-file-previews');
        const fileCountDisplay = card.querySelector('.file-count-display');

        if (state.supportingFiles.length) {
            previews.innerHTML = state.supportingFiles.map(file => {
                if (file.type?.startsWith("image/")) {
                    return `<div class="setup-file-thumb"><img alt="${file.name}" data-file-name="${file.name}"></div>`;
                } else {
                    return `<div class="setup-file-generic"><span>${file.name}</span></div>`;
                }
            }).join('');

            // Set up image sources
            state.supportingFiles.forEach(file => {
                if (file.type?.startsWith("image/")) {
                    const img = previews.querySelector(`img[data-file-name="${file.name}"]`);
                    if (img) {
                        const url = URL.createObjectURL(file);
                        img.src = url;
                        img.onload = img.onerror = () => URL.revokeObjectURL(url);
                    }
                }
            });

            fileCountDisplay.innerHTML = `<div class="setup-text-subdued setup-mt-8">${state.supportingFiles.length} file${state.supportingFiles.length > 1 ? "s" : ""} selected</div>`;
        }

        return card;
    }

    function createActionOptionsSection() {
        const section = createElement(`
      <div>
        <div class="setup-heading setup-margin-bottom">${t("ManualClaim.actionOptions.heading")}</div>
        <div class="setup-action-grid"></div>
      </div>
    `);

        const grid = section.querySelector('.setup-action-grid');

        // Add Reorder option with SVG
        const reorderCard = renderActionOption(
            "reorder",
            `${ICONS.reorder}Reorder`,
            t(`ManualClaim.actionOptions.reorder.description`)
        );

        // Add Refund option with SVG
        const refundCard = renderActionOption(
            "refund",
            `${ICONS.refund}Refund`,
            t(`ManualClaim.actionOptions.refund.description`)
        );

        grid.appendChild(reorderCard);
        grid.appendChild(refundCard);
        return section;
    }

    function createClaimedItemsCard() {
        const card = createElement(`
      <div class="setup-card">
        <div class="setup-card-header">
          <div class="setup-heading">
            ${ICONS.claimedItems}
            ${t("ManualClaim.claimedItems.heading")}
          </div>
        </div>
        <div class="setup-card-body"></div>
      </div>
    `);

        const body = card.querySelector('.setup-card-body');
        getClaimedItems().forEach(item => body.appendChild(renderClaimedItem(item)));

        if (getClaimedItems().length) {
            body.insertAdjacentHTML('beforeend', `
        <div style="display: flex; justify-content: flex-end; margin-top: 8px;">
          <span class="setup-badge critical">${t("ManualClaim.badgeReasons.reason")} ${getSelectedClaimReasonLabel()}</span>
        </div>
      `);
        }
        return card;
    }

    function createActionSummaryCard() {
        return renderActionSummary();
    }

    function createTotalBar() {
        return createElement(`
      <div class="setup-total">
        <div style='display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 500;'>
          <span class="setup-green-dot"></span>
          <span>${t("ManualClaim.orderTotal.label")}</span>
        </div>
        <div class="setup-total-value">${formatCurrency(getTotalValue())}</div>
      </div>
    `);
    }

    function createActionsBar() {
        const actions = createElement(`
      <div class="setup-actions">
        <button class="setup-button">${t("ManualClaim.buttons.back")}</button>
        <button class="setup-button primary">${state.submitting ? t("ManualClaim.buttons.submitting") : t("ManualClaim.buttons.submit")}</button>
      </div>
    `);

        const [backBtn, submitBtn] = actions.querySelectorAll('button');

        backBtn.disabled = state.submitting;
        backBtn.onclick = () => !state.submitting && onBack();

        submitBtn.disabled = state.claimSubmitted || !getClaimedItems().length || state.submitting;
        submitBtn.onclick = () => {
            if (submitBtn.disabled) return;
            state.submitting = true;
            rerender();
            setTimeout(() => {
                state.submitting = false;
                state.claimSubmitted = true;
                onSubmitted({
                    quantities: { ...state.quantities },
                    selectedClaimOption: state.selectedClaimOption,
                });
                rerender();
            }, 1200);
        };

        return actions;
    }

    function renderItemCard(item) {
        const selected = state.selectedEligibleId === item.id;
        const quantity = state.quantities[item.id] || 0;
        const totalVal = parsePrice(item.price) * quantity;

        const card = createElement(`
      <div class="setup-item-card${selected ? ' selected' : ''}"${selected ? ' data-use-gradient="true"' : ''}>
        <div class="setup-item-header">
          <div class="setup-item">
            <div class="setup-item-image-bg" style="background-image: url('${item.image}')"></div>
            <div class="setup-item-info">
              <div class="setup-item-name">${item.name}</div>
              <div class="setup-text-subdued">
                <span class="setup-text-warning">★</span> ${item.rating} (${item.reviews})
              </div>
              <div class="setup-item-collection">${item.collection}</div>
            </div>
          </div>
          <span class="setup-badge">${item.status}</span>
        </div>
        ${selected ? `
          <div class="setup-qty-row">
            <div class="setup-text-subdued">${t("ManualClaim.productInfo.quantity")}</div>
            <div style="display: flex; gap: 12px; align-items: center;">
              <div class="setup-qty">
                <button class="minus-btn">${createIcon("minus")}</button>
                <span class="setup-qty-value">${quantity}</span>
                <button class="plus-btn">${createIcon("plus")}</button>
              </div>
              <span class="setup-item-name">${formatCurrency(totalVal)}</span>
            </div>
          </div>
        ` : ''}
      </div>
    `);

        if (selected) {
            const minusBtn = card.querySelector('.minus-btn');
            const plusBtn = card.querySelector('.plus-btn');

            minusBtn.onclick = (e) => {
                e.stopPropagation();
                state.quantities[item.id] = Math.max(quantity - 1, 0);
                rerender();
            };

            plusBtn.onclick = (e) => {
                e.stopPropagation();
                state.quantities[item.id] = quantity + 1;
                rerender();
            };
        }

        card.onclick = () => {
            state.selectedEligibleId = item.id;
            rerender();
        };

        return card;
    }

    function renderIneligibleItem(item) {
        return createElement(`
      <div class="setup-item-wrapper">
        <div style="display: flex; flex-direction: column; 
        // padding: var(--setup-space-md) 0; 
        // border-bottom: 1px solid var(--setup-border);
        ">
          <div class="setup-item-header" style="padding: 0;">
            <div class="setup-item">
              <div class="setup-item-image-bg" style="background-image: url('${item.image}')"></div>
              <div class="setup-item-info">
                <div class="setup-item-name">${item.name}</div>
                <div class="setup-text-subdued">
                  <span class="setup-text-warning">★</span> ${item.rating} (${item.reviews})
                </div>
                <div class="setup-item-collection">${item.collection}</div>
              </div>
            </div>
       <div>
            <span class="setup-badge">${item.status}</span>
            </div>
            </div>
            </div>
            </div>
            `);
    }
            // <div style="display: flex; justify-content: flex-end; margin-top: 4px; font-size: 13px;">
            //   <div class="setup-text-subdued">${item.price}</div>
            // </div>

    function renderActionOption(value, title, description) {
        const isSelected = state.selectedAction === value;
        const card = createElement(`
      <div class="setup-action-card${isSelected ? ' selected' : ''}">
        <div class="setup-action-head">
          <div class="setup-action-title">${title}:
          <div class="setup-text-subdued">${description}</div>
          </div>
          <input type="radio" name="setup-action" ${isSelected ? 'checked' : ''} 
                 aria-checked="${isSelected ? 'true' : 'false'}">
        </div>
      </div>
    `);

        const handleSelection = () => {
            state.selectedAction = value;
            rerender();
        };

        card.onclick = handleSelection;
        card.querySelector('input').onchange = handleSelection;
        return card;
    }

    function renderClaimedItem(item) {
        const quantity = state.quantities[item.id] || 0;
        return createElement(`
      <div class="setup-item-wrapper">
        <div class="setup-item">
          <div class="setup-item-image-bg" style="background-image: url('${item.image}')"></div>
          <div class="setup-item-info">
            <div class="setup-item-name">${item.name}</div>
            <div class="setup-text-subdued">${quantity} x ${item.price}</div>
          </div>
        </div>
      </div>
    `);
    }

    function renderActionSummary() {
        const isReorder = state.selectedAction === "reorder";
        const actionType = isReorder ? "reorder" : "refund";

        // Hardcoded steps for each action type
        const steps = {
            reorder: [
                "We'll review your claim within 24 hours",
                "If approved, we'll send replacement items",
                "You'll receive tracking information via email"
            ],
            refund: [
                "We'll review your claim within 24 hours",
                "If approved, refund will be processed",
                "Refund will appear in 3-5 business days"
            ]
        };

        const actionSteps = steps[actionType];
        const stepsHTML = actionSteps.map(step => `<div class="setup-text-subdued setup-mt-8">• ${step}</div>`).join('');

        const titles = {
            reorder: "Reorder Summary",
            refund: "Refund Summary"
        };

        const descriptions = {
            reorder: "Reordering same item(s). This will create a new order.",
            refund: "Payment will be refunded to original payment method."
        };

        const icons = {
            reorder: ICONS.reorder,
            refund: ICONS.refund
        };

        return createElement(`
      <div class="setup-card">
        <div class="setup-card-header">
          <div class="setup-heading">
            ${icons[actionType]}
            ${titles[actionType]}
          </div>
        </div>
        <div class="setup-card-body">
          <div class="setup-text-subdued">${descriptions[actionType]}</div>
          <div class="setup-heading setup-spacer">What happens next:</div>
          <div class="setup-action-summary-list">${stepsHTML}</div>
        </div>
      </div>
    `);
    }

    // Main render function
    function render() {
        container.innerHTML = `
      <div class="setup-container">
        <div class="setup-row">
          <div class="setup-col" id="left-col"></div>
          <div class="setup-col" id="right-col"></div>
        </div>
        <div id="action-options"></div>
        <div class="setup-row">
          <div class="setup-col" id="claimed-col"></div>
          <div class="setup-col" id="summary-col"></div>
        </div>
        <div id="total-bar"></div>
        <div id="actions-bar"></div>
      </div>
    `;

        // Populate sections
        const leftCol = container.querySelector('#left-col');
        const rightCol = container.querySelector('#right-col');
        const actionOptions = container.querySelector('#action-options');
        const claimedCol = container.querySelector('#claimed-col');
        const summaryCol = container.querySelector('#summary-col');
        const totalBar = container.querySelector('#total-bar');
        const actionsBar = container.querySelector('#actions-bar');

        // Add cards to sections
        const eligibleCard = createEligibleItemsCard();
        if (eligibleCard) leftCol.appendChild(eligibleCard);

        const ineligibleCard = createIneligibleItemsCard();
        if (ineligibleCard) leftCol.appendChild(ineligibleCard);

        rightCol.appendChild(createClaimDetailsCard());
        actionOptions.appendChild(createActionOptionsSection());
        claimedCol.appendChild(createClaimedItemsCard());
        summaryCol.appendChild(createActionSummaryCard());
        totalBar.appendChild(createTotalBar());
        actionsBar.appendChild(createActionsBar());

        // Equalize column heights after content is added
        equalizeColumnHeights();
    }

    // Function to equalize column heights
    function equalizeColumnHeights() {
        // Use setTimeout to ensure DOM is fully rendered
        setTimeout(() => {
            const rows = container.querySelectorAll('.setup-row');
            
            rows.forEach(row => {
                const columns = row.querySelectorAll('.setup-col');
                if (columns.length < 2) return;
                
                // Reset heights first
                columns.forEach(col => {
                    col.style.minHeight = 'auto';
                });
                
                // Get the maximum height
                let maxHeight = 0;
                columns.forEach(col => {
                    const height = col.offsetHeight;
                    if (height > maxHeight) {
                        maxHeight = height;
                    }
                });
                
                // Apply the maximum height to all columns
                columns.forEach(col => {
                    col.style.minHeight = maxHeight + 'px';
                });
            });
        }, 10);
    }

    function rerender() {
        render();
        // Reapply color settings after re-rendering
        if (typeof window !== 'undefined' && window.SetupProxy) {
            const colorSettings = window.SetupProxy.getColorSettings?.();
            if (colorSettings) {
                proxy.applyColorSettings(colorSettings);
            } else {
                // Apply Green-Yellow theme as default
                const greenYellowTheme = {
                    useGradient: true,
                    gradientStart: "#72D9A3",
                    gradientEnd: "#F3EEA5",
                    primaryColor: "#72D9A3",
                    primaryLight: "#b8e6b8",
                    primaryBorder: "#5a9a5a",
                    selectedItemBg: "#b8e6b8",
                    selectedItemText: "#2d5a2d",
                    badgeBg: "#5a9a5a",
                    badgeText: "#ffffff",
                    buttonBg: "#5a9a5a",
                    buttonText: "#ffffff"
                };
                proxy.applyColorSettings(greenYellowTheme);
            }
        }
        // Equalize column heights after rerender
        equalizeColumnHeights();
    }

    // Initial render
    render();

    // Apply Green-Yellow theme as default if no proxy colors available
    if (typeof window !== 'undefined' && window.SetupProxy) {
        const colorSettings = window.SetupProxy.getColorSettings?.();
        if (colorSettings) {
            proxy.applyColorSettings(colorSettings);
        } else {
            // Apply Green-Yellow theme as default
            const greenYellowTheme = {
                useGradient: true,
                gradientStart: "#72D9A3",
                gradientEnd: "#F3EEA5",
                primaryColor: "#72D9A3",
                primaryLight: "#b8e6b8",
                primaryBorder: "#5a9a5a",
                selectedItemBg: "#b8e6b8",
                selectedItemText: "#2d5a2d",
                badgeBg: "#5a9a5a",
                badgeText: "#ffffff",
                buttonBg: "#5a9a5a",
                buttonText: "#ffffff"
            };
            proxy.applyColorSettings(greenYellowTheme);
        }
    } else {
        // If no SetupProxy, apply Green-Yellow theme directly
        const greenYellowTheme = {
            useGradient: true,
            gradientStart: "#72D9A3",
            gradientEnd: "#F3EEA5",
            primaryColor: "#72D9A3",
            primaryLight: "#b8e6b8",
            primaryBorder: "#5a9a5a",
            selectedItemBg: "#b8e6b8",
            selectedItemText: "#2d5a2d",
            badgeBg: "#5a9a5a",
            badgeText: "#ffffff",
            buttonBg: "#5a9a5a",
            buttonText: "#ffffff"
        };
        proxy.applyColorSettings(greenYellowTheme);
    }

    // Set the proxy globally
    if (typeof window !== "undefined") {
        if (window.ClaimSetup) {
            window.ClaimSetup.proxy = proxy;
        }
        // Also expose as SetupProxy for storage bridge
        window.SetupProxy = proxy;
    }

    return {
        destroy() {
            container.innerHTML = "";
            // Cleanup proxy subscription
            if (proxyUnsubscribe) {
                proxyUnsubscribe();
            }
        },
        proxy, // Expose proxy like gitLogin.js
    };
}

// Make it available globally like gitLogin.js
if (typeof window !== "undefined") {
    window.ClaimSetup = {
        init: mountSetup,
        proxy: null // Will be set when component is initialized
    };

    // Initialize SetupProxy immediately if not already set
    if (!window.SetupProxy) {
        // Create a temporary proxy that will be replaced when mountSetup is called
        window.SetupProxy = {
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
        };
    }
}















// // SVG Icons defined as constants
// const ICONS = {
//     reorder: '<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"></path><path d="M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"></path></svg>',
//     refund: '<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path fill-rule="evenodd" d="M12.379 4h-7.258c-.395 0-.736 0-1.017.023-.297.024-.592.078-.875.222-.424.216-.768.56-.984.984-.144.283-.198.578-.222.875-.023.28-.023.622-.023 1.017v3.008c0 .395 0 .736.023 1.017.024.297.078.592.222.875.216.424.56.768.984.984.283.144.578.198.875.222.121.01.254.016.397.019.001.243.006.46.022.65.024.297.078.592.222.875.216.424.56.768.984.984.283.144.578.198.875.222.28.023.622.023 1.017.023h7.258c.395 0 .736 0 1.017-.023.297-.024.592-.078.875-.222.424-.216.768-.56.984-.984.144-.283.198-.578.222-.875.023-.28.023-.622.023-1.017v-3.008c0-.395 0-.736-.023-1.017-.024-.297-.078-.592-.222-.875-.216-.424-.56-.768-.983-.984-.284-.144-.58-.198-.876-.222-.121-.01-.254-.016-.397-.019-.001-.243-.006-.46-.022-.65-.024-.297-.078-.592-.222-.875-.216-.424-.56-.768-.984-.984-.283-.144-.578-.198-.875-.222-.28-.023-.622-.023-1.017-.023Zm1.62 2.75h-6.378c-.395 0-.736 0-1.017.023-.297.024-.592.078-.875.222-.424.216-.768.56-.984.984-.144.283-.198.578-.222.875-.023.28-.023.622-.023 1.017v1.874c-.104-.002-.194-.006-.274-.013-.204-.017-.28-.045-.316-.064-.142-.072-.256-.186-.328-.327-.02-.038-.047-.113-.064-.317-.017-.212-.018-.492-.018-.924v-2.95c0-.432 0-.712.018-.924.017-.204.045-.28.064-.316.072-.142.186-.256.328-.328.037-.02.112-.047.316-.064.212-.017.492-.018.924-.018h7.2c.432 0 .712 0 .924.018.204.017.28.045.317.064.14.072.255.186.327.328.02.037.047.112.064.316.011.138.016.305.017.524Zm-6.349 7.75h1.178c-.515-.796-.828-1.848-.828-3 0-1.278.385-2.43 1.002-3.25h-1.352c-.432 0-.712 0-.924.018-.204.017-.28.045-.316.064-.142.072-.256.186-.328.328-.02.037-.047.112-.064.316-.017.212-.018.492-.018.924v2.95c0 .432 0 .712.018.924.017.204.045.28.064.317.072.14.186.255.328.327.037.02.112.047.316.064.212.017.492.018.924.018Zm6.85-3c0-1.278-.384-2.43-1.002-3.25h1.352c.432 0 .712 0 .924.018.204.017.28.045.316.064.142.072.256.186.328.328.02.037.047.112.064.316.017.212.018.492.018.924v2.95c0 .432 0 .712-.018.924-.017.204-.045.28-.064.317-.072.14-.186.255-.328.327-.037.02-.112.047-.316.064-.212.017-.492.018-.924.018h-1.178c.515-.796.828-1.848.828-3Zm-4.332 2.304c-.384-.532-.668-1.342-.668-2.304 0-.962.284-1.772.668-2.304.385-.533.787-.696 1.082-.696.295 0 .697.163 1.082.696.384.532.668 1.342.668 2.304 0 .962-.284 1.772-.668 2.304-.385.533-.787.696-1.082.696-.295 0-.697-.163-1.082-.696Z"></path></svg>',
//     claimedItems: '<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M13 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path fill-rule="evenodd" d="M11.276 3.5a3.75 3.75 0 0 0-2.701 1.149l-4.254 4.417a2.75 2.75 0 0 0 .036 3.852l2.898 2.898a2.5 2.5 0 0 0 3.502.033l4.747-4.571a3.25 3.25 0 0 0 .996-2.341v-2.187a3.25 3.25 0 0 0-3.25-3.25h-1.974Zm-1.62 2.19a2.25 2.25 0 0 1 1.62-.69h1.974c.966 0 1.75.784 1.75 1.75v2.187c0 .475-.194.93-.536 1.26l-4.747 4.572a1 1 0 0 1-1.401-.014l-2.898-2.898a1.25 1.25 0 0 1-.016-1.75l4.253-4.418Z"></path></svg>',
//     selectedItem: '<svg viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M4.63 8.81a5.5 5.5 0 0 1 6.56-4.18.75.75 0 0 0 .325-1.464 7 7 0 1 0 5.32 8.35.75.75 0 0 0-1.465-.325 5.5 5.5 0 1 1-10.74-2.38Z"></path><path d="M16.03 6.78a.75.75 0 0 0-1.06-1.06l-4.97 4.97-2.22-2.22a.75.75 0 0 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l5.5-5.5Z"></path></svg>',
//     claimDetails: '<svg viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"></path><path d="M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path><path fill-rule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"></path></svg>',
//     ineligibleItems: '<svg viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 23px; height: 23px; margin-right: 0px; vertical-align: middle; fill: var(--setup-svg-color);"><path d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM4.5 10a5.5 5.5 0 0 1 9.546-3.768l-7.814 7.814A5.476 5.476 0 0 1 4.5 10Zm1.732 4.268 7.814-7.814a5.5 5.5 0 0 1-7.814 7.814Z"></path></svg>'
// };

// // Setup Component - Clean Code with Original Design
// const SETUP_STYLE_ID = "vanilla-setup-styles";

// // Inject original complete CSS styles
// const ensureSetupStyles = () => {
//     if (document.getElementById(SETUP_STYLE_ID)) return;

//     const style = document.createElement('style');
//     style.id = SETUP_STYLE_ID;
//     style.textContent = `
//   :root {
//     --setup-primary: #72D9A3;
//     --setup-primary-dark: #5a9a5a;
//     --setup-primary-light: #b8e6b8;
//     --setup-bg: #f7f9fc;
//     --setup-surface: #ffffff;
//     --setup-surface-hover: #f9fafb;
//     --setup-border: #e2e8f0;
//     --setup-border-focus: #72D9A3;
//     --setup-text-heading: #1a202c;
//     --setup-text-body: #4a5568;
//     --setup-text-muted: #718096;
//     --setup-text-white: #ffffff;
//     --setup-critical: #e53e3e;
//     --setup-critical-bg: #fff5f5;
//     --setup-success: #38a169;
//     --setup-success-bg: #f0fff4;
//     --setup-warning: #d69e2e;
//     --setup-radius-sm: 6px;
//     --setup-radius-md: 12px;
//     --setup-radius-lg: 16px;
//     --setup-space-xs: 4px;
//     --setup-space-sm: 8px;
//     --setup-space-md: 16px;
//     --setup-space-lg: 24px;
//     --setup-space-xl: 32px;
//     --setup-shadow-card: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
//     --setup-shadow-hover: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
//     --setup-focus-ring: 0 0 0 3px rgba(114, 217, 163, 0.15);
//     --setup-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    
//     /* Selected item specific colors - Green-Yellow theme defaults */
//     --setup-selected-item-bg: #b8e6b8;
//     --setup-selected-item-text: #2d5a2d;
//     --setup-badge-bg: #5a9a5a;
//     --setup-badge-text: #ffffff;
//     --setup-selected-item-border: #7db87d;
//     --setup-use-gradient: true;
//     --setup-gradient-start: #72D9A3;
//     --setup-gradient-end: #F3EEA5;
    
//     /* Button colors - Green-Yellow theme matched */
//     --setup-button-bg: #5a9a5a;
//     --setup-button-text: #ffffff;
    
//     /* Primary color for selected states - Green-Yellow theme */
//     --setup-primary-color: #72D9A3;
//     --setup-primary-light: #b8e6b8;
//     --setup-primary-border: #5a9a5a;
//   }

//   .setup-container {
//     font-family: var(--setup-font-family);
//     color: var(--setup-text-body);
//     background-color: transparent;
//     display: flex;
//     flex-direction: column;
//     gap: var(--setup-space-md);
//     max-width: 1200px;
//     margin: 0 auto;
//     width: 100%;
//     box-sizing: border-box;
//     -webkit-font-smoothing: antialiased;
//     padding: 20px;
//     box-sizing: border-box !important;
//   }

//   .setup-container * { box-sizing: border-box; }

//   .setup-row {
//     display: flex;
//     gap: var(--setup-space-md);
//     align-items: flex-start;
//   }
//   @media (max-width: 850px) {
//     .setup-row { flex-direction: column; }
//   }

//   .setup-col {
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     gap: var(--setup-space-md);
//     min-width: 0;
//   }

//   .setup-card {
//     background: var(--setup-surface);
//     border: 1px solid var(--setup-border);
//     border-radius: var(--setup-radius-md);
//     box-shadow: var(--setup-shadow-card);
//     overflow: hidden;
//     transition: box-shadow 0.2s ease;
//   }

//   .setup-card-header {
//     padding: var(--setup-space-md);
//     border-bottom: 1px solid var(--setup-border);
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background: #f9f9f9;
//   }

//   .setup-card-body {
//     padding: var(--setup-space-lg);
//   }

//   .setup-heading {
//     font-size: 16px;
//     font-weight: 700;
//     color: var(--setup-text-heading);
//     letter-spacing: -0.01em;
//   }
  
//   .setup-heading , .setup-action-title{
//    display: flex;
//     align-items: center;
//     gap: 10px;
//   }
  
//   .setup-text-subdued {
//     font-size: 13px;
//     color: var(--setup-text-muted);
//     line-height: 1.5;
//   }

//   .setup-label {
//     display: block;
//     font-size: 13px;
//     font-weight: 600;
//     color: var(--setup-text-heading);
//     margin-bottom: var(--setup-space-sm);
//   }

//   .setup-item-card {
//     background: var(--setup-surface);
//     border: 2px solid var(--setup-border);
//     border-radius: var(--setup-radius-md);
//     cursor: pointer;
//     transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
//     position: relative;
//     overflow: hidden;
//   }
  
//   .setup-card-body .setup-item-card { margin-bottom: var(--setup-space-md); }
//   .setup-card-body .setup-item-card:last-child { margin-bottom: 0; }

//   .setup-item-card:hover {
//     border-color: var(--setup-primary-border);
//   }


//   .setup-item-card.selected {
//     background: var(--setup-primary-light);
//     border-color: var(--setup-primary-border);
//     color: var(--setup-primary-border);
//     // box-shadow: 0 0 0 1px var(--setup-primary-border) inset;
//   }

//   /* Apply gradient to selected items when gradient is enabled */
//   .setup-item-card.selected[data-use-gradient="true"] {
//     background: linear-gradient(135deg, var(--setup-gradient-start), var(--setup-gradient-end));
//   }

//   .setup-item-card.selected .setup-item-name {
//     color: var(--setup-selected-item-text);
//   }

//   .setup-item-card.selected .setup-badge {
//     background: var(--setup-badge-bg);
//     color: var(--setup-badge-text);
//     border-color: transparent;
//   }

//   .setup-item-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: var(--setup-space-md);
//     gap: var(--setup-space-md);
//     // border-bottom: 1px solid var(--setup-border);
//   }

//   .setup-item {
//     display: flex;
//     gap: var(--setup-space-md);
//     align-items: center;
//     flex: 1;
//   }

//   .setup-item img, .setup-item-image-bg {
//     width: 56px;
//     height: 56px;
//     border-radius: var(--setup-radius-md);
//     object-fit: cover;
//     border: 1px solid var(--setup-border);
//     background: #f1f5f9;
//     background-size: cover !important;
//     background-position: center !important;
//     background-repeat: no-repeat !important;
//   }

// //   .setup-item-info { flex: 1; }
  
//   .setup-item-name {
//     font-size: 14px;
//     font-weight: 600;
//     color: var(--setup-text-heading);
//   }
  
//   .setup-item-collection {
//     font-size: 12px;
//     color: var(--setup-text-muted);
//   }

//   .setup-badge {
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
//   }
  
//   .setup-badge.success {
//     background: var(--setup-success-bg);
//     color: var(--setup-success);
//     border-color: transparent;
//   }
  
//   .setup-badge.critical {
//     background: var(--setup-critical-bg);
//     color: var(--setup-critical);
//     border-color: transparent;
//   }

//   .setup-qty-row {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: var(--setup-space-sm) var(--setup-space-md);
//     background-color: rgba(255,255,255,0.6);
//   }

//   .setup-qty {
//     display: flex;
//     align-items: center;
//     background: #ffffff;
//     border: 1px solid var(--setup-border);
//     border-radius: var(--setup-radius-sm);
//     box-shadow: 0 1px 2px rgba(0,0,0,0.05);
//   }

//   .setup-qty button {
//     background: transparent;
//     border: none;
//     cursor: pointer;
//     padding: 6px 10px;
//     color: var(--setup-text-muted);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: color 0.2s;
//   }
//   .setup-qty button:hover { color: var(--setup-primary-color); }

//   .setup-qty-value {
//     font-size: 14px;
//     font-weight: 600;
//     width: 24px;
//     text-align: center;
//     color: var(--setup-text-heading);
//   }

//   .setup-select, .setup-input, .setup-textarea {
//     width: 100%;
//     padding: 10px 14px;
//     border: 1px solid var(--setup-border);
//     border-radius: var(--setup-radius-sm);
//     background-color: #ffffff;
//     font-size: 14px;
//     color: var(--setup-text-heading);
//     transition: all 0.2s;
//     font-family: inherit;
//   }
  
//   .setup-select {
//     appearance: none;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234a5568'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
//     background-repeat: no-repeat;
//     background-position: right 14px center;
//     background-size: 16px;
//     padding-right: 40px;
//   }

//   .setup-textarea {
//     min-height: 100px;
//     resize: vertical;
//     border-radius: var(--setup-radius-md);
//         border: 2px solid var(--setup-border);
//   }

//   .setup-select:focus, .setup-input:focus, .setup-textarea:focus {
//     outline: none;
//     border-color: var(--setup-primary);
//     box-shadow: var(--setup-focus-ring);
//   }

//   .setup-upload {
//     border: 2px dashed var(--setup-border);
//     border-radius: var(--setup-radius-md);
//     padding: var(--setup-space-lg);
//     text-align: center;
//     background: var(--setup-surface-hover);
//     color: var(--setup-text-muted);
//     font-size: 13px;
//     cursor: pointer;
//     transition: all 0.2s;
//     height: 150px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   .setup-upload:hover {
//     border-color: var(--setup-primary-border);
//     background: var(--setup-primary-light);
//     color: var(--setup-primary-color);
//   }

//   .setup-file-previews {
//     display: flex;
//     gap: var(--setup-space-sm);
//     margin-top: var(--setup-space-md);
//     flex-wrap: wrap;
//   }

//   .setup-file-thumb, .setup-file-generic {
//     width: 60px;
//     height: 60px;
//     border-radius: var(--setup-radius-sm);
//     overflow: hidden;
//     border: 1px solid var(--setup-border);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: #fff;
//   }
//   .setup-file-thumb img { width: 100%; height: 100%; object-fit: cover; }
//   .setup-file-generic span { font-size: 10px; text-align: center; padding: 2px; line-height: 1.1; }

//   .setup-action-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//     gap: var(--setup-space-md);
//   }

//   .setup-action-card {
//     position: relative;
//     border: 1px solid var(--setup-border);
//     border-radius: var(--setup-radius-md);
//     padding: var(--setup-space-md);
//     background: #ffffff;
//     cursor: pointer;
//     transition: all 0.2s;
//     display: flex;
//     flex-direction: column;
//     height: 100%;
//   }

//   .setup-action-card:hover {
//     border-color: var(--setup-primary-border);
//     box-shadow: var(--setup-shadow-hover);
//     box-shadow: 0 0 0 1px var(--setup-primary-border) inset;
//     // background: var(--setup-primary-light);
//   }

//   .setup-action-card.selected {
//     border-color: var(--setup-primary-border);
//     background: var(--setup-primary-light);
//     color: var(--setup-primary-border);
//     box-shadow: 0 0 0 1px var(--setup-primary-border) inset;
//   }

//   .setup-action-head {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-bottom: var(--setup-space-sm);
//   }
  
//   .setup-action-title { font-weight: 700; color: var(--setup-text-heading); }
  
//   .setup-action-card.selected .setup-action-title { 
//     color: var(--setup-primary-border); 
//   }
  
//   .setup-action-card input[type="radio"] {
//     appearance: none;
//     width: 18px;
//     height: 18px;
//     border: 2px solid var(--setup-border);
//     border-radius: 50%;
//     margin: 0;
//     cursor: pointer;
//     position: relative;
//     background: #fff;
//     transition: all 0.2s;
//   }

//   .setup-action-card.selected input[type="radio"] {
//     border-color: var(--setup-primary-border);
//     background: var(--setup-primary-border);
//   }
//   .setup-action-card.selected input[type="radio"]::after {
//     content: '';
//     position: absolute;
//     top: 4px; left: 4px;
//     width: 6px; height: 6px;
//     background: #fff;
//     border-radius: 50%;
//   }

//   .setup-total {
//     background: #ffffff;
//     border: 1px solid var(--setup-border);
//     border-radius: var(--setup-radius-md);
//     padding: var(--setup-space-md) var(--setup-space-lg);
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     box-shadow: var(--setup-shadow-card);
//   }

//   .setup-green-dot {
//     display: inline-block;
//     width: 15px; height: 15px;
//     background: var(--setup-success);
//     border-radius: 50%;
//     box-shadow: 0 0 0 3px var(--setup-success-bg);
//   }

//   .setup-total-value {
//     font-size: 18px;
//     font-weight: 700;
//     color: var(--setup-text-heading);
//   }

//   .setup-actions {
//     display: flex;
//     justify-content: flex-end;
//     gap: var(--setup-space-md);
//     // margin-top: var(--setup-space-lg);
//   }

//   .setup-button {
//     padding: 12px 24px;
//     border-radius: var(--setup-radius-sm);
//     font-weight: 600;
//     font-size: 14px;
//     cursor: pointer;
//     transition: all 0.2s;
//     border: 1px solid var(--setup-border);
//     background: #ffffff;
//     color: var(--setup-text-body);
//   }

//   .setup-button:hover:not([disabled]) {
//     background: var(--setup-primary-light);
//     border-color: var(--setup-primary-border);
//   }

//   .setup-button.primary {
//     background: var(--setup-button-bg);
//     color: var(--setup-button-text);
//     border-color: var(--setup-button-bg);
//     box-shadow: 0 2px 4px rgba(0, 128, 96, 0.2);
//   }

//   .setup-button.primary:hover:not([disabled]) {
//     background: var(--setup-button-bg);
//     border-color: var(--setup-button-bg);
//     transform: translateY(-1px);
//     box-shadow: 0 4px 6px rgba(0, 128, 96, 0.3);
//     filter: brightness(0.9);
//   }

//   .setup-button[disabled] {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }

//   .setup-margin-bottom { margin-bottom: var(--setup-space-md); }
//   .setup-spacer { margin-top: var(--setup-space-md); }
//   .setup-mt-8 { margin-top: 8px; }
//   .setup-hidden { display: none; }
//   .setup-text-critical { color: var(--setup-critical); }
//   .setup-text-warning { font-size: 21px; color: var(--setup-warning); }
//   .setup-text-light { color: var(--setup-text-muted); font-weight: 400; }
//   .setup-disabled-area { opacity: 0.5; pointer-events: none; filter: grayscale(1); }
  
//   .setup-item-wrapper {
//     background: var(--setup-surface);
//     border: 1px solid var(--setup-border);
//     border-radius: var(--setup-radius-md);
//     padding: var(--setup-space-md);
//     gap: var(--setup-space-md);
//     margin-bottom: var(--setup-space-md);
//   }
  
//   .setup-item-wrapper:last-child {
//     margin-bottom: 0;
//   }
//   `;
//     document.head.appendChild(style);
// };

// // Helper functions
// const parsePrice = (priceStr) => {
//     const num = parseFloat(String(priceStr).replace(/[^\d.]/g, ""));
//     return isNaN(num) ? 0 : num;
// };

// const formatCurrency = (amount) => `€${amount.toFixed(2)} EUR`;

// const createIcon = (type) => {
//     const icons = {
//         minus: '<svg width="16" height="16" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="2" rx="1" fill="currentColor"></rect></svg>',
//         plus: '<svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path></svg>',
//         reorder: 'Reorder',
//         refund: 'Refund',
//         claimedItems: 'Claimed items',
//         selectedItem: 'Selected Item',
//         claimDetails: 'Claim Details'
//     };
//     return icons[type] || '';
// };

// // Apply color settings to CSS variables
// const applyColorSettings = (settings) => {
//     if (!settings) return;
//     const root = document.documentElement;

//     // Helper function to generate border color (slightly darker than background)
//     const generateBorderColor = (bgColor) => {
//         if (!bgColor) return null;

//         // Convert hex to RGB
//         const hex = bgColor.replace('#', '');
//         const r = parseInt(hex.substr(0, 2), 16);
//         const g = parseInt(hex.substr(2, 2), 16);
//         const b = parseInt(hex.substr(4, 2), 16);

//         // Darken by 20%
//         const darkenedR = Math.max(0, Math.floor(r * 0.8));
//         const darkenedG = Math.max(0, Math.floor(g * 0.8));
//         const darkenedB = Math.max(0, Math.floor(b * 0.8));

//         return `#${darkenedR.toString(16).padStart(2, '0')}${darkenedG.toString(16).padStart(2, '0')}${darkenedB.toString(16).padStart(2, '0')}`;
//     };

//     const colorMap = [
//         ["selectedItemBg", "--setup-selected-item-bg"],
//         ["selectedItemText", "--setup-selected-item-text"],
//         ["badgeBg", "--setup-badge-bg"],
//         ["badgeText", "--setup-badge-text"],
//         ["gradientStart", "--setup-gradient-start"],
//         ["gradientEnd", "--setup-gradient-end"],
//         ["buttonBg", "--setup-button-bg"],
//         ["buttonText", "--setup-button-text"],
//         ["primaryColor", "--setup-primary-color"],
//         ["primaryLight", "--setup-primary-light"],
//         ["primaryBorder", "--setup-primary-border"],
//     ];

//     for (const [key, cssVar] of colorMap) {
//         if (settings[key]) {
//             root.style.setProperty(cssVar, settings[key]);
//         }
//     }

//     // Handle gradient toggle
//     if (typeof settings.useGradient !== 'undefined') {
//         root.style.setProperty('--setup-use-gradient', settings.useGradient ? 'true' : 'false');
//     }

//     // Auto-generate border color based on selected item background
//     if (settings.selectedItemBg) {
//         const borderColor = generateBorderColor(settings.selectedItemBg);
//         if (borderColor) {
//             root.style.setProperty('--setup-selected-item-border', borderColor);
//         }
//     }

//     // Apply gradient or solid background to selected items
//     const selectedCards = document.querySelectorAll('.setup-item-card.selected');
//     selectedCards.forEach(card => {
//         if (settings.useGradient) {
//             card.setAttribute('data-use-gradient', 'true');
//         } else {
//             card.setAttribute('data-use-gradient', 'false');
//         }
//     });
// };

// // Main Setup Component
// export default function mountSetup(container, props = {}) {
//     ensureSetupStyles();

//     // State
//     const state = {
//         selectedEligibleId: null,
//         quantities: {},
//         selectedAction: "reorder",
//         selectedClaimOption: "Product damaged", // Default to first option
//         claimDetails: "",
//         supportingFiles: [],
//         submitting: false,
//         claimSubmitted: false,
//     };

//     // Hardcoded translations - no dependency on external translation files
//     const translations = {
//         "ManualClaim.selectedItems.heading": "Selected Item",
//         "ManualClaim.selectedItems.verifiedBadge": "Verified",
//         "ManualClaim.ineligibleItems.heading": "Ineligible items",
//         "ManualClaim.claimDetails.heading": "Claim Details",
//         "ManualClaim.claimDetails.helpText": "Help us process your claim quickly",
//         "ManualClaim.claimDetails.reasonLabel": "Reason for claim",
//         "ManualClaim.claimDetails.reasonRequired": "*",
//         "ManualClaim.claimDetails.additionalDetailsLabel": "Additional details",
//         "ManualClaim.claimDetails.additionalDetailsOptional": "(optional)",
//         "ManualClaim.claimDetails.additionalDetailsPlaceholder": "Please describe the issue in detail. The more information you provide, the faster we can process your claim.",
//         "ManualClaim.claimDetails.supportingEvidenceLabel": "Supporting evidence",
//         "ManualClaim.claimDetails.supportingEvidenceOptional": "(optional)",
//         "ManualClaim.claimDetails.uploadHint": "PNG, JPG, PDF up to 10MB each",
//         "ManualClaim.actionOptions.heading": "Choose a claim option",
//         "ManualClaim.actionOptions.reorder.title": "Reorder",
//         "ManualClaim.actionOptions.reorder.description": "Reorder same items. This will create a new order.",
//         "ManualClaim.actionOptions.refund.title": "Refund",
//         "ManualClaim.actionOptions.refund.description": "Refund will go to your original payment method.",
//         "ManualClaim.claimedItems.heading": "Claimed items",
//         "ManualClaim.badgeReasons.reason": "Reason:",
//         "ManualClaim.orderTotal.label": "Order Total:",
//         "ManualClaim.buttons.back": "Back",
//         "ManualClaim.buttons.submit": "Submit",
//         "ManualClaim.buttons.submitting": "Submitting...",
//         "ManualClaim.productInfo.quantity": "Quantity to claim",
//         "ManualClaim.actionSummary.whatHappensNext": "What happens next:",
//         "ManualClaim.actionSummary.reorder.title": "Reorder",
//         "ManualClaim.actionSummary.reorder.description": "Reordering same item(s). This will create a new order.",
//         "ManualClaim.actionSummary.refund.title": "Refund",
//         "ManualClaim.actionSummary.refund.description": "Refund will go to your original payment method."
//     };

//     const t = (key, opts) => {
//         return translations[key] || key;
//     };

//     // Default order data with hardcoded sample data
//     const ORDER_DATA = props.ORDER_DATA || {
//         orderNumber: "ORD-123456",
//         date: "2024-06-10",
//         customer: "Ali Raza",
//         email: "ali@example.com",
//         items: [
//             {
//                 id: 1,
//                 name: "AHMED Aqua perfume by Laiba",
//                 sku: "PERF-001",
//                 qty: 2,
//                 price: "€5.95 EUR",
//                 image: "https://picsum.photos/seed/perfume-a/72",
//                 status: "In Stock",
//                 eligible: true,
//                 rating: 4.8,
//                 reviews: 43,
//                 collection: "Premium fragrance collection",
//                 verified: true
//             },
//             {
//                 id: 2,
//                 name: "AHMED Aqua perfume by Laiba",
//                 sku: "PERF-001",
//                 qty: 1,
//                 price: "€5.95",
//                 image: "https://picsum.photos/seed/perfume-b/72",
//                 status: "Out Of Stock",
//                 eligible: false,
//                 rating: 4.8,
//                 reviews: 43,
//                 collection: "Premium fragrance collection",
//                 verified: false
//             },
//             {
//                 id: 3,
//                 name: "Another Eligible Perfume",
//                 sku: "PERF-022",
//                 qty: 3,
//                 price: "€7.50 EUR",
//                 image: "https://picsum.photos/seed/perfume-c/72",
//                 status: "In Stock",
//                 eligible: true,
//                 rating: 4.5,
//                 reviews: 12,
//                 collection: "Classic fragrance collection",
//                 verified: false
//             }
//         ],
//         status: "Delivered",
//         total: "€11.90 EUR"
//     };

//     // Default claim options - hardcoded with "Product damaged" first
//     const CLAIM_OPTIONS = props.CLAIM_OPTIONS || [
//         "Product damaged",
//         "Defective item",
//         "Wrong item received",
//         "Item not received",
//         "Other reason"
//     ];
//     const onBack = props.onBack || (() => { });
//     const onSubmitted = props.onSubmitted || (() => { });

//     // Add proxy object like gitLogin.js
//     const proxy = {
//         contentSettings: null,
//         colorSettings: null,
//         subscribers: new Set(),

//         subscribe(cb) {
//             this.subscribers.add(cb);
//             return () => this.subscribers.delete(cb);
//         },

//         notify() {
//             for (const cb of this.subscribers)
//                 cb({
//                     contentSettings: this.contentSettings,
//                     colorSettings: this.colorSettings,
//                 });
//         },

//         updateContentSettings(settings) {
//             this.contentSettings =
//                 typeof settings === "function"
//                     ? settings(this.contentSettings)
//                     : { ...this.contentSettings, ...settings };
//             this.notify();
//             this.applyContentSettings(this.contentSettings);
//         },

//         updateColorSettings(settings) {
//             this.colorSettings =
//                 typeof settings === "function"
//                     ? settings(this.colorSettings)
//                     : { ...this.colorSettings, ...settings };
//             this.notify();
//             this.applyColorSettings(this.colorSettings);
//         },

//         getContentSettings() {
//             return this.contentSettings;
//         },

//         getColorSettings() {
//             return this.colorSettings;
//         },

//         applyContentSettings(settings) {
//             if (!settings) return;

//             // Update claim reasons in select dropdown - Use complete list from SetupController
//             if (settings.claimReasons && Array.isArray(settings.claimReasons)) {
//                 // Use the complete list from SetupController as the source of truth
//                 CLAIM_OPTIONS.length = 0; // Clear existing
//                 CLAIM_OPTIONS.push(...settings.claimReasons); // Add all from SetupController

//                 // Update the proxy's contentSettings to reflect current state
//                 this.contentSettings = {
//                     ...this.contentSettings,
//                     claimReasons: [...CLAIM_OPTIONS]
//                 };

//                 // If there are reasons, set the last one as selected (newest added)
//                 if (CLAIM_OPTIONS.length > 0) {
//                     // Set the last reason as selected (this will be the newest one added)
//                     state.selectedClaimOption = CLAIM_OPTIONS[CLAIM_OPTIONS.length - 1];
//                 }

//                 // Update the select dropdown with all options
//                 const select = document.querySelector('.setup-select');
//                 if (select) {
//                     select.innerHTML = CLAIM_OPTIONS.map(reason =>
//                         `<option value="${reason}">${reason}</option>`
//                     ).join('');

//                     // Set the selected value
//                     select.value = state.selectedClaimOption;
//                 }
//             }
//         },

//         applyColorSettings(settings) {
//             if (!settings) return;
//             const root = document.documentElement;

//             // Helper function to generate border color (slightly darker than background)
//             const generateBorderColor = (bgColor) => {
//                 if (!bgColor) return null;

//                 // Convert hex to RGB
//                 const hex = bgColor.replace('#', '');
//                 const r = parseInt(hex.substr(0, 2), 16);
//                 const g = parseInt(hex.substr(2, 2), 16);
//                 const b = parseInt(hex.substr(4, 2), 16);

//                 // Darken by 20%
//                 const darkenedR = Math.max(0, Math.floor(r * 0.8));
//                 const darkenedG = Math.max(0, Math.floor(g * 0.8));
//                 const darkenedB = Math.max(0, Math.floor(b * 0.8));

//                 return `#${darkenedR.toString(16).padStart(2, '0')}${darkenedG.toString(16).padStart(2, '0')}${darkenedB.toString(16).padStart(2, '0')}`;
//             };

//             const colorMap = [
//                 ["selectedItemBg", "--setup-selected-item-bg"],
//                 ["selectedItemText", "--setup-selected-item-text"],
//                 ["badgeBg", "--setup-badge-bg"],
//                 ["badgeText", "--setup-badge-text"],
//                 ["gradientStart", "--setup-gradient-start"],
//                 ["gradientEnd", "--setup-gradient-end"],
//                 ["buttonBg", "--setup-button-bg"],
//                 ["buttonText", "--setup-button-text"],
//                 ["primaryColor", "--setup-primary-color"],
//                 ["primaryLight", "--setup-primary-light"],
//                 ["primaryBorder", "--setup-primary-border"],
//             ];

//             for (const [key, cssVar] of colorMap) {
//                 if (settings[key]) {
//                     root.style.setProperty(cssVar, settings[key]);
//                 }
//             }

//             // Handle gradient toggle
//             if (typeof settings.useGradient !== 'undefined') {
//                 root.style.setProperty('--setup-use-gradient', settings.useGradient ? 'true' : 'false');
//             }

//             // Auto-generate border color based on selected item background
//             if (settings.selectedItemBg) {
//                 const borderColor = generateBorderColor(settings.selectedItemBg);
//                 if (borderColor) {
//                     root.style.setProperty('--setup-selected-item-border', borderColor);
//                 }
//             }

//             // Apply gradient or solid background to selected items
//             const selectedCards = document.querySelectorAll('.setup-item-card.selected');
//             selectedCards.forEach(card => {
//                 if (settings.useGradient) {
//                     card.setAttribute('data-use-gradient', 'true');
//                 } else {
//                     card.setAttribute('data-use-gradient', 'false');
//                 }
//             });
//         },
//     };

//     // Setup proxy integration for color settings and content
//     let proxyUnsubscribe = null;
//     if (typeof window !== 'undefined' && window.SetupProxy) {
//         const localProxy = window.SetupProxy;

//         // Apply initial colors if available
//         const initialColors = localProxy.getColorSettings?.();
//         if (initialColors) {
//             proxy.applyColorSettings(initialColors);
//         } else {
//             // If no colors available, apply Green-Yellow theme as default
//             const greenYellowTheme = {
//                 useGradient: true,
//                 gradientStart: "#72D9A3",
//                 gradientEnd: "#F3EEA5",
//                 primaryColor: "#72D9A3",
//                 primaryLight: "#b8e6b8",
//                 primaryBorder: "#5a9a5a",
//                 selectedItemBg: "#b8e6b8",
//                 selectedItemText: "#2d5a2d",
//                 badgeBg: "#5a9a5a",
//                 badgeText: "#ffffff",
//                 buttonBg: "#5a9a5a",
//                 buttonText: "#ffffff"
//             };
//             proxy.applyColorSettings(greenYellowTheme);
//         }

//         // Get claim reasons from content settings and apply them
//         const contentSettings = localProxy.getContentSettings?.();
//         if (contentSettings) {
//             proxy.applyContentSettings(contentSettings);
//         } else {
//             // If no content settings available, initialize proxy with default CLAIM_OPTIONS
//             proxy.contentSettings = {
//                 claimReasons: [...CLAIM_OPTIONS]
//             };
//         }

//         // Subscribe to changes
//         proxyUnsubscribe = localProxy.subscribe?.((snapshot) => {
//             if (snapshot.colorSettings) {
//                 proxy.applyColorSettings(snapshot.colorSettings);
//             }
//             if (snapshot.contentSettings) {
//                 proxy.applyContentSettings(snapshot.contentSettings);
//             }
//         });
//     } else {
//         // If no SetupProxy available, apply Green-Yellow theme directly
//         const greenYellowTheme = {
//             useGradient: true,
//             gradientStart: "#72D9A3",
//             gradientEnd: "#F3EEA5",
//             primaryColor: "#72D9A3",
//             primaryLight: "#b8e6b8",
//             primaryBorder: "#5a9a5a",
//             selectedItemBg: "#b8e6b8",
//             selectedItemText: "#2d5a2d",
//             badgeBg: "#5a9a5a",
//             badgeText: "#ffffff",
//             buttonBg: "#5a9a5a",
//             buttonText: "#ffffff"
//         };
//         proxy.applyColorSettings(greenYellowTheme);
//     }

//     // Filter items
//     const eligibleItems = ORDER_DATA.items.filter(item => item.eligible);
//     const ineligibleItems = ORDER_DATA.items.filter(item => !item.eligible);

//     // Set initial selection and quantities
//     if (eligibleItems.length) {
//         state.selectedEligibleId = eligibleItems[0]?.id;
//         // Initialize all eligible items with quantity 1 (default value)
//         eligibleItems.forEach(item => {
//             if (state.quantities[item.id] === undefined) {
//                 state.quantities[item.id] = 1;
//             }
//         });
//     }

//     // Helper functions
//     const getClaimedItems = () =>
//         ORDER_DATA.items.filter(item => {
//             const quantity = state.quantities[item.id] || 0;
//             // Only include items with quantity > 0 and eligible
//             return item.eligible && quantity > 0;
//         });

//     const getTotalValue = () =>
//         getClaimedItems().reduce((total, item) =>
//             total + parsePrice(item.price) * (state.quantities[item.id] || 0), 0);

//     const getSelectedClaimReasonLabel = () => {
//         const option = CLAIM_OPTIONS.find(opt =>
//             typeof opt === "object" ? opt.value === state.selectedClaimOption : opt === state.selectedClaimOption
//         );
//         return typeof option === "object" ? option.label : option || "";
//     };

//     // Create HTML elements
//     const createElement = (html) => {
//         const div = document.createElement('div');
//         div.innerHTML = html.trim();
//         return div.firstElementChild;
//     };

//     function createEligibleItemsCard() {
//         if (!eligibleItems.length) return null;

//         const isAllVerified = eligibleItems.every(item => item.verified);
//         const card = createElement(`
//       <div class="setup-card">
//         <div class="setup-card-header">
//           <div class="setup-heading">
//             ${ICONS.selectedItem}
//             ${t("ManualClaim.selectedItems.heading")}
//           </div>
//           ${isAllVerified ? `<span class="setup-badge success">${t("ManualClaim.selectedItems.verifiedBadge")}</span>` : ''}
//         </div>
//         <div class="setup-card-body"></div>
//       </div>
//     `);

//         const body = card.querySelector('.setup-card-body');
//         eligibleItems.forEach(item => body.appendChild(renderItemCard(item)));
//         return card;
//     }

//     function createIneligibleItemsCard() {
//         if (!ineligibleItems.length) return null;

//         const card = createElement(`
//       <div class="setup-card">
//         <div class="setup-card-header">
//           <div class="setup-heading">
//             ${ICONS.ineligibleItems}
//             ${t("ManualClaim.ineligibleItems.heading")}
//           </div>
//         </div>
//         <div class="setup-card-body setup-disabled-area"></div>
//       </div>
//     `);

//         const body = card.querySelector('.setup-card-body');
//         ineligibleItems.forEach(item => body.appendChild(renderIneligibleItem(item)));
//         return card;
//     }

//     function createClaimDetailsCard() {
//         const card = createElement(`
//       <div class="setup-card">
//         <div class="setup-card-header">
//            <div style='display: flex; align-items: center; justify-content: space-between; width: 100%;'>
//                 <div class="setup-heading">
//                     ${ICONS.claimDetails}
//                     ${t("ManualClaim.claimDetails.heading")}
//                     </div>
//                 <div class="setup-text-subdued">${t("ManualClaim.claimDetails.helpText")}</div>
//             </div>
//         </div>
//         <div class="setup-card-body">
//           <label class="setup-label">
//             ${t("ManualClaim.claimDetails.reasonLabel")} 
//             <span class="setup-text-critical">${t("ManualClaim.claimDetails.reasonRequired")}</span>
//           </label>
//           <select class="setup-select"></select>
//           <div class="setup-spacer"></div>
          
//           <label class="setup-label">
//             ${t("ManualClaim.claimDetails.additionalDetailsLabel")} 
//             <span class="setup-text-light">${t("ManualClaim.claimDetails.additionalDetailsOptional")}</span>
//           </label>
//           <textarea class="setup-textarea" rows="4" maxlength="500" 
//                     placeholder="${t("ManualClaim.claimDetails.additionalDetailsPlaceholder")}"></textarea>
//           <div class="setup-spacer"></div>
          
//           <label class="setup-label">
//             ${t("ManualClaim.claimDetails.supportingEvidenceLabel")} 
//             <span class="setup-text-light">${t("ManualClaim.claimDetails.supportingEvidenceOptional")}</span>
//           </label>
//           <div class="setup-upload">${t("ManualClaim.claimDetails.uploadHint")}</div>
//           <input type="file" multiple accept="image/*,application/pdf" class="setup-hidden">
//           <div class="setup-file-previews"></div>
//           <div class="file-count-display"></div>
//         </div>
//       </div>
//     `);

//         // Setup select
//         const select = card.querySelector('select');
//         select.innerHTML = CLAIM_OPTIONS.map(opt =>
//             `<option value="${typeof opt === 'object' ? opt.value : opt}">
//         ${typeof opt === 'object' ? opt.label : opt}
//       </option>`
//         ).join('');
//         select.value = state.selectedClaimOption;
//         select.onchange = () => {
//             state.selectedClaimOption = select.value;
//             rerender();
//         };

//         // Setup textarea
//         const textarea = card.querySelector('textarea');
//         textarea.value = state.claimDetails;
//         textarea.oninput = () => state.claimDetails = textarea.value;

//         // Setup file upload
//         const upload = card.querySelector('.setup-upload');
//         const fileInput = card.querySelector('input[type="file"]');
//         upload.onclick = () => fileInput.click();
//         fileInput.onchange = () => {
//             state.supportingFiles = Array.from(fileInput.files || []).slice(0, 3);
//             rerender();
//         };

//         // File previews
//         const previews = card.querySelector('.setup-file-previews');
//         const fileCountDisplay = card.querySelector('.file-count-display');

//         if (state.supportingFiles.length) {
//             previews.innerHTML = state.supportingFiles.map(file => {
//                 if (file.type?.startsWith("image/")) {
//                     return `<div class="setup-file-thumb"><img alt="${file.name}" data-file-name="${file.name}"></div>`;
//                 } else {
//                     return `<div class="setup-file-generic"><span>${file.name}</span></div>`;
//                 }
//             }).join('');

//             // Set up image sources
//             state.supportingFiles.forEach(file => {
//                 if (file.type?.startsWith("image/")) {
//                     const img = previews.querySelector(`img[data-file-name="${file.name}"]`);
//                     if (img) {
//                         const url = URL.createObjectURL(file);
//                         img.src = url;
//                         img.onload = img.onerror = () => URL.revokeObjectURL(url);
//                     }
//                 }
//             });

//             fileCountDisplay.innerHTML = `<div class="setup-text-subdued setup-mt-8">${state.supportingFiles.length} file${state.supportingFiles.length > 1 ? "s" : ""} selected</div>`;
//         }

//         return card;
//     }

//     function createActionOptionsSection() {
//         const section = createElement(`
//       <div>
//         <div class="setup-heading setup-margin-bottom">${t("ManualClaim.actionOptions.heading")}</div>
//         <div class="setup-action-grid"></div>
//       </div>
//     `);

//         const grid = section.querySelector('.setup-action-grid');

//         // Add Reorder option with SVG
//         const reorderCard = renderActionOption(
//             "reorder",
//             `${ICONS.reorder}Reorder`,
//             t(`ManualClaim.actionOptions.reorder.description`)
//         );

//         // Add Refund option with SVG
//         const refundCard = renderActionOption(
//             "refund",
//             `${ICONS.refund}Refund`,
//             t(`ManualClaim.actionOptions.refund.description`)
//         );

//         grid.appendChild(reorderCard);
//         grid.appendChild(refundCard);
//         return section;
//     }

//     function createClaimedItemsCard() {
//         const card = createElement(`
//       <div class="setup-card">
//         <div class="setup-card-header">
//           <div class="setup-heading">
//             ${ICONS.claimedItems}
//             ${t("ManualClaim.claimedItems.heading")}
//           </div>
//         </div>
//         <div class="setup-card-body"></div>
//       </div>
//     `);

//         const body = card.querySelector('.setup-card-body');
//         getClaimedItems().forEach(item => body.appendChild(renderClaimedItem(item)));

//         if (getClaimedItems().length) {
//             body.insertAdjacentHTML('beforeend', `
//         <div style="display: flex; justify-content: flex-end; margin-top: 8px;">
//           <span class="setup-badge critical">${t("ManualClaim.badgeReasons.reason")} ${getSelectedClaimReasonLabel()}</span>
//         </div>
//       `);
//         }
//         return card;
//     }

//     function createActionSummaryCard() {
//         return renderActionSummary();
//     }

//     function createTotalBar() {
//         return createElement(`
//       <div class="setup-total">
//         <div style='display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 500;'>
//           <span class="setup-green-dot"></span>
//           <span>${t("ManualClaim.orderTotal.label")}</span>
//         </div>
//         <div class="setup-total-value">${formatCurrency(getTotalValue())}</div>
//       </div>
//     `);
//     }

//     function createActionsBar() {
//         const actions = createElement(`
//       <div class="setup-actions">
//         <button class="setup-button">${t("ManualClaim.buttons.back")}</button>
//         <button class="setup-button primary">${state.submitting ? t("ManualClaim.buttons.submitting") : t("ManualClaim.buttons.submit")}</button>
//       </div>
//     `);

//         const [backBtn, submitBtn] = actions.querySelectorAll('button');

//         backBtn.disabled = state.submitting;
//         backBtn.onclick = () => !state.submitting && onBack();

//         submitBtn.disabled = state.claimSubmitted || !getClaimedItems().length || state.submitting;
//         submitBtn.onclick = () => {
//             if (submitBtn.disabled) return;
//             state.submitting = true;
//             rerender();
//             setTimeout(() => {
//                 state.submitting = false;
//                 state.claimSubmitted = true;
//                 onSubmitted({
//                     quantities: { ...state.quantities },
//                     selectedClaimOption: state.selectedClaimOption,
//                 });
//                 rerender();
//             }, 1200);
//         };

//         return actions;
//     }

//     function renderItemCard(item) {
//         const selected = state.selectedEligibleId === item.id;
//         const quantity = state.quantities[item.id] || 0;
//         const totalVal = parsePrice(item.price) * quantity;

//         const card = createElement(`
//       <div class="setup-item-card${selected ? ' selected' : ''}"${selected ? ' data-use-gradient="true"' : ''}>
//         <div class="setup-item-header">
//           <div class="setup-item">
//             <div class="setup-item-image-bg" style="background-image: url('${item.image}')"></div>
//             <div class="setup-item-info">
//               <div class="setup-item-name">${item.name}</div>
//               <div class="setup-text-subdued">
//                 <span class="setup-text-warning">★</span> ${item.rating} (${item.reviews})
//               </div>
//               <div class="setup-item-collection">${item.collection}</div>
//             </div>
//           </div>
//           <span class="setup-badge">${item.status}</span>
//         </div>
//         ${selected ? `
//           <div class="setup-qty-row">
//             <div class="setup-text-subdued">${t("ManualClaim.productInfo.quantity")}</div>
//             <div style="display: flex; gap: 12px; align-items: center;">
//               <div class="setup-qty">
//                 <button class="minus-btn">${createIcon("minus")}</button>
//                 <span class="setup-qty-value">${quantity}</span>
//                 <button class="plus-btn">${createIcon("plus")}</button>
//               </div>
//               <span class="setup-item-name">${formatCurrency(totalVal)}</span>
//             </div>
//           </div>
//         ` : ''}
//       </div>
//     `);

//         if (selected) {
//             const minusBtn = card.querySelector('.minus-btn');
//             const plusBtn = card.querySelector('.plus-btn');

//             minusBtn.onclick = (e) => {
//                 e.stopPropagation();
//                 state.quantities[item.id] = Math.max(quantity - 1, 0);
//                 rerender();
//             };

//             plusBtn.onclick = (e) => {
//                 e.stopPropagation();
//                 state.quantities[item.id] = quantity + 1;
//                 rerender();
//             };
//         }

//         card.onclick = () => {
//             state.selectedEligibleId = item.id;
//             rerender();
//         };

//         return card;
//     }

//     function renderIneligibleItem(item) {
//         return createElement(`
//       <div class="setup-item-wrapper">
//         <div style="display: flex; flex-direction: column; 
//         // padding: var(--setup-space-md) 0; 
//         // border-bottom: 1px solid var(--setup-border);
//         ">
//           <div class="setup-item-header" style="padding: 0;">
//             <div class="setup-item">
//               <div class="setup-item-image-bg" style="background-image: url('${item.image}')"></div>
//               <div class="setup-item-info">
//                 <div class="setup-item-name">${item.name}</div>
//                 <div class="setup-text-subdued">
//                   <span class="setup-text-warning">★</span> ${item.rating} (${item.reviews})
//                 </div>
//                 <div class="setup-item-collection">${item.collection}</div>
//               </div>
//             </div>
//        <div>
//             <span class="setup-badge">${item.status}</span>
//             </div>
//             </div>
//             </div>
//             </div>
//             `);
//     }
//             // <div style="display: flex; justify-content: flex-end; margin-top: 4px; font-size: 13px;">
//             //   <div class="setup-text-subdued">${item.price}</div>
//             // </div>

//     function renderActionOption(value, title, description) {
//         const isSelected = state.selectedAction === value;
//         const card = createElement(`
//       <div class="setup-action-card${isSelected ? ' selected' : ''}">
//         <div class="setup-action-head">
//           <div class="setup-action-title">${title}:
//           <div class="setup-text-subdued">${description}</div>
//           </div>
//           <input type="radio" name="setup-action" ${isSelected ? 'checked' : ''} 
//                  aria-checked="${isSelected ? 'true' : 'false'}">
//         </div>
//       </div>
//     `);

//         const handleSelection = () => {
//             state.selectedAction = value;
//             rerender();
//         };

//         card.onclick = handleSelection;
//         card.querySelector('input').onchange = handleSelection;
//         return card;
//     }

//     function renderClaimedItem(item) {
//         const quantity = state.quantities[item.id] || 0;
//         return createElement(`
//       <div class="setup-item-wrapper">
//         <div class="setup-item">
//           <div class="setup-item-image-bg" style="background-image: url('${item.image}')"></div>
//           <div class="setup-item-info">
//             <div class="setup-item-name">${item.name}</div>
//             <div class="setup-text-subdued">${quantity} x ${item.price}</div>
//           </div>
//         </div>
//       </div>
//     `);
//     }

//     function renderActionSummary() {
//         const isReorder = state.selectedAction === "reorder";
//         const actionType = isReorder ? "reorder" : "refund";

//         // Hardcoded steps for each action type
//         const steps = {
//             reorder: [
//                 "We'll review your claim within 24 hours",
//                 "If approved, we'll send replacement items",
//                 "You'll receive tracking information via email"
//             ],
//             refund: [
//                 "We'll review your claim within 24 hours",
//                 "If approved, refund will be processed",
//                 "Refund will appear in 3-5 business days"
//             ]
//         };

//         const actionSteps = steps[actionType];
//         const stepsHTML = actionSteps.map(step => `<div class="setup-text-subdued setup-mt-8">• ${step}</div>`).join('');

//         const titles = {
//             reorder: "Reorder Summary",
//             refund: "Refund Summary"
//         };

//         const descriptions = {
//             reorder: "Reordering same item(s). This will create a new order.",
//             refund: "Payment will be refunded to original payment method."
//         };

//         const icons = {
//             reorder: ICONS.reorder,
//             refund: ICONS.refund
//         };

//         return createElement(`
//       <div class="setup-card">
//         <div class="setup-card-header">
//           <div class="setup-heading">
//             ${icons[actionType]}
//             ${titles[actionType]}
//           </div>
//         </div>
//         <div class="setup-card-body">
//           <div class="setup-text-subdued">${descriptions[actionType]}</div>
//           <div class="setup-heading setup-spacer">What happens next:</div>
//           <div class="setup-action-summary-list">${stepsHTML}</div>
//         </div>
//       </div>
//     `);
//     }

//     // Main render function
//     function render() {
//         container.innerHTML = `
//       <div class="setup-container">
//         <div class="setup-row">
//           <div class="setup-col" id="left-col"></div>
//           <div class="setup-col" id="right-col"></div>
//         </div>
//         <div id="action-options"></div>
//         <div class="setup-row">
//           <div class="setup-col" id="claimed-col"></div>
//           <div class="setup-col" id="summary-col"></div>
//         </div>
//         <div id="total-bar"></div>
//         <div id="actions-bar"></div>
//       </div>
//     `;

//         // Populate sections
//         const leftCol = container.querySelector('#left-col');
//         const rightCol = container.querySelector('#right-col');
//         const actionOptions = container.querySelector('#action-options');
//         const claimedCol = container.querySelector('#claimed-col');
//         const summaryCol = container.querySelector('#summary-col');
//         const totalBar = container.querySelector('#total-bar');
//         const actionsBar = container.querySelector('#actions-bar');

//         // Add cards to sections
//         const eligibleCard = createEligibleItemsCard();
//         if (eligibleCard) leftCol.appendChild(eligibleCard);

//         const ineligibleCard = createIneligibleItemsCard();
//         if (ineligibleCard) leftCol.appendChild(ineligibleCard);

//         rightCol.appendChild(createClaimDetailsCard());
//         actionOptions.appendChild(createActionOptionsSection());
//         claimedCol.appendChild(createClaimedItemsCard());
//         summaryCol.appendChild(createActionSummaryCard());
//         totalBar.appendChild(createTotalBar());
//         actionsBar.appendChild(createActionsBar());
//     }

//     function rerender() {
//         render();
//         // Reapply color settings after re-rendering
//         if (typeof window !== 'undefined' && window.SetupProxy) {
//             const colorSettings = window.SetupProxy.getColorSettings?.();
//             if (colorSettings) {
//                 proxy.applyColorSettings(colorSettings);
//             } else {
//                 // Apply Green-Yellow theme as default
//                 const greenYellowTheme = {
//                     useGradient: true,
//                     gradientStart: "#72D9A3",
//                     gradientEnd: "#F3EEA5",
//                     primaryColor: "#72D9A3",
//                     primaryLight: "#b8e6b8",
//                     primaryBorder: "#5a9a5a",
//                     selectedItemBg: "#b8e6b8",
//                     selectedItemText: "#2d5a2d",
//                     badgeBg: "#5a9a5a",
//                     badgeText: "#ffffff",
//                     buttonBg: "#5a9a5a",
//                     buttonText: "#ffffff"
//                 };
//                 proxy.applyColorSettings(greenYellowTheme);
//             }
//         }
//     }

//     // Initial render
//     render();

//     // Apply Green-Yellow theme as default if no proxy colors available
//     if (typeof window !== 'undefined' && window.SetupProxy) {
//         const colorSettings = window.SetupProxy.getColorSettings?.();
//         if (colorSettings) {
//             proxy.applyColorSettings(colorSettings);
//         } else {
//             // Apply Green-Yellow theme as default
//             const greenYellowTheme = {
//                 useGradient: true,
//                 gradientStart: "#72D9A3",
//                 gradientEnd: "#F3EEA5",
//                 primaryColor: "#72D9A3",
//                 primaryLight: "#b8e6b8",
//                 primaryBorder: "#5a9a5a",
//                 selectedItemBg: "#b8e6b8",
//                 selectedItemText: "#2d5a2d",
//                 badgeBg: "#5a9a5a",
//                 badgeText: "#ffffff",
//                 buttonBg: "#5a9a5a",
//                 buttonText: "#ffffff"
//             };
//             proxy.applyColorSettings(greenYellowTheme);
//         }
//     } else {
//         // If no SetupProxy, apply Green-Yellow theme directly
//         const greenYellowTheme = {
//             useGradient: true,
//             gradientStart: "#72D9A3",
//             gradientEnd: "#F3EEA5",
//             primaryColor: "#72D9A3",
//             primaryLight: "#b8e6b8",
//             primaryBorder: "#5a9a5a",
//             selectedItemBg: "#b8e6b8",
//             selectedItemText: "#2d5a2d",
//             badgeBg: "#5a9a5a",
//             badgeText: "#ffffff",
//             buttonBg: "#5a9a5a",
//             buttonText: "#ffffff"
//         };
//         proxy.applyColorSettings(greenYellowTheme);
//     }

//     // Set the proxy globally
//     if (typeof window !== "undefined") {
//         if (window.ClaimSetup) {
//             window.ClaimSetup.proxy = proxy;
//         }
//         // Also expose as SetupProxy for storage bridge
//         window.SetupProxy = proxy;
//     }

//     return {
//         destroy() {
//             container.innerHTML = "";
//             // Cleanup proxy subscription
//             if (proxyUnsubscribe) {
//                 proxyUnsubscribe();
//             }
//         },
//         proxy, // Expose proxy like gitLogin.js
//     };
// }

// // Make it available globally like gitLogin.js
// if (typeof window !== "undefined") {
//     window.ClaimSetup = {
//         init: mountSetup,
//         proxy: null // Will be set when component is initialized
//     };

//     // Initialize SetupProxy immediately if not already set
//     if (!window.SetupProxy) {
//         // Create a temporary proxy that will be replaced when mountSetup is called
//         window.SetupProxy = {
//             contentSettings: null,
//             colorSettings: null,
//             subscribers: new Set(),

//             subscribe(cb) {
//                 this.subscribers.add(cb);
//                 return () => this.subscribers.delete(cb);
//             },

//             notify() {
//                 for (const cb of this.subscribers)
//                     cb({
//                         contentSettings: this.contentSettings,
//                         colorSettings: this.colorSettings,
//                     });
//             },

//             updateContentSettings(settings) {
//                 this.contentSettings =
//                     typeof settings === "function"
//                         ? settings(this.contentSettings)
//                         : { ...this.contentSettings, ...settings };
//                 this.notify();
//             },

//             updateColorSettings(settings) {
//                 this.colorSettings =
//                     typeof settings === "function"
//                         ? settings(this.colorSettings)
//                         : { ...this.colorSettings, ...settings };
//                 this.notify();
//             },

//             getContentSettings() {
//                 return this.contentSettings;
//             },

//             getColorSettings() {
//                 return this.colorSettings;
//             },
//         };
//     }
// }
