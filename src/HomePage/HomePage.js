import React, { Component } from 'react';

const ButtonTest = ({message}) => (
        <button>{message}</button>
)

export default class HomePage extends Component {
    constructor() {
        super();
        this.state={message: 'Hello'}
    }
    render() {
        return (
            <div>
                <p>Authenticated!</p>
                <ButtonTest message = {this.state.message}></ButtonTest>
            </div>
        )
    }
}
