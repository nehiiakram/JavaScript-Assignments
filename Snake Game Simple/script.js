// ===== Select Elements =====
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

// ===== Game Settings =====
const box = 20; // size of one square
let score = 0;

// Snake starting position
let snake = [{ x: 200, y: 200 }];

// Food random position
let food = {
  x: Math.floor(Math.random() * 20) * box,
  y: Math.floor(Math.random() * 20) * box,
};

// Snake moving direction
let direction = "RIGHT";

// ===== Listen to keyboard arrows =====
document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  else if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
  else if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  else if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
}

// ===== Draw Everything =====
function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw food
  ctx.fillStyle = "yellow";
  ctx.fillRect(food.x, food.y, box, box);

  // Draw snake
  ctx.fillStyle = "black";
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  // Move snake head
  let head = { x: snake[0].x, y: snake[0].y };
  if (direction === "UP") head.y -= box;
  if (direction === "DOWN") head.y += box;
  if (direction === "LEFT") head.x -= box;
  if (direction === "RIGHT") head.x += box;

  // Check if snake eats food
  if (head.x === food.x && head.y === food.y) {
    score++;
    scoreText.textContent = "Score: " + score;
    food = {
      x: Math.floor(Math.random() * 20) * box,
      y: Math.floor(Math.random() * 20) * box,
    };
  } else {
    snake.pop(); // remove tail if not eating
  }

  // Game Over Conditions (hit wall or itself)
  if (
    head.x < 0 ||
    head.x >= canvas.width ||
    head.y < 0 ||
    head.y >= canvas.height ||
    collision(head, snake)
  ) {
    clearInterval(game);
    Swal.fire({
  icon: 'error',
  title: 'Game Over!',
  text: 'Oops! The snake crashed 🐍💥',
  confirmButtonText: 'Try Again'
});

  }

  snake.unshift(head); // add new head
}

// ===== Check Collision =====
function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x === array[i].x && head.y === array[i].y) {
      return true;
    }
  }
  return false;
}

// ===== Restart Button =====
restartBtn.addEventListener("click", () => {
  snake = [{ x: 200, y: 200 }];
  direction = "RIGHT";
  score = 0;
  scoreText.textContent = "Score: 0";
  food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box,
  };
  clearInterval(game);
  game = setInterval(drawGame, 120);
});

// ===== Start Game Loop =====
let game = setInterval(drawGame, 120);
