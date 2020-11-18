import React, { Component } from 'react';


class FilterString extends Component {

    constructor(){
        super();

        this.state = {
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredNames: []
        };
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filteredNames(userInput) {
        let names = this.state.names;
        let filteredNames = [];
    
        for (let i = 0; i < names.length; i++) {
            if (names[i].includes(userInput)) {
                filteredNames.push(names[i]);
        }
    }

    this.setState({ filteredNames: filteredNames })
}

    render() {
        return <p> FilterString Component </p>
    }
}

export default FilterString