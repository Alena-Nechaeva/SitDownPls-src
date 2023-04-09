import { onResizeCatalog } from './modules/on-resize-catalog.js';
import { isWebP } from '../common/webp-class.js';
import { libsActiveCatalog } from './modules/libs-active-catalog.js';

window.addEventListener('DOMContentLoaded', () => {
  isWebP();
  onResizeCatalog();
  libsActiveCatalog();
})
