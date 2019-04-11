import React, { Component } from 'react';
import Cell from './Cell'

class Column extends Component {
    constructor(props) {
        super(props)
        this.state = {
            randomCell: null
        }
    }

    componentWillMount() {
        this.setState({ randomCell: Math.floor(Math.random() * this.props.row.length) })
    }

    componentDidMount() {
        setInterval(
            () => {
                let randomCell = this.state.randomCell
                if (randomCell + 1 > this.props.row.length) {
                    randomCell = -1
                }
                this.setState({ randomCell: randomCell + 1 })
            }
            , 100
        )
    }

    render() {
        return (
            <div style={{ lineHeight: '0.3em', flexDirection: 'column' }} key={this.props.rowIndex}>
                {
                    this.props.row.map((char, colIndex) => (
                        <Cell
                            collIndex={colIndex}
                            color={(this.state.randomCell === colIndex) ? 'white' : 'green'}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Column;