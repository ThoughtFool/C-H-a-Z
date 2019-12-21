let targetSpace_ContentString = `content-x${targetSpace[0]}-y${targetSpace[1]}`;
let targetAdjArr = adjSpaceFinder(targetSpace_ContentString, 1);
console.log("targetAdjArr");
console.log(targetAdjArr);
// for (let adj = 0; adj < 3; adj++) { // test: infinite loop?
for (let adj = 0; adj < targetAdjArr.comb.length; adj++) {
    console.log("targetAdjArr.comb[adj]");
    console.log(targetAdjArr.comb[adj]);

    let targetIndexVal = targetAdjArr.comb[adj];
    // "x1005-y1005"

    console.log("pawnStats.gameBoard");
    console.log(pawnStats.gameBoard);
    console.log("targetIndexVal");
    console.log(targetIndexVal);

    if (pawnStats.gameBoard.includes(targetIndexVal)) {
        console.log("exists on gameBoard");
        let evalTargetDiv = document.getElementById(targetIndexVal);

        if (evalTargetDiv.classList.contains("empty-space")) {
            console.log(evalTargetDiv);
            console.log(`The above is an empty space.`);
            weightHolder.empty.push(targetIndexVal); // add enemy/friend weights - TODO:
            weightHolder.emptyElem.push(evalTargetDiv); // add enemy/friend weights - TODO:

        } else if (targetIndexVal == homespace_idString) {
            console.log(evalTargetDiv);
            console.log(`The above is SELF.`);

        } else {
            if (evalTargetDiv.childNodes[0].classList.contains("cyborg-pawn")) {
                console.log(`cyborg-pawn`);
                weightHolder.cyborg.push(targetIndexVal); // add enemy/friend weights
            } else if (evalTargetDiv.childNodes[0].classList.contains("human-pawn")) {
                console.log(`human-pawn`);
                weightHolder.human.push(targetIndexVal);
            } else if (evalTargetDiv.childNodes[0].classList.contains("zombie-pawn")) {
                console.log(`zombie-pawn`);
                weightHolder.zombie.push(targetIndexVal);
            } else {
                console.log(`else`);
            };
        };
    };
};