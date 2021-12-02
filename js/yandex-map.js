let btnMap = document.querySelector('.btn-map');
let catalogWrapper = document.querySelector('.catalog-wrapper');
let catalogCardsRow = document.querySelector('.catalog-cards-row');
let map = document.querySelector('.map-wrapper');
let filtersMobileBtn = document.querySelector('.catalog-filters-wrapper-mobile');
let btnMapMobile = document.querySelector('.btn-map-mobile');
let btnList = document.querySelector('.btn-list');
let btnExitMap = document.querySelector('.btn-exit-map');

function openMap() {
  catalogWrapper.classList.add('catalog-map');
  catalogCardsRow.classList.remove('row-cols-lg-3');
  catalogCardsRow.classList.add('row-cols-lg-1');
  map.classList.add('active');
  filtersMobileBtn.classList.add('map-open');
};

btnMap.onclick = openMap;
btnMapMobile.onclick = openMap;

function closeMap() {
  catalogWrapper.classList.remove('catalog-map');
  catalogCardsRow.classList.remove('row-cols-lg-1');
  catalogCardsRow.classList.add('row-cols-lg-3');
  map.classList.remove('active');
  filtersMobileBtn.classList.remove('map-open');
};

btnList.onclick = closeMap;
btnExitMap.onclick = closeMap;