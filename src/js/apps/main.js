(function (win, $) {
  var variableGlobal = "global variable";

  // sample1
  var sample = (function () {
    var variable = "sample loaded";
    return {
      init: function () {
        console.log(variable);
        console.log(variableGlobal);
      },
    };
  })();

  // sample2
  var sample2 = (function () {
    var variable = "sample2 loaded";
    return {
      init: function () {
        console.log(variable);
      },
    };
  })();

  // sample3
  var sample3 = (function () {
    var variable = "sample3 loaded";

    var init = function () {
      console.log(variable);
    };
    return {
      init: init,
    };
  })();

  // sample4
  var sample4 = function () {
    var variable = "sample4 loaded";

    console.log(variable);
  };

  // sample5
  function sample5() {
    var variable = "sample5 loaded";

    console.log(variable);
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
        bindEvent: function () {
          console.log(testText, var1, var2);
        },
      };
      test.init();
    });
  };

  // startCountdownTimer
  function startCountdownTimer() {
    // // Thiết lập thời gian ban đầu
    let [hours, minutes, seconds] = [23, 59, 59];

    // Hàm đếm ngược
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
          clearInterval(interval); // Dừng
        }

        // Hiển thị thời gian cập nhật
        $(".hour").text(hours.toString().padStart(2, "0"));
        $(".minute").text(minutes.toString().padStart(2, "0"));
        $(".second").text(seconds.toString().padStart(2, "0"));
      }, 1000);
    }

    // Bắt đầu khi web được tải
    countdown();
  }

  //scroll navbar
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 0) {
      $(".header_box").addClass("header_scroll");
    } else {
      $(".header_box").removeClass("header_scroll");
    }
  });

  // toggle btn nav
  const inputs = $("input");
  const labels = $("label");
  const body = $("body");

  function toggleOverflow() {
    body.toggleClass("off_scroll");
  }

  // function check(status) {
  //   inputs.prop("checked", status);
  //   labels.click(function (e) {
  //     $(".nav").toggleClass("nav_view");
  //     toggleOverflow();
  //   });
  // }
  function check() {
    // inputs.prop("checked", status);
    $(".nav_toggler").click(function (e) {
      console.log('abc');
      $(".nav").toggleClass("nav_view");
      toggleOverflow();
    });
  }

  $(function () {
    sample2.init();
    sample3.init();
  });

  $(win).on("load", function () {
    sample.init();
    sample4();
    sample5();
    $("body").sample6();
    startCountdownTimer();
    check();
  });
})(window, window.jQuery);
