// runner functions (sprite sheet)

hazRunner = document.getElementById("runner");
hazRoad = document.getElementById("road");

goRight = document.getElementById("go-right");
goLeft = document.getElementById("go-left");
goForward = document.getElementById("go-forward");
goBackward = document.getElementById("go-right");

goRight.addEventListener("click", function () {
    hazRunner.style.background = "url('../../../public/assets/images/hazmat-runner-9.png')";
    hazRunner.classList.remove("move-left");
    hazRunner.classList.add("move-right");
});
goLeft.addEventListener("click", function () {
    hazRunner.style.background = "url('../../../public/assets/images/hazmat-runner-10.png')";
    hazRunner.classList.remove("move-right");
    hazRunner.classList.add("move-left");
});
goForward.addEventListener("click", function () {
    hazRunner.style.background = "url('../../../public/assets/images/hazmat-runner-backside.png')";
});
goBackward.addEventListener("click", function () {
    hazRunner.style.background = "url('../../../public/assets/images/hazmat-runner-frontside.png')";
});


document.addEventListener("keydown", function (value) {
    console.log(value.key);
    if (value.key === "ArrowUp") {
        hazRunner.style.background = "url('../../../public/assets/images/hazmat-runner-backside.png')";
        hazRunner.classList.remove("move-left");
        hazRunner.classList.remove("move-right");
        hazRunner.classList.add("move-forward");
        hazRunner.classList.remove("move-backward");

    } else if (value.key === "ArrowDown") {
        hazRunner.style.background = "url('../../../public/assets/images/hazmat-runner-frontside.png')";
        hazRunner.classList.remove("move-left");
        hazRunner.classList.remove("move-right");
        hazRunner.classList.remove("move-forward");
        hazRunner.classList.add("move-backward");

    } else if (value.key === "ArrowRight") {
        hazRunner.style.background = "url('../../../public/assets/images/hazmat-runner-9.png')";
        hazRunner.classList.remove("move-left");
        hazRunner.classList.add("move-right");
        hazRunner.classList.remove("move-forward");
        hazRunner.classList.remove("move-backward");

    } else if (value.key === "ArrowLeft") {
        hazRunner.style.background = "url('../../../public/assets/images/hazmat-runner-10.png')";
        hazRunner.classList.add("move-left");
        hazRunner.classList.remove("move-right");
        hazRunner.classList.remove("move-forward");
        hazRunner.classList.remove("move-backward");

    }
});