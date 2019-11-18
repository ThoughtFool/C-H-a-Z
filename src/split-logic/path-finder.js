pathFinder = function (coordArrStart, coordArrEnd) {
    coordArrStart = ;
    coordArrEnd = destin;
    // for (let i = 0; i < adjArr.length; i++) {
        currentCostArr = [
            // adjArr[i][0], adjArr[i][1]
            coordArrStart[0], coordArrStart[1]
        ];
        currentCostDiff = [
                    destin[0] - currentCostArr[0],
                    destin[1] - currentCostArr[1]
                ];
        
    // };

    if (currentCostDiff[0] > 0 && currentCostDiff[1] > 0) {
        
    } else if (currentCostDiff[0] < 0 && currentCostDiff[1] < 0) {

    };
    
    if (destin[0] === currentCostArr[0] && destin[1] === currentCostArr[1]) {
        console.log("Done!");
        costArr = currentCostArr;
        break;

    } else if (currentCostDiff[0] != 0 && currentCostDiff[1] != 0) {
        console.log("!= 0");
    } else {

        if (currentCostDiff[0] < 0 && currentCostDiff[1] < 0) {
            // currentCostDiff = [
            //     currentCostDiff[0] - currentCostArr[0],
            //     currentCostDiff[1] - currentCostArr[1]
            // ];

        } else if (currentCostDiff[0] < 0 && currentCostDiff[1] > 0) {
            // currentCostDiff = [
            //     currentCostDiff[0] - currentCostArr[0],
            //     currentCostArr[1] - currentCostDiff[1]
            // ];

        } else if (currentCostDiff[0] > 0 && currentCostDiff[1] < 0) {
            // currentCostDiff = [
            //     currentCostArr[0] - currentCostDiff[0],
            //     currentCostDiff[1] - currentCostArr[1],
            // ];

        } else if (currentCostDiff[0] > 0 && currentCostDiff[1] > 0) {
            // currentCostDiff = [
            //     currentCostArr[0] - destin[0],
            //     currentCostArr[1] - destin[1]
            // ];

        } else {
            console.log("error");

        };

        // currentCostDiff = (destin[0] - currentCostArr[0]) + (destin[1] - currentCostArr[1]); // && not equal to destin
        if (currentCostDiff[0] <= lastCostDiff[0] && currentCostDiff[0] <= lastCostDiff[1]) {
        } else if (currentCostDiff[0] > lastCostDiff[0] && currentCostDiff[0] > lastCostDiff[1]) {
            console.log("currentCostDiff is less");
            lastCostDiff = currentCostDiff;
            costArr = currentCostArr;
            // };
            console.log("costArr:");
            console.log(costArr);
            // enemyMoves(costArr, destin);
        };
        movesMade.push(costArr);
        // enemyMoves(costArr, destin);
        console.log("movesMade");
        console.log(movesMade);
    };
};

createSpaces = function (totSquares) {
    const squareRoot = Math.sqrt(totSquares);
    const boardSpaces = [];
    for (let x = 1; x <= squareRoot; x++) {
        for (let y = 1; y <= squareRoot; y++) {
            boardSpaces.push([x, y]);
        };
    };
    return boardSpaces;
};

gameBoard = createSpaces(25);
pathFinder([1, 1], [3, 4]);
pathFinder([3, 4], [1, 1]);