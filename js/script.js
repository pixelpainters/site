   /**-----scroll add class fn----- */
   $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
        $(".navbar_top").addClass("scroll");
    } else {
        $(".navbar_top").removeClass("scroll");
    }
});
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".cost_list_overall").addClass("list");
    } else {
        $(".cost_list_overall").removeClass("list");
    }
});

/**-----------painting tabs------------------ */
function tabfn(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
/**------owl carosel------- */
$(document).ready(function() {
    $(".owl-carousel").owlCarousel();

});
$('#profile_slide').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 2,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
    $('#gallery').owlCarousel({
        loop:true,
        margin:10,
        items: 4,
        autoplay: true,
        center:true,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
/**-------menu ------------ */
function menuToggle() {
    var element = document.getElementById("nav_bar");
    element.classList.toggle("menu");
}
