/**
 * Modal Setup
 */
window.addEventListener('click', (event) => {
  const closeEl = event.target.closest('.modal-close');
  if (closeEl) {
    closeEl.closest('.modal').classList.add('-closed');
  }
});

console.error(`
  “Without requirements or design, programming is the art of adding bugs to an empty text file.”
    - Louis Srygley
`);

// TODO: continue what was started
