import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      activeChar: [0,0],
      matrix : []
    }
  }

  componentDidMount(){
    let matrix = []
    for (let i = 0; i < 30;i++){
      matrix.push([])
      for (let j=0; j< 50; j++){
        matrix[i].push('0')
      }
    }
    this.setState({
      matrix
    })
  }
  getRandomPosition(){
  }

  
  render() {
    return (
      <div className="App" style={{backgroundColor: 'black'}}>
        {
          this.state.matrix.map((row, rowIndex) => (
            <p style={{lineHeight:'0.3em'}} key={rowIndex}>
              {
                row.map((char, colIndex) => (
                  <span style={{color: 'green'}} key={colIndex}>{char}</span>
                ))
              }
            </p>
          ))
        }
      </div>
    );
  }
}

export default App;
