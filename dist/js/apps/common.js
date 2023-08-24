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

  $(window).on("resize", resizeAvatar);

  $(function () {});

  $(win).on("load", function () {});
})(window, window.jQuery);
