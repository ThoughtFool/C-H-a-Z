module.exports = rateSpace = function (move, food, friend, enemy) {
    console.log("rateSpace method fires");

    let weight = move + food + friend + enemy;

    console.log("weight");
    console.log(weight);

    return weight;
};