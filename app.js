const game = document.getElementById('game');
const score = document.getElementById('score');

const jeopardyCategories = [
  {
    genre: 'WHO',
    questions: [
      {
        question: 'Who wrote the Harry Potter Books?',
        answers: ['J.K. Rowling'],
        correct: 'J.K. Rowling',
        level: 'easy',
      },
      {
        question: 'Who was born on Krypton?',
        answers: ['Superman'],
        correct: 'Superman',
        level: 'medium',
      },
      {
        question: 'Who designed the Eiffel Tower?',
        answers: ['Gustave Eiffel'],
        correct: 'Gustave Eiffel',
        level: 'hard',
      },
    ],
  },
  {
    genre: 'WHERE',
    questions: [
      {
        question: 'Where is Central Park?',
        answers: ['New York', 'Manhattan'],
        correct: 'New York',
        level: 'easy',
      },
      {
        question: 'Where can you visit the Great Wall of China?',
        answers: ['Beijing', 'China'],
        correct: 'China',
        level: 'medium',
      },
      {
        question: 'Where is Colosseum?',
        answers: ['Rome', 'Milan', 'Italy'],
        correct: 'Italy',
        level: 'hard',
      },
    ],
  },
  {
    genre: 'WHEN',
    questions: [
      {
        question: 'When was the planet Pluto discovered?',
        answers: ['February 18, 1930'],
        correct: '1930',
        level: 'easy',
      },
      {
        question: 'When was the first computer intervened?',
        answers: ['1901', '1900', '20th century'],
        correct: '1901',
        level: 'medium',
      },
      {
        question: 'When was the first mobile phone used?',
        answers: ['April 3, 1973'],
        correct: '1973',
        level: 'hard',
      },
    ],
  },
  {
    genre: 'WHAT',
    questions: [
      {
        question: 'What is the most popular tourist destination in the world?',
        answers: ['France', 'Spain', 'United State', 'Italy', 'China'],
        correct: 'France, Spain, United State, Italy, China',
        level: 'easy',
      },
      {
        question: 'What do koalas eat?',
        answers: [
          'Eucalyptus leaves',
          'brush box',
          'paperback',
          'bloodwood trees ',
        ],
        correct: 'Eucalyptus leaves,brush box,paperback,bloodwood trees ',
        level: 'medium',
      },
      {
        question: 'What is the capital of United States?',
        answers: ['Washington D.C.'],
        correct: 'Washington D.C.',
        level: 'hard',
      },
    ],
  },
];

let Score = 0;

// Create column by categories

function addCategory(category) {
  const column = document.createElement('div');
  column.classList.add('genre-column');

  const genreTitle = document.createElement('div');
  genreTitle.classList.add('genre-title');
  genreTitle.innerText = category.genre;

  column.appendChild(genreTitle);
  game.append(column);

  //looping through questions
  category.questions.forEach((question) => {
    const card = document.createElement('div');
    card.classList.add('card');
    column.append(card);

    //create card by question levels
    if (question.level === 'easy') {
      card.innerHTML = 100;
    }
    if (question.level === 'medium') {
      card.innerHTML = 200;
    }
    if (question.level === 'hard') {
      card.innerHTML = 300;
    }
    //card values
    card.setAttribute('data-question', question.question);
    card.setAttribute('data-answer-1', question.answers[0]);
    card.setAttribute('data-answer-2', question.answers[1]);
    card.setAttribute('data-correct', question.correct);
    card.setAttribute('data-value', card.getInnerHTML());

    card.addEventListener('click', flipCard);
  });
}

jeopardyCategories.forEach((category) => addCategory(category));

function flipCard() {
  this.innerHTML = '';
  this.style.fontSize = '1rem';
  this.style.lineHeight = '30px';

  const textDisplay = document.createElement('div');
  textDisplay.classList.add('card-text');
  textDisplay.innerHTML = this.getAttribute('data-question');

  const firstButton = document.createElement('button');
  const secondButton = document.createElement('button');
  firstButton.classList.add('first-button');
  secondButton.classList.add('second-button');
  firstButton.innerHTML = this.getAttribute('data-answer-1');
  secondButton.innerHTML = this.getAttribute('data-answer-2');

  //get the result for the selected buttons
  firstButton.addEventListener('click', getResult);
  secondButton.addEventListener('click', getResult);

  this.append(textDisplay, firstButton, secondButton);

  // flip only the card selected and remove event listener from rest of the cards
  const allCards = Array.from(document.querySelectorAll('.card'));
  allCards.forEach((card) => card.removeEventListener('click', flipCard));
}

function getResult() {
  const allCards = Array.from(document.querySelectorAll('.card'));
  allCards.forEach((card) => card.addEventListener('click', flipCard));

  const cardButton = this.parentElement;
  if (cardButton.getAttribute('data-correct') == this.innerHTML) {
    Score = Score + parseInt(cardButton.getAttribute('data-value'));
    score.innerHTML = Score;
    cardButton.classList.add('correct-answer');

    //if the answer is correct show the value
    setTimeout(() => {
      while (cardButton.firstChild) {
        cardButton.removeChild(cardButton.lastChild);
      }
      cardButton.innerHTML = cardButton.getAttribute('data-value');
    }, 100);
  } else {
    cardButton.classList.add('wrong-answer');
    setTimeout(() => {
      while (cardButton.firstChild) {
        cardButton.removeChild(cardButton.lastChild);
      }
      cardButton.innerHTML = 0;
    }, 100);
  }

  cardButton.removeEventListener('click', flipCard);
}
