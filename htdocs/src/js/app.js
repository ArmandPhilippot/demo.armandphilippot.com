import projects from './config/projects';
import { isSmallVw, isStyleJsExists } from './utilities/helpers';

/**
 * Display or hide the toolbar depending on the current viewport width.
 */
function toggleToolbar() {
  const toolbar = document.querySelector('.toolbar');
  if (isSmallVw()) {
    toolbar.style.display = '';
  } else {
    toolbar.style.display = 'none';
  }
}

/**
 * Change the visibility of some DOM elements.
 */
function updateView() {
  toggleToolbar();
}

/**
 * Update view when the window size changes.
 */
function listenWindowSize() {
  window.addEventListener('resize', updateView);
}

/**
 * Create a list item for a project.
 * @param {Integer} id - The project id.
 * @param {String} name - The project name.
 * @returns {HTMLElement} The list item.
 */
function getProjectsNavItem(id, name) {
  const item = document.createElement('li');
  const link = document.createElement('a');
  link.classList.add('nav__link', 'nav__link--app');
  link.href = id;
  link.id = id;
  link.textContent = name;
  item.classList.add('nav__item');
  item.appendChild(link);
  return item;
}

/**
 * Print the list of available projects.
 */
function printProjectsNav() {
  const ul = document.querySelector('.nav .nav__list');

  projects.forEach((project) => {
    const item = getProjectsNavItem(project.id, project.name);
    ul.appendChild(item);
  });
}

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
  printProjectsNav();
  updateView();
  listenWindowSize();
}

init();
