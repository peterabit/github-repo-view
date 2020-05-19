import React from 'react'
import Repo from './Repo'

export default function RepoList({repos}) {
  return (
    <div>
      {repos.map(el => <Repo key={el.id} title={el.name} desc={el.description} url={el.html_url} />)}
    </div>
  )
}
