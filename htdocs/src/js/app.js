import projects from './config/projects';
import { isSmallVw, isStyleJsExists } from './utilities/helpers';

/**
 * Change the element classes to hide it with a slide out left animation.
 * @param {HTMLElement} el - The HTMLElement to hide.
 */
function hideToLeft(el) {
  el?.classList.remove('slide-in--left');
  el?.classList.add('slide-out--left');
  setTimeout(() => {
    el?.classList.add('hide');
  }, 800);
}

/**
 * Change the element classes to show it with a slide in left animation.
 * @param {HTMLElement} el - The HTMLElement to show.
 */
function showFromLeft(el) {
  el?.classList.remove('slide-out--left');
  el?.classList.remove('hide');
  el?.classList.add('slide-in--left');
}

/**
 * Show/hide header and footer with slide animation (left).
 */
function toggleHeaderFooter() {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const elements = [header, footer];

  elements.forEach((el) => {
    if (el.classList.contains('hide')) {
      showFromLeft(el);
    } else {
      hideToLeft(el);
    }
  });
}

/**
 * Change the element classes to hide it with a slide out bottom animation.
 * @param {HTMLElement} el - The HTMLElement to hide.
 */
function hideToBottom(el) {
  el?.classList.remove('slide-in--up');
  el?.classList.add('slide-out--bottom');
  setTimeout(() => {
    el?.classList.add('hide');
  }, 800);
}

/**
 * Change the element classes to show it with a slide in up animation.
 * @param {HTMLElement} el - The HTMLElement to show.
 */
function showFromBottom(el) {
  el?.classList.remove('slide-out--bottom');
  el?.classList.remove('hide');
  el?.classList.add('slide-in--up');
}

/**
 * Show/hide project details with slide animation (bottom).
 */
function toggleProjectDetails() {
  const details = document.querySelector('.project-details');

  if (details.classList.contains('hide')) {
    showFromBottom(details);
  } else {
    hideToBottom(details);
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
 * Show or hide the project details button depending on current location.
 */
function toggleProjectDetailsBtn() {
  const button = document.querySelector('.btn--details');
  const currentPath = window.location.pathname;

  if (currentPath === '/') {
    button.style.display = 'none';
  } else {
    button.style.display = '';
  }
}

/**
 * Update the visibility of some DOM elements depending on viewport.
 */
function updateView() {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const toolbar = document.querySelector('.toolbar');
  const details = document.querySelector('.project-details');

  if (isSmallVw()) {
    header.classList.add('hide');
    footer.classList.add('hide');
    toolbar.classList.remove('hide');
    details?.classList.add('hide');
    details?.classList.remove('fade-in');
  } else {
    showFromLeft(header);
    showFromLeft(footer);
    toolbar.classList.add('hide');
    details?.classList.remove('hide');
    details?.classList.add('fade-in');
  }

  toggleProjectDetailsBtn();
}

/**
 * Update view when the window size changes.
 */
function listenWindowSize() {
  window.addEventListener('resize', updateView);
}

/**
 * Retrieve a project by id.
 * @param {Integer} id - The project id.
 * @returns {Object} The current project.
 */
function getCurrentProject(id) {
  return projects.find((project) => project.id === id);
}

/**
 * Get a list item for the given repo.
 * @param {String} name - The repository name.
 * @param {String} url - The repository URL.
 * @returns {HTMLElement} A list item.
 */
function getRepoItem(name, url) {
  const item = document.createElement('li');
  const link = document.createElement('a');
  const span = document.createElement('span');
  span.classList.add('screen-reader-text');
  span.textContent = name;
  link.classList.add('list__link', `list__link--${name.toLocaleLowerCase()}`);
  link.href = url;
  link.appendChild(span);
  item.classList.add('list__item');
  item.appendChild(link);
  return item;
}

/**
 * Get the repos list wrapped inside ul element and the title.
 * @param {Object[]} repos - An array of repo with name and URL.
 * @returns {[title, list]} An array of HTMLElements for title and list.
 */
function getRepos(repos) {
  if (repos.length === 0) return [];

  const wrapper = document.createElement('div');
  const title = document.createElement('h3');
  const list = document.createElement('ul');
  const items = repos.map((repo) => getRepoItem(repo.name, repo.url));
  title.classList.add('project-details__title');
  title.textContent = 'Repositories:';
  list.classList.add('list', 'list--repos');
  list.append(...items);
  wrapper.append(title, list);
  return [title, list];
}

/**
 * Get the technologies list wrapped inside ul element and the title.
 * @param {String[]} technologies - An array of technology names.
 * @returns {[title, list]} An array of HTMLElements for title and list.
 */
function getTechs(technologies) {
  if (technologies.length === 0) return [];

  const title = document.createElement('h3');
  title.classList.add('project-details__title');
  title.textContent = 'Technologies:';
  const list = document.createElement('ul');
  const items = technologies.map((technology) => {
    const item = document.createElement('li');
    item.textContent = technology;
    return item;
  });
  list.classList.add('list', 'list--tech');
  list.append(...items);
  return [title, list];
}

/**
 * Retrieve the project details.
 * @param {Object} project - The project.
 * @returns {HTMLElement} The project details wrapped in a div.
 */
function getProjectDetails(project) {
  const details = document.createElement('div');
  const title = document.createElement('h2');
  const techList = project?.technologies ? getTechs(project.technologies) : [];
  const reposList = getRepos(project.repo);
  let description;

  if (project.description) {
    description = document.createElement('p');
    description.textContent = project.description;
  } else {
    description = '';
  }

  title.classList.add('project-details__title');
  title.textContent = `About ${project.name}`;
  details.classList.add('project-details');
  details.replaceChildren(title, description, ...techList, ...reposList);

  return details;
}

/**
 * Get an iframe for the given path/url.
 * @param {String} src - The path/url to use as source.
 * @returns {HTMLElement} The iframe.
 */
function getIframe(src) {
  const iframe = document.createElement('iframe');
  iframe.src = src;
  return iframe;
}

/**
 * Retrieve the project preview.
 * @param {String} projectPath - The project path.
 * @returns {HTMLElement} The project preview wrapped in a div.
 */
function getProjectPreview(projectPath) {
  const preview = document.createElement('div');
  const iframe = getIframe(projectPath);
  preview.classList.add('project-preview', 'fade-in');
  preview.replaceChildren(iframe);
  return preview;
}

/**
 * Display the targeted project.
 * @param {String} id - The project id.
 * @param {String} href - The project URL.
 */
function showProject(id, href) {
  const currentProject = getCurrentProject(id);
  const main = document.querySelector('.main');
  const details = getProjectDetails(currentProject);
  const preview = getProjectPreview(currentProject.path);
  const detailsBtn = document.querySelector('.btn--details');

  if (isSmallVw()) details.classList.add('hide');

  detailsBtn.textContent = `About ${currentProject.name}`;
  detailsBtn.addEventListener('click', toggleProjectDetails);
  window.history.pushState({}, currentProject.name, href);
  main.replaceChildren(preview, details);
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
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showProject(id, e.target.href);
    toggleProjectDetailsBtn();
    if (isSmallVw()) toggleHeaderFooter();
  });
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
