num01 = document.getElementById("num-01");
num02 = document.getElementById("num-02");
num03 = document.getElementById("num-03");

haz01 = document.getElementById("haz-01");
haz02 = document.getElementById("haz-02");
haz03 = document.getElementById("haz-03");

hazRunner = document.getElementById("runner");
hazRoad = document.getElementById("road");

//  Column 01:
setTimeout(function () {
    num01.innerText = "4";
    num02.innerText = "0";
    num03.innerText = "4";
}, 500);

setTimeout(function () {
    hazRunner.style.background = "url('../../../public/assets/images/hazmat-runner-10.png')";
    // hazRoad.style.borderBottom = "7px dashed black";

    haz01.style.backgroundImage = "url('../../../public/assets/images/hazmat-confused.png')";
    haz01.style.backgroundSize = "contain";
    haz01.style.backgroundRepeat = "no-repeat";
    haz01.style.backgroundPosition = "center";
}, 1000);

setTimeout(function () {
    num01.innerText = "4";
    num01.classList.add("glow");
}, 2000);

// setTimeout(function () {
//     // haz01.style.backgroundImage = "";
// }, 3500);
//  Column 02:

setTimeout(function () {
    haz02.style.backgroundImage = "url('../../../public/assets/images/hazmat-confused.png')";
    haz02.style.backgroundSize = "contain";
    haz02.style.backgroundRepeat = "no-repeat";
    haz02.style.backgroundPosition = "center";
}, 4000);

setTimeout(function () {
    num02.innerText = "0";
    num02.classList.add("glow");
}, 5000);

setTimeout(function () {
    haz02.style.backgroundImage = "";
}, 5500);

//  Column 03:
setTimeout(function () {
    haz03.style.backgroundImage = "url('../../../public/assets/images/hazmat-confused.png')";
    haz03.style.backgroundSize = "contain";
    haz03.style.backgroundRepeat = "no-repeat";
    haz03.style.backgroundPosition = "center";
}, 6000);

setTimeout(function () {
    num03.innerText = "4";
    num03.classList.add("glow");
}, 7000);