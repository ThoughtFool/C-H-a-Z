// module.exports = weightedSpace = function (health, homeSpace, adjSpaceArray) {
//     console.log("weightedSpace function fires");
//     const weightObj = {
//         "zombie": {
//             "cyborg": {
//                 help: 3,
//                 hurt: 2,
//                 moveCost: this.moveCost
//             },
//             "human": {
//                 help: 3,
//                 hurt: 2,
//                 moveCost: this.moveCost
//             },
//             "zombie": {
//                 help: 3,
//                 hurt: 2,
//                 moveCost: this.moveCost
//             },
//             }
//         }
//     };

//     let weightsArray = [];

//     if (homeSpace === adjSpaceArray[i]) {

//     }

// };
// let adjTally

// let numOfMoves = 2;

// // loop through array of pawnSpawn:
// // check each using adjSpaces and push into array.
// // loop through adjaces array and assign a value
// // determine which will yeild highest reward
// // move pawn.
// // // loops to second pawn in pawnSpawn loop:
// // // repeat steps until loop has moved all pieces?

// //.... OR 
// // based on number of moves available to each player (determine number of moves),
// // have pawn choose random number of spaces to move (FIRST),
// // THEN... move that number of spaces?
// // THEN... subtract from total number of moves of turn


// // if (adjHuman === )

// const pawn = {
//     selfType: this.selfType,
//     enemyType: this.enemyType,
//     weight: {
//         help: 3,
//         hurt: 2,
//         moveCost: this.moveCost
//     },
//     scale: function (selfType, enemyType) {
//         if (selfType  === enemyType) {
//             health:
//         }
//     }
// }

// TODO: Costs:
let moveCost = -2;
let foodCost = +2;
let friendCost = +2;
let enemyCost = -10;

let totalCost = moveCost + foodCost + friendCost + enemyCost;

console.log(totalCost);

// test ONLY:
let selfType = "zombie";

const weightedSpace = function (selfType, enemyType) {

    if (selfType === "zombie") {
        totalCost = totalCost * -1;
        console.log("totalCost");
        console.log(totalCost);
    };
};

weightedSpace(selfType, selfType);