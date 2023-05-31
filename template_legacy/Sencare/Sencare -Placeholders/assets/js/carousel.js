// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });


$(document).ready(function() {        
    var owl = $('.owl-carousel');
    owl.owlCarousel({
    margin: 30,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4500,
    responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })
    
        })