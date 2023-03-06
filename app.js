const game = document.getElementById('game');
const score = document.getElementById('score');

const jeopardyCategories = [
  {
    genre: 'CAPITALS',
    questions: [
      {
        question: 'What is the capital of France?',
        answers: ['Paris'],
        correct: 'Paris',
        level: 'easy',
      },
    ],
  },
  {
    genre: 'LANGUAGES',
    questions: [],
  },
];
