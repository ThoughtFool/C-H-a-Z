const rateSpace = require("./rate-space");

module.exports = Goldilocks = function (type, move, food, friend, enemy, homeSpace, targetSpace, rateSpace) {

    this.move = move;
    this.food = food;
    this.friend = friend;
    this.enemy = enemy;
    this.type = type;
    this.homeSpace = homeSpace;
    this.targetSpace = targetSpace;
    this.weight = rateSpace(
        move,
        food,
        friend,
        enemy
    );
};