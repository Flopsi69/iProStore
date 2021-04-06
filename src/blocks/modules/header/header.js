import 'slick-carousel';
import $ from 'jquery';
import 'ion-rangeslider';

let priceRange = $('.price-range__slider')
  .ionRangeSlider({
    type: 'double',
    min: 10000,
    max: 100000,
    from: 20000,
    to: 50000,
    grid: true,
    postfix: ' ₴',
    onChange: function (data) {
      $('.price-range__input-from').prop(
        'value',
        data.from_pretty.replace(' ', '')
      );
      $('.price-range__input-to').prop(
        'value',
        data.to_pretty.replace(' ', '')
      );
    }
  })
  .data('ionRangeSlider');

// priceRange = $d5.data("ionRangeSlider")

$('.price-range__input').on('keydown', function (event) {
  return (
    event.ctrlKey ||
    event.altKey ||
    (47 < event.keyCode && event.keyCode < 58 && event.shiftKey == false) ||
    (95 < event.keyCode && event.keyCode < 106) ||
    event.keyCode == 8 ||
    event.keyCode == 9 ||
    (event.keyCode > 34 && event.keyCode < 40) ||
    event.keyCode == 46
  );
});

$('.price-range__input-from').on('input', function (event) {
  priceRange.update({
    from: $(this).val().replace(' ', '')
  });
});

$('.price-range__input-to').on('input', function () {
  priceRange.update({
    to: $(this).val().replace(' ', '')
  });
});

$('.header__search-btn').on('click', function (e) {
  if (!$('.header__search').hasClass('active')) {
    e.preventDefault();
  }
});

$(document).on('click', function (e) {
  if (
    $(e.target).hasClass('header__search-input') ||
    $(e.target).closest('.header__search').length
  ) {
    $('.header__search').addClass('active');
    $('header__search-input').focus();
  } else {
    $('.header__search').removeClass('active');
  }
});

$('.burger').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $('.header__sub-mob').slideToggle();
});

$('.cat__sidebar-toggler').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $('.cat__sidebar').slideToggle();
});

$('.pdp__about-tab').on('click', function () {
  $(this).addClass('active').siblings('.active').removeClass('active');
  $(`.pdp__about-tab-inner[data-tab='${$(this).data('tab-target')}']`)
    .slideDown()
    .siblings()
    .slideUp();
});

$('.header__basket-preview').on('click', function () {
  $('.header__basket-body').slideToggle();
});

$('.cat__more-btn').on('click', function () {
  $('.cat__product.hide').slideToggle();
});

$('.header__toggler-btn').on('click', function () {
  $(this).toggleClass('active');
});

$('.product__option').on('click', function () {
  $(this).toggleClass('active');
});

$('.filters__option').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active').siblings('.active').removeClass('active');
});

$('.colors__option').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
});

$('.sidebar__models-more').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $('.sidebar__models-item.hide').slideToggle();
});

$('.step-one__option').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active').siblings('.active').removeClass('active');
});

$('.header__contacts-phones .icon').on('click', function (e) {
  e.preventDefault();
  $('.header__phones').slideToggle();
});

$('.work__btn').on('click', function (e) {
  e.preventDefault();
  if ($(this).closest('.work').hasClass('active')) {
    $(this).closest('.work').removeClass('active');
    $(this).removeClass('active').text('Выбрать услугу');
  } else {
    $(this).closest('.work').addClass('active');
    $(this).addClass('active').text('Убрать услугу');
  }
});

$('.pdp__option').on('click', function (e) {
  e.preventDefault();
  $(this).addClass('active').siblings('.active').removeClass('active');
});

$('.step-four__checkbox input').on('change', function (e) {
  console.log($(this));
  $(this).parent().siblings('.step-four__group').slideToggle();
});

$('input').on('input', function () {
  inputGroupLogic($(this));
});

$('input').each((i, input) => {
  inputGroupLogic($(input));
});
function inputGroupLogic(input) {
  if (input.closest('.input__group')) {
    if (input.val()) {
      input.closest('.input__group').addClass('active');
    } else {
      input.closest('.input__group').removeClass('active');
    }
  }
}

$('.jumb__slider').slick({
  fade: true,
  nextArrow: $('.jumb__nav-next'),
  prevArrow: $('.jumb__nav-prev'),
  autoplay: true,
  speed: 2000,
  pauseOnHover: false,
  autoplaySpeed: 9000
});

$('.cat-slider__list').slick({
  nextArrow: $('.cat-slider__nav-next'),
  prevArrow: $('.cat-slider__nav-prev'),
  slidesToShow: 5,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

$('.about-works__slider').slick({
  nextArrow: $('.about-works__nav-next'),
  prevArrow: $('.about-works__nav-prev')
});

$('.pdp-gallery__for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.pdp-gallery__nav'
});
$('.pdp-gallery__nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.pdp-gallery__for',
  focusOnSelect: true,
  nextArrow: $('.pdp-gallery__control-next'),
  prevArrow: $('.pdp-gallery__control-prev'),
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});

/* Modals */
$('.modal__close').on('click', function (e) {
  e.preventDefault();
  modalClose();
});

$('.modal').on('click', function (e) {
  if ($(e.target).hasClass('modal_active')) {
    modalClose();
  }
});

function modalClose() {
  $('.modal').hasClass('modal_active')
    ? $('.modal').removeClass('modal_active')
    : $('.modal').addClass('modal_active');
  $('.modal__body').slideUp();
}

$('.modal-trigger').on('click', function (e) {
  e.preventDefault();
  let target = $(this).attr('modal-target');
  $('.modal').hasClass('modal_active')
    ? $('.modal').removeClass('modal_active')
    : $('.modal').addClass('modal_active');
  $(target).delay(500).slideDown();
});

toggleMobileNav();
$(window).on('resize', toggleMobileNav);
function toggleMobileNav() {
  if ($(window).width() < 992) {
    $('.header__sub-mob').append($('.header__sub-nav'));
    $('.header__sub-mob').append($('.header__contacts'));
    $('.header__sub-mob').append($('.header__main-about'));
  } else {
    $('.header__main-nav').append($('.header__main-about'));
    $('.header__sub-control').before($('.header__sub-nav'));
    $('.header__row').append($('.header__contacts'));
  }
}
