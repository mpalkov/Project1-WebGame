console.log("index.js OK");
const X_PLAYER = 'x';
const O_PLAYER = 'o';
const TEXT_X_WON = "× WINS!"
const TEXT_O_WON = "𝗢 WINS!"
const TEXT_DRAW = "DRAW,<br>NO WINNER!"
const X_SYMBOL = "×";
const O_SYMBOL = "𝗢";
const PERSON_SYMBOL = "🙂";
const AI_SYMBOL = "🤖";

let myGame = null;
let isGameOver = true;
const msgScreen = document.querySelector(".msg-screen-container");
const new2playerBtn = document.querySelector("#players-game-button");
const newAIplayerBtn = document.querySelector("#AI-game-button")
const msgText = document.querySelector(".msg-screen-container h2");

const startNewGame = () => {
    myGame = new Game;
    myGame.populateGame();
    document.querySelector(".turn-text").classList.remove("hidden");
    myGame.turnTextElement.innerHTML = X_SYMBOL;
    console.log("Game started");
}

new2playerBtn.addEventListener("click", () => {
    if (isGameOver) {
        msgScreen.classList.toggle("hidden");
        gameBoard.innerHTML = "";
        isGameOver = false;
        startNewGame();
    }
});

startNewGame();