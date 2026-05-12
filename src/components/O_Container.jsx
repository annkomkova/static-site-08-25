import React from 'react'

import A_Title from './A_Title.jsx'
import M_Card from './M_Card.jsx'

const workshops = [
  {
    name: 'Установка поанов на 4 модуль',
    date: '7 апреля 2026'
  },
  {
    name: 'Разработка модуля поиска на ванильном JS',
    date: '14 апреля 2026'
  },
  {
    name: 'Программируем страницу поисковой выдачи',
    date: '21 апреля 2026'
  },
  {
    name: 'Сопоставление планов на модуль',
    date: '28 апреля 2026'
  }
]

export default function O_Container() {
  return (
    <div className="O_Container">
      <A_Title name="Расписание" />

      {workshops.map((workshop, i) => (
        <M_Card key={i} name={workshop.name} date={workshop.date} />
      ))}
    </div>
  )
}
