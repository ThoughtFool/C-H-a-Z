module.exports = isAdjacent = function (location, spaceToCheck) {

    location = location.match(/\d+/g);

    x_Loc = location[0];
    y_Loc = location[1];
    console.log(testNum);
    if (
        (spaceToCheck.x == location.x ||
        spaceToCheck.x + 1 == location.x ||
        spaceToCheck.x - 1 == location.x) &&

        (spaceToCheck.y == location.y ||
        spaceToCheck.y + 1 == location.y ||
        spaceToCheck.y - 1 == location.y)
    ) {
        console.log("spaceToCheck is adjacent");
    } else {
        console.log("spaceToCheck is not adjacent");
    }
};