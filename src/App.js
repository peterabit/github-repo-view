import React, { useState, useEffect } from 'react';
import RepoList from './components/RepoList'
import Input from './components/Input'
import ErrorMsg from './components/ErrorMsg'
import IndefineScroll from './components/IndefineScroll'
import './App.css'

const fetchRepos = (search, page) => {
  const apiUrl = 'https://api.github.com/search/repositories?'
  const apiQuery = `q=user:${search}+is:public&page=${page}&per_page=10&type=Repositories`
  const url = apiUrl + apiQuery
  return fetch(url)
    .then(res => {
      return res.json()
    })
    .then(data => {
      if (!data.errors) {
        return {
          status: true,
          data: data.items
        }
      } else {
        return {
          status: false,
          error: JSON.stringify(data.errors)
        }
      }
    })
    .catch(error => {
      return {
        status: false,
        error
      }
    })
}

function App() {
  const [search, setSearch] = useState('peter01twn')
  const [repos, setRepos] = useState([])
  const [page, setPage] = useState(1)
  const [errMsg, setErrMsg] = useState('')
  const [IsFetch, setIsFetch] = useState(false)
  const handleSearch = input => setSearch(input)

  const LoadMore = () => {
    if (IsFetch) {
      return
    }
    fetchRepos(search, page + 1)
      .then(result => {
        if (result.status) {
          if (result.data.length > 0) {
            setRepos([...repos, ...result.data])
            setPage(page + 1)
          }
          setErrMsg('')
        } else {
          setErrMsg(JSON.stringify(result.error))
        }
      })

    // 設定加載間隔
    setIsFetch(true)
    setTimeout(() => {
      setIsFetch(false)
    }, 1500);
  }

  useEffect(() => {
    setPage(1)
    fetchRepos(search, 1)
      .then(result => {
        if (result.status) {
          setRepos(result.data)
          setErrMsg('')
        } else {
          setErrMsg(JSON.stringify(result.error))
        }
      })
  }, [search])

  return (
    <div className="App" style={{ padding: '0 0' }}>
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Search github repositories by user</h1>
        <Input onChange={handleSearch} />
        <ErrorMsg>{errMsg}</ErrorMsg>
        <IndefineScroll onScroll={LoadMore}>
          <RepoList repos={repos} />
        </IndefineScroll>
      </div>
    </div>
  );
}

export default App;
