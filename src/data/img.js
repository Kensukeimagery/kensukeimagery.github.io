import images from './images.json';

/** portrait by number (1-based, see images.json order) */
export const portrait = (n) => images.portraits[n - 1];
/** work photo by key, e.g. 'work-stlouis-lab' */
export const workImg = (k) => images.work[k];
export const portraits = images.portraits;
export const film = images.film;

/** srcset string for an image entry */
export const srcset = (im) => `${im.sm} 800w, ${im.lg} 1600w`;
