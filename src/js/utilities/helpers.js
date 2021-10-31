/**
 * Check the size of the current viewport.
 * @returns {Boolean} True if viewport lower than 1200px; false otherwise.
 */
function isSmallVw() {
  return window.innerWidth < 1200;
}

// eslint-disable-next-line import/prefer-default-export
export { isSmallVw };
