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
        answers: ['New York, Manhattan'],
        correct: 'New York',
        level: 'easy',
      },
      {
        question: 'Where can you visit the Great Wall of China?',
        answers: ['Beijing, China'],
        correct: 'China',
        level: 'medium',
      },
      {
        question: 'Where is Colosseum?',
        answers: ['Rome, Italy'],
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
        answers: ['1901, 1900, 20th century'],
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
        answers: ['France, Spain, United State, Italy, China'],
        correct: 'France, Spain, United State, Italy, China',
        level: 'easy',
      },
      {
        question: 'What do koalas eat?',
        answers: ['Eucalyptus leaves,brush box,paperback,bloodwood trees '],
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
