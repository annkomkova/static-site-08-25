let currentStage = 0
let resultCount = 0
const checkboxes = document.querySelectorAll('input[type=checkbox]')

function initTest(stages) {
  const numberOfQuestion = document.querySelector('.A_NumberOfQuestion')
  const question = document.querySelector('.A_Question')
  const answers = document.querySelectorAll('.A_AnswerText')

  numberOfQuestion.innerText = `вопрос №${currentStage + 1} из ${stages.length}`

  question.innerText = stages[currentStage].question

  for (let i = 0; i < answers.length; i++) {
    answers[i].innerText = stages[currentStage].answers[i].text
  }

  for (let j = 0; j < checkboxes.length; j++) {
    checkboxes[j].dataset.count = stages[currentStage].answers[j].count
  }
}

function chooseAnswer(stages) {
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        setTimeout(() => {
          resultCount += Number(checkbox.dataset.count)
          updateStage(stages)
          checkbox.checked = false
        }, 300)
      }
    })
  })
}

function updateStage(stages) {
  if (++currentStage < stages.length) {
    initTest(stages)
  } else {
    console.log('результат')
  }
}

export { initTest, chooseAnswer }
