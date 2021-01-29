$('.site-image-nav__link').hover(function () {
  var s = $(this).data('imgsrc');
  var href = $(this).attr('href');
  $('.site-image-nav__menu-image').attr('src', s);
  $('.site-image-nav__image-link').attr('href', href);
});

// $('.site-image-nav__listItem--has-dropdown').hover().addClass('open');

$('.site-image-nav__listItem--has-dropdown').hover(
  function () {
    //When trigger is hovered...
    $(this).children('.dropdown-menu').addClass('open');
  },
  function () {
    $(this).children('.dropdown-menu').removeClass('open');
  }
);

$('.site-image-nav__listItem--has-subdropdown').mouseenter(function () {
  //When trigger is hovered...
  $(this).children('.site-image-nav__subdropdown').addClass('open');
});
$('.site-image-nav__listItem--has-subdropdown').mouseleave(function () {
  //When trigger is hovered...
  $(this).children('.site-image-nav__subdropdown').removeClass('open');
});

$('.submenu-toggle-button').click(function (e) {
  e.preventDefault();
  //When trigger is hovered...
  $(this).parent().siblings('.site-image-nav__subdropdown').toggleClass('toggled');
  if ($(this).hasClass('toggled')) {
    $(this).removeClass('toggled');
  } else {
    $(this).addClass('toggled');
  }
});

/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

/*	DoubleTagToGo.js By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License */
(function (e, t, n, r) {
  e.fn.doubleTapToGo = function (r) {
    if (
      !('ontouchstart' in t) &&
      !navigator.msMaxTouchPoints &&
      !navigator.userAgent.toLowerCase().match(/windows phone os 7/i)
    ) {
      return false;
    }
    this.each(function () {
      var t = false;
      e(this).on('click', function (n) {
        var r = e(this);
        if (r[0] != t[0]) {
          n.preventDefault();
          t = r;
        }
      });
      e(n).on('click touchstart MSPointerDown', function (n) {
        var r = true,
          i = e(n.target).parents();

        for (var s = 0; s < i.length; s++) if (i[s] == t[0]) r = false;
        if (r) t = false;
      });
    });
    return this;
  };
})(jQuery, window, document);

$('.site-image-nav__listItem--has-dropdown').doubleTapToGo();
$('.site-image-nav__listItem--has-subdropdown').doubleTapToGo();
