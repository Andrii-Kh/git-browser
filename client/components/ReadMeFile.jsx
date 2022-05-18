import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Header from './Header'

const ReadMeFile = (props) => {
  const { repositoryName } = useParams()

  const [readMeFile, setReadMeFile] = useState()

  const url = `https://raw.githubusercontent.com/${props.value}/${repositoryName}/master/README.md`

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data)
        setReadMeFile(res.data)
      })
      .catch((er) => {
        console.log(er)
        setReadMeFile('README file is not found')
      })
  }, [props.value, repositoryName])

  return (
    <div id="description">
      <Header repositoryName={repositoryName} userName={props.value} />
      <ReactMarkdown className="readMeFile">{readMeFile}</ReactMarkdown>
    </div>
  )
}

export default ReadMeFile
