import React from 'react'

import { A_SearchInput } from './A_SearchInput.jsx'
import { C_Dropdown } from './C_Dropdown.jsx'

import { articles } from '../javascripts/search-data.js'

import { useMemo, useState } from 'react'

export function W_SearchContainer() {
  const [query, setQuery] = useState('')

  const filteredArticles = useMemo(() => {
    const normirezedQuery = query.trim().toLowerCase()

    if (!normirezedQuery) {
      return articles
    }

    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(normirezedQuery) ||
        article.description.toLowerCase().includes(normirezedQuery)
    )
  })

  const isVisible = query.trim().length > 2

  return (
    <div className="W_SearchContainer">
      <A_SearchInput value={query} onChange={setQuery} />
      <C_Dropdown items={filteredArticles} isVisible={isVisible} />
    </div>
  )
}
