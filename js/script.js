$(document).ready(function(){

    //상단 메뉴 슬라이드다운,업
    $(".navi > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown()
    })
        .mouseout(function(){
            $(this).find(".submenu").stop().slideUp()
        })

        
})
window.onload = function(){

    var swiper = new Swiper(".bo-list", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1.5,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints:{
          320:{
            slidesPerView : 2
          },
          521:{
            slidesPerView : 3
          },
          769:{
            slidesPerView : 4
        },
        }
      });

      var swiper2 = new Swiper(".bo-main", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
      var swiper = new Swiper(".cu-Swiper", {
        slidesPerView: 1.5,
        spaceBetween: 30,
        freeMode: true,
        breakpoints:{
          321:{
            slidesPerView : 2.5
          },
          521:{
            slidesPerView : 3
          },
          769:{
            slidesPerView : 3
          }
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}