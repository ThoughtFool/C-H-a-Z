// pawnStats = require("../pawn-stats");
// updatePawnStatus = require("../update-pawn-status");
// const {
//     healthInfo
// } = require("../health-info");

// // document.getElementById("myP").addEventListener("touchstart", myFunction);
module.exports = touchEvents = function () {
    console.log("touchEvents function fires");

    // if (event.target.classList.contains("human-pawn")) {
    //     var currentPawnHeld = null;

        var currentPawnHeld = null;

        /* Event fired on the touch target */
        // document.addEventListener("dragstart", dragStart);
        touchStart = function (event) {
            if (event.target.classList.contains("human-pawn")) {
                // event.dataTransfer.getData("Text", event.target.id);
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
        document.addEventListener("touchstart", touchStart);

        var holdingPawn = false;
        var holdingClass = null;
        var parentDiv = null;
        var counterValue = 0;


        /* Event fired on the touchmove target */
        document.addEventListener("touchmove", function (event) {
            // event.preventDefault();
            console.log("touchmove");
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

        // Events fired on the drop target:
        document.addEventListener("touchend", function (event) {
            // event.preventDefault();

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

        // document.addEventListener("touchstart", function (event) {

        //     console.log("human pawn touched");
        //     console.log("event.target");
        //     console.log(event.target);
        //     console.log("event.target.id");
        //     console.log(event.target.id);
        //     // event.dataTransfer.getData("Text", event.target.id);
        //     holdingPawn = true;
        //     currentPawnHeld = event.target.id;
        //     let holdingClass = document.getElementById(currentPawnHeld);
        //     holdingClass.classList.add("holding");
        //     parentDiv = document.getElementById(currentPawnHeld).parentNode;
        //     parentDiv.classList.add("parent-holding-pawn");


        // });
        // var counterValue = 0;


        // Events fired on the drop target:
        // document.addEventListener("touchmove", function (event) {
        //     // event.preventDefault();
        //     console.log("touchmove");
        //     console.log("holdingPawn: " + holdingPawn);
        //     console.log(counterValue);
        //     counterValue++;



        //     // // while (holdingPawn == true) {
        //     // while (holdingPawn == "placeHolder") {
        //     //     // setInterval(() => {
        //     //     console.log("while loop");
        //     //     mouseEnterFunc();
        //     // };
        // });

        // document.addEventListener("touchends", function (event) {
        //     // event.preventDefault();

        //     if (event.target.classList.contains("empty-space")) {
        //         // var data = event.dataTransfer.setData("Text");
        //         holdingClass = document.getElementById(currentPawnHeld);
        //         event.target.appendChild(holdingClass);
        //         holdingClass.classList.remove("holding");
        //         event.target.classList.remove("empty-space");
        //         parentDiv.classList.remove("parent-holding-pawn");
        //         parentDiv.classList.add("empty-space");
        //         holdingPawn = false;

        //         /////////////////////////////////////////////////////
        //         contentCircle = document.getElementById(`content-health-${currentPawnHeld}`);
        //         event.target.appendChild(contentCircle);
        //         /////////////////////////////////////////////////////

        //         // [pawnType].pawnSpawn

        //         // var newSpan = document.createElement("span"); // Create span node
        //         // var textnode = document.createTextNode(pawnStats.); // Create a text node
        //         // newSpan.appendChild(textnode); // Append the text to <li>
        //         // document.getElementById("myList").appendChild(newSpan);

        //         /////////////////////////////////////////////////////
        //         newParentDiv_ID = event.target.id;
        //         console.log("newParentDiv_ID");
        //         console.log(newParentDiv_ID);

        //         updatePawnStatus("location", currentPawnHeld, newParentDiv_ID);
        //         currentPawnHeld = "";

        //         console.log("parentDiv");
        //         console.log(parentDiv);
        //         console.log("parentDiv.id");
        //         console.log(parentDiv.id);
        //         console.log("contentCornerHealth");
        //         console.log(contentCornerHealth);

        //         /////////////////////////////////////////////////////

        //     } else if (event.target.classList.contains("empty-space") == false) {
        //         console.log("this slot is full");
        //     } else {
        //         holdingClass.classList.remove("holding");
        //         parentDiv.classList.remove("parent-holding-pawn");
        //         parentDiv.classList.remove("empty-space");
        //         holdingPawn = false;
        //         currentPawnHeld = "";
        //     };
        // });




        //     currentPawnHeld = null;

        //     var holdingPawn = false;
        //     var holdingClass = null;
        //     var parentDiv = null;

        //     /* Event fired on the touch target */
        //     const touchStart = function (event) {
        //         // document.addEventListener("touchstart", function (event) {
        //         // event.dataTransfer.setData("Text", event.target[0].id);
        //         holdingPawn = true;
        //         currentPawnHeld = event.target[0].id;

        //         let holdingClass = document.getElementById(currentPawnHeld);
        //         holdingClass.classList.add("holding");
        //         parentDiv = document.getElementById(currentPawnHeld).parentNode;
        //         parentDiv.classList.add("parent-holding-pawn");

        //     };

        //     C_pawnList = document.querySelectorAll(".cyborg-pawn");
        //     console.log("C_pawnList");
        //     console.log(C_pawnList[0]);

        //     for (let c = 0; c < C_pawnList.length; c++) {
        //         C_pawnList[c].addEventListener("touchstart", touchStart);
        //     };

        //     H_pawnList = document.querySelectorAll(".human-pawn");
        //     for (let h = 0; h < H_pawnList.length; h++) {
        //         H_pawnList[h].addEventListener("touchstart", touchStart);
        //     };
        //     Z_pawnList = document.querySelectorAll(".zombie-pawn");
        //     for (let z = 0; z < Z_pawnList.length; z++) {
        //         Z_pawnList[z].addEventListener("touchstart", touchStart);
        //     };
        //     var counterValue = 0;

        //     // Events fired on the drop target:
        //     document.addEventListener("touchmove", function (event) {
        //         event.preventDefault();
        //         console.log("touchmove");
        //         console.log("holdingPawn: " + holdingPawn);
        //         console.log(counterValue);
        //         counterValue++;

        //         // // while (holdingPawn == true) {
        //         // while (holdingPawn == "placeHolder") {
        //         //     // setInterval(() => {
        //         //     console.log("while loop");
        //         //     mouseEnterFunc();
        //         // };
        //     });

        //     document.addEventListener("touchend", function (event) {
        //         event.preventDefault();

        //         if (event.target[0].classList.contains("empty-space")) {
        //             // var data = event.dataTransfer.getData("Text");
        //             holdingClass = document.getElementById(currentPawnHeld);
        //             event.target[0].appendChild(holdingClass);
        //             holdingClass.classList.remove("holding");
        //             event.target[0].classList.remove("empty-space");
        //             parentDiv.classList.remove("parent-holding-pawn");
        //             parentDiv.classList.add("empty-space");
        //             holdingPawn = false;

        //             /////////////////////////////////////////////////////
        //             contentCircle = document.getElementById(`content-health-${currentPawnHeld}`);
        //             event.target[0].appendChild(contentCircle);
        //             /////////////////////////////////////////////////////

        //             // [pawnType].pawnSpawn

        //             // var newSpan = document.createElement("span"); // Create span node
        //             // var textnode = document.createTextNode(pawnStats.); // Create a text node
        //             // newSpan.appendChild(textnode); // Append the text to <li>
        //             // document.getElementById("myList").appendChild(newSpan);

        //             /////////////////////////////////////////////////////
        //             newParentDiv_ID = event.target[0].id;
        //             console.log("newParentDiv_ID");
        //             console.log(newParentDiv_ID);

        //             updatePawnStatus("location", currentPawnHeld, newParentDiv_ID);
        //             currentPawnHeld = "";

        //             console.log("parentDiv");
        //             console.log(parentDiv);
        //             console.log("parentDiv.id");
        //             console.log(parentDiv.id);
        //             console.log("contentCornerHealth");
        //             console.log(contentCornerHealth);

        //             /////////////////////////////////////////////////////

        //         } else if (event.target[0].classList.contains("empty-space") == false) {
        //             console.log("this slot is full");
        //         } else {
        //             holdingClass.classList.remove("holding");
        //             parentDiv.classList.remove("parent-holding-pawn");
        //             parentDiv.classList.remove("empty-space");
        //             holdingPawn = false;
        //             currentPawnHeld = "";
        //         };
    // } else {
    //     console.log("not a human pawn");
    // };
    //     });
};