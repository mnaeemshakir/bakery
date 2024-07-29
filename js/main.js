(function ($) {
  "use strict";

  //Hide Loading Box (Preloader)
  function preloader() {
    if ($(".preloader").length) {
      $(".preloader").delay(200).fadeOut(500);
    }
  }

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".boxcar-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".header-style-v1");
      var scrollLink = $(".scroll-to-top");
      var sticky_header = $(".boxcar-header .sticky-header");
      if (windowpos > 100) {
        sticky_header.addClass("fixed-header animated slideInDown");
        scrollLink.fadeIn(300);
      } else {
        sticky_header.removeClass("fixed-header animated slideInDown");
        scrollLink.fadeOut(300);
      }
      if (windowpos > 1) {
        siteHeader.addClass("fixed-header");
      } else {
        siteHeader.removeClass("fixed-header");
      }
    }
  }
  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".boxcar-header li.dropdown ul").length) {
    $(".boxcar-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>'
    );
  }

  

  var goTop = function () {
    if ($(".scroll-to-target").length) {
      $(".scroll-to-target").on("click", function () {
        var target = $(this).attr("data-target");
        // animate
        $("html, body").animate(
          {
            scrollTop: $(target).offset().top,
          },
          1500
        );
      });
    }
  };

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }
  
  $(window).on("scroll", function () {
    headerStyle();
  });
  

  /* ==========================================================================
   When document is loading, do
   ========================================================================== */

  $(window).on("load", function () {
    activeSuggest();
    goTop();
    preloader();
  });
})(window.jQuery);
