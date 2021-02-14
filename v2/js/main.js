function isWinner(boardArray) {

    if ((boardArray[0][0] === boardArray[1][1]) &&
        (boardArray[1][1] === boardArray[2][2]))
        if (boardArray[1][1]) return boardArray[1][1];

    if ((boardArray[0][2] === boardArray[1][1]) &&
        (boardArray[1][1] === boardArray[2][0]))
        if (boardArray[1][1]) return boardArray[1][1];

    for (let i = 0; i < boardArray.length; i++) {
        if ((boardArray[i][0] === boardArray[i][1]) &&
            (boardArray[i][1] === boardArray[i][2]))
            if (boardArray[i][1]) return boardArray[i][1];
        if ((boardArray[0][i] === boardArray[1][i]) &&
            (boardArray[1][i] === boardArray[2][i]))
            if (boardArray[1][i]) return boardArray[1][i];
    }

    return false;
}

function playerMove(player, boardArray) {
    let posValida = false,
        y,
        x;

    while (!posValida) {
        y = prompt(`Jugador ${player}: Dime la coordenada vertical`);
        x = prompt(`Jugador ${player}: Dime la coordenada horizontal`);
        if (!(boardArray[y][x]) &&
            (y >= 0 && y <= 2) &&
            (x >= 0 && x <= 2)
        ) posValida = true;
    }
    boardArray[y][x] = player;
    return [isWinner(boardArray), boardArray];
}

function playTresEnRaya (){

    let playCounter = 0,
        player,
        boardArray = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
    while (playCounter < 9) {
        if (player === 1) player = 2;
        else player = 1;
        [winner, boardArray] = playerMove(player,boardArray);
        console.log(`Tablero - Jugada ${playCounter}`);
        console.log(JSON.stringify(boardArray[0]));
        console.log(JSON.stringify(boardArray[1]));
        console.log(JSON.stringify(boardArray[2]));
        if (winner) return player;
        playCounter++;
    }
    return false
}

let winner;

winner = playTresEnRaya();

if (!winner) console.log("HABÉIS EMPATADO")
    else if (winner===1) console.log("HA GANADO EL JUGADOR 1");
    else if (winner===2) console.log("HA GANADO EL JUGADOR 2");



/* let boardArray = [
    [1,2,2],
    [2,1,false],
    [false,false,false]
];
console.log(playerMove(1,boardArray));
  */