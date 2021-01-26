$('.site-image-nav__link').hover(function () {
  var s = $(this).data('imgsrc');
  var href = $(this).attr('href');
  $('.site-image-nav__menu-image').attr('src', s);
  $('.site-image-nav__image-link').attr('href', href);
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

$('.submenu-toggle-button').click(function (e) {
  e.preventDefault();
  //When trigger is hovered...
  $(this).parent().siblings('.site-image-nav__subdropdown').toggleClass('open');
  if ($(this).hasClass('open')) {
    $(this).removeClass('open');
  } else {
    $(this).addClass('open');
  }
});
