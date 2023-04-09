export const showMoreCards = () => {

  const showCardsByClick = (showOnLoad = 8, showMore = 4) => {
    const arrItems = [...document.querySelectorAll('.rating__item')];
    const showMoreBtn = document.querySelector('.show-more-btn');

    const showItems = count => {
      arrItems.forEach(el => el.classList.remove('is-visible'));
      arrItems.splice(0, count).forEach(el => el.classList.add('is-visible'));

      showMoreBtn.style.display = '';
      if (!arrItems.length) showMoreBtn.style.display = 'none';
    }

    showItems(showOnLoad);

    showMoreBtn.addEventListener('click', () => {
      showItems(showMore)
    })
  }

  const changingOnBreakpoints = () => {
    if (window.innerWidth > 1300) {
      showCardsByClick();
    } else if (window.innerWidth <= 1300 && window.innerWidth > 992) {
      showCardsByClick(6, 3);
    } else if (window.innerWidth <= 992) {
      showCardsByClick(6, 2);
    }
  }

  changingOnBreakpoints();

  window.addEventListener('resize', () => {
    changingOnBreakpoints();
  });
}

