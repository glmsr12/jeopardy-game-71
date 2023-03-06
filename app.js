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
      {
        question: 'What is the capital of Ukraine?',
        answers: ['Kyiv', 'Kiev'],
        correct: 'Kiev',
        level: 'easy',
      },
      {
        question: 'What is the capital of Spain?',
        answers: ['Madrid'],
        correct: 'Madrid',
        level: 'easy',
      },
    ],
  },
  {
    genre: 'LANGUAGES',
    questions: [
      {
        question: 'What language do Ukrainians speak?',
        answers: ['Russian', 'Belarusian'],
        correct: 'Russian and Belarusian',
        level: 'easy',
      },
      {
        question: 'What language do Ukrainians speak?',
        answers: ['Russian', 'Belarusian'],
        correct: 'Russian and Belarusian',
        level: 'easy',
      },
      {
        question: 'What language do Ukrainians speak?',
        answers: ['Russian', 'Belarusian'],
        correct: 'Russian and Belarusian',
        level: 'easy',
      },
    ],
  },
];
