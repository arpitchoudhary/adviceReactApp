import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import LoadingOverlay from 'react-loading-overlay';

class App extends Component {

  state = { advice: ' ' }

  componentDidMount() {
    this.fetchAdvice()
  }

  fetchAdvice = () => {
    console.log('fetching advice...')

    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        console.log('gotcha advice...')
        const { advice } = response.data.slip;
        this.setState({ advice: advice })
      }).catch((err) => {
        console.log('advice fetch failed...')
        console.log(err)
      })

  }

  render() {

    const { advice } = this.state
    return (
      <div className="app">
        <div className="card">
          {advice === ' ' ? <h1 className="heading">Loading....</h1> : <h1 className="heading">{advice}</h1>}
          <button className="button" onClick={() => this.fetchAdvice()}>Give ME ADVICE!</button>
        </div>
      </div>
    )
  }
}

export default App;
