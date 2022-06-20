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
      <table className="mx-4">
        <tbody>
          <tr>
            <th>Repository name</th>
            <th>Link</th>
          </tr>

          {repo.map((repositoryObj) => {
            return (
              <tr key={repositoryObj.id}>
                <td>{repositoryObj.name}</td>
                <td>
                  <Link to={`${userName}/${repositoryObj.name}`}>{repositoryObj.html_url}</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default RepositoriesList
