$(document).ready(function () {




    //    переключатель о спикере
    $('.speaker-info').on('click', function () {
        event.preventDefault();
        $(this).parent().addClass('active');

    })

    $('.speaker .close').on('click', function () {
        event.preventDefault();
        $(this).parent().parent().removeClass('active');

    })

        $('.scrolling-wrap').jScrollPane();



//    var swiper = new Swiper('.scrolling', {
//        direction: 'vertical',
//        slidesPerView: 'auto',
//        freeMode: true,
//        mousewheel: true,
//    });

    var swiper1 = new Swiper('.slider-video', {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next-2',
            prevEl: '.swiper-button-prev-2',
        }

    })

    var swiper2 = new Swiper('.slider-photo', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }

    })
})
