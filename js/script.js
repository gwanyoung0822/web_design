$(document).ready(function(){

    //상단 메뉴 슬라이드다운,업
    $(".navi > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown()
    })
        .mouseout(function(){
            $(this).find(".submenu").stop().slideUp()
        })
    //모바일 메뉴 슬라이드다운,업
    $(".mb-menu-list > li").click(function(){
        $(this).find(".mb-submenu").stop().slideToggle()
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
        autoplay: {
          delay: 10000,
          disableOnInteraction: false,
        },
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
      // 햄버거바 클릭시 메뉴창 
      const mbMenuBt = document.querySelector(".mb-menubt")
      const mbMenu = document.querySelector(".mb-menu")
      mbMenuBt.addEventListener("click", function(){
        mbMenu.classList.toggle("showMbMenu")
      })
      // 탑버튼 스크롤 기능
      const topBt = document.getElementById("top-bt")
      topBt.addEventListener("click", function(event){
        event.preventDefault()
        window.scrollTo({
          top:0,
          behavior:"smooth"
        })
      })
      // 모달창
      const loginOpen = document.querySelector(".login-open")


      // 로그인 팝업창 오픈 코드 
}