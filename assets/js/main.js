onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};
document.getElementById("showFlowersBtn").addEventListener("click", function () {
    document.querySelector(".flowers").classList.add("show");
});

    document.getElementById("showFlowers").addEventListener("click", function() {
    document.querySelector(".flowers").style.display = "block";
});
$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var music = document.getElementById("bg-music");
    music.play().catch(() => {
        // If autoplay is blocked, play music on first user interaction
        document.addEventListener("click", function() {
            music.play();
        }, { once: true });
    });
});

