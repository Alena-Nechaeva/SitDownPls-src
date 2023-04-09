export const libsActiveHeader = () => {
  const categorySelect = document.querySelector('.category__select');
  const regionSelect = document.querySelector('.region__select');

  const choicesCategory = new Choices(categorySelect, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices category__select',
    },
    itemSelectText: '',
    shouldSort: false,
    allowHTML: true,
  });

  const choicesRegion = new Choices(regionSelect, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices region__select',
    },
    itemSelectText: '',
    shouldSort: false,
    allowHTML: true,
  })
}
