
    module.exports = getPawnStats = function (PawnData) {
        myConsole("PawnData");
        pawnStats = PawnData.find();
        myConsole(pawnStats.schema.obj);
        return pawnStats; // returns data obj
    };