(function (win, $) {
  "use strict";

  $(".tabs_link").click(function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find(".tabs_link")
      .removeClass("active");
  });

  var sections = [
    ".section_hero",
    ".section_trending",
    ".section_toprated",
    ".section_category",
    ".section_artist",
    ".section_steps",
  ];

  sections.forEach(function (section) {
    $(section + " .animate_in").each(function (index, el) {
      var delay = 0.1 * index + "s";
      // console.log(delay);
      $(this).css("transition-delay", delay);
    });
  });

  function scrollAnimation() {
    $(".animate_in").each(function () {
      var scrollTop = $(document).scrollTop();
      var height = $(window).height();
      var offsetTop = $(this).offset().top;
      if (offsetTop > scrollTop && offsetTop < height + scrollTop) {
        $(this).removeClass("animate_in");
      }
    });
  }

  function loadAnimation() {
    $(".section_hero .animate_in").removeClass("animate_in");
  }

  $(win).on("load", function () {
    loadAnimation();
  });
  $(win).on("resize", function () {
  });
  $(win).scroll(function () {
    scrollAnimation();
  });
})(window, window.jQuery);
