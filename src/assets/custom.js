$(function () {
    $('.nav-link').on('click', function () {
        $(".navbar-collapse").collapse('hide');
    });


    AOS.init({
        disable: 'mobile',
        duration: 800,
        anchorPlacement: 'center-bottom'
    });


    $(function () {
        $('.nav-link').on('click', function (event) {
            let $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    });


    $('#project-slide').owlCarousel({
        loop: true,
        center: true,
        autoplayHoverPause: false,
        autoplay: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            }
        }
    });

});


    

