import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            char: this.getRandomChar,
            opacity: 0.6,
        }

    }

    getRandomChar() {
        return Math.floor(Math.random() * 200 + 33)
    }

    componentWillMount() {
        this.setState({ char: this.getRandomChar() })
    }

    componentWillReceiveProps() {
        if (this.props.color === 'white') {
            this.setState({ 
                char: this.getRandomChar(),
                opacity: 1,
             })
        setInterval(
            ()=> {
                if(this.state.opacity > 0.6){
                    let opacity = this.state.opacity - 0.1
                    this.setState({ 
                        opacity
                    })
                }
            }, 1500
        )
        }
    }

    render() {
        return (
            <div style={{
                color: this.props.color,
                height: '1em',
                width: '1em',
                opacity: this.state.opacity,
            }}
                key={this.props.colIndex}>
                {String.fromCharCode(this.state.char)}
            </div>
        )
    }
}

export default Cell;