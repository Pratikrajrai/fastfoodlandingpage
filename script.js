// GGM
// "use strict";

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
   
     fade: true,
  cssEase: 'linear'
  });


//   $('.buffet-slider-1').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     prevArrow:'.arrow-left',
//     nextArrow:'.arrow-right',
//   });
                  

  $('.buffet-slider-1').slick({
    dots: false,
    // infinite: false,
    speed: 300,
    prevArrow:'.arrow-left',
        nextArrow:'.arrow-right',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 915,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      }, {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        },
      }
      
    ]
  });
  
               
                  
  

// $('.buffet-slider').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     prevArrow:'.arrow-left',
//     nextArrow:'.arrow-right',
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 2024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });
                  