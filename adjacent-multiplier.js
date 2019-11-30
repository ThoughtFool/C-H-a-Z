let multiplier = 20;
let multiplier1 = 2;
// health = 80;


const adjacentMultiplier = function (pawnID, pawnType, health, multiplier, multiplier1) {
    console.log("adjacentMultiplier function fires!");

    let M = Math.floor(Math.random() * multiplier);

    console.log("pawnID:");
    console.log(pawnID);

    if (pawnType == "cyborg") {
        result = M;
        multiplier = multiplier * 1;

    } else if (pawnType == "zombie") {
        result = M * -1;
        multiplier = multiplier * -1;

    } else if (pawnType == "human") {
        result = M * 1;
        multiplier = multiplier * 2;

    } else {
        console.log("error");
    };

    this.health = health + result;
    // health = health + multiplier;
    console.log("M");
    console.log(M);

    console.log("health");
    console.log(this.health);

    console.log("result");
    console.log(result);
};

// adjacentMultiplier(pawn.id, pawn.type, pawn.health, multiplier, multiplier1);
// adjacentMultiplier("x103-y101", "cyborg", 110, multiplier, multiplier1);

// defense:
// result / 2

// pawnID, pawnType, health, multiplier, multiplier1

const pawn = {
    id: "x101-y103",
    type: "zombie",
    health: -10,
    defense: 2,
    offense: 10
};

const pawn02 = {
    id: "x102-y102",
    type: "human",
    health: 50,
    defense: 2,
    offense: 10
};

const pawn03 = {
    id: "x105-y107",
    type: "cyborg",
    health: 150,
    defense: 2,
    offense: 10
};

const adjSpace_Multiplier = function (defenderObj, attackerObj) {
    console.log("adjSpace_Multiplier function fires!");
    console.log(`${attackerObj.type} attacks ${defenderObj.type}!`);

    if (defenderObj.type === attackerObj.type) {
        console.log("defender type is the same at the attacker type");
        // call function to add "Power-ups to pawn object"
        
    } else if (
        defenderObj.type === "human" && attackerObj.type === "cyborg" ||
        defenderObj.type === "zombie" && attackerObj.type === "human" ||
        defenderObj.type === "zombie" && attackerObj.type === "cyborg"
    ) {
        let multiplier_offense = Math.floor(Math.random() * attackerObj.offense);

        // result = multiplier_offense * 1;
        // defenderObj.health = defenderObj.health + result;
        // console.log(`${defenderObj.type}'s health:`);
        // console.log(defenderObj.health);

        result_defense = defenderObj.defense;
        result_offense = (multiplier_offense - result_defense) * 1;
        result = result_offense;
        defenderObj.health = defenderObj.health + result;

    } else if (
        defenderObj.type === "human" && attackerObj.type === "zombie" ||
        defenderObj.type === "cyborg" && attackerObj.type === "zombie" ||
        defenderObj.type === "cyborg" && attackerObj.type === "human"
    ) {
        let multiplier_offense = Math.floor(Math.random() * attackerObj.offense);

        result_defense = defenderObj.defense;
        result_offense = (multiplier_offense - result_defense) * -1;
        result = result_offense;
        defenderObj.health = defenderObj.health + result;

    } else {
        console.log("else fires!");
    };
    console.log("defenderObj.type:");
    console.log(defenderObj.type);
    console.log("result:");
    console.log(result);
    console.log(`${defenderObj.type}'s health:`);
    console.log(defenderObj.health);
};

adjSpace_Multiplier(pawn, pawn02);
adjSpace_Multiplier(pawn02, pawn);
adjSpace_Multiplier(pawn03, pawn);

/////////////////////////////////////////////////////////////////////////////////

const pawn_PowerUp = function (pawnObj, adjacentSpacesArray) {
    console.log("pawn_PowerUp function fires!");
};