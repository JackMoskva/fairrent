const selectPrice = new CustomSelect('#selectPrice');
const selectPriceFrom = new CustomSelect('#selectPriceFrom');
const selectPriceBefore = new CustomSelect('#selectPriceBefore');


$(function () {
  $(".main-city-chosen-select").chosen({
    allow_single_deselect: true,
    disable_search_threshold: 1,
    width: "100%"
  });
});

$(function () {
  $(".sorting-chosen-select").chosen({
    width: "100%"
  });
});