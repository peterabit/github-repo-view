import React, { useState, useRef } from 'react'

export default function IndefineScroll({ onScroll, children }) {
  const ref = useRef()
  const handleScroll = e => {
    const scrollHeight = e.target.scrollHeight
    const height = e.target.getBoundingClientRect().height
    const scrollTop = e.target.scrollTop
    if (scrollTop < (scrollHeight - height - 50) ) {
      onScroll()
    }
  }
  return (
    <div ref={ref} onScroll={e => handleScroll(e)} className="infinite-scroll" >
      {children}
    </div>
  )
}
