import './style.css';
document.querySelector('#year').textContent = new Date().getFullYear();

const wineWindow = document.querySelector('.window-toggle');
wineWindow.addEventListener('click', () => {
  const open = wineWindow.getAttribute('aria-pressed') !== 'true';
  wineWindow.setAttribute('aria-pressed', String(open));
  wineWindow.setAttribute('aria-label', open ? 'Close the wine window' : 'Open the wine window');
  wineWindow.title = open ? 'Close the wine window' : 'Open the wine window';
  document.querySelector('#window-status').textContent = open ? 'Cin cin! A little glass from our wine window.' : 'The wine window is closed.';
});
