// pixelSize = 16;
// module.exports = dynaFont = function (inputVal) {
//     // preResult = Math.floor(Math.sqrt(inputVal) / 10 * pixelSize);
//     preResult = Math.floor(Math.sqrt(inputVal) / 10 * pixelSize);
//     result = pixelSize - preResult;
//     console.log(result);
// };
// ////////////////////////////////////////////////////////////

// inputVal = 9;
module.exports = dynaFont = function (inputVal) {
    // preResult = Math.floor(Math.sqrt(inputVal) / 10 * pixelSize);
    preResult = Math.sqrt(inputVal);
    percentageSizeBox = 1 / preResult * 100;
    console.log("percentageSizeBox");
    console.log(percentageSizeBox);
    // newSquare.style.width = `${percentageSizeBox}%`;
    pixelSize = percentageSizeBox / 4;

    result = pixelSize;
    console.log(result);

    return result;
};