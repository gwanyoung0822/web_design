$(document).ready(function(){

    //상단 메뉴 슬라이드다운,업
    $(".navi > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown()
    })
        .mouseout(function(){
            $(this).find(".submenu").stop().slideUp()
        })

        
})