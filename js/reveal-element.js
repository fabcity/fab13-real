/*reveal hidden divs script*/

$('.track').hover(function() {
        $(this).find('.mosaic-icon').hide();
        $(this).find('.mosaic-title').show(); //hidden one
    }, function() {
        $(this).find('.mosaic-title').hide(); 
        $(this).find('.mosaic-icon').show();
});