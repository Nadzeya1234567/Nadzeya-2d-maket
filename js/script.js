$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    easing: "ease",
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    draggable: true,
    swape: true,
    touchTheshold: 10,
    touchMove: true,
    waitForAnimate: false,
    centerMode: false,
  });
});
