
$(function () {

    // 메인배너 슬라이드-------------------------------------------------------
    var isAnimate = false;
    var sliderLength = $("#main_slider .slide").length;
    var slideTime = 1000;

    //슬라이드 개수에 맞춰 원모양 내비게이션 생성
    setSlideCircle();

    $("#main_btn_left").click(function () {
        if (!isAnimate) {
            isAnimate = true;
            mainPrevSlide();
        }
        return false;
    });

    $("#main_btn_right").click(function () {
        if (!isAnimate) {
            isAnimate = true;
            mainNextSlide();
        }
        return false;
    });

    $("#main_dot li").click(function () {
        clickCircle($(this));
        return false;
    })

    // 이전 슬라이드
    function mainPrevSlide() {
        var index = $("#main_slider .slide.on").index()-1;
        if (index < 0) {index = sliderLength-1;}
        $("#main_slider .slide.on").animate({"left": "100%"}, slideTime, function () {
            $(this).removeClass("on");
        });
        $("#main_slider .slide").eq(index).css("left", "-100%").animate({"left": 0}, slideTime, function () {
            $(this).addClass("on");
            isAnimate = false;
        });
        onCircle(index);
    }

    // 다음 슬라이드
    function mainNextSlide() {
        var index = $("#main_slider .slide.on").index()+1;
        if (index > sliderLength-1) {index = 0;}
        $("#main_slider .slide.on").animate({"left": "-100%"}, slideTime, function () {
            $(this).removeClass("on");
        });
        $("#main_slider .slide").eq(index).css("left", "100%").animate({"left": 0}, slideTime, function () {
            $(this).addClass("on");
            isAnimate = false;
        });
        onCircle(index);
    }

    // 원 내비게이션 클릭시 슬라이드 이동
    function clickCircle(e) {
        if (!isAnimate) {
            isAnimate = true;
            var index = e.index();
            if (index < $("#main_dot li.on").index()) {
                $("#main_slider .slide.on").animate({"left": "100%"}, slideTime, function () {
                    $(this).removeClass("on");
                });
                $("#main_slider .slide").eq(index).css("left", "-100%").animate({"left": 0}, slideTime, function () {
                    $(this).addClass("on");
                    isAnimate = false;
                });
            } else if (index > $("#main_dot li.on").index()) {
                $("#main_slider .slide.on").animate({"left": "-100%"}, slideTime, function () {
                    $(this).removeClass("on");
                });
                $("#main_slider .slide").eq(index).css("left", "100%").animate({"left": 0}, slideTime, function () {
                    $(this).addClass("on");
                    isAnimate = false;
                });
            }
            onCircle(index);
        }
    }

    //슬라이드 개수에 맞춰 원모양 내비게이션 생성
    function setSlideCircle() {
        for (i=0; i<sliderLength; i++) {
            $("#main_dot").append("<li></li>");
        }
        $("#main_dot > li").first().addClass("on");
        $("#main_dot").css("margin-left", -($("#main_dot").width()/2));
    }

    // 현재 슬라이드에 맞춰 원 활성화
    function onCircle(i) {
        $("#main_dot li").removeClass("on");
        $("#main_dot li").eq(i).addClass("on");
    }


    // 베스트셀러 슬라이드--------------------------------------------------
    var bestIsAnimate = false;

    $("#s01_btn_left").click(function () {
        if (!bestIsAnimate) {
            bestIsAnimate = true;
            var next = $("#s01_slider .s01_box.box_up").next();
            $("#s01_slider").append($("#s01_slider .s01_box").first().clone());
            $("#s01_slider").animate({"left": "-=808"}, 1000, "easieEaseOutQuad", function () {
                $("#s01_slider .s01_box").first().remove();
                $("#s01_slider").css("left", "50%");
                bestIsAnimate = false;
            });
            $("#s01_slider .s01_box.box_up").removeClass("box_up");
            next.addClass("box_up");
        }
        return false;          
    });

    $("#s01_btn_right").click(function () {
        if (!bestIsAnimate) {
            bestIsAnimate = true;
            var prev = $("#s01_slider .s01_box.box_up").prev();
            $("#s01_slider").prepend($("#s01_slider .s01_box").last().clone()).css("left", "-=808");
            $("#s01_slider .s01_box").removeClass("box_up");
            prev.addClass("box_up");
            $("#s01_slider").animate({"left": "50%"}, 1000, "easieEaseOutQuad", function () {
                $("#s01_slider .s01_box").last().remove();
                bestIsAnimate = false;
            });
        }
        return false;          
    });
    

});