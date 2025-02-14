onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};

    document.addEventListener("click", function () {
        document.getElementById("bg-music").play();
    }, { once: true });


