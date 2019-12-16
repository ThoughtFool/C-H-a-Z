module.exports = updatePercent = function (pawnTypeTotal) {
    console.log("updatePercent function fires:");
    
    console.log(pawnTypeTotal);
    let pawnTypeTotalCount = pawnTypeTotal.cyborg + pawnTypeTotal.human + pawnTypeTotal.zombie;

    let cyborgBar = document.getElementById("cyborg-bar");
    let humanBar = document.getElementById("human-bar");
    let zombieBar = document.getElementById("zombie-bar");

    let cybPerText = document.getElementById("cyborg-percentage");
    let humPerText = document.getElementById("human-percentage");
    let zomPerText = document.getElementById("zombie-percentage");

    // set CSS property for percentages:
    cyborgBar.style.setProperty("--cyborg-health", (pawnTypeTotal.cyborg / pawnTypeTotalCount) * 100 + "%");
    humanBar.style.setProperty("--human-health", (pawnTypeTotal.human / pawnTypeTotalCount) * 100 + "%");
    zombieBar.style.setProperty("--zombie-health", (pawnTypeTotal.zombie / pawnTypeTotalCount) * 100 + "%");

    // set inner text for percentages:
    cybPerText.innerHTML = ((pawnTypeTotal.cyborg / pawnTypeTotalCount) * 100).toFixed();
    humPerText.innerHTML = ((pawnTypeTotal.human / pawnTypeTotalCount) * 100).toFixed();
    zomPerText.innerHTML = ((pawnTypeTotal.zombie / pawnTypeTotalCount) * 100).toFixed();
};