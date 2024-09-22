// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangocount: 0, bananacount: 0}

  eatMango = () => {
    this.setState(prevState => ({
      mangocount: prevState.mangocount + 1,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      bananacount: prevState.bananacount + 1,
    }))
  }

  render() {
    const {mangocount, bananacount} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">
            Bob ate <span className="span-ele">{mangocount}</span> mangoes{' '}
            <span className="span-ele">{bananacount}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="fruit">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button onClick={this.eatMango} className="btn">
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button onClick={this.eatBanana} className="btn">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
