function guessingGame() {
  let generatedNum  = Math.floor(Math.random() * 99) + 1;
  let count = 1
  let win = false
  return function guess(yourGuess) {
    if (win) {
        console.log(`The game is over! you already won`) 
    } else {
        if (generatedNum > yourGuess) {
            console.log(`${yourGuess} is too low`)
            count ++
        }
        else if (generatedNum < yourGuess) {
            console.log(`${yourGuess} is too high`)
            count++
        } else {
            console.log(`You win! You found ${generatedNum} in ${count} guesses` ) 
            win = true
        }
    }
  }
}
