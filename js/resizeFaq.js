
$(window).on("load resize scroll",function(e){  
   console.log('resize called');
   var width = $(window).width();
   if(width >= 0 && width <= 550){
       
       for (var i = 0; i <= 4; i++) {
        $('#icon-resize'+[i]).removeClass('fa-4x').addClass('fa-3x');
       };   

   }
   else{
       for (var i = 0; i <= 4; i++) { 
        $('#icon-resize' +[i]).removeClass('fa-3x').addClass('fa-4x');
       }

   }
})
.resize();

