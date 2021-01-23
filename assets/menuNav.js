$('.site-image-nav__link').hover(function () {
  var s = $(this).data('imgsrc');
  $('.site-image-nav__menu-image').attr('src', s);
});
