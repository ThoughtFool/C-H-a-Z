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

    // create a function for communicating messages to player:
    if (pawnTypeTotal.human / pawnTypeTotalCount == 1 && pawnTypeTotalCount > 3) {
        alert("Congratulations 'Captain', you've done the impossible! But don't celebrate too much, you've got a helluva way to go. Now on to the next one.");
    } else if ((pawnTypeTotal.cyborg + pawnTypeTotal.zombie) / pawnTypeTotalCount == 1 && pawnTypeTotalCount > 3) {
        alert("Fantastic! You've lost. Now the human race is one step closer to total extinction.");
    } else {
        // TODO: create timer to check status of game play:
        console.log("check timer for timeout");
    };
};