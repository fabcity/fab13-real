$(".parallax").on("load resize scroll",function(e){     
    var scroll = $(".parallax").scrollTop();


    if (scroll >= 300) {
       $('#menu').removeClass('navbar-init');
       $('.nav-link').css({ 'color': '#1d3557', 'font-weight': '700' });
       $('.icon-bar').css({ 'border': '1px solid #1d3557' });
       
    } else {

       	$('#menu').addClass('navbar-init');
        $('.nav-link').css({ 'color': 'white', 'font-weight': '400' });
        $('.icon-bar').css({ 'border': '1px solid white' });
    }


});