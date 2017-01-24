
    $(window).scroll(function () {
      if ($(document).scrollTop() == 0) {
        $('#logo-navbar').removeClass('logo-navbar-min');
        $('#logo-navbar').addClass('logo-max');
        $('.logo-box img').attr('src', '/img/logo-made.png');
      } else {
        $('#logo-navbar').removeClass('logo-max');
        $('#logo-navbar').addClass('logo-navbar-min');
       /* $('.logo-box img').attr('src', '/img/logo-min.png'); */
      }
    }); 

 