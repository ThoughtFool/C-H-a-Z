

module.exports = deployDrone = function () {
    /* Event fired on the drag target */
    document.addEventListener("dragstart", function (event) {
        console.log("event.target");
        console.log(event.target);
        console.log("event.target.id");
        console.log(event.target.id);

        event.dataTransfer.setData("Text", event.target.id);
        holdingPawn = true;
        currentDroneSelected = event.target.id;

        let holdingClass = document.getElementById(currentDroneSelected);
        
        if (currentDroneSelected == "bio-nanite-drone-btn") {
            console.log("bio-nanite-drone-btn selected");

        } else if (currentDroneSelected == "bio-hazard-drone-btn") {
            console.log("bio-hazard-drone-btn selected");

        } else if (currentDroneSelected == "bio-flare-drone-btn") {
            console.log("bio-flare-drone-btn selected");

        // } else if (currentDroneSelected == "bio-nanite-drone-btn") {
        //     console.log("bio-nanite-drone-btn selected");
        };


        holdingClass.classList.add("holding");
        parentDiv = document.getElementById(currentDroneSelected).parentNode;
        parentDiv.classList.add("parent-holding-pawn");

    });
};