console.clear()

const showModalWindowButton = document.querySelector('.showModalWindow')
showModalWindowButton.addEventListener('click', showModalWindow)

// helloUser()
// testWhile()
showPineTree()

function showModalWindow() {
  alert('hey!')
}

function helloUser() {
  const userName = prompt('Как тебя зовут?')

  if (userName == null) {
    alert(`Привет, аноним!`)
  } else {
    alert(`Привет, ${userName}!`)
  }
}

function testWhile() {
  let number = 7
  let i = 0

  console.log('Таблица умножения на число', number)

  while (i < 10) {
    i++
    console.log(number * i)
  }

  // let scream = 'a'
  // while (scream !== 'aaaaaaaaaaaa') {
  //   console.log(scream)
  //   scream += 'a'
  // }
}

function showPineTree() {
  //   *
  //  ***
  // *****

  const treeHeight = 6

  for (let i = 0; i < treeHeight; i++) {
    let starsCount = i * 2 + 1
    let out = ''
    let spaceCount = treeHeight - i - 1

    for (let k = 0; k < spaceCount; k++) {
      out += ' '
    }

    for (let j = 0; j < starsCount; j++) {
      out += '*'
    }

    console.log(out)
  }
}
