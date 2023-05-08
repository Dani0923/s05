function guessNumber() {
  const number = Math.floor(Math.random() * 100) + 1;
  console.log("Guess a Number from 1 to 100.");
  let input = parseInt(prompt("Guess a Number from 1 to 100."));
  let count = 1;
  while (input != number) {
    if (input > number) {
      console.log("Guess #" + count + ": " + input + ", Too High");
      input = parseInt(prompt("Too High! Guess Again."));
      count++;
    } else if (input < number) {
      console.log("Guess #" + count + ": " + input + ", Too Low");
      input = parseInt(prompt("Too Low! Guess Again."));
      count++;
    } else {
      alert("Invalid Response, Game Cancelled.");
      break;
    }
  }
  if (input == number) {
    console.log("Guess #" + count + ": " + input + ", Just Right!");
    console.log("You Guessed the Correct Number in " + count + " Tries. Congratulations!");
    alert("You Guessed the Correct Number in " + count + " Tries. Congratulations!");
  }
}
guessNumber();
