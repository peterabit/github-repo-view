import React from 'react'

export default function Repo({ title, desc, url }) {
  return (
    <div className="list-item">
      <div style={{ display: 'flex' }}>
        <h5 style={{ margin: '0 15px 0 0' }}>{title}</h5>
        <a href={url} target="_blank">{url}</a>
      </div>
      <p style={{ margin: '0 0 15px 0' }}>{desc}</p>
    </div>
  )
}
