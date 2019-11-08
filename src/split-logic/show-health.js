pawnStats = require("./pawn-stats");

module.exports = showHealth = function (pawnType, pawnId, healthCircle) {
    console.log("showHealth function fires");

    var newSpan = document.createElement("span"); // Create span node
    var pawnSpawn = pawnStats[pawnType].pawnSpawn;

    for (let i = 0; i < pawnSpawn.length; i++) {
        console.log("pawnSpawn[i]");
        console.log(pawnSpawn[i]);

        console.log("pawnId");
        console.log(pawnId);
        console.log("pawnSpawn[i].id");
        console.log(pawnSpawn[i].id);

        if (pawnSpawn[i].id == pawnId) {
            if (textnode != null) {
                newSpan.removeChild(textnode);
            };

            healthNum = pawnSpawn[i].health;
            var textnode = document.createTextNode(healthNum); // Create a text node
            newSpan.appendChild(textnode);
            healthCircle.appendChild(newSpan);
        };
    };
};