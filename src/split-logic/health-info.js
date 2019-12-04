pawnStats = require("./pawn-stats");
showHealth = require("./show-health");
dynaFont = require("./dyna-font");

// function healthInfo(pawnType, pawnId) { 
module.exports = healthInfo = function (pawnType, pawnId) {
    console.log("healthInfo function fires");

    pawnParent = document.getElementById(pawnId).parentNode;
    if (pawnParent.childNodes[1] != null) {
        pawnParent.removeChild(pawnParent.childNodes[1]);
    };

    // refreshPawn.removeChild(refreshPawn.childNodes[0]);

    contentCornerHealth = document.createElement("div");
    contentHealthId = `content-health-${pawnId}`;
    contentCornerHealth.setAttribute("id", contentHealthId);
    pawnParent.appendChild(contentCornerHealth);
    healthCircle = document.getElementById(contentHealthId);
    healthCircle.classList.add("empty-health");
    healthCircle.classList.add("health-score");
    // healthCircle.style.setProperty(`--health-font`, `'${healthFontSize}'`);

    // get userNum and run function to create dynamic pixel size:
    userNum = localStorage.getItem("boardSize");
    healthCircle.style.fontSize = `${dynaFont(userNum)}px`;
    pawnParent.classList.remove("empty-space");
    console.log("contentCornerHealth");
    console.log(contentCornerHealth);

    showHealth(pawnType, pawnId, healthCircle);

    ///////////////////////////////////////////////////

    // // console.log(pawnSpawn[pawnType].pawnSpawn.health);
    // var newSpan = document.createElement("span"); // Create span node
    // var pawnSpawn = pawnStats[pawnType].pawnSpawn;
    // for (let i = 0; i < pawnSpawn.length; i++) {
    //     console.log("pawnSpawn[i]");
    //     console.log(pawnSpawn[i]);

    //     console.log("pawnId");
    //     console.log(pawnId);
    //     console.log("pawnSpawn[i].id");
    //     console.log(pawnSpawn[i].id);        

    //     if (pawnSpawn[i].id == pawnId) {
    //         healthNum = pawnSpawn[i].health;
    //         var textnode = document.createTextNode(healthNum); // Create a text node
    //         newSpan.appendChild(textnode); // Append the text to <li>
    //         healthCircle.appendChild(newSpan);
    //     };
    // };
};
// exports.healthInfo = healthInfo;