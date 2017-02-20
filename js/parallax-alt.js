/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 */
 
(function($) {
 
    $.fn.parallax2 = function(options) {
 
        var windowHeight = $(window).height();
 
        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);
 
        // Iterate over each object in collection
        return this.each( function() {
 
          // Save a reference to the element
          var $this = $(this);
 
          // Set up Scroll Handler
          $(document).scroll(function(){
 
                var scrollTop = $(window).scrollTop();
                      var offset = $this.offset().top;
                      var height = $this.outerHeight();
 
        // Check if above or below viewport
      if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
        return;
      }
 
      var yPosition = Math.round((offset - scrollTop) * settings.speed);
 
                 // Apply the Y Background Position to Set the Parallax Effect
          // $this.css('background-position', 'center ' + yPosition + 'px');

          $this.css('transform','translateY(' +  yPosition  + 'px)');
                
          });
        });
    }
}(jQuery));

$('.elem1,.elem3,').parallax2({
  speed : 0.15
});

$('.elem2').parallax2({
  speed : 0.25
});


