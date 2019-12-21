module.exports = bestMove = function (goldSpaceArr) {
    console.log("bestMove function fires");
    console.log(goldSpaceArr);

    let newGoldSpaceArr = {};

    for (let g = 1; g < goldSpaceArr.length; g++) {

        if (goldSpaceArr[g - 1].weight != null) {
            if (goldSpaceArr[g].weight > goldSpaceArr[g - 1].weight) {
                goldSpaceArr.splice((g - 1), 1);
                console.log("g is bigger");
                console.log(goldSpaceArr);

            } else if (goldSpaceArr[g].weight <= goldSpaceArr[g - 1].weight) {
                goldSpaceArr.splice(g, 1);
                console.log("g - 1 is bigger");
                console.log(goldSpaceArr);

            };
        };
        newGoldSpaceArr = goldSpaceArr;
    };
    return newGoldSpaceArr;
};