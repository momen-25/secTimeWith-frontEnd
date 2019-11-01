$(document).ready(function(){
    
    var head = $(".header")
   
    head.height($(window).height())
    $(window).resize(function(){
            head.height($(window).height())

    })

    
   $(".links li a").click(function(){
       $(this).parent().addClass('active').siblings().removeClass('active')
   });
    
    $('.slider').bxSlider({
        pager: false
    });
    
    $(".slider").each(function(){
        $(this).css('paddingTop',($(window).height()-$(".slider div").height())/2.7)
        
    });
    
    $(".links li a").click(function(){
        
        $("html,body").animate({
            
            scrollTop: $('#'+$(this).data('value')).offset().top
        },1000)
    });
    
    $(".over").mouseenter(function(){
       $(this).fadeTo(400,.69) ;
        
    });
    
    $(".over").mouseleave(function(){
       $(this).fadeOut(100 ,function(){
           
          $(this).css("opacity","0") 
       });
        
    });
    
      $(".proj ul li").click(function(){
       $(this).addClass('act').siblings().removeClass('act')
   });
    
   
        
        
    $(".over3").mouseenter(function(){
       $(this).fadeTo(300,.69) ;
            
    });
    
    $(".over3").mouseleave(function(){
       $(this).fadeOut(100 ,function(){
           
          $(this).css("opacity","0") 
       });
        
    });
    
   $(".word").hover
   (
function()
   {
      $(this).children().animate({width:'100%'},1000); 
   }
   ,
function()
   {
       
      $(this).children().animate({width:'15%'},1000);
   }
       
   );
        
    
    
});