pawnStats = require("./pawn-stats");
const { healthInfo } = require("./health-info");

module.exports = dragAndDrop = function () {
    console.log("dragAndDrop function fires");

    currentPawnHeld = null;

    var holdingPawn = false;
    var holdingClass = null;
    var parentDiv = null;

    /* Event fired on the drag target */
    document.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("Text", event.target.id);
        holdingPawn = true;
        currentPawnHeld = event.target.id;

        let holdingClass = document.getElementById(currentPawnHeld);
        holdingClass.classList.add("holding")
        parentDiv = document.getElementById(currentPawnHeld).parentNode;
        parentDiv.classList.add("parent-holding-pawn");

    });
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

        if (event.target.classList.contains("empty-space")) {
            // var data = event.dataTransfer.getData("Text");
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

            currentPawnHeld = "";

            console.log("parentDiv");
            console.log(parentDiv);
            console.log("parentDiv.id");
            console.log(parentDiv.id);

            

            // squarePlace.classList.remove("empty-space");
            console.log("contentCornerHealth");
            console.log(contentCornerHealth);

            // healthInfo(pawnType, pawnId);

            /////////////////////////////////////////////////////

        } else if (event.target.className == "discard-pile" || event.target.className == "discard") {

            // data = event.dataTransfer.getData("Text");
            // console.log("data");
            // console.log(data);

            holdingClass = document.getElementById(currentPawnHeld);
            event.target.appendChild(holdingClass);
            holdingClass.src = "../assets/images/obverse.png";
            holdingClass.classList.remove("flipped");
            holdingClass.classList.remove("card-face");
            holdingClass.classList.add("discard");
            holdingClass.classList.remove("holding");
            parentDiv.classList.remove("parent-holding-pawn");
            parentDiv.classList.add("empty-space");
            holdingPawn = false;
            currentPawnHeld = "";

        } else if (event.target.classList.contains("empty-space") == false) {
            console.log("this slot is full");
        } else {
            holdingClass.classList.remove("holding");
            parentDiv.classList.remove("parent-holding-pawn");
            parentDiv.classList.remove("empty-space");
            holdingPawn = false;
            currentPawnHeld = "";
        };
    });
};