(function (win, $) {
  "use strict";
  // tabs active
  $(".tabs_item").on("click", function () {
    var tabId = $(this).attr("data-tab");
    $(this).addClass("is_active").siblings().removeClass("is_active");
    $(".content_tab").removeClass("is_active");
    $('[data-content="' + tabId + '"]').addClass("is_active");
  });

  // sections load Animation
  // var sectionsloadAnimation = ["section_hero", "section_marketplace"];

  // function loadAnimation() {
  //   sectionsloadAnimation.forEach(function (sectionClass) {
  //     $("." + sectionClass + " .animate_in").removeClass("animate_in");
  //   });
  // }

   //sections Scroll Animation
  $(".animate_in").each(function () {
    var delay = $(this).data("animation-delay");
    $(this).css("transition-delay", delay);
  });

  function scrollAnimation() {
    var scrollTop = $(document).scrollTop();
    $(".animate_in").each(function () {
      var height = $(window).height();
      var offsetTop = $(this).offset().top;
      console.log(scrollTop - (height * .5));
      console.log(height + scrollTop);
      // console.log("scrollTop" ,scrollTop,"height", height,"offsetTop", offsetTop);
      if (offsetTop > scrollTop - (height * .5) && offsetTop < height + scrollTop) {
        $(this).removeClass("animate_in");
      }
    });
  }

  $(win).on("load", function () {
    // loadAnimation();
    scrollAnimation();
  });
  $(win).scroll(function () {
    scrollAnimation();
  });
})(window, window.jQuery);
