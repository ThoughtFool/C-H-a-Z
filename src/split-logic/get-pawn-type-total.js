// const pawnStats = require("./pawn-stats");

module.exports = getPawnTypeTotal = function (pawnStats) {
    let pawnTypeTotal = {
        cyborg: pawnStats.cyborg.pawnSpawn.length,
        human: pawnStats.human.pawnSpawn.length,
        zombie: pawnStats.zombie.pawnSpawn.length
    };
    return pawnTypeTotal;
};