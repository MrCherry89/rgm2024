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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });
  // $(".popup").magnificPopup({
  //   type: "inline",
  //   mainClass: "mfp-fade",
  // });

  $(".back").smoothScroll({
    speed: 1000,
  });
});
