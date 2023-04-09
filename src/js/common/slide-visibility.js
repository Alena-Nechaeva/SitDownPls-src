export function slideVisibility(elements) {
  elements.forEach((slide) => {
    const links = slide.querySelectorAll('a');
    const btns = slide.querySelectorAll('button');
    const interactive = [...links, ...btns];

    if (!slide.classList.contains("slide-visible")) {
      slide.tabIndex = "-1";
      interactive.forEach(el => {
        el.tabIndex = "-1";
      });
    } else {
      slide.removeAttribute('tabindex');
      interactive.forEach(el => {
        el.removeAttribute('tabindex');
      });
    }
  });
}
