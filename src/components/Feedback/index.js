// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: true}

  setFeedBackSelected = () => {
    this.setState({isEmojiClicked: false})
  }

  emojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="question-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list-type">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={this.setFeedBackSelected}
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emojiImage"
                />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  successfulContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="successful-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1>Thank You</h1>
        <p>
          Well use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="app-container">
        <div className="feedback-container">
          {isEmojiClicked ? this.emojiContainer() : this.successfulContainer()}
        </div>
      </div>
    )
  }
}

export default Feedback
