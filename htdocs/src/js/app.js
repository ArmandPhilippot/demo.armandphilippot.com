import projects from './config/projects';
import { isStyleJsExists } from './utilities/helpers';

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
}

init();
