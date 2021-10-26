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

export { hideToLeft, showFromLeft, hideToBottom, showFromBottom };
