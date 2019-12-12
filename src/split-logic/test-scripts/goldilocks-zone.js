pawnObj = {
    pawnType: "cyborg",
    distance: 2,
    health: 1
};

pawnObj_02 = {
    pawnType: "zombie",
    distance: 2,
    health: -1
};

pawnHealth = 100;

// the lower the "rating", the worse the zone (even zombies):
goldilocksObject = {
    "pawn": {
        move: -2,
        food: +2,
        friend: +5,
        enemy: -10
    },
    "pawn_02": {
        move: this.distance * -2,
        food: this.health * +2,
        friend: this.health * 5,
        enemy: this.health * -10
    },
    weight: 0,
    rateSpace: function () {
        console.log("rateSpace method fires");
        console.log("this.weight (before)");
        console.log(this.weight);

        for (key in this.pawn) {
            this.weight += this.pawn[key];
        };
        console.log("this.weight (after)");
        console.log(this.weight);
        // if (pawnObj.pawnType;
    }
};

// distanceToGo = require("./path-finder");

module.exports = goldilocksZone = function (homeSpace, targetSpace, pawnType) {
    // calculate distance

};

goldilocksObject.rateSpace();
// goldilocksObject.rateSpace2(pawnObj);