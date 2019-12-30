module.exports = function () {
    const outerModal = document.getElementById("modal-outer");
    const snoozeBtn = document.getElementById("snooze-btn");
    const gameIntroMsg = document.getElementById("game-cont");

    snoozeBtn.addEventListener("click", function () {
        console.log("listener fires");
        if (outerModal.classList.contains("hide-modal")) {
            outerModal.classList.remove("hide-modal");
            outerModal.classList.add("show-modal");
        } else {
            outerModal.classList.remove("show-modal");
            outerModal.classList.add("hide-modal");
        };

        gameIntroMsg.style = "display: none;";
    });
};