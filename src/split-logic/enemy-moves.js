const adjacentSpaces = require("./adjacent-spaces");

const enemyMoves = function (homeSpace, destin) {
    console.log("enemyMoves function fires");

    if (typeof destin == "undefined") {
        console.log("Error: The destination exists beyond the dimensions of the board.")
    } else {
        console.log("homeSpace");
        console.log(homeSpace);
        console.log("destin");
        console.log(destin);

        if (destin[0] === homeSpace[0] && destin[1] === homeSpace[1]) {
            console.log("Congratulations, you've arrived!");
        } else {

            adjArr = adjacentSpaces(homeSpace);
            last_Diff = null;
            last_Arr = null;

            for (let i = 0; i < adjArr.length; i++) {
                current_Array = [
                    adjArr[i][0], adjArr[i][1]
                ];

                main_Diff = [
                    destin[0] - homeSpace[0],
                    destin[1] - homeSpace[1]
                ];

                current_Diff = [
                    destin[0] - current_Array[0],
                    destin[1] - current_Array[1]
                ];

                if (last_Diff == null) {
                    last_Diff = main_Diff;
                };

                if (last_Arr == null) {
                    last_Arr = homeSpace;
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
            enemyMoves(last_Arr, destin);
        };
        return movesMade;
    };
};