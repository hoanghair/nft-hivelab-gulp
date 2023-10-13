(function (win, $) {
  var variableGlobal = "global variable";

  // sample1
  var sample = (function () {
    var variable = "sample loaded";
    return {
      init: function () {},
    };
  })();

  // sample2
  var sample2 = (function () {
    var variable = "sample2 loaded";
    return {
      init: function () {},
    };
  })();

  // sample3
  var sample3 = (function () {
    var variable = "sample3 loaded";

    var init = function () {};
    return {
      init: init,
    };
  })();

  // sample4
  var sample4 = function () {
    var variable = "sample4 loaded";
  };

  // sample5
  function sample5() {
    var variable = "sample5 loaded";
  }

  // sample6
  $.fn.sample6 = function (options) {
    var settings = {
      var1: "var1",
      var2: 650,
    };
    var opts = $.extend({}, settings, options);

    return this.each(function () {
      var obj = $(this),
        testText = "sample6 loaded",
        var1 = opts.var1,
        var2 = opts.var2;

      var test = {
        init: function () {
          test.bindEvent();
        },
        bindEvent: function () {},
      };
      test.init();
    });
  };

  //scroll navbar
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 0) {
      $(".header_box").addClass("header_scroll");
    } else {
      $(".header_box").removeClass("header_scroll");
    }
  });

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

      if (
        offsetTop > scrollTop - height * 0.5 &&
        offsetTop < height + scrollTop
      ) {
        $(this).removeClass("animate_in");
      }
    });
  }

  // toggle btn nav
  const body = $("body");

  function toggleOverflow() {
    body.toggleClass("off_scroll");
  }

  function toggleNavigation() {
    $(".nav").toggleClass("nav_view");
    toggleOverflow();
    $(".dimmed").toggle();
  }

  $(".nav_toggler").on("click", function () {
    toggleNavigation();
  });

  $(".dimmed").on("click", function () {
    toggleNavigation();
  });

  // tabs active
  $(".tabs_item").on("click", function () {
    var tabId = $(this).attr("data-tab");
    $(this).addClass("is_active").siblings().removeClass("is_active");
    $(".content_tab").removeClass("is_active");
    $('[data-content="' + tabId + '"]').addClass("is_active");
  });

  // startCountdownTimer
  function startCountdownTimer() {
    // // Set the initial time
    let [hours, minutes, seconds] = [23, 59, 59];

    // Countdown function
    function countdown() {
      const interval = setInterval(function () {
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(interval); // stop
        }
        // Show update time
        $(".hour").text(hours.toString().padStart(2, "0"));
        $(".minute").text(minutes.toString().padStart(2, "0"));
        $(".second").text(seconds.toString().padStart(2, "0"));
      }, 1000);
    }

    // Starts when the web is loaded
    countdown();
  }

  $(function () {
    sample2.init();
    sample3.init();
  });

  $(win).scroll(function () {
    scrollAnimation();
  });

  $(win).on("load", function () {
    sample.init();
    sample4();
    sample5();
    $("body").sample6();
    scrollAnimation();
    startCountdownTimer();
  });
})(window, window.jQuery);
