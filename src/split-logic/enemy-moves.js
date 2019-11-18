const adjacentSpaces = require("./adjacent-spaces");

module.exports = enemyMoves = function (homeSpace, destin) {
    console.log("enemyMoves function fires");
    console.log("homeSpace");
    console.log(homeSpace);
    console.log("destin");
    console.log(destin);

    if (destin[0] === homeSpace[0] && destin[1] === homeSpace[1]) {
        console.log("Congratulations!");
    } else {

        adjArr = adjacentSpaces(homeSpace);
        console.log("adjArr");
        console.log(adjArr);
        lastCostDiff = 99;
        lastCostArr = [];
        costArr = [];

        for (let i = 0; i < adjArr.length; i++) {
            currentCostArr = [
                adjArr[i][0], adjArr[i][1]
            ];
            currentCostDiff = (destin[0] - currentCostArr[0]), (destin[1] - currentCostArr[1]); // && not equal to destin

            if (destin[0] === currentCostArr[0] && destin[1] === currentCostArr[1]) {
                console.log("Done!");
                costArr = currentCostArr;
                break;

            } else {
                console.log("currentCostDiff is less");
                lastCostDiff = currentCostDiff;
                costArr = currentCostArr;
                console.log("costArr:");
                console.log(costArr);

            };
        };
        enemyMoves(costArr, destin);
    };
};