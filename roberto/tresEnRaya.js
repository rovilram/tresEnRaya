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

function playerTurn(playerArrayA, playerArrayB) {
    let firstLoop = true;
    let coord = [];


    while (firstLoop || ((isOcuppied(coord, playerArrayA) || isOcuppied(coord, playerArrayB)))) {
        let turnV = parseInt(prompt("Dime las coordenada vertical de tu jugada"));
        let turnH = parseInt(prompt("Dime las coordenada horizontal de tu jugada"));
        coord = [turnV, turnH];
        firstLoop = false;
    }
    console.log("coordenadas escogidas", coord);
    playerArrayA[playerArrayA.length] = coord;
    console.log("array jugador:", JSON.stringify(playerArrayA));

    if (winner(playerArrayA)) {
        console.log("has ganado");
        return true;
    } else {
        console.log("NO has ganado");
        return false;
    }
}

function tresEnRaya() {
    let playerArrayA = [];
    let playerArrayB = [];
    while ((playerArrayA.length + playerArrayB.length) < 9) {
        console.log("JUGADOR 1");
        if (playerTurn(playerArrayA, playerArrayB)) return "A";
        console.log("JUGADOR 2");
        if (playerTurn(playerArrayB, playerArrayA)) return "B";
    }
}

console.log("El ganador es:", tresEnRaya());