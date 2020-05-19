import React from 'react'

export default function ErrorMsg({ children }) {
  return (
    <span className="err-msg">
      {children}
    </span>
  )
}
