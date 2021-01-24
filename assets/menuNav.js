$('.site-image-nav__link').hover(function () {
  var s = $(this).data('imgsrc');
  $('.site-image-nav__menu-image').attr('src', s);
});

// $('.site-image-nav__listItem--has-dropdown').hover().addClass('open');

$(document).ready(function () {
  $('.site-image-nav__listItem--has-dropdown').hover(
    function () {
      //When trigger is hovered...
      $(this).children('.dropdown-menu').addClass('open');
    },
    function () {
      $(this).children('.dropdown-menu').removeClass('open');
    }
  );
});
