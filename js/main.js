$(function () {

    $('.hero__info--button').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#time').offset().top }, 1000);
        e.preventDefault();
    });

});