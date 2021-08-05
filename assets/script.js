$(document).ready(function (){

    var defaultOptions = {
        container: document.body,
        panelSelector: '.panel',
        directionThreshold: 0,
        delay: 0,
        duration: 300,
        easing: function(t) { return t },
    };

    new PanelSnap(defaultOptions);


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

    const screenWidth = $(window).width();
    const siteWidth = $('.wrapper--inner').width();
    const backgroundOffset = (screenWidth - siteWidth) / 2;

    $('.header-shade').css({
        right: '-' + backgroundOffset + 'px',
        height: '888px'
    })

    $('#header-clouds-wrapp').css({
        right: '-' + backgroundOffset + 'px',
        height: '888px'
    })



    var scene = document.getElementById('header-clouds-wrapp');
    var parallaxInstance = new Parallax(scene);

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
})