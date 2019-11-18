module.exports = adjacentSpaces = function (location) {
    const adjacentSquares = [];

    console.log("adjacentSpaces function fires");

    adjacentSpaceObj = {};

    console.log("location");
    console.log(location);

    x_Loc = parseInt(location[0]);
    console.log("x_Loc");
    console.log(x_Loc);

    y_Loc = parseInt(location[1]);
    console.log("y_Loc");
    console.log(y_Loc);


    adjacentSpaceObj = {
        x: [
            x_Loc + 0,
            x_Loc + 1,
            x_Loc - 1
        ],
        y: [
            y_Loc + 0,
            y_Loc + 1,
            y_Loc - 1
        ]
    };

    for (let i = 0; i < 3; i++) {
        coord_x = adjacentSpaceObj.x[i]; // ???

        for (let j = 0; j < 3; j++) {
            coord_y = adjacentSpaceObj.y[j]; // ???
            contentID = [coord_x, coord_y];
            // contentID = `content-x${coord_x}-y${coord_y}`;
            // console.log("contentID");
            // console.log(contentID);
            // console.log("location");
            // console.log(location);
            if (contentID[0] >= firstSquare.x && contentID[1] >= firstSquare.y) {
                if (contentID[0] === location[0] && contentID[1] === location[1]) {
                    // console.log(`homeSpace: ${contentID}`);
                } else {
                    // console.log(`${contentID} != ${location}`);
                    adjacentSquares.push(contentID); // ???
                };
            };
        };
    };

    return adjacentSquares;
};