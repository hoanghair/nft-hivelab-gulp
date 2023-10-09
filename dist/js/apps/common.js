(function (win, $) {
  "use strict";
  // tabs active
  $(".tabs_item").on("click", function (e) {
    // e.preventDefault();
    var tabId = $(this).attr("data-tab");
    $(this).addClass("active").siblings().removeClass("active");
    // $(this).addClass("active");
    // console.log('[data-content="' + tabId + '"]');
    $(".content_tab").removeClass("active");
    $('[data-content="' + tabId + '"]').addClass("active");
  });

  //sections Scroll Animation
  // var sectionsScrollAnimation = [
  //   ".section_hero",
  //   ".section_trending",
  //   ".section_toprated",
  //   ".section_category",
  //   ".section_artist",
  //   ".section_steps",
  // ];

  // sectionsScrollAnimation.forEach(function (section) {
  //   $(section + " .animate_in").each(function (index, el) {
  //     var delay = 0.1 * index + "s";
  //     $(this).css("transition-delay", delay);
  //   });
  // });

  // function scrollAnimation() {
  //   $(".animate_in").each(function () {
  //     var scrollTop = $(document).scrollTop();
  //     var height = $(window).height();
  //     var offsetTop = $(this).offset().top;
  //     if (offsetTop > scrollTop && offsetTop < height + scrollTop) {
  //       $(this).removeClass("animate_in");
  //     }
  //   });
  // }

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
    console.log(delay);
    $(this).css("transition-delay", delay);
  });

  function scrollAnimation() {
    $(".animate_in").each(function () {
      var scrollTop = $(document).scrollTop();
      var height = $(window).height();
      var offsetTop = $(this).offset().top;
      // console.log('offsetTop:', offsetTop , 'scrollTop:', scrollTop , 'height:', height);
      if (offsetTop < height + scrollTop) {
        $(this).removeClass("animate_in");
      }
    });
  }

  $(win).on("load", function () {
    // loadAnimation();
    // scrollAnimation();
  });
  // $(win).on("resize", function () {});
  $(win).scroll(function () {
    scrollAnimation();
  });
})(window, window.jQuery);
