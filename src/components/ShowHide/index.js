// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstName = () => {
    const {firstName} = this.state
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastName = () => {
    const {lastName} = this.state
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {lastName, firstName} = this.state
    const showFirstName = firstName ? 'hide-container' : null
    const showLastName = lastName ? 'hide-container' : null
    const firstNameText = firstName ? 'Joe' : null
    const lastNameText = lastName ? 'Jonas' : null

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="bg-container">
          <div className="button-container">
            <button className="button" type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            <div className={showFirstName}>
              <p className="text">{firstNameText}</p>
            </div>
          </div>
          <div className="button-container">
            <button className="button" type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            <div className={showLastName}>
              <p className="text">{lastNameText}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
