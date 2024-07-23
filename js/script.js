    $(document).ready(function(){
            $('#s1').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
});
        $(document).ready(function(){
            $('#s2').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            autoplay:true,
            autoplayTimeout:2000,
            responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})
});

$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

var btn = $('.aeero_up');
btn.hide();
$(window).scroll(function(){
    if ($(window).scrollTop() > 300) {
        btn.fadeIn();
    }else{
        btn.fadeOut();
    }
});

btn.on('click', function(e){
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
});


$('.main_menu > li').click(function(){
    $('.main_menu > li').removeClass('active');
    $(this).addClass('active');
});
