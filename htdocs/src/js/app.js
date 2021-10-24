import projects from './config/projects';
import { isSmallVw, isStyleJsExists } from './utilities/helpers';

/**
 * Hide the header and footer.
 * @param {HTMLElement} header - The header element.
 * @param {HTMLElement} footer - The footer element.
 */
function hideHeaderFooter(header, footer) {
  header.classList.remove('slide-in--left');
  footer.classList.remove('slide-in--left');
  header.classList.add('slide-out--left');
  footer.classList.add('slide-out--left');
  setTimeout(() => {
    header.classList.add('hide');
    footer.classList.add('hide');
  }, 800);
}

/**
 * Show the header and footer.
 * @param {HTMLElement} header - The header element.
 * @param {HTMLElement} footer - The footer element.
 */
function showHeaderFooter(header, footer) {
  header.classList.remove('slide-out--left');
  footer.classList.remove('slide-out--left');
  header.classList.remove('hide');
  footer.classList.remove('hide');
  header.classList.add('slide-in--left');
  footer.classList.add('slide-in--left');
}

/**
 * Handle header and footer visibility.
 * @returns {void}
 */
function toggleHeaderFooter() {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  if (!isSmallVw()) {
    showHeaderFooter(header, footer);
    return;
  }

  if (header.classList.contains('hide')) {
    showHeaderFooter(header, footer);
  } else {
    hideHeaderFooter(header, footer);
  }
}

/**
 * Add an event listener to show or hide header and footer.
 */
function listenMenuBtn() {
  const menuBtn = document.querySelector('.btn--menu');
  menuBtn.addEventListener('click', toggleHeaderFooter);
}

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
  toggleHeaderFooter();
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
  listenMenuBtn();
}

init();
