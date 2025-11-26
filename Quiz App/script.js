var quiz = [
  {
    question: "1: In which year pakistan was founded?",
    option1: "1940",
    option2: "1945",
    option3: "1947",
    option4: "1950",
    answer: "1947",
  },
  {
    question: "2: Who was the first Governor General of Pakistan?",
    option1: "Liaquat Ali Khan",
    option2: "Quaid-e-Azam",
    option3: "Ayub Khan",
    option4: "Iskander Mirza",
    answer: "Quaid-e-Azam",
  },
  {
    question: "3: What is the national language of Pakistan?",
    option1: "Urdu",
    option2: "Punjabi",
    option3: "Sindhi",
    option4: "Pashto",
    answer: "Urdu",
  },
  {
    question: "4: What is the national flower of Pakistan?",
    option1: "Sunflower",
    option2: "Rose",
    option3: "Jasmine",
    option4: "Lily",
    answer: "Jasmine",
  },
  {
    question: "5: Who wrote the national anthem?",
    option1: "Allama Iqbal",
    option2: "Hafeez Jalandhari",
    option3: "Faiz Ahmed Faiz",
    option4: "Josh Malihabadi",
    answer: "Hafeez Jalandhari",
  },
  {
    question: "6: What is the capital of Pakistan?",
    option1: "Karachi",
    option2: "Islamabad",
    option3: "Quetta",
    option4: "Lahore",
    answer: "Islamabad",
  },
  {
    question: "7: When did Pakistan become a nuclear power?",
    option1: "1996",
    option2: "1998",
    option3: "2000",
    option4: "2002",
    answer: "1998",
  },
  {
    question: "8: What is the national animal of Pakistan?",
    option1: "Lion",
    option2: "Markhor",
    option3: "Tiger",
    option4: "Camel",
    answer: "Markhor",
  },
  {
    question: "9: What is the national sport of Pakistan?",
    option1: "Cricket",
    option2: "Football",
    option3: "Hockey",
    option4: "Kabaddi",
    answer: "Hockey",
  },
  {
    question: "10: Who is known as the Poet of the East?",
    option1: "Ghalib",
    option2: "Allama Iqbal",
    option3: "Saadat Hasan Manto",
    option4: "Faiz Ahmed Faiz",
    answer: "Allama Iqbal",
  },
];

var questions = document.getElementById("questions");
var startBtn = document.getElementById("startBtn");
var nextBtn = document.getElementById("nextBtn");
var finishBtn = document.getElementById("finishBtn");
var result = document.getElementById("result");
var timerDiv = document.getElementById("timer");
var counterDiv = document.getElementById("counter");

var index = 0;
var score = 0;
var timer;
var sec = 0;

function startQuiz() {
  startBtn.classList.add("hide");
  nextBtn.classList.remove("hide");
  renderQuiz();
  startTimer();
}

function startTimer() {
  timer = setInterval(() => {
    sec++;
    let m = Math.floor(sec / 60);
    let s = sec % 60;
    timerDiv.innerHTML = `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
  }, 1000);
}

function renderQuiz() {
  counterDiv.innerHTML = `${index + 1} / ${quiz.length}`;

  questions.innerHTML = `
    <h2>${quiz[index].question}</h2>
    <div class="list">
      <div class="option"><input type="radio" name="opt" value="${quiz[index].option1}"> ${quiz[index].option1}</div>
      <div class="option"><input type="radio" name="opt" value="${quiz[index].option2}"> ${quiz[index].option2}</div>
      <div class="option"><input type="radio" name="opt" value="${quiz[index].option3}"> ${quiz[index].option3}</div>
      <div class="option"><input type="radio" name="opt" value="${quiz[index].option4}"> ${quiz[index].option4}</div>
    </div>
  `;
}

nextBtn.addEventListener("click", function () {
  var selected = document.querySelector("input[name='opt']:checked");
  if (!selected) return;

  if (selected.value === quiz[index].answer) {
    score++;
  }

  index++;

  if (index < quiz.length) {
    renderQuiz();
  } else {
    nextBtn.classList.add("hide");
    finishBtn.classList.remove("hide");
  }
});

finishBtn.addEventListener("click", function () {
  clearInterval(timer);

  let wrong = quiz.length - score;
  let percentage = ((score / quiz.length) * 100).toFixed(2);

  questions.classList.add("hide");
  finishBtn.classList.add("hide");

  result.classList.remove("hide");
  result.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Correct: ${score}</p>
    <p>Wrong: ${wrong}</p>
    <p>Percentage: ${percentage}%</p>
  `;
});

startBtn.addEventListener("click", startQuiz);
