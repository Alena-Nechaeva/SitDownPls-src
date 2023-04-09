export const onResizeCatalog = () => {
  const mobFiltersCategory = document.querySelector('.mobile-filters__category');
  const mobFiltersPrice = document.querySelector('.mobile-filters__price');
  const mobFiltersDiscount = document.querySelector('.mobile-filters__discount');
  const mobFiltersColor = document.querySelector('.mobile-filters__color');

  const btnMobFiltersCategory = document.querySelector('.mobile-filters__category .dropdown-btn');
  const btnMobFiltersPrice = document.querySelector('.mobile-filters__price .dropdown-btn');
  const btnMobFiltersDiscount = document.querySelector('.mobile-filters__discount .dropdown-btn');
  const btnMobFiltersColor = document.querySelector('.mobile-filters__color .dropdown-btn');

  const filtersCategoryList = document.querySelector('.catalog-category');
  const filtersPriceBlock = document.querySelector('.price');
  const filtersDiscountList = document.querySelector('.discount');
  const filtersColorList = document.querySelector('.color');

  const deskFiltersCategory = document.querySelector('.fcategory-block');
  const descFiltersPrice = document.querySelector('.fprice-block');
  const descFiltersDiscount = document.querySelector('.fdiscount-block');
  const descFiltersColor = document.querySelector('.fcolor-block');

  function openMenu(btn, block) {
    btn.addEventListener('click', function () {
      block.classList.toggle('is-drop-open')
      btn.classList.toggle('menu-is-open');
    })
  }

  openMenu(btnMobFiltersCategory, filtersCategoryList);
  openMenu(btnMobFiltersPrice, filtersPriceBlock);
  openMenu(btnMobFiltersDiscount, filtersDiscountList);
  openMenu(btnMobFiltersColor, filtersColorList);

  const isChangingCatalog = () => {
    if (window.innerWidth > 1300) {
      deskFiltersCategory.append(filtersCategoryList);
      descFiltersPrice.append(filtersPriceBlock);
      descFiltersDiscount.append(filtersDiscountList);
      descFiltersColor.append(filtersColorList);
    }
    else if (window.innerWidth <= 1300) {
      mobFiltersCategory.append(filtersCategoryList);
      mobFiltersPrice.append(filtersPriceBlock);
      mobFiltersDiscount.append(filtersDiscountList);
      mobFiltersColor.append(filtersColorList);
    }
  }

  isChangingCatalog();

  window.addEventListener('resize', () => {
    isChangingCatalog();
  })
}
