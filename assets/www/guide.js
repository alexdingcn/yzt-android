
$(function(){
	 var mySwiper = new Swiper(".swiper-container",{
	    pagination: '.swiper-pagination',
        direction:"horizontal",
        loop:true,
        autoplay: 5000,
        autoplayStopOnLast: true
    });
    
    $('#jumpLogin').click(function(){
    		window.location.href = 'index.html?t=' + Math.random();
    });
    
})
