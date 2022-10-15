
(function ($) {

    "use strict";

    /***------------- Popup  -----------------***/

    const popup = document.querySelector(".popup");
    const closePopup = document.querySelector(".popup-close");

    if (popup) {
        closePopup.addEventListener("click", () => {
            popup.classList.add("popup-hidden");
        });

        window.addEventListener("load", () => {
            setTimeout(() => {
            popup.classList.remove("popup-hidden");
            }, 500);
        });
    }

    /***------------- Header Dropdow  -----------------***/

    $('.js-show-header-dropdown').on('click', function(){
        $(this).parent().find('.header-dropdown')
    });

    var menu = $('.js-show-header-dropdown');
    var sub_menu_is_showed = -1;

    for(var i = 0; i < menu.length; i++){
        $(menu[i]).on('click', function(){ 
            
                if(jQuery.inArray( this, menu ) == sub_menu_is_showed){
                    $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                    sub_menu_is_showed = -1;
                }
                else {
                    for (var i = 0; i < menu.length; i++) {
                        $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
                    }

                    $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                    sub_menu_is_showed = jQuery.inArray( this, menu );
                }
        });
    }

    $(".js-show-header-dropdown, .header-dropdown").click(function(event){
        event.stopPropagation();
    });

    $(window).on("click", function(){
        for (var i = 0; i < menu.length; i++) {
            $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
        }
        sub_menu_is_showed = -1;
    });


    /***------------- Fixed Menu  -----------------***/

    var posWrapHeader = $('.topbar').height();
    var header = $('.container-menu-header');

    $(window).on('scroll',function(){

        if($(this).scrollTop() >= posWrapHeader) {
            $('.header').addClass('fixed-header');
            $(header).css('top',-posWrapHeader); 

        }  
        else {
            var x = - $(this).scrollTop(); 
            $(header).css('top', x); 
            $('.header').removeClass('fixed-header');
        }  
    });
    
    /***------------- Show Menu Mobile  -----------------***/

    $('.btn-show-menu-mobile').on('click', function(){
        $(this).toggleClass('is-active');
        $('.wrap-side-menu').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu');

    for(var i = 0; i < arrowMainMenu.length; i++){
        $(arrowMainMenu[i]).on('click', function(){
            $(this).parent().find('.sub-menu').slideToggle();
            $(this).toggleClass('turn-arrow');
        })
    }

    $(window).resize(function(){
        if($(window).width() >= 992){
            if($('.wrap-side-menu').css('display') == 'block'){
                $('.wrap-side-menu').css('display','none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }
            if($('.sub-menu').css('display') == 'block'){
                $('.sub-menu').css('display','none');
                $('.arrow-main-menu').removeClass('turn-arrow');
            }
        }
    });

    /***----------------- Back Top -------------------***/

    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.btn-scroll').addClass("show");
        }else{
            $('.btn-scroll').removeClass("show");
        }
    });

    $('.btn-scroll').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });


    /***------------- Number Products -----------------***/

    var proQty = $('.pro-qtd');
    proQty.prepend('<span class="min qtd-btn">-</span>');
    proQty.append('<span class="max qtd-btn">+</span>');
    proQty.on('click', '.qtd-btn', function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('max')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });


    /***------------- Show Menu Details  -----------------***/

    $('.active-dropdown-content .js-toggle-dropdown-content').toggleClass('show-dropdown-content');
    $('.active-dropdown-content .dropdown-content').slideToggle('fast');

    $('.js-toggle-dropdown-content').on('click', function(){
        $(this).toggleClass('show-dropdown-content');
        $(this).parent().find('.dropdown-content').slideToggle('fast');
    });

    /***------------- Featured Products  -----------------***/

    // MixiTup Navigation
    $(window).on('load', function () {
        $('.featured-filter li').on('click', function () {
            $('.featured-filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.featured-items').length > 0) {
            var containerEl = document.querySelector('.featured-items');
            var mixer = mixitup(containerEl);
        }
    });

    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    $('.featured-items .light').simpleLightbox();

    $('.portfolio-inner .light').simpleLightbox();

    $('.products-carousel .light').simpleLightbox();


    /***---------- Products Carousel -------***/

    $('#products-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        navText: [('<i class="fas fa-chevron-left"></i>'), ('<i class="fas fa-chevron-right"></i>')],
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    /***---------- Testimonial Carousel -------***/

    $('#testimonial-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });

})(jQuery);