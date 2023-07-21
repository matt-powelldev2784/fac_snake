let score = 0
let highScore = localStorage.getItem('highScore') || 0

document.getElementById('game__high-score').innerText = highScore

export const addEatFoodScore = () => {
  score += 100
  document.getElementById('game__score').innerText = score
}

export const setHighScore = () => {
  if (score > highScore) {
    highScore = score
    localStorage.setItem('highScore', highScore)
  }
}
