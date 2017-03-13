$(document).ready(function(){
  
  $(".input").focus(function() {
    $(this).parent(".field-container").addClass("is-focused");
  });
  
  $(".input").blur(function() {
    $(this).parent(".field-container").removeClass("is-focused");
  });
  
 $('.field-container').on( 'keyup', '.text-area', function () {
    $(this).height(0);
    $(this).height(this.scrollHeight);
  });

});