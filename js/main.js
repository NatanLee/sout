$(document).ready(function () {
  
  // ---------------------Preloader-----------------------
  $(window).on('load', function () { // makes sure the whole site is loaded 
    $('#ctn-preloader').addClass('loaded');
    // Una vez haya terminado el preloader aparezca el scroll
    $('body').addClass('scroll');

    if ($('#ctn-preloader').hasClass('loaded')) {
      // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
      $('#preloader').delay(1000).queue(function () {
        $(this).remove();
      });

    }

  });
  
//------------------------------ Sliders------------------------------
  $('.bg-main').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    fade: true,
    infinite: true,
    cssEase: 'linear',
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    pauseOnFocus: false,
    swipeToSlide: true
  });

  $('.lab-slider').slick({
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    infinite: true,
    cssEase: 'linear',
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipeToSlide: true
  });

  $('.clients-slider').slick({
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [{

      breakpoint: 1200,
      settings: {
        dots: true
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        dots: true
      }
    
    }, {

      breakpoint: 576,
      settings: {
        slidesToShow: 3
      }

    }]
  });

  $('.licenses-slider').slick({
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [{

      breakpoint: 992,
        settings: {
          dots: true
        }

      }, {
      
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }]
  });
  // -------------------Sticky Nav----------------------
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $('nav').addClass("sticky").addClass("flipInX");
    } else {
      $('nav').removeClass("sticky").removeClass("flipInX");
    }
  });
  // ----------------------Инициализация гамбургера-------------
  $.fatNav();
  // -------------------------Top-Btn---------------------------
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });

  $('#topBtn').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
  });
  // -----------------------Плавная прокрутка вниз---------------------
  $('.menu-about').on('click', function (e) {
    $('html,body').stop().animate({
      scrollTop: $('#about').offset().top - 70
    }, 2000);
    e.preventDefault();
  });

  $('.menu-price').on('click', function (e) {
    $('html,body').stop().animate({
      scrollTop: $('#price').offset().top - 70
    }, 2000);
    e.preventDefault();
  });

  $('.menu-steps').on('click', function (e) {
    $('html,body').stop().animate({
      scrollTop: $('#steps').offset().top - 70
    }, 2000);
    e.preventDefault();
  });

  $('.menu-faq').on('click', function (e) {
    $('html,body').stop().animate({
      scrollTop: $('#faq').offset().top - 70
    }, 2000);
    e.preventDefault();
  });

  $('.menu-contacts').on('click', function (e) {
    $('html,body').stop().animate({
      scrollTop: $('#contacts').offset().top - 70
    }, 2000);
    e.preventDefault();
  });
  // -----------------------Animated-------------------------
  if ($(window).width() > 1200) {
    $(window).scroll(function () {
      $('.company-title, .lab-title, .wrap-slider, .licenses-title, .license-item,.advantages-title, .advantage-item, .price-title,  .economy-title, .economy-details, .steps-title, .faq-title').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
          $(this).addClass("fadeIn");
        }
      });
    });

    $(window).scroll(function () {
      $('.company-descript, .sale, .economy-plus, .acordeon-faq').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
          $(this).addClass("fadeInLeft");
        }
      });
    });

    $(window).scroll(function () {
      $('.video-company, .price-description, .conditions,  .expert, .steps-details, .faq-question, .block-manager').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
          $(this).addClass("fadeInUp");
        }
      });
    });

    $(window).scroll(function () {
      $('.lab-descript, .price-section, .acordeon-economy, .tabs').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
          $(this).addClass("fadeInRight");
        }
      });
    });
  } else {
    // change functionality for larger screens
  };
  
  
  // -----------------------------Accordeon-------------------------
  $('.ctn-title-content-acordeon').on('click', function () {
    $(this).children('.icon-acordeon').toggleClass('rotate-icon-acordeon');
    $(this).toggleClass('ctn-title-content-acordeon-active');
    $(this).parent('.ctn-acordeon').siblings('.ctn-acordeon').find('.ctn-title-content-acordeon').removeClass('ctn-title-content-acordeon-active');
    $(this).children('.title-content-acordeon').toggleClass('title-content-acordeon-active');
    $(this).parent('.ctn-acordeon').siblings('.ctn-acordeon').find('.title-content-acordeon').removeClass('title-content-acordeon-active');
    $(this).parent('.ctn-acordeon').siblings('.ctn-acordeon').find('.icon-acordeon').removeClass('rotate-icon-acordeon');
    $(this).next().slideToggle(500);
    $(this).parent('.ctn-acordeon').siblings('.ctn-acordeon').find('.ctn-content-acordeon').slideUp(500);
  });
  
  // ---------------------Counter--------------------------
  var show = true;
  var countbox = ".indicator-item__number";

  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      $('.indicator-item__number').css('opacity', '1');
      $('.indicator-item__number').spincrement({
        thousandSeparator: " ",
        duration: 1200
      });

      show = false;
    }
  });
  // ------------------Modal-Licenses----------------------------
  $('.mask_one').click(function () {
    $('#modal-license1').arcticmodal();
  });

  $('.mask_two').click(function () {
    $('#modal-license2').arcticmodal();
  });

  $('.mask_three').click(function () {
    $('#modal-license3').arcticmodal();
  });

  $('.mask_four').click(function () {
    $('#modal-license4').arcticmodal();
  });

  // -------------------------Mask phone in form------------------------
  $("#phone").mask("+7 (999) 999-99-99");
  $("#phone2").mask("+7 (999) 999-99-99");
  $("#phone3").mask("+7 (999) 999-99-99");
  $("#phone4").mask("+7 (999) 999-99-99");

  // -----------------------------Tabs----------------------------
  $(function () {
    $("ul.tabs__caption").on("click", "li:not(.active)", function () {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
// ------------------------Parallax-mouse-------------------------
  $(function () {
    var scene = document.getElementById('scene-one');
    var parallax = new Parallax(scene);
  });

  $(function () {
    var scene = document.getElementById('scene-two');
    var parallax = new Parallax(scene);
  });

  $(function () {
    var scene = document.getElementById('scene-three');
    var parallax = new Parallax(scene);
  });

  $(function () {
    var scene = document.getElementById('scene-four');
    var parallax = new Parallax(scene);
  });

  $(function () {
    var scene = document.getElementById('scene-five');
    var parallax = new Parallax(scene);
  });

  $(function () {
    var scene = document.getElementById('scene-six');
    var parallax = new Parallax(scene);
  });
  // ----------------------Circle-Progress------------------------
  
  $("#circle-economy_one").circliful({
    animation: 1,
    animationStep: 2,
    foregroundBorderWidth: 15,
    foregroundColor: '#027B15',
    backgroundBorderWidth: 15,
    fontColor: '#1f1f1f',
    animateInView: true,
    replacePercentageByText: '60 тыс.'

  });

  $("#circle-economy_two").circliful({
    animation: 1,
    animationStep: 2,
    foregroundBorderWidth: 15,
    foregroundColor: '#027B15',
    backgroundBorderWidth: 15,
    fontColor: '#1f1f1f',
    percent: 9,
    animateInView: true,
    beforePercent: 'до'
  });

  $("#circle-economy_three").circliful({
    animation: 1,
    animationStep: 2,
    foregroundBorderWidth: 15,
    foregroundColor: '#027B15',
    backgroundBorderWidth: 15,
    fontColor: '#1f1f1f',
    percent: 40,
    animateInView: true,
    beforePercent: 'до'
  });

  // ---------------------Form-files--------------------------------

  function bs_input_file() {
    $(".input-file").before(
      function () {
        if (!$(this).prev().hasClass('input-ghost')) {
          var element = $("<input type='file' class='input-ghost' style='visibility:hidden; height:0'>");
          element.attr("name", $(this).attr("name"));
          element.change(function () {
            element.next(element).find('input').val((element.val()).split('\\').pop());
          });
          $(this).find("button.btn-choose").click(function () {
            element.click();
          });
          $(this).find("button.btn-reset").click(function () {
            element.val(null);
            $(this).parents(".input-file").find('input').val('');
          });
          $(this).find('input').css("cursor", "pointer");
          $(this).find('input').mousedown(function () {
            $(this).parents('.input-file').prev().click();
            return false;
          });
          return element;
        }
      }
    );
  }

  $(function () {
    bs_input_file();
  });

});


