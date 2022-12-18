let gameBoard = (() => {
  // let board = ["o", "o", "o", "x", "x", "o", "o", "o", "o"];
  board = ["", "", "", "", "", "", "", "", ""];
  // let winConditions = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6],
  // ];
  let gameOver = false;
  let imageO = ["/images/circle-outline-512.png"];
  let imageX = ["/images/x-mark-512.png"];

  return { board, imageO, imageX,  gameOver };
})();

let checkWin = (() => {
  
  function check() {
    const announcement = document.getElementById("announcement")
    // X wins

    // horizontal wins x

    if (
      gameBoard.board[0] == "x" &&
      gameBoard.board[1] == "x" &&
      gameBoard.board[2] == "x"
    ) {
      console.log(`x wins`);
      announcement.innerHTML =  "Winner: X" 
      gameBoard.gameOver = true;
    }
    if (
      gameBoard.board[3] == "x" &&
      gameBoard.board[4] == "x" &&
      gameBoard.board[5] == "x"
    ) {
      console.log(`x wins`);
      announcement.innerHTML =  "Winner: X" 
      gameBoard.gameOver = true;
    }
    if (
      gameBoard.board[6] == "x" &&
      gameBoard.board[7] == "x" &&
      gameBoard.board[8] == "x"
    ) {
      console.log(`x wins`);
      announcement.innerHTML =  "Winner: X" 
      gameBoard.gameOver = true;
    }

    // vertical wins x
    if (
      gameBoard.board[0] == "x" &&
      gameBoard.board[3] == "x" &&
      gameBoard.board[6] == "x"
    ) {
      console.log(`x wins`);
      announcement.innerHTML =  "Winner: X" 
      gameBoard.gameOver = true;
    }
    if (
      gameBoard.board[1] == "x" &&
      gameBoard.board[4] == "x" &&
      gameBoard.board[7] == "x"
    ) {
      console.log(`x wins`);
      announcement.innerHTML =  "Winner: X" 
      gameBoard.gameOver = true;
    }
    if (
      gameBoard.board[2] == "x" &&
      gameBoard.board[5] == "x" &&
      gameBoard.board[8] == "x"
    ) {
      console.log(`x wins`);
      announcement.innerHTML =  "Winner: X" 
      gameBoard.gameOver = true;
    }

    // diagonal x

    if (
      gameBoard.board[0] == "x" &&
      gameBoard.board[4] == "x" &&
      gameBoard.board[8] == "x"
    ) {
      console.log(`x wins`);
      announcement.innerHTML =  "Winner: X" 
      gameBoard.gameOver = true;
    }
    if (
      gameBoard.board[2] == "x" &&
      gameBoard.board[4] == "x" &&
      gameBoard.board[6] == "x"
    ) {
      console.log(`x wins`);
      announcement.innerHTML =  "Winner: X" 
      gameBoard.gameOver = true;
    }

    // O wins

    // horizontal wins o

    if (
      gameBoard.board[0] == "o" &&
      gameBoard.board[1] == "o" &&
      gameBoard.board[2] == "o"
    ) {
      console.log(`o wins`);
      announcement.innerHTML =  "Winner: O" 
      gameBoard.gameOver = true;
    }
    if (
      gameBoard.board[3] == "o" &&
      gameBoard.board[4] == "o" &&
      gameBoard.board[5] == "o"
    ) {
      console.log(`o wins`);
      announcement.innerHTML =  "Winner: O" 
      gameBoard.gameOver = true;
    }
    if (
      gameBoard.board[6] == "o" &&
      gameBoard.board[7] == "o" &&
      gameBoard.board[8] == "o"
    ) {
      console.log(`o wins`);
      announcement.innerHTML =  "Winner: O" 
      gameBoard.gameOver = true;
    }

    // vertical wins o
    if (
      gameBoard.board[0] == "o" &&
      gameBoard.board[3] == "o" &&
      gameBoard.board[6] == "o"
    ) {
      console.log(`o wins`);
      announcement.innerHTML =  "Winner: O" 
      gameBoard.gameOver = true;
    }
    if (
      gameBoard.board[1] == "o" &&
      gameBoard.board[4] == "o" &&
      gameBoard.board[7] == "o"
    ) {
      console.log(`o wins`);
      announcement.innerHTML =  "Winner: O" 
      gameBoard.gameOver = true;
    }
    if (
      gameBoard.board[2] == "o" &&
      gameBoard.board[5] == "o" &&
      gameBoard.board[8] == "o"
    ) {
      console.log(`o  wins`);
      announcement.innerHTML =  "Winner: O" 
      gameBoard.gameOver = true;
    }

    // // diagonal o

    if (
      gameBoard.board[0] == "o" &&
      gameBoard.board[4] == "o" &&
      gameBoard.board[8] == "o"
    ) {
      console.log(`o wins`);
      announcement.innerHTML =  "Winner: O" 
      gameBoard.gameOver = true;
    }
    if (
      gameBoard.board[2] == "o" &&
      gameBoard.board[4] == "o" &&
      gameBoard.board[6] == "o"
    ) {
      console.log(`o wins`);
      announcement.innerHTML =  "Winner: O" 
      gameBoard.gameOver = true;
    }

    // Draw if every space is taken on array

    if (gameBoard.board.every((element) => element != "")) {
      console.log(`draw`);
      announcement.innerHTML =  "Draw" 
      gameBoard.gameOver = true;
    }
  }
  return { check };
})();


let restart = (() => {
  restartbtn = document.getElementById("restartbtn")
  restartbtn.addEventListener("click", reload);

  function reload(){
    location.reload();

    
  }
  return{reload}

})();

let renderBoard = (() => {
  const data = document.querySelectorAll("[data-id]");

  function displayBoard() {
    for (var i = 0; i < gameBoard.board.length; i++) {
      data[i].style.backgroundImage = `url(${
        gameBoard.board[i] == "o"
          ? gameBoard.imageO
          : "" || gameBoard.board[i] == "x"
          ? gameBoard.imageX
          : ""
      })`;
    }
  }

  return { displayBoard, data };
})();

let playerChoice = (() => {
  let data;
  // restart.reload()

  data = document.querySelectorAll("[data-id]");
  const announcement = document.getElementById("announcement")
  

  // console.log(gameBoard.gameOver)
  let playerOneTurn = true;
  let playerTwoTurn = false;

  announcement.innerHTML =  "Player X turn" 
  
  document
    .querySelectorAll("[data-id]")
    .forEach((b) => b.addEventListener("click", cardClicked));

  function cardClicked(event) {
    event.preventDefault();
    let button = event.target;
   

    for (var i = 0; i < gameBoard.board.length; i++) {
      if (
        data[i] == button &&
        gameBoard.board[i] != "x" &&
        gameBoard.board[i] != "o"
      ) {
        // console.log("changed x");

        gameBoard.board.splice(i, 1, playerOneTurn == true ? "x" : "o");
        announcement.innerHTML = `${playerOneTurn == true ? "Player O turn" : "Player X turn"}`
        playerOneTurn = !playerOneTurn;
        playerTwoTurn = !playerTwoTurn;
      }
    }

    renderBoard.displayBoard();
    checkWin.check();

    if (gameBoard.gameOver == true) {
      data = document.querySelectorAll("[data-i]");
      // console.log(gameBoard.gameOver);
    }
    return {data, playerOneTurn, playerTwoTurn};
  }
})();


renderBoard.displayBoard();

