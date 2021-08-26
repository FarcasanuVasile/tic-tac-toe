let currentPlayer = "X";
let winner = null;
const winnerModal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const player1 = document.querySelector("#x");
const player2 = document.querySelector("#o");
const winnerName = document.querySelector(".winner");
const gameCell = document.querySelectorAll(".game-cell");
const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", function () {
    gameCell.forEach((cell) => {
        cell.innerHTML = "";
    });
    winner = null;
    currentPlayer = "X";
});
const switchPlayer = () => {
    checkWinner();
    if (winner) {
        return;
    }
    currentPlayer == "X" ? (currentPlayer = "O") : (currentPlayer = "X");
};
const checkWinner = () => {
    const gameCell = document.querySelectorAll(".game-cell");
    let gameCellArr = [...gameCell];
    cell1 = gameCellArr[0].innerText;
    cell2 = gameCellArr[1].innerText;
    cell3 = gameCellArr[2].innerText;
    cell4 = gameCellArr[3].innerText;
    cell5 = gameCellArr[4].innerText;
    cell6 = gameCellArr[5].innerText;
    cell7 = gameCellArr[6].innerText;
    cell8 = gameCellArr[7].innerText;
    cell9 = gameCellArr[8].innerText;

    if (
        (cell1 == cell2 && cell2 == cell3 && (cell1 == "X" || cell1 == "O")) ||
        (cell1 == cell4 && cell4 == cell7 && (cell1 == "X" || cell1 == "O")) ||
        (cell1 == cell5 && cell5 == cell9 && (cell1 == "X" || cell1 == "O")) ||
        (cell4 == cell5 && cell5 == cell6 && (cell4 == "X" || cell4 == "O")) ||
        (cell7 == cell8 && cell8 == cell9 && (cell7 == "X" || cell7 == "O")) ||
        (cell7 == cell5 && cell5 == cell3 && (cell7 == "X" || cell7 == "O")) ||
        (cell2 == cell5 && cell5 == cell8 && (cell2 == "X" || cell2 == "O")) ||
        (cell3 == cell6 && cell6 == cell9 && (cell3 == "X" || cell3 == "O"))
    ) {
        winner = currentPlayer;
        const winnerNameText = document.querySelector(`#${winner}`).value;
        winnerName.innerHTML = document.querySelector(`#${winner}`).value;
        winnerModal.classList.add("open");
        setWinnerToLocalStorage(winnerNameText);
    }
};

gameCell.forEach((cell) => {
    cell.addEventListener("click", function () {
        if (winner) return;
        if (this.innerText == "") {
            this.innerText = currentPlayer;
        }
        switchPlayer();
    });
});
closeModal.addEventListener("click", function () {
    winnerModal.classList.remove("open");
});
const setWinnerToLocalStorage = (player) => {
    let storageScores = localStorage.getItem("scores")
        ? JSON.parse(localStorage.getItem("scores"))
        : {};
    console.log(storageScores);
    if (storageScores[player]) {
        console.log(true);
        storageScores[player]++;
    } else {
        storageScores[player] = 1;
    }
    console.log(storageScores);
    localStorage.setItem("scores", JSON.stringify(storageScores));
};
