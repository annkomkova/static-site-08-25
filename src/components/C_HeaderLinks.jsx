import React from 'react'

import A_HeaderLink from './A_HeaderLink.jsx'

export default function C_HeaderLinks({ homeURL, menu }) {
  const menuElements = menu.map(({ text, url }, i) => {
    const linkURL = homeURL + url

    return <A_HeaderLink key={i} text={text} url={url} />
  })

  return <nav className="C_HeaderLinks">{menuElements}</nav>
}
