

logoSize = function () {

    var theLogo = $(".logo-navbar");
    var newImage = new Image();
    newImage.src = theLogo.attr("src");
    var imgWidth = newImage.width;
    
    
 
    var maxScrollDistance = 400;
    
 
    maxScrollDistance = Math.min(maxScrollDistance, $(window).height());

    var widthAtMax = 50;
    

    var widthDiff = imgWidth - widthAtMax;
    var pixelsPerScroll =(widthDiff / maxScrollDistance);

    $(window).scroll(function () {
        
        var scrollTopPos = Math.min($(document).scrollTop(), maxScrollDistance);
        
        
        var scrollChangePx =  Math.floor(scrollTopPos * pixelsPerScroll);
        
        
        var zoomedWidth = imgWidth - scrollChangePx;
        
        
        $('.logo-navbar').css('width', zoomedWidth);
    });
}

logoSize();

