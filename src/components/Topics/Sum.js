import React, { Component } from 'react'

class Sum extends Component {

    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0, 
            sum: null
        }
    }

    updateNumber1(val) {
        this.setState({ number1: parseInt(val, 10) });
    }

    updateNumber2(val) {
        this.setState({ number2: parseInt(val, 10) });
    }

    add(num1, num2){
        this.setState({ sum: num1 + num2 });
    }


    render() {
        return <p> Sum Component </p>
    }
}

export default Sum