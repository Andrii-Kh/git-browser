import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'

import '../assets/scss/repositoriesList.css'

const RepositoriesList = () => {
  const { userName } = useParams()

  const [repo, setRepo] = useState([])

  const url = `https://api.github.com/users/${userName}/repos`

  useEffect(async () => {
    const repoArr = await axios(url)
      .then((res) => res.data)
      .catch(() => `Error: User ${userName} not found`)

    setRepo(repoArr)
    return () => []
  }, [userName])

  return (
    <div>
      <Header userName={userName} />
      {repo.map((repositoryObj) => {
        return (
          <div key={repositoryObj.id}>
            <div className="repositoryName">
              <div style={{ width: '130px' }}>Repository name:</div>
              <div style={{ width: '300px' }}>{repositoryObj.name}</div>
              <div style={{ width: '40px' }}>Link:</div>
              <Link to={`${userName}/${repositoryObj.name}`}>{repositoryObj.html_url}</Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RepositoriesList
