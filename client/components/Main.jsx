import React, { useState } from 'react'
import '../assets/scss/mainPage.css'

const Main = (props) => {
  const [inputValue, setInputValue] = useState('')
  const onChange = (e) => {
    const newValue = e.target.value
    setInputValue(newValue)
  }

  const onClick = () => {
    props.changeState(inputValue)
  }

  return (
    <div className="mainPage">
      <input className="input" id="input-field" value={inputValue} onChange={onChange} />
      <button className="search-button" type="button" id="search-button" onClick={onClick}>
        Search
      </button>
    </div>
  )
}

export default Main
