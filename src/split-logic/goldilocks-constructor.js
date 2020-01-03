const rateSpace = require("./rate-space");

module.exports = Goldilocks = function (type, move, food, friend, enemy, homeSpace, homespace_idString, targetSpace, targetSpace_idString, rateSpace) {

    this.move = move;
    this.food = food;
    this.friend = friend;
    this.enemy = enemy;
    this.type = type;
    this.homeSpace = homeSpace;
    this.homespace_idString = homespace_idString;
    this.targetSpace = targetSpace;
    this.targetSpace_idString = targetSpace_idString;
    this.weight = rateSpace(
        move,
        food,
        friend,
        enemy
    );
};