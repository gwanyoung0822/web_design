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
      // 로그인 팝업창 오픈 코드 
      const loginOpen = document.querySelector(".login-open")
      const loginPopup = document.querySelector(".modal")
      const loginClose = document.querySelector(".close")
      loginOpen.addEventListener("click",function(){
        loginPopup.classList.add("active")
      })
      loginClose.addEventListener("click",function(){
        loginPopup.classList.remove("active")
      })
      // 로그인 버튼 클릭시 확인버튼 나온후 팝업창 닫기
      const loginBt = document.querySelector(".login")
      loginBt.addEventListener("click",function(){
        alert(`로그인이 되었습니다`)
        loginPopup.classList.remove("active")
      })
      // 모바일 로그인 팝업창오픈
      const mbLoginOpen = document.querySelector(".mb-login-open")
      const mbLoginPopup = document.querySelector(".mb-popup")
      const mbLoginClose = document.querySelector(".mb-close")
      mbLoginOpen.addEventListener("click",function(){
        mbLoginPopup.classList.add("active")
      })
      mbLoginClose.addEventListener("click",function(){
        mbLoginPopup.classList.remove("active")
      })
      const mbLoginBt = document.querySelector(".mb-login")
      mbLoginBt.addEventListener("click",function(){
        alert(`로그인이 되었습니다`)
        mbLoginPopup.classList.remove("active")
      })
       // 모든 a 태그를 선택
       var anchors = document.querySelectorAll("a");

       // 각 a 태그에 대해 클릭 이벤트 리스너를 추가
       anchors.forEach(function(anchor) {
           anchor.addEventListener("click", function(event) {
               // href 속성이 '#'인지 확인
               if (anchor.getAttribute("href") === "#") {
                   // 기본 동작을 막음
                   event.preventDefault();
               }
           });
       });
}