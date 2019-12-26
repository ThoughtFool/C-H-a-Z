const updatePawnStatus = require("./update-pawn-status");
const getPawnTypeTotal = require("./get-pawn-type-total");

module.exports = pawnSwitch = function (pawnToSwitch, pawnType, pawnTypeTotal) {
    console.log("pawnSwitch function fires");
    console.log("pawnType in pawnSwitch:");
    console.log(pawnType);

    // pawnIdArray = pawnStats.pawnIdArray[`${pawnType}`];

    newPawn = document.getElementById(pawnToSwitch);
    newPawn.src = `/assets/images/${pawnType}-pawn.png`;
    // newPawn.classList.remove("empty-space"); check for current class TODO: if contains
    if (newPawn.classList.contains("human-pawn")) {
        newPawn.classList.remove("human-pawn");
        newPawn.classList.add(`${pawnType}-pawn`);

        let pawnTypeSwitch = ["human", pawnType];

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
        updatePawnStatus("switch", pawnToSwitch, pawnTypeSwitch, getPawnTypeTotal);

    } else if (newPawn.classList.contains("zombie-pawn")) {
        newPawn.classList.remove("zombie-pawn");
        newPawn.classList.add(`${pawnType}-pawn`);

        let pawnTypeSwitch = ["zombie", pawnType];
        updatePawnStatus("switch", pawnToSwitch, pawnTypeSwitch, getPawnTypeTotal);


        // TODO: update stats (remove from type array/object and add to other array/object)
        


    } else if (newPawn.classList.contains("cyborg-pawn")) {
        newPawn.classList.remove("cyborg-pawn");
        newPawn.classList.add(`${pawnType}-pawn`);

        let pawnTypeSwitch = ["cyborg", pawnType];
        updatePawnStatus("switch", pawnToSwitch, pawnTypeSwitch, getPawnTypeTotal);

    } else if (newPawn.classList.contains("sleepy-zombie-pawn")) {
        newPawn.classList.remove("sleepy-zombie-pawn");
        newPawn.classList.add(`${pawnType}-pawn`);

        let pawnTypeSwitch = ["sleepy-zombie-pawn", pawnType];
        updatePawnStatus("switch", pawnToSwitch, pawnTypeSwitch, getPawnTypeTotal);

    } else if (newPawn.classList.contains("sleepy-cyborg-pawn")) {
        newPawn.classList.remove("sleepy-cyborg-pawn");
        newPawn.classList.add(`${pawnType}-pawn`);

        let pawnTypeSwitch = ["sleepy-cyborg-pawn", pawnType];
        updatePawnStatus("switch", pawnToSwitch, pawnTypeSwitch, getPawnTypeTotal);
    };

    // updatePercent(pawnTypeTotal);

};

// TODO: need to make pawns more generic. 
// change dynamic ids to counter, based on order of creation ONLY, not pawnType
// the track all pawnTypes by either data- or class