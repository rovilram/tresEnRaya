function winner(playerArray) {
    let patternsArray = [
        [[1, 1], [1, 2], [1, 3]],
        [[2, 1], [2, 2], [2, 3]],
        [[3, 1], [3, 2], [3, 3]],
        [[1, 1], [2, 1], [3, 1]],
        [[1, 2], [2, 2], [3, 2]],
        [[1, 3], [2, 3], [3, 3]],
        [[1, 1], [2, 2], [3, 3]],
        [[1, 3], [2, 2], [3, 1]],
    ];
    for (let i = 0; i < patternsArray.length; i++) {
        let counter = 0;
        for (let j = 0; j < patternsArray[i].length; j++) {
            for (let k = 0; k < playerArray.length; k++) {
                if ((playerArray[k][0] == patternsArray[i][j][0]) &&
                    (playerArray[k][1] == patternsArray[i][j][1]))
                    counter++;
            }
            if (counter === 3) return true;
        }
    }
    return false;
}

function isOcuppied(coord, playerArray) {
    for (let i = 0; i < playerArray.length; i++) {
        if ((coord[0] === playerArray[i][0]) &&
            (coord[1] === playerArray[i][1]))
            return true;
    }
    return false;
}

function board(arrayA, playerA, arrayB, playerB) {
    let boardArray = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];
    for (let i = 0; i < arrayA.length; i++) {
        boardArray[arrayA[i][0] - 1][arrayA[i][1] - 1] = playerA;
    }
    for (let i = 0; i < arrayB.length; i++) {
        boardArray[arrayB[i][0] - 1][arrayB[i][1] - 1] = playerB;
    }
    return boardArray;
}
function playerTurn(playerArrayA, playerArrayB, player) {
    let firstLoop = true;
    let coord = [];
    let mainArray;
    if (player === "A") {
        mainArray = playerArrayA;
    }
    else {
        mainArray = playerArrayB;
    }

    while (firstLoop || ((isOcuppied(coord, playerArrayA) || isOcuppied(coord, playerArrayB)))) {
        let turnV = parseInt(prompt(`Jugador ${player}: dime las coordenada vertical de tu jugada`));
        let turnH = parseInt(prompt(`Jugador ${player}: dime las coordenada horizontal de tu jugada`));
        coord = [turnV, turnH];
        firstLoop = false;
    }
    //console.log("coordenadas escogidas", coord);
    mainArray[mainArray.length] = coord;
    //console.log("array jugador " + player + ":", JSON.stringify(mainArray));
    boardArray = board(playerArrayA, "A", playerArrayB, "B");
    for (let i = 0; i < boardArray.length; i++) {
        console.log(JSON.stringify(boardArray[i]));
    }

    if (winner(mainArray)) {
    //    console.log(player, "has ganado");
        return true;
    } else {
    //    console.log(player, "NO has ganado");
        return false;
    }
}


function tresEnRaya() {
    let playerArrayA = [];
    let playerArrayB = [];
    while ((playerArrayA.length + playerArrayB.length) < 9) {
 //       console.log("JUGADOR A");
        if (playerTurn(playerArrayA, playerArrayB, "A")) return "A";
 //       console.log("JUGADOR B");
        if (playerTurn(playerArrayA, playerArrayB, "B")) return "B";
    }
}

console.log("El ganador es:", tresEnRaya());