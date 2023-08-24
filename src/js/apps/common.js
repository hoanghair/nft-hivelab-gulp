(function (win, $) {
  "use strict";

  function resizeAvatar() {
    const screen_lg = "1366";
    if (window.innerWidth <= screen_lg) {
      $(".table .avatar").addClass("avatar_small").removeClass("avatar_medium");
    } else {
      $(".table .avatar").addClass("avatar_medium");
    }
  }

  function activeTabs() {
    $(this).parents(".ui_item").find(".tabs_link").removeClass("active");
    //this select container parents '.ui_item' and find ".tabs_link" and only in "ul li"
    $(this).addClass("active");
  }

  $(window).on("resize", resizeAvatar);
  $(".tabs_link").on("click", activeTabs);

  $(function () {});

  $(win).on("load", function () {});
})(window, window.jQuery);
