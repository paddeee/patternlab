// Filter toggle
var filterActive = false;
var filterOpen = document.querySelector('.c-form__filters-link');
var hiddenFilters = document.querySelector('.c-form__hidden-filters');
var header = document.querySelector('.header');
var body = document.querySelector('body');

if (filterOpen) {

  filterOpen.addEventListener("click", function (event) {
    event.preventDefault();

    if (filterActive === false) {
      filterActive = true;
      body.style.maxHeight = '100%';
      body.style.overflow = 'hidden';
      header.classList.add("is-hidden");
      hiddenFilters.classList.add("c-form__hidden-filters--active");
    }
    else {
      filterActive = false;
      header.classList.remove("is-hidden");
      body.style.maxHeight = 'auto';
      body.style.overflow = 'visible';
      hiddenFilters.classList.remove("c-form__hidden-filters--active");
    }
  });
}