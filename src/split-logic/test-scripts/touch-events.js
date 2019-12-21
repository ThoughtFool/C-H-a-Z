module.exports = touchEvents = function () {
    console.log("touchEvents function fires");

    var currentPawnHeld = null;

    /* Event fired on the touch target */
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