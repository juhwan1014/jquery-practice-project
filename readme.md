Student name : Juhwan Moon

Student number : A01253553
<br />
<br />
<br />
1. Use jQuery to create a responsive mobile navigation

$(".toggle").click(function(){
    $(".menu").toggleClass("active");
});

-----> In the jQuery.js, for the hamburger-bar toggling


<br />
<br />

2. Add at least one instance of an effect on some elements using jQuery

$(".loc").on("click", function(){
    $(".some-row").animate({
        height: "toggle"
    }, 1000);
});

------> In the jQuery.js, if you click the "view at a glance" button, a hidden div might emerges. 


<br />
<br />

3. Use at least one jQuery plugin

var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  ------> In the jQuery.js, I studied further about Swiper.
