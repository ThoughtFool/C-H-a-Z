pawnStats = require("./pawn-stats");
// TODO: move this object into the playerStats object:
// testing ONLY:
// pawnIdArray = {
//     human: [],
//     zombie: [],
//     cyborg: []
// };


module.exports = randomPlace = function (userInputNum, howManyToPlace) {
    console.log("randomPlace function fires");
    let baseNum = 1000;
    howManyToPlace = howManyToPlace * 2;

    // TODO: need successfullyPlacedCounter in createPawn?

    for (let i = 0; i <= howManyToPlace; i++) {
        xAxis = Math.floor(Math.random() * userInputNum + 1);
        console.log("xAxis");
        console.log(xAxis);

        yAxis = Math.floor(Math.random() * userInputNum + 1);
        console.log("yAxis");
        console.log(yAxis);

        randomContentID = `content-x${baseNum + xAxis}-y${baseNum + yAxis}`;
        console.log("randomContentID");
        console.log(randomContentID);

        if (pawnStats.pawnIdArray.human.includes(randomContentID) ||
            pawnStats.pawnIdArray.zombie.includes(randomContentID) ||
            pawnStats.pawnIdArray.cyborg.includes(randomContentID)) {
            console.log("that random number already exists in array. pawn was placed");
            // need to subtract from loop counter if already exists:
            i--;

        } else {
            if (i % 2 === 0) { // even
                pawnStats.pawnIdArray.human.push(randomContentID);
                console.log(pawnStats.pawnIdArray.human);
                createPawn(randomContentID, pawnStats.pawnCounter, "human");
            
            } else {
                randEnemy = Math.floor(Math.random() * 20 + 1);
                if (randEnemy % 2 === 0) {
                    pawnStats.pawnIdArray.zombie.push(randomContentID);
                    console.log(pawnStats.pawnIdArray.zombie);
                    createPawn(randomContentID, pawnStats.pawnCounter, "zombie");
                
                } else {
                    pawnStats.pawnIdArray.cyborg.push(randomContentID);
                    console.log(pawnStats.pawnIdArray.cyborg);
                    createPawn(randomContentID, pawnStats.pawnCounter, "cyborg");
                };
            };
        };

        // TODO: add openSpace evaluator that looks at array of spaces to see if contains beforeattempting to createPawn;
        // TODO: create pawnHealth evaluator to track and determine status of pawns in danger of becoming neutral and changes color;
        // TODO: pawn colors need to be changed to primary colors, so that the neutral stauts of pawns' colors can change to secondary colors;
        // TODO: add blinking strobe effect to neutral pawns? add hover over arrow effect when pawn is picked up?
    };
};