$(window).on("load resize scroll",function(e){     
    var scroll = $(window).scrollTop();


    if (scroll >= 100) {
       $('#fixed-nav-icon').removeClass('fixed-faq').addClass('fixed-faq-min');
       
    } else {

        $('#fixed-nav-icon').removeClass('fixed-faq-min').addClass('fixed-faq');

    }


});