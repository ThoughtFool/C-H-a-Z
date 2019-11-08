pixelSize = 16;
module.exports = dynaFont = function (inputVal) {
    preResult = Math.floor(Math.sqrt(inputVal) / 10 * pixelSize);
    result = pixelSize - preResult;
    console.log(result);
};