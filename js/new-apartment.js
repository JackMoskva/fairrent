var characters_Limit = 2500;
$('.nas-form-text').keyup(function () {
  if ($(this).val().length > characters_Limit) {
    $(this).val($(this).val().substr(0, characters_Limit));

  }
  $('.counter').text(this.value.replace(/{.*}/g, '').length);
});

$(function () {
  $(".nearest-metro-select").chosen({
    width: "100%"
  });
});