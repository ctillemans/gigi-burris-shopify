$('.site-image-nav__link').hover(function () {
  console.log(`hovered on ${this}`);
  var s = $(this).data('imgsrc');
  console.log(s);

  $('.site-image-nav__menu-image').attr('src', s);
});
