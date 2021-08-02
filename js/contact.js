$(function () {

    $('.work__button').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#contact').offset().top }, 1000);
        e.preventDefault();
    });

});
