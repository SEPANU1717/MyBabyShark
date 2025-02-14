onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};
document.getElementById("showFlowersBtn").addEventListener("click", function () {
    document.querySelector(".flowers").classList.add("show");
});

    document.addEventListener("DOMContentLoaded", function () {
        var music = document.getElementById("bg-music");

        // If the audio element is found
        if (music) {
            music.play().catch(() => {
                document.addEventListener("click", function () {
                    music.play();
                }, { once: true });
            });
        }
    });

