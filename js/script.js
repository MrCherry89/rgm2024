$(document).ready(function () {
  $(".news-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });
  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
  });

  $(".back").smoothScroll({
    speed: 1000,
  });
});
