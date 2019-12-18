// const adjacentSpaceFinder = require("./test-scripts/adj-space-finder");
// const adjacentSpaceFinder = require("./adjacent-spaces");

module.exports = enemyMoves = function (homespace, destin, movesMade, adjacentSpaceFinder) {
    console.log("enemyMoves function fires");

    if (typeof movesMade == "undefined") {
        console.log("movesMade was undefined");
        movesMade = [];
    };

    if (typeof destin == "undefined") {
        console.log("Error: The destination exists beyond the dimensions of the board.");
    } else {
        console.log("homespace");
        console.log(homespace);
        console.log("destin");
        console.log(destin);
        // adjacentSpaceFinder([101, 105], 1);

        if (destin[0] === homespace[0] && destin[1] === homespace[1]) {
            console.log("Congratulations, you've arrived!");
        } else {
            // TODO: change all homespaces to be same camelCase or mention content string in name of variable:
            homespace_ContentString = `content-x${homespace[0]}-y${homespace[1]}`;
            adjArr = adjacentSpaceFinder(homespace_ContentString, 1, null, null, null);
            last_Diff = null;
            last_Arr = null;

            for (let i = 0; i < adjArr.comb.length; i++) {

                adjArr.comb[i] = adjArr.comb[i].match(/\d+/g);
                console.log("adjArr.comb[i] after regex match:");
                console.log(adjArr.comb[i]);

                // x_Loc = homespace[0] = parseInt(homespace[0]);
                // y_Loc = homespace[1] = parseInt(homespace[1]);

                current_Array = [
                    parseInt(adjArr.comb[i][0]), parseInt(adjArr.comb[i][1])
                ];

                console.log("current_Array");
                console.log(current_Array);

                main_Diff = [
                    destin[0] - homespace[0],
                    destin[1] - homespace[1]
                ];

                current_Diff = [
                    destin[0] - current_Array[0],
                    destin[1] - current_Array[1]
                ];

                if (last_Diff == null) {
                    last_Diff = main_Diff;
                };

                if (last_Arr == null) {
                    console.log("last_Arr = homespace");
                    console.log(homespace);
                    last_Arr = homespace;
                };

                if (destin[0] === current_Array[0] && destin[1] === current_Array[1]) {
                    console.log("Done!");
                    last_Arr = current_Array;
                    break;

                    // negative difference:
                } else if (current_Diff[0] < 0 || current_Diff[1] < 0) {
                    console.log(`negative current difference: ${current_Diff}, current_Array = ${current_Array}`);
                    if (current_Diff[0] >= last_Diff[0] && current_Diff[1] >= last_Diff[1]) {
                        console.log("current_Diff: GREATER than");

                        last_Diff = current_Diff;
                        last_Arr = current_Array;

                    } else {
                        console.log("else...");
                        last_Diff = last_Diff;
                        last_Arr = last_Arr;
                    };

                    // negative difference:
                } else if (current_Diff[0] > 0 || current_Diff[1] > 0) {
                    console.log(`positive current difference: ${current_Diff}, current_Array = ${current_Array}`);
                    if (current_Diff[0] <= last_Diff[0] && current_Diff[1] <= last_Diff[1]) {
                        console.log("current_Diff: LESSER than");

                        last_Diff = current_Diff;
                        last_Arr = current_Array;

                    } else {
                        console.log("else...");
                        last_Diff = last_Diff;
                        last_Arr = last_Arr;
                    };
                };
            };
            movesMade.push(last_Arr);
            console.log("homespace after movesMade push");
            console.log(homespace);

            enemyMoves(last_Arr, destin, movesMade);
        };
        return movesMade;
    };
};