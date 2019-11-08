// // 

// // var box = document.querySelector('div');

// // // width and height in pixels, including padding and border
// // // Corresponds to jQuery outerWidth(), outerHeight()
// // var width = box.offsetWidth;
// // var height = box.offsetHeight;

// // // width and height in pixels, including padding, but without border
// // // Corresponds to jQuery innerWidth(), innerHeight()
// // var width = box.clientWidth;
// // var height = box.clientHeight;

var rootNum = 9;
// multiplierNum = 1 / 4;
var multiplierNum;
//  12  10   8    6    4    2   <-  pixelSize;
//  9   16   25   36   49   64  <-  inputNum;
//  
//  3   4    5    6    7    8   <-  squareRoot;

pixelSize = 16;

fontFunc = function (inputVal) {
    squareRoot = Math.sqrt(inputVal);
    toPercent = squareRoot / 10;
    console.log("toPercent");
    console.log(toPercent);
    pixelSize = 14;
    
    result = toPercent * pixelSize;

    newResult = Math.floor(result);

    ans = pixelSize - newResult;

    // multiplierNum = rootNum / inputVal;
    // pixelSize = multiplierNum % inputVal * 100;
    console.log(ans);
};

fontFunc1 = function (inputVal) {
    preResult = Math.floor(Math.sqrt(inputVal) / 10 * pixelSize);
    result = pixelSize - preResult;
    console.log(result);    
};

fontFunc2 = function (inputVal) {
    pixelSize = multiplierNum * inputVal;
    // console.log(pixelSize);
};
squareRoot = Math.sqrt(rootNum);
console.log("squareRoot");
console.log(squareRoot);

fontFunc1(rootNum);
fontFunc1(16);
fontFunc1(25);
fontFunc1(36);