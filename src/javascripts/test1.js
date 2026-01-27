console.clear()
import { initTest, chooseAnswer } from './tests.js'

const stages = [
  {
    question:
      'Какое растение, согласно народной медицине, следует использовать для заживления ран?',
    answers: [
      {
        text: 'ромашка',
        count: 0
      },
      {
        text: 'брусника',
        count: 0
      },
      {
        text: 'алоэ',
        count: 1
      }
    ]
  },
  {
    question:
      'Отвар и настой ягод какого растения применяется как дезинфицирующее средство?',
    answers: [
      {
        text: 'калина',
        count: 0
      },
      {
        text: 'брусника',
        count: 1
      },
      {
        text: 'клюква',
        count: 0
      }
    ]
  },
  {
    question:
      'Какое из перечисленных растений обладает противовоспалительным действием?',
    answers: [
      {
        text: 'ромашка',
        count: 0
      },
      {
        text: 'аир',
        count: 0
      },
      {
        text: 'девятисил',
        count: 1
      }
    ]
  },
  {
    question:
      'Экстракт какого растения используется для приготовления безрецептурных растительных антидепрессантов?',
    answers: [
      {
        text: 'зверобой',
        count: 1
      },
      {
        text: 'шалфей',
        count: 0
      },
      {
        text: 'солодка',
        count: 0
      }
    ]
  }
]

initTest(stages)
chooseAnswer(stages)
