/* eslint-disable */
(function ($) {
  'use strict';

  // Preloader js
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  // Current navigation link
  $(document).ready(function ($) {
    var url = window.location.pathname;
    if(url.length > 1) {
      url = window.location.pathname.replace(/\/+$/, '');
    }
    var activePage = url;
    $('.nav-item').each(function () {
      var linkPage = $(this).find('.nav-link').attr('href');
        if (activePage == linkPage) {
            $(this).find('.nav-link').addClass("current");
        }
    });
  });

  // Sticky Menu
  $(window).scroll(function () {
    var height = $('.top-header').innerHeight();
    if ($('header').offset().top > 10) {
      $('.top-header').addClass('hide');
      $('.navigation').addClass('nav-bg');
      $('.navigation').css('margin-top','-'+height+'px');
    } else {
      $('.top-header').removeClass('hide');
      $('.navigation').removeClass('nav-bg');
      $('.navigation').css('margin-top','-'+0+'px');
    }
  });



  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  //Hero Slider
  $('.hero-slider').slick({
    autoplay: false,
    /*autoplaySpeed: 7500,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    arrows: true,
    fade: true,*/
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
    dots: false
  });
  // $('.hero-slider').slickAnimation();

  // venobox popup
  $(document).ready(function () {
    $('.venobox').venobox();
  });

  // // filter
  $(document).ready(function () {
    var containerEl = document.querySelector('.filtr-container');
    if (containerEl) {
      $('.filtr-container').filterizr({
        layout: 'sameWidth',
        animationDuration: 0,
      });
    }
    // Active changer
    $('.filter-controls li').on('click', function () {
      $('.filter-controls li').removeClass('active');
      $(this).addClass('active');
    });
  });

  //  Count Up
  function counter() {
    var oTop;
    if ($('.count').length !== 0) {
      oTop = $('.count').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });

  // Animation
  $(document).ready(function () {
    $('.has-animation').each(function (index) {
      $(this).delay($(this).data('delay')).queue(function () {
        $(this).addClass('animate-in');
      });
    });
  });

})(jQuery);


