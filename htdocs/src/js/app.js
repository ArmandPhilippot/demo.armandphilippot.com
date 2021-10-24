import { isStyleJsExists } from './utilities/helpers';

/**
 * Add style.js script for development purposes.
 */
function loadWebpackStyles() {
  if (isStyleJsExists()) {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = 'assets/js/style.js';
    head.appendChild(script);
  }
}

/**
 * Initialize the website with the projects list.
 */
function init() {
  loadWebpackStyles();
}

init();
