import {Component} from 'react'

import './index.css'

class CharacterCounter extends Component {
  state = {inputText: '', wordsList: []}

  ChangeInput = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  onClickAddbutton = () => {
    const {inputText, wordsList} = this.state

    const newWord = {
      id: wordsList.length + 1,
      text: inputText,
      length: inputText.length,
    }

    this.setState(prevstate => ({
      wordsList: [...prevstate.wordsList, newWord],
      inputText: '',
    }))
  }

  render() {
    const {wordsList, inputText} = this.state
    console.log(wordsList)
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="counter-side-card">
            <h1 className="heading">Count the character like a Boss..</h1>
            {wordsList.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user Inputs"
                className="on-user-image"
              />
            ) : (
              <ul className="wordsList">
                {wordsList.map(word => (
                  <li key={word.id} className="wordText">
                    {word.text}: {word.length}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="counter-input-card">
            <h1 className="sub-heading">Character Counter</h1>
            <div className="input-container">
              <input
                onChange={this.ChangeInput}
                value={inputText}
                className="input"
              />
              <button
                type="button"
                onClick={this.onClickAddbutton}
                className="add-button"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
