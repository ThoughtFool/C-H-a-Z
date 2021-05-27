
module.exports = getPawnStats = function (PawnData) {
    myConsole("PawnData");
    myConsole(PawnData.getPawnStats);

    pawnStats = PawnData.findOne();
    myConsole(pawnStats.schema.obj);
    return pawnStats; // returns data obj
};