

$(".toggle").click(function(){
    $(".menu").toggleClass("active");
});


$(".loc").on("click", function(){
    $(".some-row").animate({
        height: "toggle"
    }, 1000);
});


var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });