$(document).ready(function (){

    // var defaultOptions = {
    //     container: document.body,
    //     panelSelector: '.panel',
    //     directionThreshold: 50,
    //     delay: 0,
    //     duration: 300,
    //     easing: function(t) { return t },
    // };
    //
    // new PanelSnap(defaultOptions);


    $('.accordion__text').each(function (i) {
        $(this).parent().data('height', $(this).height());
        $(this).height(0);
    })


    $('.accordion__title').click(function() {
        // $('.accordion__text').each(function (i) {
        //     $(this).parent().data('height', $(this).height());
        //     $(this).height(0);
        // })
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

    const screenWidth = $(window).width();
    const siteWidth = $('.wrapper--inner').width();
    const backgroundOffset = (screenWidth - siteWidth) / 2;
    const mapWidth = (screenWidth - siteWidth) / 2 + siteWidth - 660

    // $('#map').width(mapWidth)

    $('.header-shade').css({
        right: '-' + backgroundOffset + 'px',
        height: '888px'
    })

    $('#header-clouds-wrapp').css({
        right: '-' + backgroundOffset + 'px',
        height: '888px'
    })

    $('.section-clouds').css({
        right: '-' + backgroundOffset + 'px',
        // height: '888px'
    })

// console.log(siteWidth)
    if(screenWidth>1366) {
        var scene = document.getElementById('header-clouds-wrapp');
        var parallaxInstance = new Parallax(scene);
    } else {
        $('.header-shade').width(screenWidth)
    }

    // console.log(screenWidth)
    if(screenWidth<801) {
// console.log($('.facts__cta').height() / 2 )
        $('.facts__cta').css( {
            bottom: '-' + $('.facts__cta').height() / 2 + 'px'
        })
    }

    if(screenWidth<1280) {
// console.log($('.facts__cta').height() / 2 )
        $('.header-shade-mobile').css( {
            right: '-' +  (3030 - screenWidth) / 2 + 'px'
        })

        $('.header-clouds-mobile1').css( {
            right: '-' +  (1954 - screenWidth + 200) / 2 + 'px'
        })
    }





    $('.gallery__item').click(function (e) {
        e.preventDefault()
        const imageUrl = $(this).data('image')
        console.log(imageUrl)
    })

    $('.js-modal1').click(function (e) {
        e.preventDefault()


        // console.log($('.modal1').width())
        // console.log(($('.wrapper--outer').width() - $('.js-modal1').width()) / 2 + 'px')

        const overlay = $('.overlay')
        overlay.show()
        overlay.height($(document).height())
        $('.modal1').css({
            left: ($('.wrapper--outer').width() - $('.modal1').width()) / 2 + 'px'
        })
        $('.modal1').show()


    })

    $('.js-modal2').click(function (e) {
        e.preventDefault()
        const overlay = $('.overlay')
        overlay.show()
        overlay.height($(document).height())
        $('.modal2').css({
            left: ($('.wrapper--outer').width() - $('.modal2').width()) / 2 + 'px'
        })
        $('.modal2').show()

    })

    $('.overlay').click(function (e) {
        e.preventDefault()
        $('.modal1').hide()
        $('.modal2').hide()
        $(this).hide()
    })

    // const movementStrength = 150;
    // const height = movementStrength / $(window).height();
    // const width = movementStrength / $(window).width();
    //
    // $("#header-clouds-move").mousemove(function(e){
    //     var pageX = e.pageX - ($(window).width() / 2);
    //     var pageY = e.pageY - ($(window).height() / 2);
    //     var newvalueX = width * pageX * -1 - 25;
    //     var newvalueY = height * pageY * -1 - 50;
    //
    //     console.log($('#header-clouds').css("background-position-x"));
    //     // $('#header-clouds').css("background-position-x", newvalueX+"px");
    //     // $('#header-clouds').css("background-position-y", newvalueY+"px");
    // });

    // $(window).scroll(function(e){
    //     // var pageX = e.pageX - ($(window).width() / 2);
    //     var pageY = $(this).scrollTop() - ($(window).height() / 2);
    //     // var newvalueX = width * pageX * -1 - 25;
    //     var newvalueY = height * pageY * -1 - 50;
    //     $('#header-clouds').css("background-position-y", newvalueY+"px");
    // });


    // const trigger = document.querySelector("#header-clouds-move");
    // const el = document.querySelector("#header-clouds");
    // trigger.addEventListener("mousemove", (e) => {
    //     console.log(el.style.backgroundPositionX)
    //     el.style.backgroundPositionX = el.style.backgroundPositionX + 3 + "px";
    //     // el.style.backgroundPositionY = -e.offsetY - 500 + "px";
    // });
    // document.addEventListener("DOMContentLoaded", function() {
    //
    // });


    $('.custom-select-trigger').click(function () {
        $(this).toggleClass('open')
        if($(this).hasClass('open')) {
            $('.down').addClass('custom-select-trigger-icon-show')
            $('.up').removeClass('custom-select-trigger-icon-show')
        }else {
            $('.down').removeClass('custom-select-trigger-icon-show')
            $('.up').addClass('custom-select-trigger-icon-show')
        }
        $('.custom-select-options').toggleClass('custom-select-show')
    })

    $('.custom-option').click(function () {
        $('.custom-select-trigger').removeClass('open')
        if($(this).hasClass('open')) {
            $('.down').addClass('custom-select-trigger-icon-show')
            $('.up').removeClass('custom-select-trigger-icon-show')
        }else {
            $('.down').removeClass('custom-select-trigger-icon-show')
            $('.up').addClass('custom-select-trigger-icon-show')
        }
        $('.custom-select-options').removeClass('custom-select-show')
        const selectedText = $(this).html()
        $('.custom-select-trigger span').html(selectedText)
    })


    $
    $("input[type='radio'][name='solar_client']").change(function () {
        $("input[type='radio'][name='solar_client']").parent().children('.custom-radio-icon').removeClass('active')
        $("input[type='radio'][name='solar_client']:checked").parent().children('.custom-radio-icon').addClass('active')
    });

    $('.menu--mobile-open').click(function () {
        $('.menu').addClass('open')
        $('.menu__wrapper').addClass('open')
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
        $('.menu--mobile-close').show()
        $('.menu--mobile-open').hide()
        $('.panel').css({
            height: '100vh',
            overflow: 'hidden'
        })
    })

    $('.menu--mobile-close').click(function() {
        $('.menu').removeClass('open')
        $('.menu__wrapper').removeClass('open')
        $('html, body').css({
            'overflow-x': 'hidden',
            'overflow-y': 'auto',
            height: 'auto'
        });
        $('.menu--mobile-close').hide()
        $('.menu--mobile-open').show()
        $('.panel').css({
            height: 'auto',
            overflow: 'auto'
        })
    })
})