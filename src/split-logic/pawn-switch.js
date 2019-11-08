module.exports = pawnSwitch = function (pawnToSwitch, pawnType) {
    console.log("pawnSwitch function fires");

    pawnIdArray = pawnStats.pawnIdArray[`${pawnType}`];

    newPawn = document.getElementById(pawnToSwitch);
    newPawn.src = `/assets/images/${pawnType}-pawn.png`;
    // newPawn.classList.remove("empty-space"); check for current class TODO: if contains
    if (newPawn.classList.contains("human-pawn")) {
        newPawn.classList.remove("human-pawn");
        newPawn.classList.add(`${pawnType}-pawn`);

        // remove location id from array of human and add to ${pawnType}:
        // for (let i = 0; i < pawnStats.pawnIdArray.human.length; i++) {
        //     console.log(newPawn.parentNode.id);
        //     if (i === newPawn.parentNode.id) {
        //         console.log("pawnStats.pawnIdArray.human");
        //         console.log(pawnStats.pawnIdArray.human);
        //     }
        // };
        // for (let i = 0; i < pawnIdArray.length; i++) {
        //     console.log(newPawn.parentNode.id);
        //     if (i === newPawn.parentNode.id) {
        //     console.log("pawnIdArray");
        //     console.log(pawnIdArray);
        //     }
        // };

    } else if (newPawn.classList.contains("zombie-pawn")) {
        newPawn.classList.remove("zombie-pawn");
        newPawn.classList.add(`${pawnType}-pawn`);

    } else if (newPawn.classList.contains("cyborg-pawn")) {
        newPawn.classList.remove("cyborg-pawn");
        newPawn.classList.add(`${pawnType}-pawn`);

    } else if (newPawn.classList.contains("sleepy-zombie-pawn")) {
        newPawn.classList.remove("sleepy-zombie-pawn");
        newPawn.classList.add(`${pawnType}-pawn`);

    } else if (newPawn.classList.contains("sleepy-cyborg-pawn")) {
        newPawn.classList.remove("sleepy-cyborg-pawn");
        newPawn.classList.add(`${pawnType}-pawn`);
    };
};

// TODO: need to make pawns more generic. 
// change dynamic ids to counter, based on order of creation ONLY, not pawnType
// the track all pawnTypes by either data- or class