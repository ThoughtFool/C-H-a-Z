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

const pawn04 = {
    id: "x104-y106",
    type: "human",
    health: 60,
    defense: 3,
    offense: 10
};

/////////////////////////////////////////////////////////////////////////////////

const pawn_PowerUp = function (pawnObj, adjacentSpacesArray, defenseOrOffense) {
    let resultHolder = 0;
    console.log("pawn_PowerUp function fires!");
    
    //for loop here:
    if (pawnObj.type === adjacentSpacesArray.type && defenseOrOffense === "defense") {
        // add to pawnObj.defense:
        console.log(pawnObj);
        resultHolder = resultHolder + 2;

    } else if (pawnObj.type === adjacentSpacesArray.type && defenseOrOffense === "offense") {
        // add to pawnObj.offense:

    };
    return resultHolder;
};

// pawn_PowerUp(pawn02, pawn04, "defense");

/////////////////////////////////////////////////////////////////////////////////

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
        
        // testing ONLY:
        adjacentSpacesArray = pawn04;
        let multiplier_defense = pawn_PowerUp(defenderObj, pawn04, "defense");

        console.log("multiplier_offense");
        console.log(multiplier_offense);

        result_defense = defenderObj.defense + multiplier_defense;
        console.log("result_defense");
        console.log(result_defense);

        result_offense = (multiplier_offense - result_defense) * 1;
        result = result_offense;
        defenderObj.health = defenderObj.health + result;

    } else if (
        defenderObj.type === "human" && attackerObj.type === "zombie" ||
        defenderObj.type === "cyborg" && attackerObj.type === "zombie" ||
        defenderObj.type === "cyborg" && attackerObj.type === "human"
    ) {
        let multiplier_offense = Math.floor(Math.random() * attackerObj.offense);

        // testing ONLY:
        adjacentSpacesArray = pawn04;
        let multiplier_defense = pawn_PowerUp(defenderObj, pawn04, "defense");

        console.log("multiplier_offense");
        console.log(multiplier_offense);

        result_defense = defenderObj.defense + multiplier_defense;
        console.log("result_defense");
        console.log(result_defense);

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

// // human attacks zombie:
// adjSpace_Multiplier(pawn, pawn02);
// // human attacks cyborg:
// adjSpace_Multiplier(pawn03, pawn02);

// zombie attacks human:
adjSpace_Multiplier(pawn02, pawn);
// // zombie attacks cyborg:
// adjSpace_Multiplier(pawn03, pawn);

// // cyborg attacks zombie:
// adjSpace_Multiplier(pawn, pawn03);
// cyborg attacks human:
adjSpace_Multiplier(pawn04, pawn03);

/////////////////////////////////////////////////////////////////////////////////

