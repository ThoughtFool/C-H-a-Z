module.exports = isSquare = function (num) {
        return num > 4 && Math.sqrt(num) % 1 === 0;
    };