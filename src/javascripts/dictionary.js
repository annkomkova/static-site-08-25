const images = require.context('../images/dictionary', false, /\.jpg$/)

const dictionary = [
  {
    image: images('./agava3_300x300.jpg'),
    name: 'Агава комнатная'
  },
  {
    image: images('./aglaonema2_300x300.jpg'),
    name: 'Аглаонема комнатная'
  },
  {
    image: images('./adenium3_300x300.jpg'),
    name: 'Адениум комнатный'
  },
  {
    image: images('./azalia3_300x300.jpg'),
    name: 'Азалия комнатная'
  },
  {
    image: images('./akalifa2_300x300.jpg'),
    name: 'Акалифа комнатная'
  },
  {
    image: images('./allamanda2_300x300.jpg'),
    name: 'Алламанда комнатная'
  },
  {
    image: images('./alokaziya3_300x300.jpg'),
    name: 'Алоказия комнатная'
  },
  {
    image: images('./aloe3_300x300.jpg'),
    name: 'Алоэ комнатное'
  },
  {
    image: images('./ananas3_300x300.jpg'),
    name: 'Ананас комнатный'
  },
  {
    image: images('./anturium3_300x300.jpg'),
    name: 'Антуриум комнатный'
  },
  {
    image: images('./aronnik3_300x300.jpg'),
    name: 'Аронник комнатный'
  },
  {
    image: images('./asparagus3_300x300.jpg'),
    name: 'Аспарагус комнатный'
  },
  {
    image: images('./asplenium3_300x300.jpg'),
    name: 'Асплениум комнатный'
  },
  {
    image: images('./afelandra3_300x300.jpg'),
    name: 'Афеландра комнатная'
  },
  {
    image: images('./beloperone3_300x300.jpg'),
    name: 'Белопероне комнатное'
  },
  {
    image: images('./biryuchina3_300x300.jpg'),
    name: 'Бирючина комнатная'
  },
  {
    image: images('./buvardiya3_300x300.jpg'),
    name: 'Бувардия комнатная'
  },
  {
    image: images('./vanda3_300x300.jpg'),
    name: 'Ванда комнатная'
  },
  {
    image: images('./vrieziya3_300x300.jpg'),
    name: 'Вриезия комнатная'
  },
  {
    image: images('./gardeniya3_300x300.jpg'),
    name: 'Гардения комнатная'
  },
  {
    image: images('./gasteriya3_300x300.jpg'),
    name: 'Гастерия комнатная'
  },
  {
    image: images('./gladiolus3_300x300.jpg'),
    name: 'Гладиолус комнатный'
  },
  {
    image: images('./gloksiniya3_300x300.jpg'),
    name: 'Глоксиния комнатная'
  },
  {
    image: images('./glorioza3_300x300.jpg'),
    name: 'Глориоза комнатная'
  },
  {
    image: images('./gusmaniya3_300x300.jpg'),
    name: 'Гузмания комнатная'
  },
  {
    image: images('./dendrobium3_300x300.jpg'),
    name: 'Дендробиум комнатный'
  },
  {
    image: images('./diffenbahiya3_300x300.jpg'),
    name: 'Диффенбахия комнатная'
  },
  {
    image: images('./dracena3_300x300.jpg'),
    name: 'Драцена комнатная'
  },
  {
    image: images('./zamiokulkas3_300x300.jpg'),
    name: 'Замиокулькас комнатный'
  },
  {
    image: images('./inzhir3_300x300.jpg'),
    name: 'Инжир комнатный'
  },
  {
    image: images('./kaktus3_300x300.jpg'),
    name: 'Кактус комнатный'
  },
  {
    image: images('./kaladium3_300x300.jpg'),
    name: 'Каладиум комнатный'
  },
  {
    image: images('./kalanhoe3_300x300.jpg'),
    name: 'Каланхоэ комнатное'
  },
  {
    image: images('./kalateya3_300x300.jpg'),
    name: 'Калатея комнатная'
  },
  {
    image: images('./zantedeskiya3_300x300.jpg'),
    name: 'Калла комнатная'
  },
  {
    image: images('./kallistemon3_300x300.jpg'),
    name: 'Каллистемон комнатный'
  },
  {
    image: images('./kalceolyariya3_300x300.jpg'),
    name: 'Кальцеолярия комнатная'
  },
  {
    image: images('./kliviya3_300x300.jpg'),
    name: 'Кливия комнатная'
  },
  {
    image: images('./kroton3_300x300.jpg'),
    name: 'Кодиеум комнатный'
  },
  {
    image: images('./koleus3_300x300.jpg'),
    name: 'Колеус комнатный'
  },
  {
    image: images('./kolumneya3_300x300.jpg'),
    name: 'Колумнея комнатная'
  },
  {
    image: images('./kordilina3_300x300.jpg'),
    name: 'Кордилина комнатная'
  },
  {
    image: images('./kofe3_300x300.jpg'),
    name: 'Кофе комнатный'
  },
  {
    image: images('./kriptantus3_300x300.jpg'),
    name: 'Криптантус комнатный'
  },
  {
    image: images('./lashenaliya3_300x300.jpg'),
    name: 'Лашеналия комнатная'
  },
  {
    image: images('./leptospermum3_300x300.jpg'),
    name: 'Лептоспермум комнатный'
  },
  {
    image: images('./maranta3_300x300.jpg'),
    name: 'Маранта комнатная'
  },
  {
    image: images('./maslina3_300x300.jpg'),
    name: 'Маслина комнатная'
  },
  {
    image: images('./mimoza3_300x300.jpg'),
    name: 'Мимоза комнатная'
  },
  {
    image: images('./molochay3_300x300.jpg'),
    name: 'Молочай комнатный'
  },
  {
    image: images('./nasturciya3_300x300.jpg'),
    name: 'Настурция комнатная'
  },
  {
    image: images('./neoregeliya3_300x300.jpg'),
    name: 'Неорегелия комнатная'
  },
  {
    image: images('./nefrolepis3_300x300.jpg'),
    name: 'Нефролепис комнатный'
  },
  {
    image: images('./nidulyarium3_300x300.jpg'),
    name: 'Нидуляриум комнатный'
  },
  {
    image: images('./odontoglossum3_300x300.jpg'),
    name: 'Одонтоглоссум комнатный'
  },
  {
    image: images('./ornitogalum3_300x300.jpg'),
    name: 'Орнитогалум комнатный'
  },
  {
    image: images('./palma3_300x300.jpg'),
    name: 'Пальма кокосовая'
  },
  {
    image: images('./pandan3_300x300.jpg'),
    name: 'Панданус комнатный'
  },
  {
    image: images('./paslen3_300x300.jpg'),
    name: 'Паслен комнатный'
  },
  {
    image: images('./passiflora3_300x300.jpg'),
    name: 'Пассифлора комнатная'
  },
  {
    image: images('./pahipodium3_300x300.jpg'),
    name: 'Пахиподиум комнатный'
  },
  {
    image: images('./pahistahis3_300x300.jpg'),
    name: 'Пахистахис комнатный'
  },
  {
    image: images('./peperomiya3_300x300.jpg'),
    name: 'Пеперомия комнатная'
  },
  {
    image: images('./perec3_300x300.jpg'),
    name: 'Перец комнатный'
  },
  {
    image: images('./pileya3_300x300.jpg'),
    name: 'Пилея комнатная'
  },
  {
    image: images('./plektrantus3_300x300.jpg'),
    name: 'Плектрантус комнатный'
  },
  {
    image: images('./plyusch3_300x300.jpg'),
    name: 'Плющ комнатный'
  },
  {
    image: images('./radermahera3_300x300.jpg'),
    name: 'Радермахера комнатная'
  },
  {
    image: images('./rebucii3_300x300.jpg'),
    name: 'Ребуция комнатная'
  },
  {
    image: images('./ripsalis3_300x300.jpg'),
    name: 'Рипсалис комнатный'
  },
  {
    image: images('./sansevieriya3_300x300.jpg'),
    name: 'Сансевиерия комнатная'
  },
  {
    image: images('./selaginella3_300x300.jpg'),
    name: 'Селагинелла комнатная'
  },
  {
    image: images('./senpoliya3_300x300.jpg'),
    name: 'Сенполия комнатная'
  },
  {
    image: images('./sofora3_300x300.jpg'),
    name: 'Софора комнатная'
  },
  {
    image: images('./sparmanniya3_300x300.jpg'),
    name: 'Спарманния комнатная'
  },
  {
    image: images('./spatifillyum3_300x300.jpg'),
    name: 'Спатифиллум комнатный'
  },
  {
    image: images('./stahis3_300x300.jpg'),
    name: 'Стахис комнатный'
  },
  {
    image: images('./stefanotis3_300x300.jpg'),
    name: 'Стефанотис комнатный'
  },
  {
    image: images('./streliciya3_300x300.jpg'),
    name: 'Стрелитция комнатная'
  },
  {
    image: images('./strelolist3_300x300.jpg'),
    name: 'Стрелолист комнатный'
  },
  {
    image: images('./streptokarpus3_300x300.jpg'),
    name: 'Стрептокарпус комнатный'
  },
  {
    image: images('./scindapsus3_300x300.jpg'),
    name: 'Сциндапсус комнатный'
  },
  {
    image: images('./tillandsiya3_300x300.jpg'),
    name: 'Тилландсия комнатная'
  },
  {
    image: images('./tolmiya3_300x300.jpg'),
    name: 'Толмия комнатная'
  },
  {
    image: images('./tolstyanka3_300x300.jpg'),
    name: 'Толстянка комнатная'
  },
  {
    image: images('./toreniya3_300x300.jpg'),
    name: 'Торения комнатная'
  },
  {
    image: images('./tradeskanciya3_300x300.jpg'),
    name: 'Традесканция комнатная'
  },
  {
    image: images('./tyulpan3_300x300.jpg'),
    name: 'Тюльпан комнатный'
  },
  {
    image: images('./falenopsis3_300x300.jpg'),
    name: 'Фаленопсис комнатный'
  },
  {
    image: images('./fatsiya3_300x300.jpg'),
    name: 'Фатсия комнатная'
  },
  {
    image: images('./fatshedera3_300x300.jpg'),
    name: 'Фатсхедера комнатная'
  },
  {
    image: images('./faukariya3_300x300.jpg'),
    name: 'Фаукария комнатная'
  },
  {
    image: images('./fikus3_300x300.jpg'),
    name: 'Фикус Бенджамина'
  },
  {
    image: images('./fikus-kauchukonosnyy2_300x300.jpg'),
    name: 'Фикус каучуконосный'
  },
  {
    image: images('./filodendron3_300x300.jpg'),
    name: 'Филодендрон комнатный'
  },
  {
    image: images('./finik3_300x300.jpg'),
    name: 'Финик комнатный'
  },
  {
    image: images('./fittoniya3_300x300.jpg'),
    name: 'Фиттония комнатная'
  },
  {
    image: images('./fortunella3_300x300.jpg'),
    name: 'Фортунелла комнатная'
  },
  {
    image: images('./freziya3_300x300.jpg'),
    name: 'Фрезия комнатная'
  },
  {
    image: images('./havortiya3_300x300.jpg'),
    name: 'Хавортия комнатная'
  },
  {
    image: images('./hamedoreya3_300x300.jpg'),
    name: 'Хамедорея комнатная'
  },
  {
    image: images('./hamelacium3_300x300.jpg'),
    name: 'Хамелациум комнатный'
  },
  {
    image: images('./hlorofitum3_300x300.jpg'),
    name: 'Хлорофитум комнатный'
  },
  {
    image: images('./hoveya3_300x300.jpg'),
    name: 'Ховея комнатная'
  },
  {
    image: images('./hoyya3_300x300.jpg'),
    name: 'Хойя комнатная'
  },
  {
    image: images('./cikas3_300x300.jpg'),
    name: 'Цикас комнатный'
  },
  {
    image: images('./cissus3_300x300.jpg'),
    name: 'Циссус комнатный'
  },
  {
    image: images('./citrus3_300x300.jpg'),
    name: 'Цитрус комнатный'
  },
  {
    image: images('./shefflera3_300x300.jpg'),
    name: 'Шеффлера комнатная'
  },
  {
    image: images('./shlyumbergera3_300x300.jpg'),
    name: 'Шлюмбергера комнатная'
  },
  {
    image: images('./eonium3_300x300.jpg'),
    name: 'Эониум комнатный'
  },
  {
    image: images('./eshinantus3_300x300.jpg'),
    name: 'Эсхинантус комнатный'
  },
  {
    image: images('./eheveriya3_300x300.jpg'),
    name: 'Эхеверия комнатная'
  },
  {
    image: images('./ehmeya3_300x300.jpg'),
    name: 'Эхмея комнатная'
  },
  {
    image: images('./yukka3_300x300.jpg'),
    name: 'Юкка комнатная'
  },
  {
    image: images('./yatrofa3_300x300.jpg'),
    name: 'Ятрофа комнатная'
  }
]

function renderCards(list) {
  const container = document.querySelector('.C_DictionaryCards')
  container.innerHTML = ''

  list.forEach((item) => {
    const card = document.createElement('div')
    card.classList.add('M_DictionaryCard')

    const header = document.createElement('h3')
    header.innerText = item.name
    header.classList.add('A_DictionaryCardHeader')

    const img = document.createElement('div')
    img.style.backgroundImage = `url(${item.image})`
    img.classList.add('A_DictionaryCardImg')

    card.appendChild(header)
    card.appendChild(img)

    container.appendChild(card)
  })
}

// изначально выводим всё
renderCards(dictionary)

const alphabetContainer = document.querySelector('.alphabet-filter')
const spans = document.querySelectorAll('.alphabet-filter span')

let activeLetters = []

// 👉 отключаем буквы без растений
function updateDisabledLetters() {
  // 👉 получаем набор существующих первых букв
  const available = new Set(
    //Set (по-русски говорят множество) — коллекция для хранения уникальных значений любого типа. Одно и то же значение нельзя добавить в Set больше одного раза.
    dictionary.map((item) => item.name.trim().toUpperCase()[0])
    //Метод map() позволяет трансформировать один массив в другой при помощи функций-колбэка. Переданная функция будет вызвана для каждого элемента массива по порядку. Из результатов вызова функции будет собран новый массив.
    //Метод .trim() удаляет пробельные символы с обеих сторон строки и возвращает новую строку, не изменяя при этом исходную.
  )

  spans.forEach((span) => {
    const letter = span.dataset.letter

    if (letter === 'all') return

    if (!available.has(letter)) {
      span.classList.add('disabled')
    } else {
      span.classList.remove('disabled')
    }
  })
}

// 👉 обновляем состояние кнопки "Все"
function updateAllButton() {
  const allButton = document.querySelector('[data-letter="all"]')

  if (activeLetters.length === 0) {
    allButton.classList.add('active')
  } else {
    allButton.classList.remove('active')
  }
}

// 👉 фильтрация
function applyFilter() {
  if (activeLetters.length === 0) {
    renderCards(dictionary)
  } else {
    const filtered = dictionary.filter((item) => {
      const firstLetter = item.name.trim().toUpperCase()[0]
      return activeLetters.includes(firstLetter)
    })

    renderCards(filtered)
  }

  updateAllButton()
}

// 👉 клик по буквам
alphabetContainer.addEventListener('click', (e) => {
  const span = e.target
  if (!span.dataset.letter) return

  const letter = span.dataset.letter

  // если disabled — ничего не делаем
  if (span.classList.contains('disabled')) return

  // кнопка "Все"
  if (letter === 'all') {
    activeLetters = []
    spans.forEach((el) => el.classList.remove('active'))
    applyFilter()
    return
  }

  // переключаем активность
  span.classList.toggle('active')

  activeLetters = Array.from(
    document.querySelectorAll('.alphabet-filter span.active')
  )
    .map((el) => el.dataset.letter)
    .filter((l) => l !== 'all')

  applyFilter()
})

// 🚀 Инициализация
updateDisabledLetters()
applyFilter()
