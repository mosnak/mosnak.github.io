$(document).ready(function (){

    $('.accordion__text').each(function (i) {
        $(this).parent().data('height', $(this).height());
        $(this).height(0);
    })


    $('.accordion__title').click(function() {
        const opened = $('.accordion--open');
        if(opened) {
            opened.removeClass('accordion--open');
            opened.children('.accordion__title').removeClass('accordion__title--open');
            opened.children('.accordion__text').height(0);
        }
        const isOpen = $(this).parent().hasClass('accordion--open');
        const height = isOpen ? '0' : $(this).parent().data('height');
        $(this).parent().toggleClass('accordion--open');
        $(this).toggleClass('accordion__title--open');
        $(this).parent().children('.accordion__text').animate({"height": height}, 200);
    })

    $('.scroll-icon').click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })

    $(window).scroll(function(){
        var aTop = $('.hero').height();
        if($(this).scrollTop()>=aTop){
            $('.scroll-icon').addClass('scroll-icon--show')
        } else {
            $('.scroll-icon').removeClass('scroll-icon--show')
        }
    });
})