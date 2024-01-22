// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, arrowClicked} = props
  const {suggestion} = suggestionDetails

  const onClickArrow = () => {
    arrowClicked(suggestion)
  }

  return (
    <li className="list">
      <p className="suggest">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        height="15px"
        width="15px"
        className="arrow"
        onClick={onClickArrow}
      />
    </li>
  )
}

export default SuggestionItem
