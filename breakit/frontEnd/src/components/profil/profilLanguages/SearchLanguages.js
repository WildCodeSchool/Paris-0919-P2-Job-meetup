import React from 'react'
import './SearchLanguages.css'

class SearchLanguages extends React.Component {
  state = {
    suggestions: [],
    text: '',
    cardsLanguages: []
  }

  handleChange = (event) => {
    const { languages } = this.props
    const value = event.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = languages.sort().filter(v => regex.test(v))
    }
    this.setState(() => ({ suggestions, text: value }))
  }

  renderSuggestions = () => {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <div>
        <ul className="suggestionsList">
          {suggestions.map(item =>
            <li
              onClick={() => this.suggestionsSelected(item)}>{item}
            </li>)}
        </ul>
      </div>
    )
  }

  suggestionsSelected = (value) => {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))
  }

  addCompetence = (name) => {
    const index = this.state.cardsLanguages.indexOf(name)
    if (index === -1 || index === null) {
      this.setState({ cardsLanguages: this.state.cardsLanguages.concat(this.state.text) })
    }
    else {
      return null
    }

  }

  handleClick = (name) => {
    const interest = this.state.cardsLanguages
    const index = interest.indexOf(name)
    interest.splice(index, 1)
    this.setState({ interest: interest })
  }




  render() {
    const { text } = this.state

    return (
      <div className="containerSearchLanguages">
        <input
          type='text'
          value={text}
          className="inputSearchLanguages"
          onChange={(this.handleChange)}
        />
        <button className="Add" onClick={() => this.addCompetence(text)} value="add">Add</button>
        {this.renderSuggestions()}

        <div className="displayCard">
          <p>
            {this.state.cardsLanguages.map(card =>
              <li className="listElements">
                <div className="cardItem">{card} <button className='x'onClick={() => this.handleClick(card)}>X</button></div>
                
              </li>)}
          </p>
        </div>
       

      </div>
    )
  }
}



export default SearchLanguages