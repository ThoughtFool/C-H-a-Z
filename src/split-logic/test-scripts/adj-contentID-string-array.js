module.exports = adjContentIDStringArr = function (homespace, adjacentSpaceObj, availableMoves) {
    const firstSquare = {};
    const adjacentSquares = [];

    firstSquare.x = 1001;
    firstSquare.y = 1001;

    let loopSize = availableMoves * 2 + 1;

    for (let i = 0; i < loopSize; i++) {
        coord_x = adjacentSpaceObj.x[i]; // ???

        for (let j = 0; j < loopSize; j++) {
            coord_y = adjacentSpaceObj.y[j]; // ???
            // contentID = [coord_x, coord_y];
            contentID = `content-x${coord_x}-y${coord_y}`;
            console.log("contentID");
            console.log(contentID);
            console.log("homespace");
            console.log(homespace);
            console.log("coord_x");
            console.log(coord_x);
            console.log("coord_y");
            console.log(coord_y);
            
            if (coord_x >= firstSquare.x && coord_y >= firstSquare.y) {
                if (coord_x === homespace[0] && coord_y === homespace[1]) {
                // if (coord_x === parseInt(homespace[0]) && coord_y === parseInt(homespace[1])) {
                    // console.log(`homespace_idString: ${contentID}`);
                } else {
                    // console.log(`${contentID} != ${homespace_idString}`);
                    adjacentSquares.push(contentID); // ???
                };
            };
        };
    };

    console.log("adjacentSquares::");
    console.log(adjacentSquares);
    adjacentSpaceObj.comb = adjacentSquares;

    return adjacentSpaceObj;
};