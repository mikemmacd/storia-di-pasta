import './style.css';
document.querySelector('#year').textContent = new Date().getFullYear();

const wineWindow = document.querySelector('.window-toggle');
const status = document.querySelector('#window-status');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const timers = new Set();
let automaticTimer;
let introduced = false;
let playing = false;

function later(callback, delay) {
  const timer = window.setTimeout(() => {
    timers.delete(timer);
    callback();
  }, delay);
  timers.add(timer);
}

function reset() {
  window.clearTimeout(automaticTimer);
  timers.forEach(timer => window.clearTimeout(timer));
  timers.clear();
  wineWindow.dataset.open = 'false';
  wineWindow.dataset.glass = 'false';
  playing = false;
}

function play(announce = false) {
  const restarting = playing;
  reset();
  playing = true;
  if (announce) status.textContent = 'Cin cin! A little glass from our wine window.';

  // Reduced-motion visitors get a brief still reveal only when they ask for it.
  if (reducedMotion.matches) {
    wineWindow.dataset.open = 'true';
    wineWindow.dataset.glass = 'true';
    later(reset, 1500);
    return;
  }

  const begin = () => {
    wineWindow.dataset.open = 'true';
    later(() => { wineWindow.dataset.glass = 'true'; }, 650);
    later(() => { wineWindow.dataset.glass = 'false'; }, 2300);
    later(() => { wineWindow.dataset.open = 'false'; }, 2700);
    later(() => { playing = false; }, 3300);
  };
  // A repeated click first lets the door settle before replaying the sequence.
  if (restarting) later(begin, 600);
  else begin();
}

function scheduleIntroduction() {
  window.clearTimeout(automaticTimer);
  if (introduced || document.hidden || reducedMotion.matches) return;
  automaticTimer = window.setTimeout(() => {
    introduced = true;
    play();
  }, 2000);
}

wineWindow.addEventListener('click', () => {
  introduced = true;
  play(true);
});

if (document.readyState === 'complete') scheduleIntroduction();
else window.addEventListener('load', scheduleIntroduction, { once: true });

document.addEventListener('visibilitychange', () => {
  if (document.hidden) reset();
  else scheduleIntroduction();
});
reducedMotion.addEventListener('change', () => {
  reset();
  scheduleIntroduction();
});
window.addEventListener('pagehide', reset);
