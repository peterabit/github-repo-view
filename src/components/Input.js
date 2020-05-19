import React, { useState, useEffect } from 'react'

export default function Input({ onChange }) {
  const [inputText, setInputText] = useState('')
  const handleSubmit = () => {
    onChange(inputText)
  }
  return (
    <>
      <input value={inputText} onChange={e => setInputText(e.target.value)} onKeyDown={e => {
        if (e.keyCode === 13) {
          handleSubmit()
        }
      }}/>
      <button onClick={handleSubmit}>送出</button>
    </>
  )
}
