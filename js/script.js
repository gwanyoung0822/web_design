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
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
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
}