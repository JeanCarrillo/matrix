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
          matrix.map((row, rowIndex) => (
            <p key={rowIndex}>
              {
                row.map((char, colIndex) => (
                  <span key={colIndex}>{char}</span>
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
