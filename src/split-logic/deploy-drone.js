

module.exports = deployDrone = function () {
    console.log(/* Event fired on the drag target */"?empty");
    // document.addEventListener("dragstart", function (event) {
    //     console.log("event.target");
    //     console.log(event.target);
    //     console.log("event.target.id");
    //     console.log(event.target.id);

    //     event.dataTransfer.setData("Text", event.target.id);
    //     holdingPawn = true;
    //     currentDroneSelected = event.target.id;

    //     let holdingClass = document.getElementById(currentDroneSelected);
        
    //     if (currentDroneSelected == "bio-nanite-drone-btn") {
    //         console.log("bio-nanite-drone-btn selected");

    //     } else if (currentDroneSelected == "bio-hazard-drone-btn") {
    //         console.log("bio-hazard-drone-btn selected");

    //     } else if (currentDroneSelected == "bio-flare-drone-btn") {
    //         console.log("bio-flare-drone-btn selected");

    //     // } else if (currentDroneSelected == "bio-nanite-drone-btn") {
    //     //     console.log("bio-nanite-drone-btn selected");
    //     };


    //     holdingClass.classList.add("holding");
    //     parentDiv = document.getElementById(currentDroneSelected).parentNode;
    //     parentDiv.classList.add("parent-holding-pawn");

    // });

    // // Events fired on the drop target:
    // draggedEventTarget = "";
    // document.addEventListener("dragover", function (event) {
    //     event.preventDefault();
    //     console.log("dragover");
    //     if (event.target.classList.contains("empty-space")) {
    //         event.target.classList.add("available");
    //         draggedEventTarget = event.target;
    //         console.log("draggedEventTarget");
    //         console.log(draggedEventTarget);
    //     };
    // });

    // document.addEventListener("dragend", function (event) {
    //     console.log("dragend");
    //     draggedEventTarget.classList.remove("available");
    // });

    // document.addEventListener("drop", function (event) {
    //     event.preventDefault();

    //     // if (event.target.classList.contains("empty-space")) {
    //     //     // var data = event.dataTransfer.getData("Text");
    //     //     // holdingClass = document.getElementById(currentPawnHeld);
    //     //     // event.target.appendChild(holdingClass);
    //     //     // holdingClass.classList.remove("holding");
    //     //     // event.target.classList.remove("empty-space");
    //     //     // parentDiv.classList.remove("parent-holding-pawn");
    //     //     // parentDiv.classList.add("empty-space");
    //     //     // holdingPawn = false;

    //     //     /////////////////////////////////////////////////////
    //     //     // contentCircle = document.getElementById(`content-health-${currentPawnHeld}`);
    //     //     // event.target.appendChild(contentCircle);
    //     //     /////////////////////////////////////////////////////

    //     //     // [pawnType].pawnSpawn

    //     //     // var newSpan = document.createElement("span"); // Create span node
    //     //     // var textnode = document.createTextNode(pawnStats.); // Create a text node
    //     //     // newSpan.appendChild(textnode); // Append the text to <li>
    //     //     // document.getElementById("myList").appendChild(newSpan);

    //     //     /////////////////////////////////////////////////////

    //     //     currentPawnHeld = "";

    //     //     console.log("parentDiv");
    //     //     console.log(parentDiv);
    //     //     console.log("parentDiv.id");
    //     //     console.log(parentDiv.id);



    //     //     // squarePlace.classList.remove("empty-space");
    //     //     console.log("contentCornerHealth");
    //     //     console.log(contentCornerHealth);

    //     //     // healthInfo(pawnType, pawnId);

    //     //     /////////////////////////////////////////////////////

    //     // } else if (event.target.className == "discard-pile" || event.target.className == "discard") {

    //     //     // data = event.dataTransfer.getData("Text");
    //     //     // console.log("data");
    //     //     // console.log(data);

    //     //     holdingClass = document.getElementById(currentPawnHeld);
    //     //     event.target.appendChild(holdingClass);
    //     //     holdingClass.src = "../assets/images/obverse.png";
    //     //     holdingClass.classList.remove("flipped");
    //     //     holdingClass.classList.remove("card-face");
    //     //     holdingClass.classList.add("discard");
    //     //     holdingClass.classList.remove("holding");
    //     //     parentDiv.classList.remove("parent-holding-pawn");
    //     //     parentDiv.classList.add("empty-space");
    //     //     holdingPawn = false;
    //     //     currentPawnHeld = "";

    //     // } else if (event.target.classList.contains("empty-space") == false) {
    //     //     console.log("this slot is full");
    //     // } else {
    //     //     holdingClass.classList.remove("holding");
    //     //     parentDiv.classList.remove("parent-holding-pawn");
    //     //     parentDiv.classList.remove("empty-space");
    //     //     holdingPawn = false;
    //     //     currentPawnHeld = "";
    //     // };
    //     console.log("dropped");
    // });
};