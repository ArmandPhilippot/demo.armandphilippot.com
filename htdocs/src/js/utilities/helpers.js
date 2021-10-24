/**
 * Check the size of the current viewport.
 * @returns {Boolean} True if viewport lower than 1200px; false otherwise.
 */
function isSmallVw() {
  return window.innerWidth < 1200;
}

/**
 * Check if /assets/styles.js exists (Webpack dev mode).
 * @returns {Boolean} True if style.js exists ; false otherwise.
 */
async function isStyleJsExists() {
  const filePath = 'assets/js/style.js';
  const response = await fetch(filePath);
  return response.status === 200;
}

export { isSmallVw, isStyleJsExists };
