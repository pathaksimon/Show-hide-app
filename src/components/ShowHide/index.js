import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {click: false, click1: false}

  hideseek = () => {
    this.setState(prevState => ({click: !prevState.click}))
  }

  mike = () => {
    this.setState(prevState => ({click1: !prevState.click1}))
  }

  jadon = () => {
    const {click} = this.state
    if (click === true) {
      return 'card1'
    }
    return ''
  }

  jadon2 = () => {
    const {click} = this.state
    if (click === true) {
      return 'Joe'
    }
    return ''
  }

  maxi = () => {
    const {click1} = this.state
    if (click1 === true) {
      return 'card2'
    }
    return ''
  }

  maxi2 = () => {
    const {click1} = this.state
    if (click1 === true) {
      return 'Jonas'
    }
    return ''
  }

  render() {
    const card1 = this.jadon()
    const name = this.jadon2()

    const card2 = this.maxi()
    const name2 = this.maxi2()

    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>

        <div className="combined-cards">
          <div className="first-button">
            <button type="button" onClick={this.hideseek}>
              Show/Hide FirstName
            </button>
            <p className={card1}>{name}</p>
          </div>

          <div className="first-button">
            <button type="button" onClick={this.mike}>
              Show/Hide LastName
            </button>
            <p className={card2}>{name2}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
