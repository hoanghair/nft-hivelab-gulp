(function (win, $) {
  "use strict";

  function resizeAvatar() {
    const screen_lg = "1366";
    const screen_tb = "1280";
    if (window.innerWidth <= screen_lg) {
      $(".table .avatar").addClass("avatar_small").removeClass("avatar_medium");
    } else {
      $(".table .avatar").addClass("avatar_medium").removeClass("avatar_small");
    }

    if (window.innerWidth < screen_tb) {
      $(".section_toprated .avatar")
        .addClass("avatar_medium")
        .removeClass("avatar_large");
      console.log("123");
    } else {
      $(".section_toprated .avatar")
        .addClass("avatar_large")
        .removeClass("avatar_medium");
    }
  }

  function activeTabs() {
    $(this).parents(".ui_item").find(".tabs_link").removeClass("active");
    //this select container parents '.ui_item' and find ".tabs_link" and only in "ul li"
    $(this).addClass("active");
  }

  // $(".tabs_link").on("click", activeTabs);
  // $(window).on("resize", resizeAvatar);

  $(win).on("load", function () {});
  $(win).on("resize", function () {
    resizeAvatar();
  });
  $(".tabs_link").on("click", activeTabs);
})(window, window.jQuery);
