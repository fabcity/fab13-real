/*Navbar scrolling effect */
(function($) {          
    $(document).ready(function(){                    
        $(".parallax").scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('#menu').fadeIn(500);
            } else {
                $('#menu').fadeOut(500);
            }
        });
    });
})(jQuery);