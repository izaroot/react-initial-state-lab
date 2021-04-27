// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component{

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    decrement = () => {
        // const newSecondsLeft = this.state.secondsLeft - 10
        this.setState({
            secondsLeft: this.state.secondsLeft - 10
        })
    }
    render(){
        return (
            <div onClick={this.decrement}>
                {this.state.secondsLeft !== 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : `Boom!` } 
            </div>
        )
    }
}