import React from 'react'

export default function A_HeaderLink({ text, url }) {
  return (
    <a className="A_HeaderLink" href={url}>
      {text}
    </a>
  )
}
