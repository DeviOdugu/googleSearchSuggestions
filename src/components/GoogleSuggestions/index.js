// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  arrowClicked = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    
    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          height="100px"
          width="200px"
        />
        <div className="card">
          <div className="a">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              height="15px"
              width="15px"
              className="icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul>
            {searchResults.map(eachSuggest => (
              <SuggestionItem
                key={eachSuggest.id}
                suggestionDetails={eachSuggest}
                arrowClicked={this.arrowClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
