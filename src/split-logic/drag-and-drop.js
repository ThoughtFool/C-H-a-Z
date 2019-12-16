pawnStats = require("./pawn-stats");
updatePawnStatus = require("./update-pawn-status");

const {
    healthInfo
} = require("./health-info");

module.exports = dragAndDrop = function () {
    console.log("dragAndDrop function fires");

    var currentPawnHeld = null;

    /* Event fired on the drag target */
    // document.addEventListener("dragstart", dragStart);
    dragStart = function (event) {
        if (event.target.classList.contains("human-pawn")) {
            event.dataTransfer.getData("Text", event.target.id);
            holdingPawn = true;
            currentPawnHeld = event.target.id;

            let holdingClass = document.getElementById(currentPawnHeld);
            holdingClass.classList.add("holding");
            parentDiv = document.getElementById(currentPawnHeld).parentNode;
            parentDiv.classList.add("parent-holding-pawn");
        } else {
            event.target.removeEventListener("dragstart", dragStart);
            // document.getElementById("myDIV").
            // document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
        };

        // });
    };
    document.addEventListener("dragstart", dragStart);


    var holdingPawn = false;
    var holdingClass = null;
    var parentDiv = null;


    var counterValue = 0;

    // Events fired on the drop target:
    document.addEventListener("dragover", function (event) {
        event.preventDefault();
        console.log("dragover");
        console.log("holdingPawn: " + holdingPawn);
        console.log(counterValue);
        counterValue++;

        // // while (holdingPawn == true) {
        // while (holdingPawn == "placeHolder") {
        //     // setInterval(() => {
        //     console.log("while loop");
        //     mouseEnterFunc();
        // };
    });

    document.addEventListener("drop", function (event) {
        event.preventDefault();

        console.log("currentPawnHeld");
        console.log(currentPawnHeld);

        if (currentPawnHeld != null) {
            if (document.getElementById(currentPawnHeld).classList.contains("human-pawn")) {
                console.log("currentPawnHeld = human-pawn");


                if (event.target.classList.contains("empty-space")) {
                    // var data = event.dataTransfer.setData("Text");
                    holdingClass = document.getElementById(currentPawnHeld);
                    event.target.appendChild(holdingClass);
                    holdingClass.classList.remove("holding");
                    event.target.classList.remove("empty-space");
                    parentDiv.classList.remove("parent-holding-pawn");
                    parentDiv.classList.add("empty-space");
                    holdingPawn = false;

                    /////////////////////////////////////////////////////
                    contentCircle = document.getElementById(`content-health-${currentPawnHeld}`);
                    event.target.appendChild(contentCircle);
                    /////////////////////////////////////////////////////

                    // [pawnType].pawnSpawn

                    // var newSpan = document.createElement("span"); // Create span node
                    // var textnode = document.createTextNode(pawnStats.); // Create a text node
                    // newSpan.appendChild(textnode); // Append the text to <li>
                    // document.getElementById("myList").appendChild(newSpan);

                    /////////////////////////////////////////////////////
                    newParentDiv_ID = event.target.id;
                    console.log("newParentDiv_ID");
                    console.log(newParentDiv_ID);

                    updatePawnStatus("location", currentPawnHeld, newParentDiv_ID);
                    currentPawnHeld = null;

                    console.log("parentDiv");
                    console.log(parentDiv);
                    console.log("parentDiv.id");
                    console.log(parentDiv.id);
                    console.log("contentCornerHealth");
                    console.log(contentCornerHealth);

                    /////////////////////////////////////////////////////

                } else if (event.target.classList.contains("empty-space") == false) {
                    console.log("this slot is full");
                } else {
                    holdingClass.classList.remove("holding");
                    parentDiv.classList.remove("parent-holding-pawn");
                    parentDiv.classList.remove("empty-space");
                    holdingPawn = false;
                    currentPawnHeld = null;
                };
            } else {
                console.log("currentPawnHeld not human-pawn");
            };
        };
    });
};
// };