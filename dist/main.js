!function(e){var o={};function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)n.d(t,a,function(o){return e[o]}.bind(null,a));return t},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=6)}([function(e,o){e.exports=pawnStats={human:{pawnSpawn:[]},zombie:{pawnSpawn:[]},cyborg:{pawnSpawn:[]},pawnCounter:0,pawnIdArray:{human:[],zombie:[],cyborg:[]}}},function(e,o,n){const t=n(17),a=n(18);e.exports=adjacentSpaces=function(e,o,n,l,s){console.log("adjacentSpaces function fires");let c=e;console.log("homespace_idString"),console.log(c),e=e.match(/\d+/g),console.log("homespace after match:"),console.log(e);let r={homespace:e,homespace_idString:c,x:[],y:[],comb:[]};x_Loc=e[0]=parseInt(e[0]),console.log("x_Loc"),console.log(x_Loc),y_Loc=e[1]=parseInt(e[1]),console.log("y_Loc"),console.log(y_Loc);for(let e=0;e<=o;e++)e>0?(r.x.push(x_Loc+e,x_Loc-e),r.y.push(y_Loc+e,y_Loc-e)):(r.x.push(x_Loc+e),r.y.push(y_Loc+e));return console.log("adjacentSpaceObj"),console.log(r),r=a(e,r,o),console.log("adjacentSpaceObj.comb"),console.log(r.comb),"endRound"===s?t(c,r.comb,l):"compTurn"!==s?r:void console.log("compTurn msg in adjSpacesFinder")}},function(e,o,n){pawnStats=n(0),showHealth=n(11),dynaFont=n(12),e.exports=healthInfo=function(e,o){console.log("healthInfo function fires"),pawnParent=document.getElementById(o).parentNode,null!=pawnParent.childNodes[1]&&pawnParent.removeChild(pawnParent.childNodes[1]),contentCornerHealth=document.createElement("div"),contentHealthId=`content-health-${o}`,contentCornerHealth.setAttribute("id",contentHealthId),pawnParent.appendChild(contentCornerHealth),healthCircle=document.getElementById(contentHealthId),healthCircle.classList.add("empty-health"),healthCircle.classList.add("health-score"),userNum=localStorage.getItem("boardSize"),healthCircle.style.fontSize=`${dynaFont(userNum)}px`,pawnParent.classList.remove("empty-space"),console.log("contentCornerHealth"),console.log(contentCornerHealth),showHealth(e,o,healthCircle)}},function(e,o,n){pawnStats=n(0),e.exports=updatePawnStatus=function(e,o,n){console.log(`updatePawnStatus function fires with string = ${e}`),console.log("pawnID:"),console.log(o),console.log("pawnStats"),console.log(pawnStats);if("switch"===e){console.log("switch!"),console.log("pawnID in updatePawnStatus: 'switch'"),console.log(o);let e=n,t=document.getElementById(o);console.log("pawnElem"),console.log(t),console.log("pawnTypeSwitch"),console.log(e);let a=e[0],l=e[1],s=pawnStats[a].pawnSpawn;console.log("allPawnSpawn?"),console.log(s);for(let e=0;e<s.length;e++)if(console.log(s[e].id),s[e].id==o){let o=e,n=s[e];s.splice(o,1),pawnStats[l].pawnSpawn.push(n),console.log("before?"),console.log(pawnStats[a]),console.log("after?"),console.log(pawnStats[l])}}else if("location"===e){let e=document.getElementById(o);if(e.classList.contains("cyborg-pawn")){console.log("cyborg-pawn"),cyborgSpawn=pawnStats.cyborg.pawnSpawn;for(let e=0;e<cyborgSpawn.length;e++)cyborgSpawn[e].id==o&&(console.log(`cyborg- ${o} -found!`),console.log(`cyborg location was: ${cyborgSpawn[e].loc}.`),cyborgSpawn[e].loc[0]=n,console.log(`cyborg location now is: ${cyborgSpawn[e].loc}.`))}else if(e.classList.contains("human-pawn")){console.log("human-pawn"),humanSpawn=pawnStats.human.pawnSpawn;for(let e=0;e<humanSpawn.length;e++)humanSpawn[e].id==o&&(console.log(`human- ${o} -found!`),console.log(`human location was: ${humanSpawn[e].loc}.`),humanSpawn[e].loc[0]=n,console.log(`human location now is: ${humanSpawn[e].loc}.`))}else if(e.classList.contains("zombie-pawn")){console.log("zombie-pawn"),zombieSpawn=pawnStats.zombie.pawnSpawn;for(let e=0;e<zombieSpawn.length;e++)zombieSpawn[e].id==o&&(console.log(`zombie- ${o} -found!`),console.log(`zombie location was: ${zombieSpawn[e].loc}.`),zombieSpawn[e].loc[0]=n,console.log(`zombie location now is: ${zombieSpawn[e].loc}.`))}}}},function(e,o,n){const t=n(22),a=n(23),l=n(5),s=n(1);e.exports=goldilocksChecker=function(e,o,n){console.log("goldilocksChecker function fires"),console.log("homeSpace::"),console.log(e),console.log("targetSpace::"),console.log(o);let c=t(e,o);console.log("movesArray:"),console.log(c.length);let r=-1*c.length;console.log("distance"),console.log(r);let i={cyborg:[],human:[],zombie:[]},d=`content-x${o[0]}-y${o[1]}`,p=s(d,1);console.log("targetAdjArr"),console.log(p);for(let e=0;e<p.comb.length;e++){console.log("targetAdjArr.comb[adj]"),console.log(p.comb[e]);let o=document.getElementById(p.comb[e]);o.classList.contains("empty-space")?console.log(`${o} is an empty space.`):o.childNodes[0].classList.contains("cyborg-pawn")?(console.log("cyborg-pawn"),i.cyborg.push("cyborg")):o.childNodes[0].classList.contains("human-pawn")?(console.log("human-pawn"),i.human.push("human")):o.childNodes[0].classList.contains("zombie-pawn")?(console.log("zombie-pawn"),i.zombie.push("zombie")):console.log("else")}let g=new a(n,r,2,5,-10,e,l);return g.weightHolder=i,console.log("goldSpace:"),console.log(g),g}},function(e,o){e.exports=rateSpace=function(e,o,n,t){console.log("rateSpace method fires");let a=e+o+n+t;return console.log("weight"),console.log(a),a}},function(e,o,n){createBoard=n(7),counter=0;const t=n(13),a=n(14),l=n(15),s=n(16),c=n(25);var r=document.getElementById("create-pawn"),i=document.getElementById("end-round"),d=document.getElementById("test-nums"),p=document.getElementById("submit-test-num"),g=document.getElementsByClassName("accordion");for(let e=0;e<g.length;e++)g[e].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}));p.addEventListener("click",(function(){console.log("startBtn 'click' function fires"),document.documentElement.webkitRequestFullScreen(),console.log(d.value),userNum=d.value,localStorage.setItem("boardSize",userNum),"block"===p.style.display?p.style.display="none":p.style.display="block","block"===d.style.display?d.style.display="none":d.style.display="block","block"===r.style.display?r.style.display="none":r.style.display="block",createBoard(userNum)})),r.addEventListener("click",(function(){console.log("randBtn 'click' function fires"),storedUserNum=localStorage.getItem("boardSize");let e=Math.sqrt(storedUserNum);console.log("rootNum"),console.log(e),"block"===r.style.display?r.style.display="none":r.style.display="block","block"===i.style.display?i.style.display="none":i.style.display="block",t(e,e-1),a(),l(),c()})),i.addEventListener("click",(function(){console.log("endRoundBtn 'click' function fires"),s()}))},function(e,o,n){isSquare=n(8),MakeSquare=n(9),createPawn=n(10),e.exports=createBoard=function(e){if(isSquare(e)){boardHolder=document.getElementById("board-holder"),console.log("numberOfSpaces is square"),gameBoard=[],baseNum=1e3,console.log("square root of "+e),sqRootNum=Math.sqrt(e),console.log(sqRootNum);for(let e=1;e<=sqRootNum;e++){newRow=document.createElement("div"),rowID=`row-${e}`,newRow.setAttribute("id",rowID),boardHolder.appendChild(newRow),boardRow=document.getElementById(rowID),boardRow.setAttribute("class","row");for(let o=1;o<=sqRootNum;o++){let n=new MakeSquare(baseNum+o,baseNum+e,Math.floor(10*Math.random())+1);gameBoard.push(n),squareDiv=document.createElement("div"),squareId=`x${baseNum+o}-y${baseNum+e}`,squareDiv.setAttribute("id",squareId),boardRow.appendChild(squareDiv),newSquare=document.getElementById(squareId),newSquare.classList.add("dyna-square"),percentageSize=1/sqRootNum*100,console.log(percentageSize),newSquare.style.width=`${percentageSize}%`,squareHeight=200,contentInSquareDiv=document.createElement("div"),contentId=`content-${squareId}`,contentInSquareDiv.setAttribute("id",contentId),newSquare.appendChild(contentInSquareDiv),newContentSquare=document.getElementById(contentId),newContentSquare.classList.add("dyna-square-content"),newContentSquare.classList.add("empty-space")}}console.log("gameBoard"),console.log(gameBoard)}else e<9?console.log("numberOfSpaces is NOT >= 9"):console.log("numberOfSpaces is NOT square")}},function(e,o){e.exports=isSquare=function(e){return e>4&&Math.sqrt(e)%1==0}},function(e,o){e.exports=function(e,o,n){this.x=e,this.y=o,this.goldilocks=n}},function(e,o,n){healthInfo=n(2),pawnStats=n(0),e.exports=createPawn=function(e,o,n){console.log("createPawn function fires"),squarePlace=document.getElementById(e),squarePlace.classList.contains("empty-space")?(gamePawn=document.createElement("img"),pawnId=`pawn-${o}`,gamePawn.setAttribute("id",pawnId),squarePlace.appendChild(gamePawn),newPawn=document.getElementById(pawnId),newPawn.classList.add("circle-shape"),newPawn.classList.add(`${n}-pawn`),newPawn.classList.add("pawn"),newPawn.setAttribute("src",`/assets/images/${n}-pawn.png`),"human"==n?health=50:"zombie"==n?health=-10:"cyborg"==n?health=110:console.log("pawnType doesn't exist yet"),pawnStats[n].pawnSpawn.push({id:pawnId,health:health,loc:[e]}),healthInfo(n,pawnId),pawnStats.pawnCounter=o+1,console.log(pawnStats)):console.log("destination space is full")}},function(e,o,n){pawnStats=n(0),e.exports=showHealth=function(e,o,n){console.log("showHealth function fires");var t=document.createElement("span"),a=pawnStats[e].pawnSpawn;for(let e=0;e<a.length;e++)if(console.log("pawnSpawn[i]"),console.log(a[e]),console.log("pawnId"),console.log(o),console.log("pawnSpawn[i].id"),console.log(a[e].id),a[e].id==o){null!=l&&t.removeChild(l),healthNum=a[e].health;var l=document.createTextNode(healthNum);t.appendChild(l),n.appendChild(t)}}},function(e,o){e.exports=dynaFont=function(e){return preResult=Math.sqrt(e),percentageSizeBox=1/preResult*100,console.log("percentageSizeBox"),console.log(percentageSizeBox),pixelSize=percentageSizeBox/4,result=pixelSize,console.log(result),result}},function(e,o,n){pawnStats=n(0),e.exports=randomPlace=function(e,o){console.log("randomPlace function fires");o*=2;for(let n=0;n<=o;n++)xAxis=Math.floor(Math.random()*e+1),console.log("xAxis"),console.log(xAxis),yAxis=Math.floor(Math.random()*e+1),console.log("yAxis"),console.log(yAxis),randomContentID=`content-x${1e3+xAxis}-y${1e3+yAxis}`,console.log("randomContentID"),console.log(randomContentID),pawnStats.pawnIdArray.human.includes(randomContentID)||pawnStats.pawnIdArray.zombie.includes(randomContentID)||pawnStats.pawnIdArray.cyborg.includes(randomContentID)?(console.log("that random number already exists in array. pawn was placed"),n--):n%2==0?(pawnStats.pawnIdArray.human.push(randomContentID),console.log(pawnStats.pawnIdArray.human),createPawn(randomContentID,pawnStats.pawnCounter,"human")):(randEnemy=Math.floor(20*Math.random()+1),randEnemy%2==0?(pawnStats.pawnIdArray.zombie.push(randomContentID),console.log(pawnStats.pawnIdArray.zombie),createPawn(randomContentID,pawnStats.pawnCounter,"zombie")):(pawnStats.pawnIdArray.cyborg.push(randomContentID),console.log(pawnStats.pawnIdArray.cyborg),createPawn(randomContentID,pawnStats.pawnCounter,"cyborg")))}},function(e,o,n){pawnStats=n(0),updatePawnStatus=n(3);const{healthInfo:t}=n(2);e.exports=dragAndDrop=function(){console.log("dragAndDrop function fires");var e=null;dragStart=function(n){if(n.target.classList.contains("human-pawn")){n.dataTransfer.getData("Text",n.target.id),o=!0,e=n.target.id,document.getElementById(e).classList.add("holding"),(t=document.getElementById(e).parentNode).classList.add("parent-holding-pawn")}else n.target.removeEventListener("dragstart",dragStart)},document.addEventListener("dragstart",dragStart);var o=!1,n=null,t=null,a=0;document.addEventListener("dragover",(function(e){e.preventDefault(),console.log("dragover"),console.log("holdingPawn: "+o),console.log(a),a++})),document.addEventListener("drop",(function(a){a.preventDefault(),console.log("currentPawnHeld"),console.log(e),null!=e&&(document.getElementById(e).classList.contains("human-pawn")?(console.log("currentPawnHeld = human-pawn"),a.target.classList.contains("empty-space")?(n=document.getElementById(e),a.target.appendChild(n),n.classList.remove("holding"),a.target.classList.remove("empty-space"),t.classList.remove("parent-holding-pawn"),t.classList.add("empty-space"),o=!1,contentCircle=document.getElementById(`content-health-${e}`),a.target.appendChild(contentCircle),newParentDiv_ID=a.target.id,console.log("newParentDiv_ID"),console.log(newParentDiv_ID),updatePawnStatus("location",e,newParentDiv_ID),e=null,console.log("parentDiv"),console.log(t),console.log("parentDiv.id"),console.log(t.id),console.log("contentCornerHealth"),console.log(contentCornerHealth)):0==a.target.classList.contains("empty-space")?console.log("this slot is full"):(n.classList.remove("holding"),t.classList.remove("parent-holding-pawn"),t.classList.remove("empty-space"),o=!1,e=null)):console.log("currentPawnHeld not human-pawn"))}))}},function(e,o){e.exports=touchEvents=function(){console.log("touchEvents function fires");var e=null;touchStart=function(n){if(n.target.classList.contains("human-pawn")){o=!0,e=n.target.id,document.getElementById(e).classList.add("holding"),(t=document.getElementById(e).parentNode).classList.add("parent-holding-pawn")}else n.target.removeEventListener("dragstart",dragStart)},document.addEventListener("touchstart",touchStart);var o=!1,n=null,t=null,a=0;document.addEventListener("touchmove",(function(e){console.log("touchmove"),console.log("holdingPawn: "+o),console.log(a),a++})),document.addEventListener("touchend",(function(a){console.log("currentPawnHeld"),console.log(e),null!=e&&(document.getElementById(e).classList.contains("human-pawn")?(console.log("currentPawnHeld = human-pawn"),a.target.classList.contains("empty-space")?(n=document.getElementById(e),a.target.appendChild(n),n.classList.remove("holding"),a.target.classList.remove("empty-space"),t.classList.remove("parent-holding-pawn"),t.classList.add("empty-space"),o=!1,contentCircle=document.getElementById(`content-health-${e}`),a.target.appendChild(contentCircle),newParentDiv_ID=a.target.id,console.log("newParentDiv_ID"),console.log(newParentDiv_ID),updatePawnStatus("location",e,newParentDiv_ID),e=null,console.log("parentDiv"),console.log(t),console.log("parentDiv.id"),console.log(t.id),console.log("contentCornerHealth"),console.log(contentCornerHealth)):0==a.target.classList.contains("empty-space")?console.log("this slot is full"):(n.classList.remove("holding"),t.classList.remove("parent-holding-pawn"),t.classList.remove("empty-space"),o=!1,e=null)):console.log("currentPawnHeld not human-pawn"))}))}},function(e,o,n){const t=n(0),a=n(1),l=n(19);n(4),n(24);e.exports=endRound=function(){let e="",o=[],n={};for(e in t)if(console.log("pawnType"),console.log(e),console.log("pawnStats[pawnType]"),console.log(t[e]),"cyborg"===e||"human"===e||"zombie"===e){for(let o=0;o<t[e].pawnSpawn.length;o++){console.log("pawnStats[pawnType]::"),console.log(t[e]),console.log(t[e].pawnSpawn),console.log(t[e].pawnSpawn[o]);let n=t[e].pawnSpawn[o].loc[0];console.log("pawnStats[pawnType].pawnSpawn[i].loc"),console.log(t[e].pawnSpawn[o].loc),console.log("pawnLoc"),console.log(n),a(n,1,null,e,"endRound")}o.push(e),n[e]=t[e].pawnSpawn.length}for(let e=0;e<o.length;e++)console.log("pawnType before checkPawnStatus:"),console.log(o[e]),l(o[e],n)}},function(e,o,n){pawnStats=n(0),healthInfo=n(2),e.exports=friendOrFoe=function(e,o,n){console.log("friendOrFoe function fires"),console.log("friendOrFoe function fires"),console.log("adjacentSquaresArr"),console.log(o),console.log("homeSquare_ID::"),console.log(e),pawnId=document.getElementById(e).childNodes[0].id;var t="";for(let a=0;a<o.length;a++)if(destinationID=o[a],console.log("destinationID"),console.log(destinationID),spaceToCheck=document.getElementById(destinationID),null!=spaceToCheck){if(console.log("spaceToCheck"),console.log(spaceToCheck),spaceToCheck.classList.contains("empty-space"))console.log("space is empty");else if(console.log("spaceToCheck.childNodes[0]"),console.log(spaceToCheck.childNodes[0]),spaceToCheck.childNodes[0].classList.contains("human-pawn"))console.log("there's strength in numbers!");else if(spaceToCheck.childNodes[0].classList.contains("zombie-pawn")){for(let o=0;o<pawnStats.human.pawnSpawn.length;o++)homePawnLoc=pawnStats.human.pawnSpawn[o].loc,console.log("homePawnLoc"),console.log(homePawnLoc),console.log("homeSquare_ID"),console.log(e),homePawnLoc==e&&(console.log("they match!"),(t=pawnStats.human.pawnSpawn[o].health-10)>-11&&t<111&&(pawnStats.human.pawnSpawn[o].health=t,console.log(spaceToCheck.childNodes[0].id),console.log("lastchild"),console.log(document.getElementById(e).lastChild),healthInfo(n,pawnId)));console.log("CAUTION: the zombies are draining you too quickly!")}else if(spaceToCheck.childNodes[0].classList.contains("cyborg-pawn")){for(let o=0;o<pawnStats.human.pawnSpawn.length;o++)homePawnLoc=pawnStats.human.pawnSpawn[o].loc,console.log("homeSquare_ID"),console.log(e),homePawnLoc==e&&(console.log("they match!"),(t=pawnStats.human.pawnSpawn[o].health+10)>-11&&t<111&&(pawnStats.human.pawnSpawn[o].health=t,console.log(spaceToCheck.childNodes[0].id),console.log(document.getElementById(e).lastChild),healthInfo(n,pawnId)));console.log("CAUTION: the cyborgs are healing you too quickly!")}}else console.log(`destination space: ${destinationID} is out of the playable area`)}},function(e,o){e.exports=adjContentIDStringArr=function(e,o,n){const t={},a=[];t.x=1001,t.y=1001;let l=2*n+1;for(let n=0;n<l;n++){coord_x=o.x[n];for(let n=0;n<l;n++)coord_y=o.y[n],contentID=`content-x${coord_x}-y${coord_y}`,console.log("contentID"),console.log(contentID),console.log("homespace"),console.log(e),console.log("coord_x"),console.log(coord_x),console.log("coord_y"),console.log(coord_y),coord_x>=t.x&&coord_y>=t.y&&(coord_x===e[0]&&coord_y===e[1]||a.push(contentID))}return console.log("adjacentSquares::"),console.log(a),o.comb=a,o}},function(e,o,n){const t=n(0),a=n(20),l=n(21);e.exports=checkPawnStatus=function(e,o){console.log("checkPawnStatus function fires"),console.log("pawnType before for loop:"),console.log(e);let n=t[e].pawnSpawn;console.log("allPawnSpawn[0]"),console.log(n[0]);for(let o=0;o<n.length;o++)console.log(`health: ${n[o].health}`),n[o].health>=20&&n[o].health<=80&&"hazmat-human"==e?(console.log(`${n[o].id} is still HUMAN...for now!`),a(n[o].id,"human")):n[o].health>=-40&&n[o].health<20&&"human"==e?(console.log(`${n[o].id} is no longer human! ${n[o].id} joins ZOMBIE HORDE!`),a(n[o].id,"zombie")):n[o].health>80&&n[o].health<=140&&"human"==e?(console.log(`${n[o].id} is no longer human! ${n[o].id} joins CYBORG REVOLT!`),a(n[o].id,"cyborg")):n[o].health<-40||n[o].health>140?(console.log(`${n[o].id} is beyond the reach of the NANITES... ${n[o].id} has been eliminated!`),a("permafrost")):(console.log("a calculation error has occurred"),console.log(`i is ${o} and allPawnSpawn[i].health is ${n[o].health} and  pawnType is ${e}`));l(o)}},function(e,o,n){const t=n(3);e.exports=pawnSwitch=function(e,o){if(console.log("pawnSwitch function fires"),console.log("pawnType in pawnSwitch:"),console.log(o),newPawn=document.getElementById(e),newPawn.src=`/assets/images/${o}-pawn.png`,newPawn.classList.contains("human-pawn")){newPawn.classList.remove("human-pawn"),newPawn.classList.add(`${o}-pawn`),t("switch",e,["human",o])}else if(newPawn.classList.contains("zombie-pawn")){newPawn.classList.remove("zombie-pawn"),newPawn.classList.add(`${o}-pawn`),t("switch",e,["zombie",o])}else if(newPawn.classList.contains("cyborg-pawn")){newPawn.classList.remove("cyborg-pawn"),newPawn.classList.add(`${o}-pawn`),t("switch",e,["cyborg",o])}else if(newPawn.classList.contains("sleepy-zombie-pawn")){newPawn.classList.remove("sleepy-zombie-pawn"),newPawn.classList.add(`${o}-pawn`),t("switch",e,["sleepy-zombie-pawn",o])}else if(newPawn.classList.contains("sleepy-cyborg-pawn")){newPawn.classList.remove("sleepy-cyborg-pawn"),newPawn.classList.add(`${o}-pawn`),t("switch",e,["sleepy-cyborg-pawn",o])}}},function(e,o){e.exports=updatePercent=function(e){console.log("updatePercent function fires:"),console.log(e);let o=e.cyborg+e.human+e.zombie,n=document.getElementById("cyborg-bar"),t=document.getElementById("human-bar"),a=document.getElementById("zombie-bar"),l=document.getElementById("cyborg-percentage"),s=document.getElementById("human-percentage"),c=document.getElementById("zombie-percentage");n.style.setProperty("--cyborg-health",e.cyborg/o*100+"%"),t.style.setProperty("--human-health",e.human/o*100+"%"),a.style.setProperty("--zombie-health",e.zombie/o*100+"%"),l.innerHTML=(e.cyborg/o*100).toFixed(),s.innerHTML=(e.human/o*100).toFixed(),c.innerHTML=(e.zombie/o*100).toFixed()}},function(e,o,n){const t=n(1);e.exports=enemyMoves=function(e,o,n){if(console.log("enemyMoves function fires"),void 0===n&&(console.log("movesMade was undefined"),n=[]),void 0!==o){if(console.log("homespace"),console.log(e),console.log("destin"),console.log(o),o[0]===e[0]&&o[1]===e[1])console.log("Congratulations, you've arrived!");else{homespace_ContentString=`content-x${e[0]}-y${e[1]}`,adjArr=t(homespace_ContentString,1),last_Diff=null,last_Arr=null;for(let n=0;n<adjArr.comb.length;n++){if(adjArr.comb[n]=adjArr.comb[n].match(/\d+/g),console.log("adjArr.comb[i] after regex match:"),console.log(adjArr.comb[n]),current_Array=[parseInt(adjArr.comb[n][0]),parseInt(adjArr.comb[n][1])],console.log("current_Array"),console.log(current_Array),main_Diff=[o[0]-e[0],o[1]-e[1]],current_Diff=[o[0]-current_Array[0],o[1]-current_Array[1]],null==last_Diff&&(last_Diff=main_Diff),null==last_Arr&&(console.log("last_Arr = homespace"),console.log(e),last_Arr=e),o[0]===current_Array[0]&&o[1]===current_Array[1]){console.log("Done!"),last_Arr=current_Array;break}current_Diff[0]<0||current_Diff[1]<0?(console.log(`negative current difference: ${current_Diff}, current_Array = ${current_Array}`),current_Diff[0]>=last_Diff[0]&&current_Diff[1]>=last_Diff[1]?(console.log("current_Diff: GREATER than"),last_Diff=current_Diff,last_Arr=current_Array):(console.log("else..."),last_Diff=last_Diff,last_Arr=last_Arr)):(current_Diff[0]>0||current_Diff[1]>0)&&(console.log(`positive current difference: ${current_Diff}, current_Array = ${current_Array}`),current_Diff[0]<=last_Diff[0]&&current_Diff[1]<=last_Diff[1]?(console.log("current_Diff: LESSER than"),last_Diff=current_Diff,last_Arr=current_Array):(console.log("else..."),last_Diff=last_Diff,last_Arr=last_Arr))}n.push(last_Arr),console.log("homespace after movesMade push"),console.log(e),enemyMoves(last_Arr,o,n)}return n}console.log("Error: The destination exists beyond the dimensions of the board.")}},function(e,o,n){n(5);e.exports=Goldilocks=function(e,o,n,t,a,l,s){this.move=o,this.food=n,this.friend=t,this.enemy=a,this.type=e,this.homeSpace=l,this.weight=s(o,n,t,a)}},function(e,o,n){const t=n(0),a=n(1);n(4);e.exports=nextTurn=function(e,o){console.log("nextTurn function fires"),console.log("computerBool"),console.log(e),console.log("pawnType"),console.log(o);let n=[];if(!0===e)for(let e=0;e<t[o].pawnSpawn.length;e++){let l=t[o].pawnSpawn[e].loc;console.log("currentPawnLoc"),console.log(l);let s=t[o].pawnSpawn[e].id;console.log("currentPawnID"),console.log(s);let c=a(l,1,null,o,"compTurn");n.pawnID=s,n.pawnLoc=l,n.adjSpaceArray=c,n.push({pawnID:s,pawnLoc:l,adjSpaceArray:c}),console.log("currentGoldiPawns"),console.log(n)}return n}},function(e,o){e.exports=deployDrone=function(){console.log("?empty")}}]);