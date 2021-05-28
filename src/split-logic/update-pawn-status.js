const getPawnTypeTotal = require("./get-pawn-type-total");
const pawnStats = require("./pawn-stats");
const updatePercent = require("./update-percent");

module.exports = updatePawnStatus = async function (string, pawnID, newParentID) {
    console.log(`updatePawnStatus function fires with string = ${string}`);
    console.log("pawnID:");
    console.log(pawnID);
    console.log("pawnStats");
    console.log(pawnStats);
    let pawnType = "";
    let pawnTypeTotal = 0;

    // "switch" pawn type (pawn-switch):

    if (string === "switch") {
        console.log("switch!");
        // console.log("return object:");
        console.log("pawnID in updatePawnStatus: 'switch'");
        console.log(pawnID);
        let pawnTypeSwitch = newParentID; // TODO: need to change variable argument to reflect the various possible arguments to be passed in.
        let pawnElem = document.getElementById(pawnID);
        console.log("pawnElem");
        console.log(pawnElem);
        console.log("pawnTypeSwitch");
        console.log(pawnTypeSwitch);

        let typeBefore = pawnTypeSwitch[0];
        let typeAfter = pawnTypeSwitch[1];

        let pawnStat_Type = pawnStats[typeBefore]; //  <==== pawnType???
        let allPawnSpawn = pawnStat_Type.pawnSpawn;

        console.log("allPawnSpawn?");
        console.log(allPawnSpawn);

        for (let index = 0; index < allPawnSpawn.length; index++) {

            console.log(allPawnSpawn[index].id);

            if (allPawnSpawn[index].id == pawnID) {

                let indexToDelete = index;
                let pawnSpawnHolder = allPawnSpawn[index];

                allPawnSpawn.splice(indexToDelete, 1);

                pawnStats[typeAfter].pawnSpawn.push(pawnSpawnHolder);

                console.log(`before?`);
                console.log(pawnStats[typeBefore]);
                console.log(`after?`);
                console.log(pawnStats[typeAfter]);

            };
        };

        return await setTimeout(function () {
            return new Promise(resolve => resolve(updatePercent(getPawnTypeTotal(pawnStats))));
        }, 200);
        // "location" swap (drag-and-drop):

    } else if (string === "location") {
        let pawnElem = document.getElementById(pawnID);

        if (pawnElem.classList.contains("cyborg-pawn")) {
            console.log("cyborg-pawn");
            cyborgSpawn = pawnStats.cyborg.pawnSpawn;

            // TODO: update location: 
            for (let z = 0; z < cyborgSpawn.length; z++) {
                if (cyborgSpawn[z].id == pawnID) {
                    console.log(`cyborg- ${pawnID} -found!`); // TODO: use this to find and change class/race
                    console.log(`cyborg location was: ${cyborgSpawn[z].loc}.`);

                    cyborgSpawn[z].loc[0] = newParentID;
                    console.log(`cyborg location now is: ${cyborgSpawn[z].loc}.`);
                };
            };

        } else if (pawnElem.classList.contains("human-pawn")) {
            console.log("human-pawn");
            humanSpawn = pawnStats.human.pawnSpawn;

            // TODO: update location: 
            for (let z = 0; z < humanSpawn.length; z++) {
                if (humanSpawn[z].id == pawnID) {
                    console.log(`human- ${pawnID} -found!`); // TODO: use this to find and change class/race
                    console.log(`human location was: ${humanSpawn[z].loc}.`);

                    humanSpawn[z].loc[0] = newParentID;
                    console.log(`human location now is: ${humanSpawn[z].loc}.`);
                };
            };

        } else if (pawnElem.classList.contains("zombie-pawn")) {
            console.log("zombie-pawn");
            zombieSpawn = pawnStats.zombie.pawnSpawn;

            // TODO: update location: 
            for (let z = 0; z < zombieSpawn.length; z++) {
                if (zombieSpawn[z].id == pawnID) {
                    console.log(`zombie- ${pawnID} -found!`); // TODO: use this to find and change class/race
                    console.log(`zombie location was: ${zombieSpawn[z].loc}.`);

                    zombieSpawn[z].loc[0] = newParentID;
                    console.log(`zombie location now is: ${zombieSpawn[z].loc}.`);
                };
            };
        };
        return "updatePawnStatus: success!";
    };

    // await setTimeout(function () {
    //     return new Promise (resolve => updatePercent(getPawnTypeTotal(pawnStats)));
    // }, 200);
};