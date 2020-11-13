const play = function() {
    let resetButton = document.getElementById("reset-button");
	let playerTurn = document.getElementById("player-name");

    let cell1 = document.getElementById("1");
    let cell2 = document.getElementById("2");
    let cell3 = document.getElementById("3");
    let cell4 = document.getElementById("4");
    let cell5 = document.getElementById("5");
    let cell6 = document.getElementById("6");
    let cell7 = document.getElementById("7");
    let cell8 = document.getElementById("8");
    let cell9 = document.getElementById("9");

	let winnerDeclared = false; //no one will be allowed to place a piece if someone else already won
	let isTurnX = true;
	let turnsLeft = 9; //decremented each time someone places a piece, when equal to zero(all spaces filled)
	let xWin = false;
	let oWin = false;

	let numXInColumnOne = 0; //keeps track of all the variables for player X, detecting if a row column or diagonal
	let numXInColumnTwo = 0;
	let numXInColumnThree = 0;
	let numXInRowOne = 0;
	let numXInRowTwo = 0;
	let numXInRowThree = 0;
	let numXInDiagonalDecline = 0;
	let numXInDiagonalIncline = 0;

	let numOInColumnOne = 0;
	let numOInColumnTwo = 0;
	let numOInColumnThree = 0;
	let numOInRowOne = 0;
	let numOInRowTwo = 0;
	let numOInRowThree = 0;
	let numOInDiagonalDecline = 0;
	let numOInDiagonalIncline = 0;


	const checkWin = function() {

	    if (numXInColumnOne == 3) {
	        xWin = true;
	        winnerDeclared = true;
			cell1.style.backgroundColor = "rgb(74, 222, 16)";
		    cell4.style.backgroundColor = "rgb(74, 222, 16)";
		    cell7.style.backgroundColor = "rgb(74, 222, 16)";
	    }

	    if (numXInColumnTwo == 3) {
	        xWin = true;
	        winnerDeclared = true;
			cell2.style.backgroundColor = "rgb(74, 222, 16)";
			cell5.style.backgroundColor = "rgb(74, 222, 16)";
			cell8.style.backgroundColor = "rgb(74, 222, 16)";
	    }

	    if (numXInColumnThree == 3) {
	        xWin = true;
	        winnerDeclared = true;
			cell3.style.backgroundColor = "rgb(74, 222, 16)";
			cell6.style.backgroundColor = "rgb(74, 222, 16)";
			cell9.style.backgroundColor = "rgb(74, 222, 16)";
	    }

	    if (numXInRowOne == 3) {
	        xWin = true;
	        console.log("hey");
	        winnerDeclared = true;
			cell1.style.backgroundColor = "rgb(74, 222, 16)";
			cell2.style.backgroundColor = "rgb(74, 222, 16)";
			cell3.style.backgroundColor = "rgb(74, 222, 16)";
	    }

	    if (numXInRowTwo == 3) {
	        xWin = true;
	        winnerDeclared = true;
			cell4.style.backgroundColor = "rgb(74, 222, 16)";
			cell5.style.backgroundColor = "rgb(74, 222, 16)";
			cell6.style.backgroundColor = "rgb(74, 222, 16)";
	    }

	    if (numXInRowThree == 3) {
	        xWin = true;
	        winnerDeclared = true;
			cell7.style.backgroundColor = "rgb(74, 222, 16)";
			cell8.style.backgroundColor = "rgb(74, 222, 16)";
			cell9.style.backgroundColor = "rgb(74, 222, 16)";
	    }

	    if (numXInDiagonalDecline == 3) {
	        xWin = true;
	        winnerDeclared = true;
			cell1.style.backgroundColor = "rgb(74, 222, 16)";
			cell5.style.backgroundColor = "rgb(74, 222, 16)";
			cell9.style.backgroundColor = "rgb(74, 222, 16)";
	    }

	    if (numXInDiagonalIncline == 3) {
	        xWin = true;
	        winnerDeclared = true;
			cell7.style.backgroundColor = "rgb(74, 222, 16)";
			cell5.style.backgroundColor = "rgb(74, 222, 16)";
			cell3.style.backgroundColor = "rgb(74, 222, 16)";
	    }


	    if (numOInColumnOne == 3) {
	        oWin = true;
	        winnerDeclared = true;
			cell1.style.backgroundColor = "rgb(74, 222, 16)";
			cell4.style.backgroundColor = "rgb(74, 222, 16)";
			cell7.style.backgroundColor = "rgb(74, 222, 16)";
	    }

	    if (numOInColumnTwo == 3) {
	        oWin = true;
	        winnerDeclared = true;
			cell2.style.backgroundColor = "rgb(74, 222, 16)";
			cell5.style.backgroundColor = "rgb(74, 222, 16)";
			cell8.style.backgroundColor = "rgb(74, 222, 16)";
	    }

	    if (numOInColumnThree == 3) {
	        oWin = true;
	        winnerDeclared = true;
			cell3.style.backgroundColor = "rgb(74, 222, 16)";
			cell6.style.backgroundColor = "rgb(74, 222, 16)";
			cell9.style.backgroundColor = "rgb(74, 222, 16)";
	    }

	    if (numOInRowOne == 3) {
	        oWin = true;
	        winnerDeclared = true;
			cell1.style.backgroundColor = "rgb(74, 222, 16)";
			cell2.style.backgroundColor = "rgb(74, 222, 16)";
			cell3.style.backgroundColor = "rgb(74, 222, 16)";
	    }

	    if (numOInRowTwo == 3) {
	        oWin = true;
	        winnerDeclared = true;
			cell4.style.backgroundColor = "rgb(74, 222, 16)";
			cell5.style.backgroundColor = "rgb(74, 222, 16)";
			cell6.style.backgroundColor = "rgb(74, 222, 16)";
	    }

	    if (numOInRowThree == 3) {
	        oWin = true;
	        winnerDeclared = true;
			cell7.style.backgroundColor = "rgb(74, 222, 16)";
			cell8.style.backgroundColor = "rgb(74, 222, 16)";
			cell9.style.backgroundColor = "rgb(74, 222, 16)";
	    }

	    if (numOInDiagonalDecline == 3) {
	        oWin = true;
	        winnerDeclared = true;
			cell1.style.backgroundColor = "rgb(74, 222, 16)";
			cell5.style.backgroundColor = "rgb(74, 222, 16)";
			cell9.style.backgroundColor = "rgb(74, 222, 16)";
	    }

	    if (numOInDiagonalIncline == 3) {
	        oWin = true;
	        winnerDeclared = true;
			cell3.style.backgroundColor = "rgb(74, 222, 16)";
			cell5.style.backgroundColor = "rgb(74, 222, 16)";
			cell7.style.backgroundColor = "rgb(74, 222, 16)";
	    }

	    if (xWin) {
	        playerTurn.textContent = "X wins";
	    }

	    if (oWin) {
	        playerTurn.textContent = "O wins";
	    }

	    if (turnsLeft == 0) {
	        playerTurn.textContent = "No one wins";
	    }


	}


    cell1.addEventListener("click", () => {
        if (!(cell1.textContent == "x" || cell1.textContent == "o") && !winnerDeclared) {
            if (isTurnX) {
                cell1.textContent = "x";
                numXInColumnOne++;
                numXInRowOne++;
                numXInDiagonalDecline++;
                isTurnX = false;
				playerTurn.textContent = "O's turn";
            } else {
                cell1.textContent = "o";
                numOInColumnOne++;
                numOInRowOne++;
                numOInDiagonalDecline++;
                isTurnX = true;
				playerTurn.textContent = "X's turn";
            }
            turnsLeft--;
            checkWin();
        }

        console.log(isTurnX);
    });

    cell2.addEventListener("click", () => {
        if (!(cell2.textContent == "x" || cell2.textContent == "o") && !winnerDeclared) {
            if (isTurnX) {
                cell2.textContent = "x";
                numXInRowOne++;
                numXInColumnTwo++;
                isTurnX = false;
				playerTurn.textContent = "O's turn";
            } else {
                cell2.textContent = "o";
                numOInRowOne++;
                numOInColumnTwo++;
                isTurnX = true;
				playerTurn.textContent = "X's turn";
            }
            turnsLeft--;
            checkWin();
        }

        console.log(isTurnX);
    });

    cell3.addEventListener("click", () => {
        if (!(cell3.textContent == "x" || cell3.textContent == "o") && !winnerDeclared) {
            if (isTurnX) {
                cell3.textContent = "x";
                numXInRowOne++;
                numXInColumnThree++;
                numXInDiagonalIncline++;
                isTurnX = false;
				playerTurn.textContent = "O's turn";
            } else {
                cell3.textContent = "o";
                numOInRowOne++;
                numOInColumnThree++;
                numOInDiagonalIncline++;
                isTurnX = true;
				playerTurn.textContent = "X's turn";
            }
            turnsLeft--;
            checkWin();
        }

        console.log(isTurnX);
    });

    cell4.addEventListener("click", () => {
        if (!(cell4.textContent == "x" || cell4.textContent == "o") && !winnerDeclared) {
            if (isTurnX) {
                cell4.textContent = "x";
                numXInRowTwo++;
                numXInColumnOne++;
                isTurnX = false;
				playerTurn.textContent = "O's turn";
            } else {
                cell4.textContent = "o";
                numOInRowTwo++;
                numOInColumnOne++;
                isTurnX = true;
				playerTurn.textContent = "X's turn";
            }
            turnsLeft--;
            checkWin();
        }

        console.log(isTurnX);
    });

    cell5.addEventListener("click", () => {
        if (!(cell5.textContent == "x" || cell5.textContent == "o") && !winnerDeclared) {
            if (isTurnX) {
                cell5.textContent = "x";
                numXInRowTwo++;
                numXInColumnTwo++;
                numXInDiagonalIncline++;
                numXInDiagonalDecline++;
                isTurnX = false;
				playerTurn.textContent = "O's turn";
            } else {
                cell5.textContent = "o";
                numOInRowTwo++;
                numOInColumnTwo++;
                numOInDiagonalIncline++;
                numOInDiagonalDecline++;
                isTurnX = true;
				playerTurn.textContent = "X's turn";
            }
            turnsLeft--;
            checkWin();
        }

        console.log(isTurnX);
    });

    cell6.addEventListener("click", () => {
        if (!(cell6.textContent == "x" || cell6.textContent == "o") && !winnerDeclared) {
            if (isTurnX) {
                cell6.textContent = "x";
                numXInRowTwo++;
                numXInColumnThree++;
                isTurnX = false;
				playerTurn.textContent = "O's turn";
            } else {
                cell6.textContent = "o";
                numOInRowTwo++;
                numOInColumnThree++;
                isTurnX = true;
				playerTurn.textContent = "X's turn";
            }
            turnsLeft--;
            checkWin();
        }

        console.log(isTurnX);
    });

    cell7.addEventListener("click", () => {
        if (!(cell7.textContent == "x" || cell7.textContent == "o") && !winnerDeclared) {
            if (isTurnX) {
                cell7.textContent = "x";
				numXInColumnOne++;
                numXInRowThree++;
                numXInDiagonalIncline++;
                isTurnX = false;
				playerTurn.textContent = "O's turn";
            } else {
                cell7.textContent = "o";
				numOInColumnOne++;
                numOInRowThree++;
                numOInDiagonalIncline++;
                isTurnX = true;
				playerTurn.textContent = "X's turn";
            }
            turnsLeft--;
            checkWin();
        }

        console.log(isTurnX);
    });

    cell8.addEventListener("click", () => {
        if (!(cell8.textContent == "x" || cell8.textContent == "o") && !winnerDeclared) {
            if (isTurnX) {
                cell8.textContent = "x";
                numXInRowThree++;
                numXInColumnTwo++;
                isTurnX = false;
				playerTurn.textContent = "O's turn";
            } else {
                cell8.textContent = "o";
                numOInRowThree++;
                numOInColumnTwo++;
                isTurnX = true;
				playerTurn.textContent = "X's turn";
            }
            turnsLeft--;
            checkWin();
        }

        console.log(isTurnX);
    });

    cell9.addEventListener("click", () => {
        if (!(cell9.textContent == "x" || cell9.textContent == "o") && !winnerDeclared) {
            if (isTurnX) {
                cell9.textContent = "x";
                numXInRowThree++;
                numXInColumnThree++;
                numXInDiagonalDecline++;
                isTurnX = false;
				playerTurn.textContent = "O's turn";
            } else {
                cell9.textContent = "o";
                numOInRowThree++;
                numOInColumnThree++;
                numOInDiagonalDecline++;
                isTurnX = true;
				playerTurn.textContent = "X's turn";
            }
            turnsLeft--;
            checkWin();
        }

        console.log(isTurnX);
    });

};

play();

// Define all the cells for the JS file. Query selectors (getElementById?), event listeners, etc.



// When a cell is clicked, put a symbol in it. We'll worry about the actual symbols later.
// Have a player's name show up when it's their turn.
// Don't allow a cell to be clicked twice.


// When there are three of the same symbol in a row, column, or diagonal, display a win message and end the game.
// "Win" conditions:
// Group of IDs
// Row or column

// "Draw" conditions:
// No cells meet the "win" conditions
// So it's basically a big "if-else" conditional.
