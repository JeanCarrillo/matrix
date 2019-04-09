import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const matrix = [
      ['0', '0', '0'],
      ['0', '0', '0'],
      ['0', '0', '0']
    ]
    return (
      <div className="App">
        {
          matrix.map((row, rowIndex) => {
            return row.map((col, colIndex)=>{
              return <span>{matrix[rowIndex][colIndex]}</span>
            })
          })
        }
      </div>
    );
  }
}

export default App;
