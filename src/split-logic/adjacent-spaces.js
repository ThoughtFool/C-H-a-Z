friendOrFoe = require("./friend-or-foe");

module.exports = adjacentSpaces = function (location, pawntype) {
    console.log("adjacentSpaces function fires");

    adjacentSquaresArr = [];
    console.log("location");
    console.log(location);

    idString = location;
    location = location.match(/\d+/g);

    adjacentSpaceArray = [];

    console.log("location");
    console.log(location);

    x_Loc = parseInt(location[0]);
    y_Loc = parseInt(location[1]);

    adjacentSpaceArray = {
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
        coord_x = adjacentSpaceArray.x[i]; // ???

        for (let j = 0; j < 3; j++) {
            coord_y = adjacentSpaceArray.y[j]; // ???
            contentID = `content-x${coord_x}-y${coord_y}`;
            console.log("contentID");
            console.log(contentID);
            adjacentSquaresArr.push(contentID); // ???
        };
    };
    console.log("adjacentSquaresArr");
    console.log(adjacentSquaresArr);
    return friendOrFoe(idString, adjacentSquaresArr, pawntype);
};