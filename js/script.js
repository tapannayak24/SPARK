// PRELOADER STARTS
$(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloader").delay(200).fadeOut("slow");  
});

// SCROLL-TOP STARTS
$(document).ready(function(){
 $("#scroll-top").hide();
    $(window).scroll(function(){
        var x=$(document).scrollTop();
        if(x>200){
            $("#scroll-top").show("slow");
        }
        else{
            $("#scroll-top").hide("slow");
        }

        $("#scroll-top").click(function(){
            $(window).scrollTop(0);
        });
    });
});
// SCROLL-TOP ENDS

// CAROUSEL
$('.owl-carousel').owlCarousel({
    loop:true,
    dots: true,
    margin:30,
    autoplay: false,
    autoplayTimeout: 1520,
    smartSpeed: 1500,
    animateIn: 'linear',
    animateOut: 'linear',
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// AOS
  AOS.init({
    offset:200,
    duration:1000,
});
