'use strict';

$(function () {

  // ОТКРЫТЬ МОБИЛЬНОЕ МЕНЮ
  $('.js-open-menu').on("click", function () {
    $('.aside').addClass('open');
    $('.overlay').addClass("active");
    $('body').addClass('fixedPosition');
  });
  // ЗАКРЫТЬ МОБИЛЬНОЕ МЕНЮ
  $('.js-close-menu').on("click", function () {
    $('.aside').removeClass('open');
    $('.overlay').removeClass("active");
    $('body').removeClass('fixedPosition');
  });
  $('.overlay').on("click", function (e) {
    $('.overlay').removeClass("active");
    $('.aside').removeClass('open');
    $('body').removeClass('fixedPosition');
  });
  $('.js-show-category').on("click", function () {
    $('.aside').removeClass('open');
    $('.overlay').removeClass("active");
    $('body').removeClass('fixedPosition');
  });


  // ОТКРЫВАЕТ КАТЕГОРИИ ВНУТРИ КАТАЛОГА
  $('.js-show-category').click(function () {
    var categoryID = $(this).attr('id');
    var categoryProdList = $('.catalog-content__category[data-id="' + categoryID + '"]');
    $('.catalog-content__category').removeClass('active');
    $(categoryProdList).addClass('active');
    $(this).addClass('active').siblings().removeClass('active');
  });

});




// УБИРАЕТ ЛИШНИЕ КАРТОЧКИ В ПОСЛЕДНЕМ РЯДУ
var desktop = window.matchMedia('screen and (min-width: 1281px)');
var netbook = window.matchMedia('screen and (min-width: 1025px) and (max-width: 1280px)');
var tablet = window.matchMedia('screen and (min-width: 641px) and (max-width: 1024px)');
var mobile = window.matchMedia('screen and (max-width: 640px)');

function handleDesktopChange(e) {
  if (e.matches) {
    $(".row").each(function () {
      var quantity = $(this).children().length;
      var remainder = quantity % 5;
      if ((remainder > 0) && (quantity > 5)) {
        $(this).find('.row__item:nth-last-child(-n+ ' + remainder + ')').css('display', 'none');
      }
    });
  }
}
desktop.addListener(handleDesktopChange);
handleDesktopChange(desktop);

function handleNetbookChange(e) {
  if (e.matches) {
    $(".row").each(function () {
      var quantity = $(this).children().length;
      var remainder = quantity % 4;
      if ((remainder > 0) && (quantity > 4)) {
        $(this).find('.row__item:nth-last-child(-n+ ' + remainder + ')').css('display', 'none');
      }
    });
  }
}
netbook.addListener(handleNetbookChange);
handleNetbookChange(netbook);

function handleTabletChange(e) {
  if (e.matches) {
    $(".row").each(function () {
      var quantity = $(this).children().length;
      var remainder = quantity % 3;
      if ((remainder > 0) && (quantity > 3)) {
        $(this).find('.row__item:nth-last-child(-n+ ' + remainder + ')').css('display', 'none');
      }
    });
  }
}
tablet.addListener(handleTabletChange);
handleTabletChange(tablet);

function handleMobileChange(e) {
  if (e.matches) {
    $(".row").each(function () {
      var quantity = $(this).children().length;
      var remainder = quantity % 2;
      if ((remainder > 0) && (quantity > 2)) {
        $(this).find('.row__item:nth-last-child(-n+ ' + remainder + ')').css('display', 'none');
      }
    });
  }
}
mobile.addListener(handleMobileChange);
handleMobileChange(mobile);