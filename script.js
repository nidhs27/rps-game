let userScore = 0;
let compScore = 0;

function play(user) {

    let comp = Math.floor(Math.random() * 3);
    let choices = ["Rock", "Paper", "Scissors"];

    let userText = document.getElementById("userText");
    let compText = document.getElementById("compText");
    let resultText = document.getElementById("result");

    userText.style.color = "black";
    compText.style.color = "black";

    if (user === comp) {
        resultText.innerText = "Result: Draw";

    } else if (
        (user === 0 && comp === 2) ||
        (user === 1 && comp === 0) ||
        (user === 2 && comp === 1)
    ) {
        resultText.innerText = "Result: You Win";
        userScore++;

        userText.style.color = "green";
        compText.style.color = "red";

    } else {
        resultText.innerText = "Result: Computer Wins";
        compScore++;

        compText.style.color = "green";
        userText.style.color = "red";
    }

    userText.innerText = "You: " + choices[user];
    compText.innerText = "Computer: " + choices[comp];

    document.getElementById("score").innerText =
        `You: ${userScore} | Computer: ${compScore}`;
}
