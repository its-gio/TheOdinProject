const savedRecord = localStorage.getItem("record");
let { score, combos } = savedRecord
  ? JSON.parse(savedRecord)
  : {
      score: { wins: 0, losses: 0, ties: 0, totalGames: 0 },
      //   Array of object [{user, comp}]
      combos: [],
    };

const scoreDOM = document.getElementById("score");
scoreDOM.innerHTML = scoreDisplay(score);

function calcPercent(source) {
  if (source === 0) {
    return 0;
  }

  return ((source / score.totalGames) * 100).toFixed(2);
}

function scoreDisplay({ wins, losses, ties }) {
  return `Wins: ${wins} (${calcPercent(
    wins
  )}%), Losses: ${losses} (${calcPercent(
    losses
  )}%), Ties: ${ties} (${calcPercent(ties)}%)`;
}

function userPlay(choice) {
  const randomNum = Math.random();
  let compChoice;
  score.totalGames++;

  if (randomNum >= 0 && randomNum < 1 / 3) {
    compChoice = "rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    compChoice = "paper";
  } else {
    compChoice = "scissors";
  }

  if (choice === compChoice) {
    result = "It's a tie!";
    score.ties++;
  } else if (
    (choice === "rock" && compChoice === "paper") ||
    (choice === "paper" && compChoice === "scissors") ||
    (choice === "scissors" && compChoice === "rock")
  ) {
    result = "Loser!";
    score.losses++;
  } else {
    result = "Winner!";
    score.wins++;
  }
  combos.push({ user: choice, comp: compChoice });

  localStorage.setItem("record", JSON.stringify({ score, combos }));

  alert(`Your Choice: ${choice}; Computer Choice: ${compChoice}; ${result}`);
  return (scoreDOM.innerHTML = scoreDisplay(score));
}

const resetScore = () => {
  localStorage.removeItem("record");
  score = { wins: 0, losses: 0, ties: 0, totalGames: 0 };
  combos = [];
  return (scoreDOM.innerHTML = `Wins: 0, Losses: 0, Ties: 0`);
};
