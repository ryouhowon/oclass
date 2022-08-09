$(document).ready(function(){
    $("#main_banner #slider").slick({
        infinite : true,
        dots : true,
        slidesToshow : 1,
        slidesToScroll : 1,
        autoplay : true,
        autoplaySpeed : 3000
    });

    // BEST 프로그램 기능구현
    var $last_list = $("#fav_box .products_list li").last(); // 마지막 슬라이드 박스 공간
    $("#fav_box .products_list").prepend($last_list);

    $("#fav_box .prev").click(function(){
        var $last = $("#fav_box .products_list li").last();
        $("#fav_box .products_list").stop().animate({"margin-left" : "0%"}, 500, function(){
            $("#fav_box .products_list").prepend($last).css("margin-left", "-33.33%");
        });

        return false;
    });

    $("#fav_box .next").click(function(){

        var $first = $("#fav_box .products_list li").first();
        $("#fav_box .products_list").stop().animate({"margin-left" : "-66.66%"}, 500, function(){
            $("#fav_box .products_list").append($first).css("margin-left", "-33.33%");
        });

        return false;
    });

    var $favBoxHeight = $("#fav_box .products_list").height();
    $("#fav_box .left_part").css("height", $favBoxHeight);

    $("#review .slide").each(function(){
        var $rel = $(this).find("ul").attr("rel");
        $(this).find("ul li:nth-child("+$rel+")").addClass("active").prevAll().addClass("active");
    });

    $(".review_slider").slick({
        infinite : true,
        dots : true,
        slidesToshow : 1,
        slidesToScroll : 1,
        autoplay : true,
        autoplaySpeed : 4000
    });
    
});