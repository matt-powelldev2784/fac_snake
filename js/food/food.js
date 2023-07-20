import { foodImageList } from './foodImageList.js'
import { snakeBody } from '../snake/snake.js'

export let foodOnBoard = false
export let foodPosition = null

export const setFoodOnBoard = (value) => {
  foodOnBoard = value
}

let nextFoodImage = 0

const getNextFoodImage = () => {
  if (nextFoodImage >= foodImageList.length) {
    nextFoodImage = 0
    document.getElementById('game__fac-dead').style.display = 'block'
  }
  const nextImage = foodImageList[nextFoodImage]
  nextFoodImage++

  return nextImage
}

export const addFood = (gameBoard) => {
  const randomCoordinates = getRandomBoardPosition()

  foodPosition = randomCoordinates

  const foodElement = document.createElement('div')
  const image = document.createElement('img')
  const nextFoodImage = getNextFoodImage()
  image.src = `./assets/food/${nextFoodImage}`
  foodElement.appendChild(image)

  foodElement.style.gridColumnStart = randomCoordinates.x
  foodElement.style.gridRowStart = randomCoordinates.y
  foodElement.classList.add('food')
  foodElement.id = 'food'
  gameBoard.appendChild(foodElement)

  foodOnBoard = true
}

const getRandomBoardPosition = () => {
  const randomCoordinates = {
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 21) + 1,
  }

  for (let i = 0; i < snakeBody.length; i++) {
    if (
      snakeBody[i].x === randomCoordinates.x &&
      snakeBody[i].y === randomCoordinates.y
    ) {
      return getRandomBoardPosition()
    }

    return randomCoordinates
  }
}
