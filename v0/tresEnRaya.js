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
        let turnV = parseInt(prompt("Dime las coordenadas vertical de tu jugada"));
        let turnH = parseInt(prompt("Dime las coordenadas horizontal de tu jugada"));
        coord = [turnV, turnH];
        firstLoop = false;
    }
    playerArrayA[playerArrayA.length] = coord;
    if (winner(playerArrayA)) {
        return true;
    } else {
        return false;
    }
}

    let pp = [1,1];
    console.log (pp);

// console.log(playerTurn(playerArrayA, playerArrayB));