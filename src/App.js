import React, { Component } from 'react';
import './App.css';
import Column from './Column.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeChar: [0, 0],
      matrix: []
    }
  }

  componentDidMount() {
    let matrix = []
    for (let i = 0; i < 78; i++) {
      matrix.push([])
      for (let j = 0; j < 40; j++) {
        matrix[i].push('')
      }
    }
    this.setState({
      matrix
    })
  }

  getRandomPosition() {
  }


  render() {
    return (
      <div className="App" style={{ backgroundColor: 'black', displayFlex: 'flex'}}>
        {
          this.state.matrix.map((row, rowIndex) => (
            <Column row={row} rowIndex={rowIndex}/>
          ))
        }
      </div>
    );
  }
}

export default App;

