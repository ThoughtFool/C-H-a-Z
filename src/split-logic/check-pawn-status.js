pawnStats = require("./pawn-stats");
pawnSwitch = require("./pawn-switch");
module.exports = checkPawnStatus = function (pawnType) {
    console.log("checkPawnStatus function fires");
    // check pawns' health stats to verify allegiance

    // pawnTypeArr = ["human", "zombie", "cyborg"];
    // TODO: Add 2 more pawn types after adding to create-pawn.js file:
    // pawnTypeArr = ["human", "zombie", "cyborg", "sleeping-zombie", "sleepy-cyborg"];
    // for (let x = 0; x < pawnTypeArr.length; x++) {
    //     let pawnType = pawnTypeArr[x];        
    // };

    console.log("pawnType before for loop:"); 
    console.log(pawnType);

    let pawnStat_Type = pawnStats[pawnType]; 
    let allPawnSpawn = pawnStat_Type.pawnSpawn;
    console.log("allPawnSpawn[0]");
    console.log(allPawnSpawn[0]);

    // allPawnSpawn = pawnStats.human.pawnSpawn; // <<<<< TESTING ONLY

    // TODO: create an if("human") do the following...
    // then create for the other races/classes:

    for (let i = 0; i < allPawnSpawn.length; i++) {
        console.log(`health: ${allPawnSpawn[i].health}`);
        if (allPawnSpawn[i].health >= 20 && allPawnSpawn[i].health <= 80 && pawnType == "hazmat-human") {
            pawnSwitch(allPawnSpawn[i].id, "human");
            console.log(`${allPawnSpawn[i].id} is still HUMAN...for now!`);
        
        } else if (allPawnSpawn[i].health >= -40 && allPawnSpawn[i].health < 20 && pawnType == "human") {
            pawnSwitch(allPawnSpawn[i].id, "zombie");
            console.log(`${allPawnSpawn[i].id} is no longer human! ${allPawnSpawn[i].id} joins ZOMBIE HORDE!`);
        
        } else if (allPawnSpawn[i].health > 80 && allPawnSpawn[i].health <= 140 && pawnType == "human") {
            pawnSwitch(allPawnSpawn[i].id, "cyborg");
            console.log(`${allPawnSpawn[i].id} is no longer human! ${allPawnSpawn[i].id} joins CYBORG REVOLT!`);
            
            // } else if (allPawnSpawn[i].health > 0 && allPawnSpawn[i].health < 20) {
            // pawnSwitch(allPawnSpawn[i].id, "sleepy-zombie", "cyborg");
            // TODO: add sleepy-zombie here!
            //     console.log(`ALERT!!! {allPawnSpawn[i].id} is barely human!`);
            
            // } else if (allPawnSpawn[i].health > 80 && allPawnSpawn[i].health < 100) {
            // pawnSwitch(allPawnSpawn[i].id, "sleepy-cyborg");
            // TODO: add sleepy-cyborg here!
            //     console.log(`ALERT!!! {allPawnSpawn[i].id} is barely human!`);
        
        } else if (allPawnSpawn[i].health < -40 || allPawnSpawn[i].health > 140) {
            pawnSwitch("permafrost"); // TODO: they don't move and potentially block movement and shield attacks from enemies;
            console.log(`${allPawnSpawn[i].id} is beyond the reach of the NANITES... ${allPawnSpawn[i].id} has been eliminated!`);
        
        } else {
            console.log("a calculation error has occurred");
        };
    };
    // health = +10;
    // pawnStats.human.pawnSpawn[i].health = health;
};