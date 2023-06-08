// declaration of an array with constants to hold animal data and boolean true / false for answer verification
const questions = [
  {
    questionTitle: "What is the name of this animal?",
    img: "assets/images/lion.jpg",
    answers: [
      {
        option: "Cat",
        correct: false,
        letter: "A",
      },
      {
        option: "Tiger",
        correct: false,
        letter: "B",
      },
      {
        option: "Lion",
        correct: true,
        letter: "C",
      },
      {
        option: "Jaguar",
        correct: false,
        letter: "D",
      },
    ]
  },

  {
    questionTitle: "What is my favorite food?",
    img: "assets/images/monkey.jpg",
    answers: [
      {
        option: "Apple",
        correct: false,
        letter: "A",
      },
      {
        option: "Meat",
        correct: false,
        letter: "B",
      },
      {
        option: "Bread",
        correct: false,
        letter: "C",
      },
      {
        option: "Banana",
        correct: true,
        letter: "D",
      },
    ]
  },

  {
    questionTitle: "I'm a?",
    img: "assets/images/dog.jpg",
    answers: [
      {
        option: "Dog",
        correct: true,
        letter: "A",
      },
      {
        option: "Mouse",
        correct: false,
        letter: "B",
      },
      {
        option: "Penguin",
        correct: false,
        letter: "C",
      },
      {
        option: "Cat",
        correct: false,
        letter: "D",
      },
    ]
  },

  {
    questionTitle: "What is my favorite food?",
    img: "assets/images/rat.jpg",
    answers: [
      {
        option: "Bread",
        correct: false,
        letter: "A",
      },
      {
        option: "Fruits",
        correct: false,
        letter: "B",
      },
      {
        option: "Cheese",
        correct: true,
        letter: "C",
      },
      {
        option: "Meat",
        correct: false,
        letter: "D",
      },
    ]
  },

  {
    questionTitle: "Which animal is the largest land mammal?",
    img: "assets/images/elephant.jpg",
    answers: [
      {
        option: "Horse",
        correct: false,
        letter: "A",
      },
      {
        option: "Elephant",
        correct: true,
        letter: "B",
      },
      {
        option: "Giraffe",
        correct: false,
        letter: "C",
      },
      {
        option: "Rhinoceros",
        correct: false,
        letter: "D",
      },
    ]
  },
  {
    questionTitle: "What is the fastest land animal?",
    img: "assets/images/cheetah.jpg",
    answers: [
      {
        option: "Lion",
        correct: false,
        letter: "A",
      },
      {
        option: "Cheetah",
        correct: true,
        letter: "B",
      },
      {
        option: "Leopard",
        correct: false,
        letter: "C",
      },
      {
        option: "Gazelle",
        correct: false,
        letter: "D",
      },
    ]
  },
    
    {
    questionTitle: "Which animal is known for its ability to camouflage?",
    img: "assets/images/chameleon.jpg",
    answers: [
      {
        option: "Lion",
        correct: false,
        letter: "A",
      },
      {
        option: "Tiger",
        correct: false,
        letter: "B",
      },
      {
        option: "Chameleon",
        correct: true,
        letter: "C",
      },
      {
        option: "Gorilla",
        correct: false,
        letter: "D",
      },
    ]
  },
    
    {
    questionTitle: "What is the national bird of the United States?",
    img: "assets/images/bald_eagle.jpg",
    answers: [
      {
        option: "Bald Eagle",
        correct: true,
        letter: "A",
      },
      {
        option: "Peacock",
        correct: false,
        letter: "B",
      },
      {
        option: "Ostrich",
        correct: false,
        letter: "C",
      },
      {
        option: "Penguin",
        correct: false,
        letter: "D",
      },
    ]
  },
    
    {
    questionTitle: "What is the largest species of shark?",
    img: "assets/images/shark.jpg",
    answers: [
      {
        option: "Hammerhead Shark",
        correct: false,
        letter: "A",
      },
      {
        option: "Great White Shark",
        correct: true,
        letter: "B",
      },
      {
        option: "Tiger Shark",
        correct: false,
        letter: "C",
      },
      {
        option: "Whale Shark",
        correct: false,
        letter: "D",
      },
    ]
  },
    
    {
    questionTitle: "Which animal is known for its long neck?",
    img: "assets/images/giraffe.jpg",
    answers: [
      {
        option: "Elephant",
        correct: false,
        letter: "A",
      },
      {
        option: "Kangaroo",
        correct: false,
        letter: "B",
      },
      {
        option: "Horse",
        correct: false,
        letter: "C",
      },
      {
        option: "Giraffe",
        correct: true,
        letter: "D",
      },
    ]
  },
];
// declaration of other variables 
let containerName = document.querySelector(".container-name");
let containerTitle = document.querySelector(".container-title");
let title = document.querySelector(".title");
let subTitle = document.querySelector(".sub-title");
const nameInput = document.getElementById("username");
let welcome = document.getElementById("welcome");
let welcomeDiv = document.getElementById("welcomeDiv");
let ready = document.getElementById("ready");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn-next");
const resetBtn = document.getElementById("btn-reset");
const btnStart = document.querySelector(".start");
const marqueeParagraph = document.getElementById("marquee");
let container = document.getElementById("container");

// method to display the player's name and greeting
function showName() {
  containerName.style.display = "none";
  containerTitle.style.display = "none";

  welcomeDiv.style.display = "flex";
  btnStart.style.display = "block";
  ready.style.display = "block";

  ready.innerHTML = "Hi, " + "<strong>" + nameInput.value + "</strong>" + ". Are you ready for test your knowledge about the animal world?"
}
// score counter
let currentQuestionIndex = 0;
let score = 0;
// method to start the quiz
function startQuiz() {
  welcomeDiv.style.display = "none";
  containerTitle.style.display = "none";

  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next &#62&#62";
}
// method to validate selected answer
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  }
  else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");

    }
    button.disabled = true;
    button.hover = "none";
  });
  nextButton.style.display = "block";
  resetBtn.style.display = "none";
}
// method to siplay next question, or score, if no more questions left
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  }
  else {
    displayScore();
  }
}
// score display
function displayScore() {
  resetState();
  containerTitle.style.display = "flex";

  const answerButtons = document.getElementById("answer-buttons");

  title.innerHTML = nameInput.value + ", Congratulations! You have finished the quiz! "
  subTitle.style.display = "none";

  const imgCard = document.querySelector(".img-card");
  imgCard.style.display = "none";
  const question = document.getElementById("question");
  question.innerHTML = "Your score is: ";

  const constainerScore = document.createElement("div");
  const innerScore = document.createElement("div");
  innerScore.classList.add("innerScore");
  innerScore.innerHTML = `${score * 10}%`;
// displaying colors based on score, green / red
  if (score >= 5) {
    innerScore.classList.add("score-color-win");
  } else {
    innerScore.classList.add("score-color-lose");
  }

  constainerScore.classList.add("constainerScore")
// method to show the score on the circle - snippet from www.stackoverflow.com
  constainerScore.style.background = `conic-gradient(${score >= 5 ? '#01AC1B' : '#ff0000'}, ${score >= 5 ? '#01AC1B' : '#ff0000'}, ${score * 36}deg, transparent, 0deg, #eeeeee)`;

  constainerScore.appendChild(innerScore)

  answerButtons.appendChild(constainerScore);

  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";

  nextButton.innerHTML = "Try Again";
  nextButton.style.display = "block";
  resetBtn.style.display = "block";

  resetBtn.innerHTML = "Reset";

  resetBtn.addEventListener("click", () => {
    location.reload(true)
  })
}
// event listener for button when clicked
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  }
  else {
    startQuiz();
    showQuestion();
    resetBtn.style.display = "none";
  }
});
// method to display questions and answers
function showQuestion() {
  resetState();

  container.style.display = "block";
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.questionTitle;

  const img = document.querySelector(".img-card");

  img.style.display = "block";

  img.src = currentQuestion.img;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.option;

    const span = document.createElement("span");
    span.innerHTML = answer.letter

    button.appendChild(span)

    button.classList.add("btn");

    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
startQuiz();
